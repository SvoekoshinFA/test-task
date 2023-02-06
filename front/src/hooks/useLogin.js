import axios from "axios";
import {ref, onMounted} from 'vue';

export function useLogin() {
    const isLoading = ref(true)
    const fetching = async () => {
        try {
            const response = await axios.get('http://localhost:9000/oauth/authorize', {});
        } catch (e) {
            alert('Ошибка')
        } finally {
            isLoading.value = false;
        }
    }

    onMounted(fetching)

    return {
        isLoading
    }
}
