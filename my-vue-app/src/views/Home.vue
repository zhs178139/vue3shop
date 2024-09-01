<script setup>
import {ref,getCurrentInstance,onMounted,reactive} from 'vue'
// import axios  from 'axios'
import * as echarts from 'echarts'
import { proxyRefs } from 'vue';

const {proxy} = getCurrentInstance()


const getImageUrl = (user) =>{
    return new URL('../assets/images/user.png',import.meta.url).href
}
const tableData = ref([])
const countData = ref([])
const chartData = ref([])
const observer = ref(null)

const xOptions = reactive({
    textStyle:{
        color:"#333",
    },
    legend:{},
    grid:{
        left:"20%",
    },

    tooltip:{
        trigger:"axis",
    },
    xAxis:{
        type: "category",
        data:[],
        axisLine:{
            lineStyle:{
                color: "#17b3a3" ,
            },
        },
        axisLabel:{
            interval:0,
            color:"#333",
        },

    },
    yAxis :[
        {
            type:"value",
            axisLine:{
                lineStyle:{
                    color:"#17b3a3",
                },
            },
        },
    ],
    color : ["#2ec7c9","#b6a2de","#5ab1ef","#ffb980","#d87a80","#8d98b3"],
    series:[],
})

const pieOptions = reactive({
    tooltip:{
        trigger:"item",
    },
    legend:{},
    color:[
        "#0f78f4",
        "#dd536b",
        "#9462e5",
        "#a6a6a6",
        "#e1bb22",
        "#39c362",
        "#3ed1cf",

    ],
    series:[]
})
const tableLabel = ref({
    name:"课程",
    todayBuy:"今日购买",
    monthBuy:"本月购买",
    totalBuy:"总购买",

})


const getTableData = async()=>{
    const data = await proxy.$api.getTableData()
    // console.log(data)
    tableData.value = data.tableData
}
const getCountData = async()=>{
    const data = await proxy.$api.getCountData()
    // console.log(data)
    // console.log(data);
    countData.value = data
    // tableData.value = data.tableData
}

const getChartData = async()=>{
    const {orderData,userData,videoData} = await proxy.$api.getChartData()
    xOptions.xAxis.data = orderData.date;
    xOptions.series = Object.keys(orderData.data[0]).map(val=>({
            name:val,
            data:orderData.data.map(item =>item[val]),
            type:'line'
    }
        ))
    const oneEchart = echarts.init(proxy.$refs['echart'])
    oneEchart.setOption(xOptions)


    xOptions.xAxis.data = userData.map(item => item.date)
    xOptions.series = [
        {
            name:'新增用户',
            data:userData.map(item=>item.new),
            type:'bar'
        },
        {
            name:'活跃用户',
            data:userData.map(item=>item.active),
            type:'bar'
        },
    ]
    const twoEchart = echarts.init(proxy.$refs['userEchart'])
    twoEchart.setOption(xOptions)

    pieOptions.series=[
        {
            data:videoData,
            type:'pie'
        }
    ]
    console.log(videoData)
    const threeEchart = echarts.init(proxy.$refs['videoEchart'])
    threeEchart.setOption(pieOptions)


    observer.value = new ResizeObserver((en)=>{
        oneEchart.resize()
        twoEchart.resize()
        threeEchart.resize()
    })

    if(proxy.$refs['echart']){
        observer.value.observe(proxy.$refs['echart'])
    }

}

onMounted(()=>{
    getTableData()
    getCountData()
    getChartData()
})

// axios({
//     url:'/api/home/getTableData',
//     method:'get'

// }).then(res=>{


//     if(res.data.code ===200){

//         tableData.value = res.data.data.tableData
//     }
// })

</script>

<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" style="margin-top: 20px">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="getImageUrl('user')" class="user/">
                    <div class ="user-info">
                        <p class="user-info-admin">admin</p>
                        <p class="user-info-p">超级管理员</p>
                    </div>

                </div>
                <div class="login-info">
                    <p>上次登录时间:<span>2024-07-01</span></p>
                    <p>上次登录地点:<span>长沙</span></p>
                </div>


            </el-card>

            <el-card shadow="hover" class="user-table">
                <el-table :data="tableData">
                    <el-table-column
                        v-for="(val,key) in tableLabel"
                        :key="key"
                        :prop="key"
                        :label="val"
                    >

                    </el-table-column>
                </el-table>
            </el-card>

        </el-col>
        <el-col :span="16" style="margin-top: 20px">
            <div class="num">
                <el-card
                class="el-card"
                :body-style="{display:'flex',padding:0}"
                v-for="item in countData"
                :key="item.name"

                >
                <component :is="item.icon" class="icons" :style="{background:item.color}"></component>
                <div class="detail">
                    <p class="num2">￥{{ item.value }}</p>
                    <p class="txt">￥{{ item.name }}</p>
                </div>
                </el-card>
            </div>
            <el-card class="top-chart">
                <div ref="echart" style="height: 200px;"></div>

            </el-card>

            <div class="graph">
                <el-card class="el-card">
                    <div ref ="userEchart" style="height: 200px;"></div>
                </el-card>
                <el-card class="el-card">
                    <div ref="videoEchart" style="height: 200px;"></div>
                </el-card>

            </div>
        </el-col>
    </el-row>
</template>

<style scoped lang="less">
.home{
    height: 100%;
    overflow: hidden;
    .user{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        img{
            widows: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 40px;
        }
        .user-info{
            p{
                line-height: 40px;
            }
            .user-info-p{
                color: #999;
            }
            .user-info-admin{
                font-size: 35px;
            }
        }
    }
    .login-info{
        p{
            line-height: 30px;
            font-size: 14px;
            color: #999;
            span{
                color:#666;
                margin-left: 60px;
            }
        }
    }
    .user-table{
        margin-top:20px;
    }
    .num{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .el-card{
            width: 32%;
            margin-bottom: 10px;
        }
        .icons{
            width:80px;
            height: 80px;
            font-size: 30px;
            text-align:center;
            line-height: 80px;
            color:#fff;
        }
        .detail{
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .num2{
                font-size: 15px;
                margin-bottom: 10px;
            }
            .txt{
                font-size: 15px;
                text-align: center;
                color: #999;
            }
        }
    }
    .graph{
        margin-top: 10px;
        display: flex;
        justify-content: space-between ;
        .el-card{
            width: 48%;
            height: 260px;
        }
    }
}
</style>
