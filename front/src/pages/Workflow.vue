<template>
  <div class="frame">
    <div v-if="errors.length" class="errors">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </div>
    <div class="menu">
      <div class="lable">
        <label>Начала периода</label>
        <my-input v-model="beginPeriod" @input="updateInputBegin" class="input" type="date" />
      </div>
      <div class="lable">
        <label>Окончание периода</label>
        <my-input v-model="endPeriod" @input="updateInputEnd" class="input" type="date" />
      </div>
      <my-button @click="getTaskList">
        Получить списка задач
      </my-button>
    </div>
    <TaskList :taskList="taskList" v-if="taskList.length > 0"  />
    <div v-else-if="isTaskLoading == true">Загрузка...</div>
    <div v-else>Список пуст</div>
  </div>
</template>

<script>
import axios from "axios";
import TaskList from "@/components/TaskList";

export default {
  components: {
    TaskList
  },
  data() {
    return {
      taskList: [],
      beginPeriod: new Date(Date.now()).toISOString().split('T')[0],
      endPeriod: new Date(Date.now()).toISOString().split('T')[0],
      isTaskLoading: false,
      user: 'eledovskoy',
      errors: []
    }
  },
  methods: {
    async getTaskList() {
      console.log(this);
      try {
        this.taskList = [];
        this.isTaskLoading = true;
        this.errors = [];
        if (this.beginPeriod == '') { this.errors.push('Не заполнено поле начало периода'); }
        if (this.endPeriod == '') { this.errors.push('Не заполнено поле конец перода'); }
        if (this.beginPeriod > this.endPeriod) { this.errors.push('Начало периода не может быть больше конца'); }
        if (this.errors.length) {
          this.isTaskLoading = false;
          return;
        }
        const jql = 'worklogDate>={' + this.beginPeriod + '} AND worklogDate < {' + this.endPeriod + '} AND worklogAuthor={' + this.user + '}';
        const response = await axios.get('http://localhost:9000/rest/api/task/search', {
          params: {
            jql: jql,
            maxResults: 50,
            startAt: 0,
            fields: 'summary'
          }
        });
        this.taskList = response.data.issues;
      } catch (e) {
        console.log('ERROR', e)
      } finally {
        this.isTaskLoading = false;
      }
    },
    async getWorkLog() {
      try {
        this.taskList = [];
        this.isTaskLoading = true;
        const response = await axios.get('http://localhost:9000/rest/api/task/worklog/1', {});
        this.taskList = response.data.worklogs;
      } catch (e) {
        console.log('ERROR', e)
      } finally {
        this.isTaskLoading = false;
      }
    },
    updateInputBegin(event) {      
      this.beginPeriod = event.target.value;
    },
    updateInputEnd(event) {      
      this.endPeriod = event.target.value;
    }
  }
}
</script>

<style scoped>
label{
  margin-right: 5px;
}
.task {
  padding: 10px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  margin-bottom: 10px;
}
.frame{
  padding: 20px;
}
.label {
  display: flex;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.errors {
  padding-left: 30px;
  color: brown;
}
</style>