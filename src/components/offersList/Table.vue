<template>
  <div v-loading="loading">
    <div class="categories">
      <div class="category-item">
        Управление технологическим процессом
      </div>
      <div class="category-item">
        Дополнительные сервисы
      </div>
      <div class="category-item">
        Цифровое управление компанией
      </div>
      <div class="category-item">
        Комплексная система информационной безопасности
      </div>

    </div>
    <div class="table">
      <el-table :data="offers" style="width: 100%" max-height="450">
        <el-table-column fixed prop="title" label="Название">
        </el-table-column>
        <el-table-column prop="category" label="Вид предложения">
        </el-table-column>
        <el-table-column prop="state" label="Автор">
        </el-table-column>
        <el-table-column prop="createdAt" label="Дата">
        </el-table-column>
        <el-table-column prop="status" label="Статус">
          <template slot-scope="scope">
            <el-tag>{{ status[scope.row.status] }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Действия">
          <template slot-scope="scope">
            <router-link :to="`/offer/${scope.row.id}`">Редактировать</router-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    watch: {
      $route() {
        this.fetchOfferList()
      }
    },
    data() {
      return {
        loading: false,
        offers: null,
        status: ['Новая', 'Одобрена', 'На тестировании', 'На тираже', 'Внедрена', 'Отменена', 'На доработке']
      }
    },
    methods: {
      async fetchOfferList() {
        if(this.$route.path.includes('new')) {
          const response = await axios.get('https://invents.dev2.webant.ru/offers', {headers: {'Accept': 'application/json'}, params: {status: 0}},)
          this.offers = response.data.items
        } else if (this.$route.includes.path('accepted')){
          const response = await axios.get('https://invents.dev2.webant.ru/offers', {headers: {'Accept': 'application/json'}, params: {'status[]': [1, 2, 3, 4]}})
          this.offers = response.data.items
        } else {
          const response = await axios.get('https://invents.dev2.webant.ru/offers', {headers: {'Accept': 'application/json'}, params: {status: 4}})
          this.offers = response.data.items
        }
      }
    },
    mounted() {
      this.fetchOfferList()
    }
  }
</script>

<style>
  .categories {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    min-width: 100%;
    overflow: auto;
    margin-bottom: 20px;
    padding: 20px;
  }

  .category-item {
    color: #005B9C;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0px 4px 15px rgba(0, 91, 156, 0.12);
    border-radius: 5px;
    margin-right: 10px;
    text-align: center;
  }
</style>