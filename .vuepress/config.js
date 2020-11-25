module.exports = {
    title: 'Syh の Blog',
    head: [
        ['link', {
            rel: 'icon',
            href: '/img/favicon.ico'
        }]
    ],
    description: 'syh blog',
    themeConfig: {
        nav: [
            // 网站导航
            {
                text: '首页',
                link: '/'
            },
            {
                text: '导航',
                link: '/goto/'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/Su-William'
            },
        ],
        sidebar: {
            // 显示侧边导航
            "/goto/": [""],
            "/web/HTML/": [""],
            "/web/CSS/": [""]
        }
    }
}