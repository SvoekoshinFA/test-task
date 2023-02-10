<template>
  <div v-if="Object.keys(session).length != 0">
    <Profile :profile="session" />
  </div>
  <div v-else-if="isLoading == true">Загрузка...</div>
  <div v-else>Ошибка</div>
</template>

<script>
import axios from "axios";
import Profile from "@/components/Profile";


export default {
  components: {
    Profile
  },
  beforeMount: async function () {
    try {
      this.session = {};
      this.isLoading = true;
      const response = await axios.get('http://localhost:9000/rest/api/task/session/1', {});
      this.session = response.data;
    } catch (e) {
      console.log('ERROR', e)
    } finally {
      this.isLoading = false;
    }
  },
  data() {
    return {
      session: {},
      isLoading: true
    }
  }
}
</script>

<style scoped>
.task {
  padding: 10px;
}

.menu {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
}

.label {
  display: flex;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>