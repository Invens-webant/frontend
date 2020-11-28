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
    <div v-if="selectedTab === '/info'">
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
    <div v-if="selectedTab === '/settings'">
      <el-form>
        <el-form-item label="Email для обратной связи" style="width: 50%">
          <el-input />
        </el-form-item>
        <h4 style="text-align: left">Период проверки экспертом</h4>
        <div class="form-row">
          <el-form-item label="Период сдачи заявлений">
            <el-date-picker type="date"/>
          </el-form-item>
          <el-form-item label="Эксперты">
            <el-select>
              <el-option>1</el-option>
              <el-option>1</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Период сдачи заявлений">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList">
              <el-button size="small" type="primary">Click to upload</el-button>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item label="Текст письма">
          <el-input type="textarea"/>
        </el-form-item>
        <h4 style="text-align: left">Период пробного периода</h4>
        <div class="form-row">
          <el-form-item label="Период сдачи заявлений">
            <el-date-picker type="date"/>
          </el-form-item>
          <el-form-item label="Эксперты">
            <el-select>
              <el-option>1</el-option>
              <el-option>1</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Период сдачи заявлений">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList">
              <el-button size="small" type="primary">Click to upload</el-button>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item label="Текст письма">
          <el-input type="textarea"/>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="selectedTab === '/docs'" style="width: 100%">
      <div class="file-info">
        <div>
          <div class="file">Filename.jpg</div>
        </div>
        <div>
          <div>Период</div>
          <div>Оценка экспертом: 12.12.1212</div>
        </div>
        <div>
          <div>Период</div>
          <div>Оценка экспертом: 12.12.1212</div>
        </div>
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
      selectedTab: '/info'
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
    async saveOffer() {
      await axios.put(
        `https://invents.dev2.webant.ru/offers/${this.$route.params.id}`,
        {
          ...this.offer
        }
      );
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

.form-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.form-row > .el-form-item {
  margin-right: 15px;
}
.file {
  padding: 20px 10px;
  background: #E4F1FA;
  border-radius: 5px; 
}
.file-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #FFFFFF;
  padding: 30px 0;
  box-shadow: 0px 4px 5px rgba(0, 91, 156, 0.11);
  border-radius: 5px;
}
.file-info > div {
  margin-left: 40px;
}
</style>