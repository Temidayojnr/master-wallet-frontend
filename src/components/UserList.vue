<template>
    <div class="home">
        <SideBar />
        <v-toolbar class="mt-5" flat>
            <v-toolbar-title>
                <span class="caption">Overview Dashboard</span><br>List of Users
            </v-toolbar-title>
            <v-app-bar flat color="rgba(0,0,0,0)" class="ml-16">
                <v-tabs v-model="tab" color="rgb(30,116,187)" slider-size="3">
                <v-tab>
                    <v-btn fab color="rgb(30,116,187) lighten-4" elevation="0">
                    <v-icon color="rgb(30,116,187)">fab fa-bitcoin</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="red lighten-4" elevation="0">
                    <v-icon color="red">fas fa-rupee-sign</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="blue lighten-4" elevation="0">
                    <v-icon color="green">fas fa-yen-sign</v-icon>
                    </v-btn>
                </v-tab>
                <v-tab>
                    <v-btn fab color="grey lighten-4" elevation="0">
                    <v-icon color="grey">fas fa-chevron-right</v-icon>
                    </v-btn>
                </v-tab>
                </v-tabs>
            </v-app-bar>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>far fa-bell</v-icon>
            </v-btn>
            <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
            </v-badge>
        </v-toolbar>
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
import axios from 'axios'
export default {
    name: 'UserList',
    components: {
        SideBar
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