<template>
    <table v-if="worklog.length > 0">
        <tr v-for="work in worklog">
            <td class="cell" style="width: 15vw">{{ work.author.displayName }}</td>
            <td class="cell" style="width: 15vw">{{ new Date(work.started).toLocaleString() }}</td>
            <td class="cell" style="width: 55vw">{{ work.comment }}</td>
            <td class="cell" style="width: 15vw">{{ work.timeSpent }}</td>
        </tr>
    </table>
    <div v-else>
        Загрузка...
    </div>
</template>

<script>
export default {
    props: {
        worklog: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
table,
th,
td {
    border: 1px solid teal;
    border-collapse: collapse;
}

.cell {
    padding: 5px;
}
</style>
