<template>
    <div class="home">
        <SideBar ref="drawer"/>
        <NavBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
        <v-divider></v-divider>

        <v-container class="mt-5">
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="thead">
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
        </v-container>
    </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
import axios from 'axios'
export default {
    name: 'UserList',
    components: {
        SideBar,
        NavBar
    },
    data() {
        return {
            list: undefined
        }
    },

    mounted() {
        axios.get('/user', {
            withCredentials: false
        })
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
        background-color: #fff;
    }
    .thead {
        background-color: rgb(30, 116, 187);
    }
    th {
        color: #fff;
    }
</style>