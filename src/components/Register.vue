<template>
    <form @submit.prevent="handleSubmit">
        <h3>Merchant Sign Up</h3>

        <div class="form-group">
            <label for="">Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Email.." />
        </div>

        <div class="form-group">
            <label for="">Business Name</label>
            <input type="text" class="form-control" v-model="business_name" placeholder="Business name.." />
        </div>

        <div class="form-group">
            <label for="">Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Password.." />
        </div>

        <div class="form-group">
            <label for="">User Type</label>
            <input type="text" class="form-control" v-model="user_type" placeholder="hint..admin" />
        </div>

        <div class="form-group">
            <label for="">Account Number</label>
            <input type="text" class="form-control" v-model="account_number" placeholder="10 digit account number.." />
        </div>

        <div class="form-group">
            <label for="">Bank Name</label>
            <input type="text" class="form-control" v-model="bank_name" placeholder="Bank Name.." />
        </div>

        <div class="form-group">
            <label for="">Mobile Number</label>
            <input type="tel" class="form-control" v-model="mobile_number" placeholder="Mobile Number.." />
        </div>

        <div class="form-group">
            <label for="">BVN</label>
            <input type="number" class="form-control" v-model="BVN" placeholder="BVN" />
        </div>

        <button class="btn btn-primary btn-block">Sign up</button>

    </form>
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
            axios.post('/user/register', data)
                .then(
                    res => {
                        console.log(res)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
                this.$router.push('/login');
        }
    }
}
</script>