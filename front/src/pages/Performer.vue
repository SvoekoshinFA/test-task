<template>
    <div class="frame">
        <div class="menu">
            <my-button style="margin-left: 20px" @click="getForm">Формирование документов</my-button>
            <my-button style="margin-left: 20px" @click="getList">Ранее сформированные</my-button>
        </div>
        <div v-if="errors.length > 0" class="errors">
            <ul>
                <li v-for="error in errors">
                    {{ error }}
                </li>
            </ul>
        </div>
        <div v-if="stage == 'form'">
            <div class="form__input">
                <label>Номер акта</label>
                <my-input v-model="number" @input="" class="input" type="text" />
            </div>
            <div>
                <label>Вид работ</label>
                <my-input v-model="type" @input="" class="input" type="text" />
            </div>
            <div>
                <label>Начало работ</label>
                <my-input v-model="begin" @input="" class="input" type="date" />
            </div>
            <div>
                <label>Окончание работ</label>
                <my-input v-model="end" @input="" class="input" type="date" />
            </div>
            <div>
                <label>Дата формирования</label>
                <my-input v-model="date" @input="" class="input" type="date" />
            </div>
            <my-button style="margin-left: 20px" @click="create">Создать</my-button>
        </div>
        <div v-if="stage == 'list'">
            <table>
                <tr>
                    <th class="cell" style="width: 15vw">Номер Акта</th>
                    <th class="cell" style="width: 15vw">Вид работ</th>
                    <th class="cell" style="width: 15vw">Начало</th>
                    <th class="cell" style="width: 15vw">Окончание</th>
                    <th class="cell" style="width: 15vw">Дата формирования</th>
                    <th class="cell" style="width: 15vw">Статус</th>
                    <th class="cell" style="width: 15vw">Управление</th>
                </tr>
                <tr v-for="doc in list">
                    <td class="cell" style="width: 15vw">{{ doc.number }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.type }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.begin }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.end }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.date }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.status }}</td>
                    <td class="cell" style="width: 15vw">
                        <my-button style="margin-left: 20px" @click="download">Скачать</my-button>
                        <my-button v-if="doc.status != 'подтвержден'" style="margin-left: 20px" @click="deleteDoc(doc.id)">Удалить</my-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            stage: 'list',
            number: '',
            type: '',
            begin: '',
            end: '',
            date: new Date(Date.now()).toISOString().split('T')[0],
            errors: [],
            list: {}
        }
    },
    methods: {
        getForm() {
            this.stage = 'form';
        },
        getList() {
            this.stage = 'list';
            this.loadList();
        },
        download() {
            alert('TO DO');
        },
        async deleteDoc(id) {
            try {
                const response = await axios.delete('http://localhost:9000/rest/api/document/' + id, {});
                this.getList();
            } catch (e) {
                console.log('ERROR', e)
                this.errors.push('Ошибка');
            }
        },
        async create() {
            //validation
            this.errors = [];
            if (this.number == '') this.errors.push('Не заполнено поле "Номер акта"');
            if (this.type == '') this.errors.push('Не заполнено поле "Вид работ"');
            if (this.begin == '') this.errors.push('Не заполнено поле "Начало работ"');
            if (this.end == '') this.errors.push('Не заполнено поле "Окончание работ"');
            if (this.date == '') this.errors.push('Не заполнено поле "Дата формирования"');
            if (this.begin > this.end) this.errors.push('Начало периода не может быть больше конца');
            if (this.errors.length) return;
            //send
            try {
                const response = await axios.post('http://localhost:9000/rest/api/document', {
                    user: '12345',
                    number: this.number,
                    type: this.type,
                    begin: this.begin,
                    end: this.end,
                    date: this.date,
                });
                this.getList();
            } catch (e) {
                console.log('ERROR', e)
                this.errors.push('Ошибка');
            }
        },
        async loadList() {
            try {
                const response = await axios.get('http://localhost:9000/rest/api/document', {
                    params: {
                        user: '12345'
                    }
                });
                this.list = response.data;
            } catch (e) {
                console.log('ERROR', e)
                this.errors.push('Ошибка');
            }
        }
    }
}
</script>

<style scoped>
label {
    margin-right: 10px;
}

table,
th,
td {
    border: 1px solid teal;
    border-collapse: collapse;
}

.frame {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
}

.cell {
    padding: 5px;
}
</style>