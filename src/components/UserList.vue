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
                            <th scope="col">BVN</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Type</th>
                            <th scope="col">Terminal ID</th>
                            <th scope="col">Merchant ID</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody id="table-body">

                        <tr v-for="item in list" v-bind:key="item._id">
                            <td>{{item.account_number}}</td>
                            <td>{{item.business_name}}</td>
                            <td>{{item.bank_name}}</td>
                            <td>{{item.BVN}}</td>
                            <td>{{item.email}}</td>
                            <td>{{item.user_type}}</td>
                            <td>{{item.terminal_id}}</td>
                            <td>{{item.merchant_id}}</td>
                            <td>
                                <!-- <route-link :to="{path: '', params: {id: item.id}}">Edit</route-link> -->
                                <!-- <v-btn dark v-bind="attrs" v-on="on" depressed color="primary">Edit</v-btn> -->
                                <button
                                    @click="editUser(item)"
                                    class="btn btn-primary"
                                    >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </v-container>

        <!-- Modal -->
        <div class="modal fade" id="user_edit" tabindex="-1" role="dialog" aria-labelledby="editLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editLabel">Edit Agent</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="handleSubmit">
                <!-- <input type="text" v-model="item._id"> -->
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="account_number">Account Number</label>
                                <input type="number" placeholder="Account Number" v-model="item.account_number" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="business_name">Business Name</label>
                                <input type="text" placeholder="Business Name" v-model="item.business_name" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="bank_name">Bank Name</label>
                                <input type="text" placeholder="Bank Name" v-model="item.bank_name" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="BVN">BVN</label>
                                <input type="text" placeholder="BVN" v-model="item.BVN" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" placeholder="Terminal ID" v-model="item.email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="merchant_id">Terminal ID</label>
                            <input type="text" placeholder="Terminal ID" v-model="item.terminal_id" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="terminal_id">Merchant ID</label>
                                <input type="text" placeholder="Merchant ID" v-model="item.merchant_id" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary" v-if="modal == 'edit'">Update Info</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
</template>


<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
import axios from 'axios'
import $ from 'jquery'
export default {
    name: 'UserList',
    components: {
        SideBar,
        NavBar
    },
    data() {
        return {
            // list: undefined
            list: [],
            item: {
                account_number:null,
                business_name:null,
                bank_name:null,
                BVN: null,
                email: null,
                user_type: null,
                terminal_id: null,
                merchant_id: null
            },
            activeItem:null,
            modal: null,
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
    },

    methods: {

        handleSubmit() {
            const data = {
                account_number: this.item.account_number,
                business_name:this.item.business_name,
                bank_name: this.item.bank_name,
                BVN: this.item.BVN,
                email: this.item.email,
                terminal_id: this.item.terminal_id,
                merchant_id: this.item.merchant_id
            };
            const endpoint = axios.put('/user/update-user/'+ this.item._id, data, {withCredentials: false})
            .then(
                res => {
                    console.log(res.data);
                    this.message = 'User Info updated Successfully!!!'
                }
            ).catch(
                err => {
                    console.log(err.res.data);
                }
            )
            console.log(endpoint);
            console.log(data);
            // $('#user_edit').modal('hide');
            setTimeout(function(){
                $('#user_edit').modal('hide')
                window.location.reload();
            }, 4000);
            this.$router.push('/users');
        },

        editUser(item) {
            this.modal = 'edit';
            this.item = item;
            console.log(this.item);
            this.activeItem = item[':id'];
            $('#user_edit').modal('show');
        },
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