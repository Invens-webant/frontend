<template>
    <div>
        <form-wizard shape="circle" color="#20a0ff" error-color="#ff4949" title="Регистрация рацзаявления" subtitle="">
            <tab-content title="Персональные данные" icon="el-icon-user" :before-change="validateFirstStep">
                <el-form :model="formOffer" class="form" :rules="rules" ref="ruleForm" label-width="120px" label-position="top">
                    <el-form-item label="Организация" prop="organization">
                        <el-input v-model="formOffer.organization" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="ФИО" prop="author">
                        <el-input v-model="formOffer.author" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="Должность" prop="position">
                        <el-input v-model="formOffer.position" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="Филиал" prop="filial">
                        <el-input v-model="formOffer.filial" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="Образование" prop="education">
                        <el-input v-model="formOffer.education" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="Год рождения" prop="birthday">
                        <el-input v-model="formOffer.birthday" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="Стаж работы" prop="experience">
                        <el-input v-model="formOffer.experience" placeholder="Введите..."/>
                    </el-form-item>
                </el-form>

            </tab-content>
            <tab-content title="Базовая информация" icon="el-icon-setting">
                <el-form :model="formOffer" class="form" :rules="rules" ref="ruleForm" label-width="120px" label-position="top">
                    <el-form-item label="Название предложения" prop="tiltle">
                        <el-input v-model="formOffer.title" placeholder="Название предложения должно быть кратким, точно отражать суть и соответствовать описанию"/>
                    </el-form-item>
                    <el-form-item label="Категория предложения" prop="fio">
                        <el-select v-model="formOffer.category" placeholder="Выберите">
                            <el-option label="Управление технологическим процессом" value="1"></el-option>
                            <el-option label="Дополнительные сервисы" value="2"></el-option>
                            <el-option label="Цифровое управление компание" value="3"></el-option>
                            <el-option label="Не относится" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </tab-content>
            <tab-content title="Идея" icon="el-icon-edit">
                <el-form label-position="top" class="proposals">
                    <div class="proposal-item">
                        <el-form-item label="Текущее положение" prop="currentSolution">
                            <el-input
                                rows="8"
                                type="textarea"
                                v-model="formOffer.currentSolution" 
                                placeholder="Введите"
                            />
                        </el-form-item>
                        <span class="tip">
                            *характеристика проблемы, которую решает рационализаторское предложение, должна описывать недостатки действующей конструкции изделия, технологии производства, применяемой техники или состава материала 
                        </span>
                    </div>
                    <div class="proposal-item">
                        <el-form-item label="Предлагаемое решение" prop="proposedSolution">
                            <el-input 
                                rows="8"
                                type="textarea"
                                v-model="formOffer.proposedSolution" 
                                placeholder="Введите"
                            />
                        </el-form-item>
                        <span class="tip">
                            *описание предлагаемого решения должно раскрывать в степени, необходимой для его практического осуществления, конструкцию, технические характеристики и другие существенные признаки предлагаемого к внедрению продукта. Прилагаются спецификации, чертежи, рисунки, фото, руководство по монтажу и наладке, руководство пользователя, дистрибутив и др. документы 
                        </span>
                    </div>
                    <div class="proposal-item">
                        <el-form-item label="Ожидаемый результат" prop="expectedResult">
                            <el-input
                                rows="8"
                                type="textarea"
                                v-model="formOffer.expectedResult" 
                                placeholder="Введите"
                            />
                        </el-form-item>
                        <span class="tip">
                            *указывается информация об ожидаемом техническом, организационном, управленческом или ином положительном эффекте от использования. Расчет планируемой эффективности применения рационализаторского предложения готовится согласно Приложению 10 к настоящему Положению и прикладывается к заявлению 
                        </span>
                    </div>
                </el-form>
            </tab-content>
            <tab-content title="Затраты" icon="el-icon-pie-chart">
                <el-form label-position="top">
                    <div
                        v-for="(cost, index) in formOffer.costs"
                        :key="`${index}_cost`"
                        class="cost"
                    >
                        <el-form-item label="Статья затрат">
                            <div style="display: flex">
                                <el-input v-model="cost.item" placeholder="Введите"/>
                                <el-button type="primary" @click="addDomain" style="margin-left: 20px">Добавить</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="Стоимость">
                            <el-input v-model="cost.cost" placeholder="Введите"/>
                        </el-form-item>
                        <el-button type="danger" @click.prevent="removeDomain(cost)" style="text-align: right">Delete</el-button>
                    </div>
                </el-form>
            </tab-content>
            <tab-content title="Сроки" icon="el-icon-time">
                <el-form label-position="top">
                    <div
                        v-for="(time,index) in formOffer.timing"
                        :key="`${index}_timing`"
                        class="cost"
                    >
                        <el-form-item label="Этап">
                            <div style="display: flex">
                                <el-input v-model="time.time" placeholder="Введите"/>
                                <el-button type="primary" @click="addDomain" style="margin-left: 20px">Добавить</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="Срок">
                            <el-input v-model="time.item" placeholder="Введите"/>
                        </el-form-item>
                        <el-button type="danger" @click.prevent="removeDomain(time)" style="text-align: right">Delete</el-button>
                    </div>
                </el-form>
            </tab-content>
            <!-- <tab-content title="Соавторы" icon="el-icon-user">
                <el-form label-position="top">
                    <div
                        v-for="(author,index) in formOffer.coAuthors"
                        :key="`${index}_coAuthors`"
                        class="cost"
                    >
                        <el-form-item label="Соавтор">
                            <div style="display: flex">
                                <el-input v-model="author.item" placeholder="Введите"/>
                                <el-button type="primary" @click="addDomain" style="margin-left: 20px">Добавить</el-button>
                            </div>
                        </el-form-item>
                        <el-form-item label="Процент вознаграждения">
                            <el-input v-model="author.benefit" placeholder="Введите"/>
                        </el-form-item>
                        <el-button type="danger" @click.prevent="removeDomain(time)" style="text-align: right">Delete</el-button>
                    </div>
                </el-form>
            </tab-content> -->
            <tab-content title="Документы" icon="el-icon-document">
                <el-form label-position="top">
                    <el-form-item label="Название предложения" prop="tiltle">
                        <el-upload
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{file}">
                            <span class="el-upload-list__item-thumbnail">{{ file.name }}</span>
                            <span class="el-upload-list__item-actions">
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)"
                                >
                                <i class="el-icon-download"></i>
                                </span>
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)"
                                >
                                <i class="el-icon-delete"></i>
                                </span>
                            </span>
                            </div>
                        </el-upload>
                    </el-form-item>
                </el-form>
            </tab-content>
            <el-button type="primary" slot="prev">Назад</el-button>
            <el-button type="primary" slot="next">Вперед</el-button>
            <el-button type="primary" slot="finish" @click="saveForm">Создать</el-button>
        </form-wizard>
    </div>

</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import axios from 'axios'

export default {
    name: 'IdeaForm',
    components: {
        FormWizard,
        TabContent
    },

    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            disabled: false,

            formOffer: {
                rating: 0,
                organization: 'Россети',
                author: '',
                position: 'Электрик',
                filial: 'Ростовский',
                education: 'Высшее',
                experience: '10 лет',
                birthday: '06.03.1988',
                category: 'Не относится',
                title: 'Улучшение производства',
                currentSolution: 'характеристика проблемы, которую решает рационализаторское предложение, должна описывать недостатки действующей конструкции изделия, технологии производства, применяемой техники или состава материала',
                proposedSolution: 'описание предлагаемого решения должно раскрывать в степени, необходимой для его практического осуществления, конструкцию, технические характеристики и другие существенные признаки предлагаемого к внедрению продукта. Прилагаются спецификации, чертежи, рисунки, фото, руководство по монтажу и наладке, руководство пользователя, дистрибутив и др. документы',
                expectedResult: 'указывается информация об ожидаемом техническом, организационном, управленческом или ином положительном эффекте от использования. Расчет планируемой эффективности применения рационализаторского предложения готовится согласно Приложению 10 к настоящему Положению и прикладывается к заявлению',
                costs: [ 
                    {
                        item: 'Купить инструменты',
                        cost: '1000 $'
                    }
                ],
                timing: [{
                    item: 'Тестированин',
                    time: '3 месяца'
                }],
                // coAuthors: [{
                //     item: 'Леонид',
                //     benefit: '3%'
                // }],
            },
            rules: {
                organization: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                author: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                position: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                filial: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                education: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                experience: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                birthday: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
            }
        }
    },
    methods: {
        validateFirstStep() {
            return new Promise((resolve) => {
                this.$refs.ruleForm.validate((valid) => {
                resolve(valid);
                });
            })
        },
        addDomain() {
            this.formOffer.costs.push({
            key: Date.now(),
            value: [{
                    value: '',
                    cost: ''
                }]
            });
        },

        async saveForm() {
            this.formOffer.costs = JSON.stringify(this.formOffer.costs)
            this.formOffer.timing = JSON.stringify(this.formOffer.timing)
            this.formOffer.author = '/users/4'
            // this.formOffer.coAuthors = JSON.stringify(this.formOffer.coAuthors)
            try {
                await axios.post('https://invents.dev2.webant.ru/offers', this.formOffer)
                this.$router.push('/new')
                this.$message.success('Заявка успешно создана')
            } catch {
                this.$message.error('Серверная ошибка')
            }
        },

        removeDomain(item) {
            var index = this.formOffer.costs.indexOf(item);
            if (index !== -1) {
            this.formOffer.costs.splice(index, 1);
            }
        },


        handleRemove(file) {
            console.log(file);
        },
        
        handleDownload(file) {
            console.log(file);
        }
    }

}
</script>

<style scoped>
    .form {
        width: 460px;
    }
    .el-form-item {
        display: flex;
        flex-direction: column;
    }
    .proposals {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
    .tip {
        color: #979797;
    }
    .proposal-item {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
    }
    .cost {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>