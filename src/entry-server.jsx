// Server entry for the build-time prerender. Vite compiles this to
// dist-ssr/entry-server.js, which scripts/prerender.mjs imports to turn each
// route into real HTML.
//
// Nothing here runs in the browser, and nothing here should reach for window
// or document — App resolves its route from the initialPath prop instead.

import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export function render(path) {
  return renderToString(<App initialPath={path} />);
}
