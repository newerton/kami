if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return c[e]||(a=new Promise(async a=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=a}else importScripts(e),a()})),a.then(()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]})},a=(a,c)=>{Promise.all(a.map(e)).then(e=>c(1===e.length?e[0]:e))},c={require:Promise.resolve(a)};self.define=(a,s,f)=>{c[a]||(c[a]=Promise.resolve().then(()=>{let c={};const d={uri:location.origin+a.slice(1)};return Promise.all(s.map(a=>{switch(a){case"exports":return c;case"module":return d;default:return e(a)}})).then(e=>{const a=f(...e);return c.default||(c.default=a),c})}))}}define("./sw.js",["./workbox-e032be30"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"Ol-BoqEd0_gVFDpbxWA4v"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/_buildManifest.js",revision:"44996401b7dbb4b228fbdb749c8bce73"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/[page].js",revision:"c8d75e2c4c096b7550c0987eb9ef7920"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/[page]/[slug].js",revision:"1e476d654f22ddac93232e8665fc60d6"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/_app.js",revision:"96ffcb66dc169a6982b4cd90ed150a1c"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/_error.js",revision:"fb6e1a406a0f0b3b7df44e8a9a4b3019"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/atom.xml.js",revision:"5433b705aa179acc9d265f3a4ed1fdc0"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/category/[slug].js",revision:"bf2871f3f33d24edd9a01591468fdfc0"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/favorite/bangumi.js",revision:"63c6351c9ce42af3b018fbc828e75c19"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/favorite/music.js",revision:"2422c86de1afeee531365bf1b94a6cf8"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/feed.js",revision:"91f73aaf6b73189fc37d3f29f267b932"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/friends.js",revision:"e5b065248ba8af9ee566b43bc4c4148a"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/index.js",revision:"c1c4ed62996b0e31ad1ccb63f05ce04c"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/login.js",revision:"1263d7d9d897d2b3c41fe11b8ddebb3f"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/notes.js",revision:"6a9a6244d5cc2552390c2d0833f92457"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/notes/[id].js",revision:"1787c28cc3f41d0e9a72ce3526ab80ec"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/posts.js",revision:"0a74f48b441efc65cff9a9d58f8d852d"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/posts/[category]/[slug].js",revision:"27edbd4004c00091ac0f6e451cf05046"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/projects.js",revision:"a1ee79b8bc4b322512cae1fdddd88987"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/projects/[id].js",revision:"e289df3b31410a2e8b6ecf7232487d0e"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/says.js",revision:"3f8387a25111edb74f847d1ee740ae2a"},{url:"/_next/static/Ol-BoqEd0_gVFDpbxWA4v/pages/timeline.js",revision:"31a1cf9d85053d7e2af1c5bac741dc05"},{url:"/_next/static/chunks/15ec3ec7c7729cd7f1017adbe75253debc59c87a.67479b5ac4f3be368e4a.js",revision:"a7e7636cb8d42e78ffe9c7bb0fd04221"},{url:"/_next/static/chunks/1d667c7d8acd190acd525679bd366a9aee7a2e93.c37711f14d22dd83168f.js",revision:"7f9127a9dc796357dd40ee0c7b0024e3"},{url:"/_next/static/chunks/249b4553567bc26829f9bc6b3ac2f0d183250fca.1740e895d439451ee9d7.js",revision:"1e8300380751dc0406c5efd83849308f"},{url:"/_next/static/chunks/273da327645909615ffa25eaebc81993c3aaa0e9.109b28d5f177d7b43093.js",revision:"0a8233e2d9576c3ed28268fe2e348f6e"},{url:"/_next/static/chunks/2fa1ed89157b4f0ebcb604de252b6c85d4a05709.e13e86c21f414625d2c9.js",revision:"3470e082e9590d2735d37d444e995ecf"},{url:"/_next/static/chunks/3af26f3d2f5fe8e2ccf639ddb28e5444877bd48d.16d51f949996006e3b59.js",revision:"0c2817c71dad07564232b31821708ce4"},{url:"/_next/static/chunks/45.806eef07bc75dc1da13e.js",revision:"eba9d70323479ba875278f4b2daa4787"},{url:"/_next/static/chunks/46.e64bee5efdc989a68690.js",revision:"805f6b5ecc4dc4a41582b21c2766ae39"},{url:"/_next/static/chunks/4c4ba9aa.e561fd1fbfadffbaa01c.js",revision:"e3f8794c797fa6b91d333856ae8e00f5"},{url:"/_next/static/chunks/53a221186e4660f0a410e717aaaebb417dd8e988.7a25202121c3f43ebe22.js",revision:"7debd1d91c4da3734629add936b77e07"},{url:"/_next/static/chunks/6481cfa18d9e247977e51bb137b0815c83e4006b.6de326ba3d2f56981e79.js",revision:"fb808dda253a2afc9de0a8b8afc0af6c"},{url:"/_next/static/chunks/65b0f59ac70d7b0b3d5b06bf45b5f393cf372f3c.abada260795324eabac3.js",revision:"71086e38de0b386f50d40910e056c836"},{url:"/_next/static/chunks/7ac32dfdfb8a80e13a2f8121f089b617d7369c1f.9370c0f42dbd716b6215.js",revision:"0b85bff2870d8fc7dc4a98ded28a5eb4"},{url:"/_next/static/chunks/8313d723.5bd9d102cae0e2162b8d.js",revision:"13b6e3a1bbb4fa3147b895f397be055e"},{url:"/_next/static/chunks/865a919c770899f0554f3b4ccdf51a6704368a5f.406456bb65c42f876bc8.js",revision:"d1db5878e34242f2eccfd66bb944b4bc"},{url:"/_next/static/chunks/a9a7754c.ca59cc1e8eaf1c051e47.js",revision:"376e394f53999539ecce3cd059524984"},{url:"/_next/static/chunks/cac61c40ad3d4721e417e96e2e3e08e0fa199a83.42497be99aacae951931.js",revision:"713e64c83b6e6605d84fef93fcb2c0b2"},{url:"/_next/static/chunks/cb1608f2.6554cb60b1262c81471d.js",revision:"16898af2da9779577edf9a1f9f6dcea1"},{url:"/_next/static/chunks/commons.a884b93f480a07f37f8a.js",revision:"6b783851455a385446379f8ea97c752c"},{url:"/_next/static/chunks/d2f3084d449ba4ea89147bc3dd761b8ec83f3a08.7c3b5fca3f8146d52eba.js",revision:"04cb44108e53e55934618dd169cf8129"},{url:"/_next/static/chunks/e3710326fb8ecfa44b4643ef22ea98b2cf37dab1.caf8039da81c12b0adda.js",revision:"ba888567317a155b2117760e83a2e7cb"},{url:"/_next/static/chunks/f0649e1730c9092e7b5cd4a69724f8ce55f83142.0eef71c65cb87cc516fa.js",revision:"44e45474280d8fb6c9610069a30a7277"},{url:"/_next/static/chunks/f771a2c7f4acc1105b2d381514b7dfd9f130f802.3017441b1faf37f183cc.js",revision:"933e3ca40c245c43d108c4f6515ce1bc"},{url:"/_next/static/chunks/framework.7dfd02d307191d63a37e.js",revision:"ea911a542695350f8b048822f2f9c480"},{url:"/_next/static/css/108e5c1691c6b41831dd.css",revision:"3aec129a45b7ef8369264c9a671438fa"},{url:"/_next/static/css/29f6cb644bae6d5c0944.css",revision:"d723403a963fcb78655085a14ef18a45"},{url:"/_next/static/css/303997449efe8d6d7668.css",revision:"1b4ff475b08aff07026f40df9a94ebb3"},{url:"/_next/static/css/467c290d252c9704010f.css",revision:"4cad5ad0a743e49953c9e49396490852"},{url:"/_next/static/css/7efc83456157175b725d.css",revision:"4a8c3edcfdb908df877a711af08a17c1"},{url:"/_next/static/css/bbcac5d95e4c9f992ad1.css",revision:"395eb123c3a3bc57d544647b506f049d"},{url:"/_next/static/images/default-avatar-bfdcee0350636b07357f99702aced551.png",revision:"c31f18791cf7a4b763abb4bb7b2a1baa"},{url:"/_next/static/images/load-c9bc1be29c204bf31bde8d7f7bc9af5f.gif",revision:"d17c5404393395c677b581d1cd3d4c1a"},{url:"/_next/static/media/background-night.0d23756308cf7d6d8f4687c8dd92027c.png",revision:"31411091b059c806ac7f2de8ee943ee0"},{url:"/_next/static/media/background.c789819f249a182c3577b176c6cd30f9.png",revision:"3f196a90e75ed25542a9234d9d206ddf"},{url:"/_next/static/media/footer.8dc3fccd9304e375cf9bc08ba3a1227f.png",revision:"a6fd12dbbdd70d36d9646d6f0f5a91f2"},{url:"/_next/static/media/load.c9bc1be29c204bf31bde8d7f7bc9af5f.gif",revision:"d17c5404393395c677b581d1cd3d4c1a"},{url:"/_next/static/media/noto-sans-sc-vietnamese-100.0e6ae0e3ac8bc8dbe3dd2d1641a68711.woff2",revision:"8ade456df7a96801ef02f7d5f66270aa"},{url:"/_next/static/media/noto-sans-sc-vietnamese-100.bfcbb5df033d9ef8298ebe6c91f4a020.woff",revision:"656ce8d13d38bead361d9b4326a2a570"},{url:"/_next/static/media/noto-sans-sc-vietnamese-300.49f2f4dc81309872dadf78f0998ff4d4.woff",revision:"65065285adc8535511ac37a4fba435d8"},{url:"/_next/static/media/noto-sans-sc-vietnamese-300.8ce4c4e9242d9ca1c3efc61a17bb7b84.woff2",revision:"a30c181c77013e286d4d7d2fd34d5b08"},{url:"/_next/static/media/noto-sans-sc-vietnamese-400.1f602353a9e415d294581dcfb53f58a5.woff",revision:"80ba5568fbd53b191d1eeac04a9e9ff4"},{url:"/_next/static/media/noto-sans-sc-vietnamese-400.5b1aa1c8bb3a2e3a785290245fc98718.woff2",revision:"b5f05f3fe0d183db7efe2d02b44d1be9"},{url:"/_next/static/media/noto-sans-sc-vietnamese-500.0c00d13aa9f6e252a22f79f364045012.woff",revision:"43d68f369989b20e61a955fc5c777468"},{url:"/_next/static/media/noto-sans-sc-vietnamese-500.8f53bee9fefdafb542338b3ec745fd66.woff2",revision:"07bac3192f40be2da652a3b5e590678c"},{url:"/_next/static/media/noto-sans-sc-vietnamese-700.b0269a450dafc95ab68d95b36447a4eb.woff",revision:"b1922b054c1ca3f0218d4d69b94fa2cd"},{url:"/_next/static/media/noto-sans-sc-vietnamese-700.be612c7fb620b02b1f3c2609a71df5d3.woff2",revision:"e0c8853ab5f7989ac83ab5a8aee33cfb"},{url:"/_next/static/media/noto-sans-sc-vietnamese-900.8777e5e61fd096987c3ffc7479bbaacd.woff",revision:"c415b491708397da5b47b3af509dd4fb"},{url:"/_next/static/media/noto-sans-sc-vietnamese-900.d38f5ed03186be993f03030b5e787474.woff2",revision:"5c591281a53c2e8f611d938d252f84fa"},{url:"/_next/static/media/noto-serif-sc-vietnamese-200.2bdcd66953c951e819d7bc5ec9f5437f.woff",revision:"c62e99436cc8892177acedae1245444b"},{url:"/_next/static/media/noto-serif-sc-vietnamese-200.55d6acd262da27de157a3193af117670.woff2",revision:"e3d9c043a2e59ea0aa7f8b9e4b4f8aa3"},{url:"/_next/static/media/noto-serif-sc-vietnamese-300.5c77c8160c036fdfb9df08c9fa94fff8.woff2",revision:"761deb1a1cadca5c7ea1eadeca0c6553"},{url:"/_next/static/media/noto-serif-sc-vietnamese-300.a2dc8a5733b9cf9a27a82902f36fdc89.woff",revision:"fec14ee876fdc8c16c76ecfd5806470a"},{url:"/_next/static/media/noto-serif-sc-vietnamese-400.656c3cff5117b40159a0802d3b7f36e8.woff2",revision:"446c87d102114f8215dd32d6d26e3c54"},{url:"/_next/static/media/noto-serif-sc-vietnamese-400.8e5c84d15ef64976526aac6930f36f0e.woff",revision:"f5da25975a3f5457a1c2fac3626c57f7"},{url:"/_next/static/media/noto-serif-sc-vietnamese-500.5377739ab3d5f76812b1bd32327e1a0e.woff2",revision:"233d30ea48e7af0e028d24594288e43f"},{url:"/_next/static/media/noto-serif-sc-vietnamese-500.6a0bf8be017bf8e38a4d498f33fa28af.woff",revision:"24607ae86961142f3f18b1c396870aae"},{url:"/_next/static/media/noto-serif-sc-vietnamese-600.2ac9170094b34e0c36be96c959c5a4be.woff",revision:"3afb15d7ff58bf36d3cadb71c8ad5725"},{url:"/_next/static/media/noto-serif-sc-vietnamese-600.2aceafc2f995c62f471316c228da514e.woff2",revision:"6b25d01633d4817d2ae401415ea91390"},{url:"/_next/static/media/noto-serif-sc-vietnamese-700.69d33fc0c47adbdc713d84a238ceb6dc.woff2",revision:"cbcb3e8414a0f020d6d859bb4f1cb760"},{url:"/_next/static/media/noto-serif-sc-vietnamese-700.a6fb5876f91238e0f5fa9da382a77dbe.woff",revision:"38890016416614e86efc3aec2c0a146e"},{url:"/_next/static/media/noto-serif-sc-vietnamese-900.5611ce68ad64710a5756a217157dacd4.woff2",revision:"4b215708c269a14d2aaa6401a537f1b0"},{url:"/_next/static/media/noto-serif-sc-vietnamese-900.5b2b4f84e14abe9995a61f13c76a01fb.woff",revision:"160eb4e8fe2b2f55c32f75b6c2991372"},{url:"/_next/static/runtime/main-8e7c6709ee8efa9ca86e.js",revision:"e5f9c4cc86123420c1ec4e8292bbff39"},{url:"/_next/static/runtime/polyfills-4c1813e5476017b82f67.js",revision:"75ac0e924afb6f32bd755576d507208b"},{url:"/_next/static/runtime/webpack-62b6386906391df12d5d.js",revision:"564d72a209846aad2aa0b3849274f5e6"},{url:"/apple-icon-120.jpg",revision:"27734e1e8af8af7fbbc9362e4b71db1e"},{url:"/apple-icon-152.jpg",revision:"2b030606f9f54b80b56909e2d200f75d"},{url:"/apple-icon-167.jpg",revision:"cece2c0d4e6d95dc8a118c5808637c76"},{url:"/apple-icon-180.jpg",revision:"0ff6b02d1bc809682422a5f3af50fc79"},{url:"/apple-splash-dark-1125-2436.jpg",revision:"cd0d2d6a50ff8968e25d5ff49c612c78"},{url:"/apple-splash-dark-1136-640.jpg",revision:"56249238a54b8416f2d221b4d978dd85"},{url:"/apple-splash-dark-1242-2208.jpg",revision:"6782695b2f3105717ad116c3564c947b"},{url:"/apple-splash-dark-1242-2688.jpg",revision:"01f504b18fbcd96c0279badd9a15ed47"},{url:"/apple-splash-dark-1334-750.jpg",revision:"2112389dbee456fa5d879629076c5533"},{url:"/apple-splash-dark-1536-2048.jpg",revision:"e73e19f34e9ec90a9da82159d8f42ea4"},{url:"/apple-splash-dark-1668-2224.jpg",revision:"3952b4cf2d8610cb6d3b9855d6cf75af"},{url:"/apple-splash-dark-1668-2388.jpg",revision:"3bf5d870543da79c44786f8e46ea833d"},{url:"/apple-splash-dark-1792-828.jpg",revision:"ea494ce5e27e436805bc5f5e95f9c5f3"},{url:"/apple-splash-dark-2048-1536.jpg",revision:"ec553747c68ab638c42df1f596e82652"},{url:"/apple-splash-dark-2048-2732.jpg",revision:"5cf94cd111fea153f4a8964ff9a2427b"},{url:"/apple-splash-dark-2208-1242.jpg",revision:"166d2727be29b86fde9cfc98e2985bc9"},{url:"/apple-splash-dark-2224-1668.jpg",revision:"bbe30f01858713837af7ee141c2dd9a9"},{url:"/apple-splash-dark-2388-1668.jpg",revision:"74aebbcd1e177d84e2bd336ab40a30d8"},{url:"/apple-splash-dark-2436-1125.jpg",revision:"282b3751260c4a59b6e3c4d63b3f9683"},{url:"/apple-splash-dark-2688-1242.jpg",revision:"3da777148cf64a5bc5683f305a023511"},{url:"/apple-splash-dark-2732-2048.jpg",revision:"b48c98740b80214f510595f6703a5087"},{url:"/apple-splash-dark-640-1136.jpg",revision:"475ef76c21c6b460537602cb1b46268d"},{url:"/apple-splash-dark-750-1334.jpg",revision:"6f9223de0fc3c8113dd00f4f1e5b7d4a"},{url:"/apple-splash-dark-828-1792.jpg",revision:"1f0fe93aeb08780968f323169c85bc1d"},{url:"/custom-icon.svg",revision:"b8f89688aea9c6ceb4939832bdd6a1d9"},{url:"/favicon.svg",revision:"275d8571515682332721d88125fd2abb"},{url:"/manifest-icon-192.jpg",revision:"e0f0c1a906943b2899eac52e7eaf9ce4"},{url:"/manifest-icon-512.jpg",revision:"daee97af654f56e4831828a804f2c17b"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/robots.txt",revision:"cb333937db4fdf75f29294867cd772cf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));