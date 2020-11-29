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
        <el-radio-button label="/final">Финал</el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="selectedTab === '/info'">
      <div class="offer">
        <div class="main">
          <div>
            <h4>Текущее положение</h4>
            <p v-if="action === 'read'">{{ offer.currentSolution }}</p>
            <el-input v-else type="textarea" v-model="offer.currentSolution" />
          </div>
          <div>
            <h4>Предлагаемое решение</h4>
            <p v-if="action === 'read'">{{ offer.proposedSolution }}</p>
            <el-input v-else type="textarea" v-model="offer.proposedSolution" />
          </div>
          <div>
            <h4>Ожидаемый результат</h4>
            <p v-if="action === 'read'">{{ offer.expectedResult }}</p>
            <el-input v-else type="textarea" v-model="offer.expectedResult" />
          </div>
          <div>
            <h4>Затраты на внедрение</h4>
            <div class="list">
              <span> 3232 - <span>1000 P</span> </span>
            </div>
          </div>
          <div>
            <h4>Требуемые сроки</h4>
            <div class="list">
              <span> 3232 - <b>1000 P</b> </span>
            </div>
          </div>
          <div>
            <h4>Вид предложения</h4>
            <p v-if="action === 'read'">{{ offer.category }}</p>
          </div>
          <div class="authors">
            <span> <b>Автор</b> fio </span>
            <span> <b>Дата</b> дата </span>
          </div>
        </div>
        <div class="materials">
          <h4>Материалы</h4>
          <div class="materials__items">
            <a
              class="materials__item"
              v-for="file in files"
              :key="file"
              v-bind:href="'https://invents.dev2.webant.ru' + file.contentUrl"
              v-bind:target="'_blank'"
            >
              <img class="item__svg" src="@/assets/file.svg" />
              <span>file_name.pdf</span>
            </a>
          </div>
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
        <h4 class="doc__period">Период проверки экспертом</h4>
        <div class="form-row">
          <el-form-item label="Период сдачи заявлений">
            <el-date-picker type="date" />
          </el-form-item>
          <el-form-item label="Эксперты">
            <el-select placeholder="Выберите">
              <el-option>1</el-option>
              <el-option>1</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Период сдачи заявлений">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item label="Текст письма">
          <el-input type="textarea" />
        </el-form-item>
        <h4 class="doc__period">Период пробного периода</h4>
        <div class="form-row">
          <el-form-item label="Период сдачи заявлений">
            <el-date-picker type="date" />
          </el-form-item>
          <el-form-item label="Эксперты">
            <el-select placeholder="Выберите">
              <el-option>1</el-option>
              <el-option>1</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Период сдачи заявлений">
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">Click to upload</el-button>
            </el-upload>
          </el-form-item>
        </div>
        <el-form-item label="Текст письма">
          <el-input type="textarea" />
        </el-form-item>
        <el-button
          class="settings__save"
          size="small"
          type="success"
          icon="el-icon-check"
        >
          Сохранить
        </el-button>
      </el-form>
    </div>
    <div v-if="selectedTab === '/history'" style="width: 100%">
      <div class="history">
        <div class="history__switch">
          <el-steps :active="activeComment" finish-status="success">
            <div @click="activeComment = 1">
              <el-step
                style="max-width: 100%"
                title="Название периода 1"
                @click="activeComment = 1"
              ></el-step>
            </div>
            <div @click="activeComment = 2">
              <el-step
                style="max-width: 100%"
                title="Название периода 2"
                @click="activeComment = 2"
              ></el-step>
            </div>
            <div @click="activeComment = 3">
              <el-step
                style="max-width: 100%"
                title="Название периода 3"
                @click="activeComment = 3"
              ></el-step>
            </div>
          </el-steps>
        </div>
        <div class="history__data">
          <div>
            <div class="doc__title">Комментарий</div>
            <div class="history__comment">
              А ещё действия представителей оппозиции призывают нас к новым
              свершениям, которые, в свою очередь, должны быть смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности.
            </div>
            <div>
              Эксперт
              <span class="period__time history__name"
                >Фамилия Имя Отчество</span
              >
            </div>
          </div>
          <div>
            <div class="doc__title">Документы</div>
            <div class="materials__items">
              <a
                class="materials__item"
                v-for="file in docs"
                :key="file"
                v-bind:href="'https://invents.dev2.webant.ru' + file.contentUrl"
                v-bind:target="'_blank'"
              >
                <img class="item__svg" src="@/assets/file.svg" />
                <span>file_name.pdf</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedTab === '/docs'" style="width: 100%">
      <div class="file-info">
        <a
          class="materials__item"
          v-bind:href="'https://invents.dev2.webant.ru' + files[0].contentUrl"
          v-bind:target="'_blank'"
        >
          <img class="item__svg" src="@/assets/file.svg" />
          <span>file_name.pdf</span>
        </a>
        <div>
          <div>Период</div>
          <span class="doc__title">Оценка экспертом</span>
          <span class="period__time">12.12.1212</span>
        </div>
        <div>
          <div>Эксперт</div>
          <div class="doc__title">Фамилия Имя Отчество</div>
        </div>
      </div>
    </div>
    <div v-if="selectedTab === '/final'" style="width: 100%">
      <div class="final">
        <div class="final__info">
          <div>
            <div>
              <div class="doc__title">Реквизиты</div>
              <div class="history__comment">
                Наименование банка получателя: Центрально-Черноземный Банк СБ
                <br />
                БИК Банка: 042007681 <br />
                Корреспондентский счет Банка: 30101810600000000681 <br />
                Отделение СБ РФ № 9013*<br />
                ИНН Банка: 7707083893<br />
                КПП Банка: 615250001<br />
                Расчетный счет Банка: 30301810855000605513
              </div>
            </div>
            <div>
              <div class="doc__title">Реквизиты соавторов</div>
              <div class="history__comment">
                Фамилия Имя Отчество - <span class="period__time">3%</span>
                <div class="coauthor-req">
                  Наименование банка получателя: Центрально-Черноземный Банк СБ
                  <br />
                  БИК Банка: 042007681 <br />
                  Корреспондентский счет Банка: 30101810600000000681 <br />
                  Отделение СБ РФ № 9013*<br />
                  ИНН Банка: 7707083893<br />
                  КПП Банка: 615250001<br />
                  Расчетный счет Банка: 30301810855000605513
                </div>
                Фамилия Имя Отчество - <span class="period__time">3%</span>
                <div class="coauthor-req">
                  Наименование банка получателя: Центрально-Черноземный Банк СБ
                  <br />
                  БИК Банка: 042007681 <br />
                  Корреспондентский счет Банка: 30101810600000000681 <br />
                  Отделение СБ РФ № 9013*<br />
                  ИНН Банка: 7707083893<br />
                  КПП Банка: 615250001<br />
                  Расчетный счет Банка: 30301810855000605513
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="doc__title">Экономический эффект</div>
            <div class="history__comment">
              А ещё действия представителей оппозиции призывают нас к новым
              свершениям, которые, в свою очередь, должны быть смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности.
            </div>
            <div class="doc__title">Вид вознаграждения</div>
            <div class="history__comment">Денежный</div>
            <div class="doc__title">Сумма</div>
            <div class="history__comment">12 000 000 Р</div>
            <div class="doc__title">Примечания</div>
            <div class="history__comment">
              А ещё действия представителей оппозиции призывают нас к новым
              свершениям, которые, в свою очередь, должны быть смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности.
            </div>
          </div>
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
      action: "read",
      offer: null,
      files: [],
      docs: [],
      selectedTab: "/info",
      activeComment: 1,
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
      if (this.offer.files?.length) {
        this.offer.files.forEach((file) => this.files.push(this.getFile(file)));
      }
      if (this.offer.documents?.length) {
        this.offer.documents.forEach((file) =>
          this.docs.push(this.getFile(file))
        );
      }
      this.loading = false;
    },
    async getFile(iri) {
      const response = await axios.get(`https://invents.dev2.webant.ru${iri}`, {
        headers: { Accept: "application/json" },
      });
      return response.data;
    },
    editOffer() {
      this.action = "edit";
    },
    async saveOffer() {
      await axios.put(
        `https://invents.dev2.webant.ru/offers/${this.$route.params.id}`,
        {
          ...this.offer,
        }
      );
      this.action = "read";
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
  background: #e4f1fa;
  border-radius: 5px;
}
.file-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  padding: 25px;
  box-shadow: 0px 4px 5px rgba(0, 91, 156, 0.11);
  border-radius: 5px;
  margin-bottom: 20px;
}
.file-info > div {
  margin-left: 40px;
}
.doc__title {
  display: inline-block;
  font-size: 17px;
  line-height: 22px;
  font-weight: 600;
  margin-right: 10px;
}
.doc-period {
  font-size: 17px;
  line-height: 22px;
}
.period__time {
  font-size: 17px;
  line-height: 22px;
  color: #005b9c;
}
.offer,
.final__info {
  display: flex;
}
.main {
  margin-right: 50px;
}
.materials__item {
  border-radius: 5px;
  width: 200px;
  height: 44px;
  background-color: #e4f1fa;
  padding: 12px 0 12px 24px;
  margin: 10px 0;
  display: flex;
  text-decoration: none;
  color: #272727;
}
.item__svg {
  width: 16px;
  height: 20px;
  margin-right: 20px;
}
.el-input,
.el-select,
.el-textarea {
  box-shadow: 0px 4px 5px rgba(0, 91, 156, 0.11);
}
.el-form-item {
  font-size: 17px;
}
.settings__save {
  background-color: #04b600;
  margin-top: 28px;
  font-size: 17px;
}
.history__switch {
  width: 100%;
  margin: 0 48px;
}
.history__switch > .el-steps {
  width: 100%;
}
.el-steps > div {
  width: 33.3333%;
}
.history .doc__title {
  margin-bottom: 10px;
}
.history__data {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
}
.history__data > div,
.final__info > div {
  flex-basis: calc(50% - 100px);
}
.history__comment {
  margin: 10px 0 20px;
}
.history__name {
  font-weight: 600;
}
.coauthor-req {
  font-size: 14px;
  margin: 10px 0 20px;
}
.el-step {
  cursor: pointer;
}
</style>