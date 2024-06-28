const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/Louie-Jay-Cantores-Portfolio-2/' : '/Louie-Jay-Cantores-Portfolio-2/'
})
