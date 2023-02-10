<template>
  <div class="navbar">
    <div class="navbar__btns">
      <my-button style="margin-left: 20px" @click="$router.push('/workflow')">Поиск</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/session')">О пользователе</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
