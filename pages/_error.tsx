// @ts-nocheck
import * as Sentry from '@sentry/node'
import sample from 'lodash/sample'
import { NextPage } from 'next'
import NextErrorComponent from 'next/error'
import { useRouter } from 'next/router'
import { isServerSide } from '../utils'
const errorToText = (statusCode: number) => {
  switch (statusCode) {
    case 404:
      return '抱歉啦, 页面走丢了'
    case 403:
      return '不要做一些不允许的事情啦'
    case 401:
      return '这是主人的小秘密哦, 你是我的主人吗'
    case 408:
      return isServerSide()
        ? '上游服务器连接超时'
        : '连接超时, 请检查一下网络哦!'
    case 406:
    case 418:
      return '茶壶出现错误.'
    case 666:
      return '你在干什么呀'
    case 500:
    default:
      return '抱歉, 出了点小问题'
  }
}

const _Error: NextPage<{ statusCode: number; hasGetInitialPropsRun; err }> = ({
  statusCode = sample([406, 418]) as number,
  hasGetInitialPropsRun,
  err,
}) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err)
  }

  const router = useRouter()

  return (
    <div className="error">
      <div className="error_wrap">
        <h1>{statusCode}</h1>
        <div className="desc">
          <h2>{errorToText(statusCode)}</h2>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button
          className={'btn red'}
          style={{ marginRight: '12px' }}
          onClick={() => router.push('/')}
        >
          回到首页
        </button>
        <button className={'btn yellow'} onClick={() => router.reload()}>
          刷新
        </button>
      </div>
    </div>
  )
}

const getCode = (err, res): number => {
  if (!err && !res) {
    return 500
  }
  if (res?.statusCode === 500 && err?.statusCode === 500) {
    return 500
  } else if (err && err.statusCode !== 500) {
    return err.statusCode
  } else if (res && res.statusCode !== 500) {
    return res.statusCode
  }
  return 500
}

_Error.getInitialProps = async ({ res, err, asPath }) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps({
    res,
    err,
  })
  errorInitialProps.hasGetInitialPropsRun = true
  const statusCode = getCode(err, res)
  if (statusCode === 404) {
    // Opinionated: do not record an exception in Sentry for 404
    return { statusCode: 404 }
  }
  if (err) {
    Sentry.captureException(err)
    return errorInitialProps
  }
  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`),
  )
  return { ...errorInitialProps, statusCode } as {
    statusCode: number
    hasGetInitialPropsRun
    err
  }
}

export default _Error
