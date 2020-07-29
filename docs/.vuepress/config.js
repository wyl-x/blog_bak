const sidebar = require('../utils/sidebar')

module.exports = {
  title: 'Notes',
  description: '学习笔记',
  base: '/',
  evergreen: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: 'https://github.com/wyl-x/blog',
    sidebar,
    displayAllHeaders: false,
    sidebarDepth: 1,
    repoLabel: '查看源码',
    lastUpdated: 'Last Updated',
    // navbar: false
  },
}