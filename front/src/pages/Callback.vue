<template>
    <div v-if="isLoading">
        Загрузка...
    </div>
    <div v-else>
        <pre>{{ message }}</pre>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            isLoading: true,
            message: {}
        }
    },
    mounted() {
        const fetching = async () => {
            try {
                const response = await axios.post('https://oauth.mocklab.io/oauth/token', 'code='+this.$route.query.code, {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                });
                this.message = response.data;
            } catch (e) {
                this.message = e;
            } finally {
                this.isLoading = false;
            }

        }
        fetching();
    }
}
</script>

<style scoped>

</style>