<template>
    <div class="home">
        <SideBar ref="drawer"/>
        <NavBar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer" />
        <v-divider></v-divider>

        <v-container class="mt-5">
            {{item.business_name}}
        </v-container>
    </div>
</template>

<script>
import SideBar from './SideBar'
import NavBar from './NavBar'
// import { mapState } from 'vuex'
// import Axios from 'axios'
export default {
    name: 'UserEdit',
    components: {
        SideBar,
        NavBar
    },

    // methods: {
    //     getUser() {
    //         Axios.get('/user/${this.item.id}')
    //             .then((response) => {
                    
    //             })
    //     }
    // }

    // computed: {
    //     ...mapState(['item']),
    //     getUser(){
    //         return this.item.find(item =>item.id == this.$route.params.id);
    //     }
    // }
}
</script>