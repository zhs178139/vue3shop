<script setup>
import {useRouter} from 'vue-router'
const router =useRouter()

const getImageUrl = (img) =>{
    return new URL('../assets/images/404.png', import.meta.url).href;
}
const goHome = ()=>{
    router.go(-2)
}
</script>

<template>
    <div class="exception">
        <img :src = "getImageUrl(404)" class="img">
        <el-button class="btn-home" type="primary" plain @click="goHome">回到上一个页面</el-button>

    </div>

</template>

<style lang="less">
.exception {
    position: relative;
    width: 100%;
	height:100%;
	background-color: #ffffff;
    text-align: center;
    display: grid;
	align-items: center;

    .img{

		margin: 0 auto;
        width: 40%;
        height:80%;

	}
    .btn-home{
        margin: 0 auto;
    }

}
</style>
