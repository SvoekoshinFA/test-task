<template>
    <div :key="task.id" v-for="task in taskList" class="task">
        <div class="row">
            <div class="row__item" style="width: 20vw;"><a :href="task.self">{{ task.key }}</a></div>
            <div class="row__item" style="width: 60vw;">{{ task.fields.summary }}</div>
            <div class="row__item" style="width: 20vw;">
                <my-button @click="getWorklog(task.id)">
                    Получить работы
                </my-button>
            </div>
        </div>
        <div v-if="worklogs[task.id]" class="worklogs">
            <WorkLog :worklog="worklogs[task.id]" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import WorkLog from "@/components/WorkLog";

export default {
    components: {
        WorkLog
    },
    props: {
        taskList: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            worklogs: {}
        }
    },
    methods: {
        async getWorklog(id) {
            try {
                this.worklogs = { ...this.worklogs, [id]: [] };
                const response = await axios.get('http://localhost:9000/rest/api/task/worklog/' + id, {
                    params: {
                        maxResults: 50,
                        startAt: 0,
                    }
                });
                this.worklogs = { ...this.worklogs, [id]: response.data.worklogs };
            } catch (e) {
                console.log('ERROR', e);
                alert('Ошибка');
            }
        }
    }
}
</script>

<style scoped>
.task {
    display: flex;
    flex-direction: column;
}

.row__item {
    padding: 10px;
    border: 1px solid teal;
}

.row {
    display: flex;
}

.worklogs {
    padding: 20px;
}
</style>
