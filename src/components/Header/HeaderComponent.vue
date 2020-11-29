<template>
    <el-menu
        class="el-menu-demo header"
        mode="horizontal"
        >
        <div class="el-menu__wrapper">
            <img style="cursor: pointer" width="200" src="@/assets/logo.svg"/>
            <div class="flex-container">
                <el-menu-item index="1">
                    <router-link :to="'/new'">Новые</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <router-link :to="'/accepted'">Принятые</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                    <router-link :to="'/idea-form'">Создать новое предложение</router-link>
                </el-menu-item>
            </div>
        </div>
    </el-menu>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>

    .flex-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .el-menu__wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70vw;
        height: 68px;
        margin: 0 auto;
        outline: 0;
    }
    .menu-info {
        line-height: 36px;
        padding: 0 20px;
        margin: 0;
        font-size: 14px;
        color: #606266;
        outline: 0;
    }
    a {
        text-decoration: none;
    }
</style>
