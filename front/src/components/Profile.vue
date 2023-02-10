<template>
    <div class="profile">
        <a :href="profile.self">{{ profile.name }}</a>
        <div>Неудачное количество входов {{ profile.loginInfo.failedLoginCount }}</div>
        <div>Количество входов {{ profile.loginInfo.loginCount }}</div>
        <div>Дата последнего неудачного входа {{ profile.loginInfo.lastFailedLoginTime }}</div>
        <div>Последний вход {{ profile.loginInfo.previousLoginTime }}</div>
    </div>
</template>

<script>
export default {
    props: {
        profile: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.profile{
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>