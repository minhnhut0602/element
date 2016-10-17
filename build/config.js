var Components = require('../components.json');
var path = require('path');
var dependencies = require('../package.json').dependencies;
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`element-ui/packages/${key}/index.js`] = `element-ui/lib/${key}`;
  externals[`element-ui/packages/${key}/style.css`] = `element-ui/lib/${key}/style.css`;
});

Object.keys(dependencies).forEach(function (key) {
  externals[key] = key;
});

externals['element-ui/src/utils/clickoutside'] = 'element-ui/lib/utils/clickoutside';
externals['element-ui/src/utils/popper'] = 'element-ui/lib/utils/popper';
externals['element-ui/src/utils/vue-popper'] = 'element-ui/lib/utils/vue-popper';

exports.externals = Object.assign({
  vue: 'vue'
}, externals);

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'element-ui': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
