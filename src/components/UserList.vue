<template>
    <div class="container">
        <div class="table-responsive">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Account Number</th>
                    <th scope="col">Business Name</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Bank Account</th>
                    <th scope="col">BVN</th>
                    <th scope="col">Email</th>
                    <th scope="col">User Type</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr v-for="item in list" v-bind:key="item.id">
                    <td>{{item.account_number}}</td>
                    <td>{{item.business_name}}</td>
                    <td>{{item.bank_name}}</td>
                    <td>{{item.bank_account}}</td>
                    <td>{{item.BVN}}</td>
                    <td>{{item.email}}</td>
                    <td>{{item.user_type}}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name: 'UserList',
    data() {
        return {
            list: undefined
        }
    },

    mounted() {
        axios.get('/user')
        .then((resp) => {
            this.list = resp.data.data;
            console.log(resp.data.data)
        })
    }
}
</script>

<style>
.container {
    height: 100%;
}
    #table-body {
        background-color: seashell;
    }
</style>