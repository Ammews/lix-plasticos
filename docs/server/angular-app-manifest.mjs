
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/lix-plasticos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lix-plasticos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2107, hash: 'c6963a78d7d0e51c158e113c47b70dd4f01af74057f8075a02981534b1feddf5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 992, hash: '9098bc3ee2a8ebdc714614a1665ee9acee18141d6cae868ab00e68fbfba38a04', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11524, hash: 'd66f0af05eeb6e80e525951d70cc2e6718242c310d580080e157871c35343530', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 1577, hash: 'LAmdCHy55wI', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
