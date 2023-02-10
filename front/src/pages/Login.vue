<template>
    <div v-if="authenticated">
        <Button @click="$router.push('/workflow')">Войти</Button>
    </div>
    <div v-else>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isLoading: true,
        }
    },
    mounted() {
        let authenticated = false;
        if (!authenticated) {
            window.location.href = 'https://oauth.mocklab.io/oauth/authorize\
            ?response_type=code\
            &client_id=J5AavG7RmKfuqgubn-R1ne3C\
            &redirect_uri=http%3A%2F%2Flocalhost%2Fcallback\
            &scope=photo%2Boffline_access\
            &state=WBR9s14zSQctRghv\
            &code_challenge_method=S256\
            &code_challenge=hiJThlv7JVkjXX2AszjQtUW4F2WwR0XbNd16scPbVLg';
        }
    }
}
</script>

<style scoped>

</style>