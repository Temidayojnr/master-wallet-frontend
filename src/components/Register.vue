<template>
    <div style="background-color: #1E74BB; height: 100%;">
        <div class="container" style="padding-top: 150px;">
        <h3 style="font-family:  roboto; text-align: center; color: #fff;"><strong>Merchant Sign up</strong></h3>
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6" style="padding-top: 70px;">
                        <div class="card1 pb-5">
                            <!-- <div class="row"> <v-img src="mswallet.png" height="50" width="50" class="logo"></v-img> </div> -->
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><v-img src="mswallet.png" height="150" width="150" class="logo"></v-img>  </div>
                        </div>
                    </div>
                    <div class="col-lg-6" style="padding-top: 70px;">
                        <form @submit.prevent="handleSubmit">
                            <div class="card2 card border-0 px-4 py-5">
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">Email Address</h6></label>
                                <input class="mb-4" type="email" v-model="email" placeholder="Enter a valid email address">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">Business Name</h6></label>
                                <input class="mb-4" type="text" v-model="business_name" placeholder="Enter your Business Name">
                            </div>
                            <div class="row px-3">
                                <label class="mb-1"><h6 class="mb-0 text-sm">Password</h6></label>
                                <input class="mb-4" type="password" v-model="password" placeholder="Enter password">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">User Type</h6></label>
                                <input class="mb-4" type="text" v-model="user_type" placeholder="Hint...admin/client">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">Account Number</h6></label>
                                <input class="mb-4" type="text" v-model="account_number" placeholder="Enter your account number">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">Bank Name</h6></label>
                                <input class="mb-4" type="text" v-model="bank_name" placeholder="Enter your Bank Name">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">Mobile Number</h6></label>
                                <input class="mb-4" type="tel" v-model="mobile_number" placeholder="Enter your Mobile number">
                            </div>
                            <div class="row px-3"> 
                                <label class="mb-1"><h6 class="mb-0 text-sm">BVN</h6></label>
                                <input class="mb-4" type="text" v-model="BVN" placeholder="Enter your BVN">
                            </div>
                            <div class="row mb-3 px-3"> <button type="submit" class="btn btn-primary text-center">Sign Up</button> </div>
                            <div class="row mb-4 px-3"> <small class="font-weight-bold">Already have an account? <router-link to="/login" class="text-danger ">Login</router-link></small> </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Register',

    data() {
        return {
            email: '',
            business_name: '',
            password: '',
            user_type: '',
            account_number: '',
            bank_name: '',
            mobile_number: '',
            BVN: '',
        }
    },
    methods: {
        handleSubmit() {

            const data = {
                email: this.email,
                business_name: this.business_name,
                password: this.password,
                user_type: this.user_type,
                account_number: this.account_number,
                bank_name: this.bank_name,
                mobile_number: this.mobile_number,
                BVN: this.BVN
            };
            axios.post('/user/register', data, {withCredentials: false})
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
                this.$router.push('/');
        }
    }
}
</script>


<style>
    body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-color: #B0BEC5;
    background-repeat: no-repeat
}

.card0 {
    box-shadow: 0px 4px 8px 0px #757575;
    border-radius: 0px
}

.card2 {
    margin: 0px 40px
}

.logo {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    margin-left: 35px
}

.image {
    width: 360px;
    height: 280px
}

.border-line {
    border-right: 1px solid #EEEEEE
}


.line {
    height: 1px;
    width: 45%;
    background-color: #E0E0E0;
    margin-top: 10px
}

.or {
    width: 10%;
    font-weight: bold
}

.text-sm {
    font-size: 14px !important
}

::placeholder {
    color: #BDBDBD;
    opacity: 1;
    font-weight: 300
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

input,
textarea {
    padding: 10px 12px 10px 12px;
    border: 1px solid lightgrey;
    border-radius: 2px;
    margin-bottom: 5px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    font-size: 14px;
    letter-spacing: 1px
}

input:focus,
textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #304FFE;
    outline-width: 0
}

button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer
}

.bg-blue {
    color: #fff;
    background-color: #1A237E
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}
</style>