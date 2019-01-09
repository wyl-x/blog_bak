module.exports = {
    title: '什么鬼',
    description: 'Just playing around',
    themeConfig: {
        base: '/blog/',
        repo: 'vuejs/vuepress',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',
        displayAllHeaders: true,
        nav: [
            {
                text: 'Languages',
                items: [{ text: 'Chinese', link: '/foo/' }, { text: 'Japanese', link: '/bar/' }]
            }
        ],
        sidebar: [
            {
                title: 'aa',
                collapsable: false,
                children: ['/', '/foo/', '/bar/']
            }
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
};
