export const AppConfig = {

    // 登入页面配置参数
    LOGIN_PAGE: {
        LOGO: 'favicon.ico',
        TITLE: 'Angular Tools UI',
        SUBJECT: '管理员登入',
        DESCRIPTION: '欢迎使用ng5-dashboard,为angualr爱好者打造的精简模板',
        FIRST_LABEL: '账户',
        FIRST_PLACEHOLDER: '请输入您的账户',
        SECOND_LABEL: '密码',
        SECOND_PLACEHOLDER: '请输入您的密码',
        BACKGROUND_IMAGE_SRC: 'url(assets/images/background/3.jpg)'
    },

    // 系统菜单配置参数
    MENU_CONFIG: {
        // url(assets/images/background/1.jpg)可以设置菜单的背景图片
        BACKGROUND_IMAGE_SRC: '',
        BACKGROUND_COLOR: 'rgba(255,255,255,0.9)',
        DEFAULT_TEXT_COLOR: 'black',
        LINE_COLOR: 'rgb(0, 0, 0,.1)'
    },

    // 系统可用主题列表
    THEME_COLORS: [
        { NAME: 'Pink', CLASS: 'pink' },
        { NAME: 'Purple', CLASS: 'purple' },
        { NAME: 'Primary', CLASS: 'primary' },
        { NAME: 'Secondary', CLASS: 'secondary' },
        { NAME: 'Success', CLASS: 'success' },
        { NAME: 'Info', CLASS: 'info' },
        { NAME: 'Warning', CLASS: 'warning' },
        { NAME: 'Danger', CLASS: 'danger' },
        { NAME: 'Dark', CLASS: 'dark' },
    ]
};
