/*
 * @Author: Innei
 * @Date: 2020-04-29 17:27:02
 * @LastEditTime: 2020-05-23 09:38:55
 * @LastEditors: Innei
 * @FilePath: /mx-web/server/routers/music.ts
 * @MIT
 */

import { NeteaseMusic } from '@mx-space/extra'
import { Router } from 'express'
export const musicRouter = Router()

musicRouter.get('/music', async (req, res) => {
  const { NETEASE_PHONE, NETEASE_PASSWORD } = process.env
  if (
    typeof NETEASE_PASSWORD !== 'string' &&
    typeof NETEASE_PHONE !== 'string'
  ) {
    return res.status(422).send({
      message: '请先填写网易云登录信息',
    })
  }
  const client = new NeteaseMusic(
    NETEASE_PHONE as string,
    NETEASE_PASSWORD as string,
  )
  await client.Login()
  const weekdata = await client.getWeekData()
  const alldata = await client.getAllData()
  const playlist = await client.getFavorite()
  const uid = client.user.id
  res.send({
    weekdata,
    alldata,
    playlist,
    uid,
  })
})

musicRouter.get('/song', async (req, res) => {
  const id = parseInt(req.query.id as string)

  if (!id) {
    return res.status(422).send({
      message: 'id 必须为数字',
    })
  }
  const { NETEASE_PHONE, NETEASE_PASSWORD } = process.env
  if (
    typeof NETEASE_PASSWORD !== 'string' &&
    typeof NETEASE_PHONE !== 'string'
  ) {
    return res.status(422).send({
      message: '请先填写网易云登录信息',
    })
  }
  const client = new NeteaseMusic(
    NETEASE_PHONE as string,
    NETEASE_PASSWORD as string,
  )
  return await client.getMusicUrl(id)
})
