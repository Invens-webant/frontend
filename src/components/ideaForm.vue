<template>
    <div>
        <form-wizard @on-complete="onComplete" shape="circle" color="#20a0ff" error-color="#ff4949">
            <tab-content title="Personal details" icon="el-icon-user" :before-change="validateFirstStep">
                <el-form :model="formOffer" class="form" :rules="rules" ref="ruleForm" label-width="120px" label-position="top">
                    <el-form-item label="Организация" prop="organization">
                        <el-input v-model="formOffer.organization" placeholder="Введите..."/>
                    </el-form-item>
                    <el-form-item label="ФИО" prop="fio">
                        <el-input v-model="formOffer.fio" placeholder="Введите..."/>
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
            <tab-content title="Additional Info" icon="el-icon-setting">
                <el-form :model="formOffer" class="form" :rules="rules" ref="ruleForm" label-width="120px" label-position="top">
                    <el-form-item label="Название предложения" prop="tiltle">
                        <el-input v-model="formOffer.title" placeholder="Название предложения должно быть кратким, точно отражать суть и соответствовать описанию"/>
                    </el-form-item>
                    <el-form-item label="Категория предложения" prop="fio">
                        <el-select v-model="formOffer.category" placeholder="Activity zone">
                            <el-option label="Управление технологическим процессом" value="1"></el-option>
                            <el-option label="Дополнительные сервисы" value="2"></el-option>
                            <el-option label="Цифровое управление компание" value="3"></el-option>
                            <el-option label="Не относится" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </tab-content>
            <tab-content title="Last step" icon="el-icon-check">
                <el-form-item label="Название предложения" prop="tiltle">
                    <el-input 
                        type="textarea" 
                        v-model="formOffer.title" 
                        placeholder="Название предложения должно быть кратким, точно отражать суть и соответствовать описанию"
                    />
                </el-form-item>
            </tab-content>

            <el-button type="primary" slot="prev">Back</el-button>
            <el-button type="primary" slot="next">Next</el-button>
            <el-button type="primary" slot="finish">Finish</el-button>
        </form-wizard>
    </div>

</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
    name: 'IdeaForm',
    components: {
        FormWizard,
        TabContent
    },

    data() {
        return {
            formOffer: {
                organization: '',
                fio: '',
                position: '',
                filial: '',
                education: '',
                experience: '',
                birthday: '',
                category: '',
                title: ''
            },
            rules: {
                organization: [{
                    required: true,
                    message: 'Заполните поле',
                    trigger: 'blur'
                }],
                fio: [{
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
        onComplete: function() {
            alert('Yay. Done!');
        },
        validateFirstStep() {
            return new Promise((resolve) => {
                this.$refs.ruleForm.validate((valid) => {
                resolve(valid);
                });
            })
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
</style>