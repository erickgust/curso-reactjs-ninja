'use strict';

import { join } from 'path';

export const entry = join(__dirname, 'src', 'index');
export const output = {
  path: join(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/static/'
};
export const module = {
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    include: /src/,
    loader: 'babel'
  }]
};
