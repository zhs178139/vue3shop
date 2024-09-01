import Mock from 'mockjs'
export default{
    getMenu: (config) =>{

        const { username, password } = JSON.parse(config.body)
        if (username === 'admin' && password === 'admin' ){
            return{
                code :200,
                data:{
                    menuList:[
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'house',
                            url: 'Home',
                        },
                        {
                            path:'/mall',
                            name:'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'Mall'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User',
                        },
                        {
                            path: 'other',
                            label: '其他',
                            icon: 'location',
                            children:[
                                {
                                    path: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'setting',
                                    url: 'Page1',
                                },
                                {
                                    path: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'setting',
                                    url: 'Page2',
                                },
                            ]
                        },


                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        }else if(username === 'xiaoxiao' && password === 'xiaoxiao'){
            return{
                code: 200,
                data: {
                    menuList:[
                        {
                            path: '/home',
                            name: 'home',
                            label: '首页',
                            icon: 'house',
                            url: 'Home',
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'User',
                        },
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                }
            }
        } else{
            return {
                code :-999,
                data:{
                    message: '密码错误'
                }
            }

        }

    }
}
