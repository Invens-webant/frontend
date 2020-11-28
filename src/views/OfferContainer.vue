<template>
  <div v-loading="loading" class="container">
    <div>
      <img src="@/assets/arrow-back.svg" style="cursor: pointer" />
    </div>
    <div class="page-title">
      <h3>{{ offer.title }}</h3>
    </div>
    <div class="tabnav">
      <el-radio-group v-model="selectedTab" style="margin-bottom: 30px">
        <el-radio-button label="/info">Информация</el-radio-button>
        <el-radio-button label="/docs">Документы</el-radio-button>
        <el-radio-button label="/settings">Настройки</el-radio-button>
        <el-radio-button label="/history">История</el-radio-button>
        <el-radio-button label="/final">Расчет</el-radio-button>
      </el-radio-group>
    </div>
    <div class="offer">
      <div class="main">
        <div>
          <h4>Текущее положение</h4>
          <p v-if="action === 'read'">{{ offer.currentSolution }}</p>
          <el-input v-else type="textarea" v-model="offer.currentSolution"/>
        </div>
        <div>
          <h4>Предлагаемое решение</h4>
          <p v-if="action === 'read'">{{ offer.proposedSolution }}</p>
          <el-input v-else type="textarea" v-model="offer.proposedSolution"/>
        </div>
        <div>
          <h4>Ожидаемый результат</h4>
          <p v-if="action === 'read'">{{ offer.expectedResult }}</p>
          <el-input v-else type="textarea" v-model="offer.expectedResult"/>
        </div>
        <div>
          <h4>Затраты на внедрение</h4>
          <div class="list">
            <span>
              3232 - <span>1000 P</span>
            </span>
          </div>
        </div>
        <div>
          <h4>Требуемые сроки</h4>
          <div class="list">
            <span>
              3232 - <b>1000 P</b>
            </span>
          </div>
        </div>
        <div>
          <h4>Вид предложения</h4>
          <p v-if="action === 'read'">{{ offer.category }}</p>
        </div>
        <div class="authors">
          <span>
            <b>Автор</b> fio
          </span>
          <span>
            <b>Дата</b> дата
          </span>
        </div>
      </div>
      <div class="materials">

      </div>
    </div>
    <div class="controllers">
      <div v-if="action === 'read'">
        <el-button type="primary" @click="editOffer">Редактировать</el-button>
        <el-button type="success">Принять</el-button>
        <el-button type="danger">Отклонить</el-button>
        <el-button type="warning">Отправить на доработку</el-button>
      </div>
      <div v-else>
        <el-button type="primary" @click="saveOffer">Сохранить</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loading: false,
      action: 'read',
      offer: null,
      selectedTab: 'top'
    };
  },
  methods: {
    async getOffer() {
      this.loading = true;
      const response = await axios.get(
        `https://invents.dev2.webant.ru/offers/${this.$route.params.id}`,
        { headers: { Accept: "application/json" } }
      );
      this.offer = response.data;
      this.loading = false;
    },
    editOffer() {
      this.action = 'edit'
    },
    saveOffer() {
      this.action = 'read'
    },
  },
  mounted() {
    this.getOffer();
  },
};
</script>

<style scoped>
h4 {
  text-align: left;
}
p {
  padding: 10px 0;
  text-align: left;
}
.list {
  padding: 10px 0;
  text-align: left;
}
.list > span > span {
  font-weight: 700;
}
.controllers {
  margin-top: 20px;
}
.tabnav {
  margin-top: 20px;
}
.authors {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #979797;
}
.authors > span {
  margin-top: 10px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.container > div {
  align-self: flex-start;
}
</style>