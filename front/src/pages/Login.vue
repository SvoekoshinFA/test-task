<template>
    <div v-if="authenticated">
        Добро пожаловать {{ user.name }}
        <button @click="logout()">Log out</button>
    </div>
    <div v-else>
        Надо залогиниться
        <button @click="login">Login</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import {useLogin} from "@/hooks/useLogin";

export default {
    data() {
        return {
            user: {}
        }
    },
    setup(props) {
        const token = useLogin();
        return token;
    },
    methods: {
        ...mapMutations({
            setUser: 'setUser',
        }),
    },
  computed: {
    ...mapState({
      user: state => state.user,
    }),
    ...mapGetters({
        authenticated: 'authenticated',
    })
  },
}
</script>

<style scoped>

</style>