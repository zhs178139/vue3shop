export default{
    getTableData: () =>{
        return {
            code: 200,
            data: {
                tableData:[
                    {
                        name:"oppo",
                        todayBuy:500,
                        monthBuy:3500,
                        totalBuy:22000,
                    },
                    {
                        name:"vivo",
                        todayBuy:800,
                        monthBuy:4500,
                        totalBuy:62000,
                    },
                    {
                        name:"小米",
                        todayBuy:1200,
                        monthBuy:6500,
                        totalBuy:42000,
                    },
                    {
                        name:"三星",
                        todayBuy:300,
                        monthBuy:2000,
                        totalBuy:32000,
                    },
                    {
                        name:"魅族",
                        todayBuy:350,
                        monthBuy:3000,
                        totalBuy:22000,
                    },


                ]
            }




        }




    },
    getCountData: () =>{
        return{
            code: 200,
            data:[
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "SuccessFilled",
                    color:"#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "StarFilled",
                    color:"#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "GoodsFilled",
                    color:"#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 12000,
                    icon: "SuccessFilled",
                    color:"#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 9000,
                    icon: "StarFilled",
                    color:"#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 6240,
                    icon: "GoodsFilled",
                    color:"#5ab1ef",
                },

            ]
        }

    },
    getChartData: () =>{
        return{
            code: 200,
            data:{
                orderData:{
                    date:[
                        "2021-10-01",
                        "2021-10-02",
                        "2021-10-03",
                        "2021-10-04",
                        "2021-10-05",
                        "2021-10-06",
                        "2021-10-07",
                    ],
                    data:[
                        {
                            苹果:2135,
                            小米:1348,
                            华为:3154,
                            oppo:1865,
                            vivo:2543,
                            一加:1345,
                        },
                        {
                            苹果:2345,
                            小米:1546,
                            华为:3491,
                            oppo:1543,
                            vivo:2642,
                            一加:1213,
                        },
                        {
                            苹果:2613,
                            小米:1435,
                            华为:2531,
                            oppo:1943,
                            vivo:2513,
                            一加:1134,
                        },
                        {
                            苹果:3115,
                            小米:1998,
                            华为:3546,
                            oppo:2432,
                            vivo:2136,
                            一加:2130,
                        },
                        {
                            苹果:1435,
                            小米:1348,
                            华为:3154,
                            oppo:1865,
                            vivo:2543,
                            一加:1345,
                        },
                        {
                            苹果:2135,
                            小米:1348,
                            华为:3154,
                            oppo:1865,
                            vivo:2543,
                            一加:1345,
                        },
                        {
                            苹果:3135,
                            小米:1948,
                            华为:2154,
                            oppo:1965,
                            vivo:2243,
                            一加:1745,
                        },

                    ],


                },
                videoData:[
                    // {Value:2999, name:"小米"},
                    // {Value:5999, name:"苹果"},
                    // {Value:3999, name:"vivo"},
                    // {Value:4999, name:"oppo"},
                    // {Value:2299, name:"华为"},
                    // {Value:4599, name:"一加"},
                    {value: 335, name: '小米'},
                    {value: 310, name: '苹果'},
                    {value: 234, name: 'vivo'},
                    {value: 135, name: 'oppo'},
                    {value: 1548, name: '华为'},
                    {Value: 599, name:"一加"},




                ],
                userData:[
                    {date:"周一", new:5, active:200},
                    {date:"周二", new:10, active:200},
                    {date:"周三", new:15, active:400},
                    {date:"周四", new:20, active:300},
                    {date:"周五", new:25, active:400},
                    {date:"周六", new:30, active:200},
                    {date:"周日", new:35, active:300},
                ],
            }
        }
    }



}
