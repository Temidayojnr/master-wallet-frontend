<template>
  <div class="home">
    <SideBar ref="drawer" />
    <NavBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
    <v-divider></v-divider>

    <!-- <v-container class="mt-5">
            <div class="table-responsive">
                <table class="table table-striped" id="datatable">
                    <thead class="thead">
                        <tr>
                            <th scope="col">Payment Method</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Transaction Type</th>
                            <th scope="col">Transaction Status</th>
                            <th scope="col">Terminal ID</th>
                            <th scope="col">Transaction BY</th>
                            <th scope="col">Transaction Date</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">
                        <tr v-for="item in list" v-bind:key="item.id">
                            <td>{{item.payment_method}}</td>
                            <td>₦{{Number(item.amount).toLocaleString()}}</td>
                            <td>{{item.transaction_type}}</td>
                            <td v-if="item.status === 'pending'">
                                <v-chip color="red">
                                    Pending
                                </v-chip>
                            </td>
                            <td v-else>
                                <v-chip color="success">
                                Success
                                </v-chip>
                            </td>
                            <td>{{item.terminal_id}}</td>
                            <td>{{item.transaction_by.business_name}}</td>
                            <td>{{item.createdAt | moment("Do MMMM YYYY")}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </v-container> -->

    <v-container>
      <v-card>
        <v-data-table
          :headers="headers"
          :items="list"
          :options.sync="options"
          :server-items-length="totalList"
          :loading="loading"
          :search="search"
        >
          <template v-slot:item.createdAt="{ item }">
            {{ item.createdAt | moment("Do MMMM YYYY") }}
          </template>
          <template v-slot:item.amount="{ item }">
            ₦{{ Number(item.amount).toLocaleString() }}
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import axios from "axios";
// import 'jquery/dist/jquery.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "datatables.net-dt/js/dataTables.dataTables"
// import "datatables.net-dt/css/jquery.dataTables.min.css"
// import $ from 'jquery';
export default {
  name: "TransactionList",
  components: {
    SideBar,
    NavBar,
  },
  data() {
    return {
      totalList: 0,
      list: [],
      search: "",
      loading: true,
      options: {},
      headers: [
        { text: "Payment Method", value: "payment_method" },
        { text: "Amount", value: "amount" },
        { text: "Transaction type", value: "transaction_type" },
        { text: "Transaction Status", value: "status" },
        { text: "Terminal ID", value: "terminal_id" },
        { text: "Transaction by", value: "transaction_by.business_name" },
        { text: "Transaction Date", value: "createdAt" },
      ],
      // list: undefined,
    };
  },

  watch: {
    options: {
      handler() {
        this.readDataFromAPI();
      },
    },
    deep: true,
  },

  mounted() {
    this.readDataFromAPI();
  },

  methods: {
    readDataFromAPI() {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      // console.log(sortBy);
      axios
        .get("/transaction", {
          params: {
            sortBy: sortBy,
            sortDesc: sortDesc,
            page: page,
            limit: itemsPerPage,
          },
          withCredentials: false,
        })
        .then((response) => {
          //Then injecting the result to datatable parameters.
          this.loading = false;
          this.list = response.data.data;
          this.totalList = response.data.total;
          console.log(response.data.data);
        });
    },
  },

  // mounted() {
  //     axios.get('/transaction', {
  //         withCredentials: false
  //     })
  //     .then((resp) => {
  //         // console.log(resp);
  //         this.list = resp.data.data;
  //         // this.totalList = resp.data.total;
  //         $('#datatable').DataTable({
  //             // $.noConflict();
  //             "searching": true,
  //             "processing": true,
  //             "serverSide": true,
  //         });
  //         console.log(resp.data.data)
  //     })
  // }
};
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
.v-chip .v-chip__content {
  color: #fff;
}
</style>
