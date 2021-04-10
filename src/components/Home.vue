<template>
    <h3>Welcome to the Master Wallet APP</h3>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',

    async created() {
        const response = axios.get('/user');
        console.log(response);
    }
}
</script>