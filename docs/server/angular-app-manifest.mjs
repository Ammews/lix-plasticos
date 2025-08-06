
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2093, hash: '5e94866d574a68c9bcc9f99a2d5c75a42279e3f591944d80faeb3b095d532d87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 978, hash: 'f98799efe856b0701f4b1bcf47cf97378d60f5fe55eba71f9dfdf09ccf55c5ac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11511, hash: '36f8c94ae57f362e9b9c3bcf64f9498b76f8a9fb0d31379a6e593b43377547ab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 1577, hash: 'LAmdCHy55wI', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
