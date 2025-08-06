
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2092, hash: '1e6581ae11f8c016f6cfab98b43315554b74ca3fe2cb156fba7fe71b33bfa019', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 977, hash: '826e973274858eb17f11291bf62b3be52bc505eb2ed3c443ba9d2b1f9a4af964', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11507, hash: 'a5093b24c664d83920a2580bc83ee7322266d635b8dcfae936f978c4d1d3b5ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 1577, hash: 'LAmdCHy55wI', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
