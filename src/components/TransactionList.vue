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
                            <th scope="col">Payment Method</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Transaction Status</th>
                            <th scope="col">Terminal ID</th>
                            <th scope="col">Merchant ID</th>
                            <th scope="col">Transaction BY</th>
                            <th scope="col">Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="item in list" v-bind:key="item.id">
                            <td>{{item.payment_method}}</td>
                            <td>₦{{item.amount}}</td>
                            <td>{{item.transaction_type}}</td>
                            <!-- <td>{{item.status}}</td> -->
                            <td v-if="item.status === 'pending'">
                                <v-btn color="error">
                                    Pending
                                </v-btn>
                            </td>
                            <td v-else>
                                <v-btn color="primary">
                                Success
                                </v-btn>
                            </td>
                            <td>{{item.terminal_id}}</td>
                            <td>{{item.merchant_id}}</td>
                            <td>{{item.transaction_by}}</td>
                            <td>{{item.createdAt | moment("dddd, MMMM Do YYYY")}}</td>
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
    name: 'TransactionList',
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
        axios.get('/transaction', {
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