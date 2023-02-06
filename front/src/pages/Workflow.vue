<template>
    <div>
        <Button @click="getTaskList">Получить списка задач</Button>
        <Button @click="getWorkLog">Получить трудозатраты по задаче</Button>
        <div v-if="taskList.length > 0" v-for="task in taskList">
        <div class="task">
            <p v-for="field in task">{{ field }}</p>
        </div>
        </div>
        <div v-else-if="isTaskLoading == true">Загрузка...</div>
        <div v-else>Список пуст</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      taskList: [],
      beginPeriod: 'begin',
      endPeriod: 'end',
      isTaskLoading: false
    }
  },
  methods: {
    async getTaskList() {
      try {
        this.taskList = [];
        this.isTaskLoading = true;
        const response = await axios.get('http://localhost:9000/rest/api/task', {});
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
        const response = await axios.get('http://localhost:9000/rest/api/task/1', {});
        this.taskList = response.data.worklogs;
      } catch (e) {
        console.log('ERROR', e)
      } finally {
        this.isTaskLoading = false;
      }
    }
  }
}
</script>

<style scoped>
.task {
  padding: 10px;
}
</style>