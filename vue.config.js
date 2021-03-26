module.exports = {
  // 项目部署的基础路径 eg:`/my-app/`
  publicPath: '/',
  //将构建好的文件输出到哪里（或者说将编译的文件）
  outputDir: 'dist',
  // 放置静态资源的地方
  assetsDir: '',
  // 用于多页配置，默认是 undefined
  // pages: {
  //   index: {
  //     // 入口文件
  //     entry: 'src/main.js',/*这个是根入口文件*/
  //     // 模板文件
  //     template: 'public/index.html',
  //     // 输出文件
  //     filename: 'index.html',
  //     // 页面title
  //     title: 'My Vue App',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     // chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   // subpage: 'src/subpage/main.js'
  // },
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  // 有效的值：`ture` | `false` | `"error"`
  // 当设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: true,
  // 使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。
  // 通过这个选项可以显式转译一个依赖。
  transpileDependencies: [/* string or regex */],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: true,
  // 调整内部的 webpack 配置。
  chainWebpack: () => {},
  configureWebpack: () => {},
  // CSS 相关选项
  // css: {
  //   // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
  //   // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
  //   extract: true,
  //   // 是否开启 CSS source map？
  //   sourceMap: false,
  //   // 为预处理器的 loader 传递自定义选项。比如传递给
  //   // less-loader 时，使用 `{ less: { ... } }`。
  //   loaderOptions: {
  //     css: {
  //       // 这里的选项会传递给 css-loader
  //     },
  //     postcss: {
  //       // 这里的选项会传递给 postcss-loader
  //     }
  //   },
  //   // 为所有的 CSS 及其预处理文件开启 CSS Modules。
  //   // 这个选项不会影响 `*.vue` 文件。
  //   modules: false
  // },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  // parallel: require('os').cpus().length > 1,
  // PWA 插件的选项。
  // pwa: {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8880',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/proxy'
        }
      }
    }
  },

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}