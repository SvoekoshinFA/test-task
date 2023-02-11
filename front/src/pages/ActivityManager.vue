<template>
    <div class="frame">
        <div v-if="errors.length > 0" class="errors">
            <ul>
                <li v-for="error in errors">
                    {{ error }}
                </li>
            </ul>
        </div>
        <div>
            <table>
                <tr>
                    <th class="cell" style="width: 15vw">Сотрудник</th>
                    <th class="cell" style="width: 15vw">Номер Акта</th>
                    <th class="cell" style="width: 15vw">Вид работ</th>
                    <th class="cell" style="width: 15vw">Начало</th>
                    <th class="cell" style="width: 15vw">Окончание</th>
                    <th class="cell" style="width: 15vw">Дата формирования</th>
                    <th class="cell" style="width: 15vw">Статус</th>
                    <th class="cell" style="width: 15vw">Управление</th>
                </tr>
                <tr v-for="doc in list">
                    <td class="cell" style="width: 15vw">{{ users.find(el => el.id == doc.user).name }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.number }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.type }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.begin }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.end }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.date }}</td>
                    <td class="cell" style="width: 15vw">{{ doc.status }}</td>
                    <td class="cell" style="width: 15vw">
                        <my-button style="margin-left: 20px" @click="download">Скачать</my-button>
                        <my-button v-if="doc.status == 'подтвержден'" style="margin-left: 20px"
                            @click="updateDoc(doc.id, 'согласован')">Согласовать</my-button>
                        <my-button v-if="doc.status != 'отклонён'" style="margin-left: 20px"
                            @click="updateDoc(doc.id, 'отклонён')">Отклонить</my-button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    mounted(){
        this.loadList();
    },
    data() {
        return {
            errors: [],
            list: {},
            users: [
                { id: 12345, name: "Иванов И.И." },
                { id: 23456, name: "Петров П.П." },
                { id: 34567, name: "Сидоров С.С." }
            ]
        }
    },
    methods: {
        download() {
            alert('TO DO');
        },
        async updateDoc(id, newStatus) {
            this.errors = [];
            try {
                const response = await axios.put('http://localhost:9000/rest/api/document/' + id, {
                    status: newStatus
                });
                this.loadList();
            } catch (e) {
                console.log('ERROR', e)
                this.errors.push('Ошибка');
            }
        },
        async loadList() {
            this.errors = [];
            try {
                const response = await axios.get('http://localhost:9000/rest/api/document', {
                    params: {
                        user: '56789'
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
.input {
  border: 1px solid teal;
  padding: 10px 10px;
}
</style>