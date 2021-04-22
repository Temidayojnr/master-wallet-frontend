<template>
    <v-navigation-drawer class="app--drawer" app fixed v-model="drawer" clipped color="#F4F5F9">
        <v-list-item class="px-2 py-5">
            <v-list-item-title class="text-capitalize" align="center">
                <v-img src="mswallet.png" height="80" width="200"></v-img>
                <!-- <strong><h2 style="font-family: Fira sans">Master-Wallet</h2></strong> -->
                
            </v-list-item-title>
        </v-list-item>
        <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="rgb(30,116,187)">
                <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route" @click="menuClick(item.action)">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    data: () => ({
        selectedItem: 0,
        drawer: true,
        group: null,
        items: [
            {icon: 'fas fa-home', text: 'Dashboard', route: '/dashboard'},
            {icon: 'fas fa-users', text: 'Users', route: '/users'},
            {icon: 'fas fa-dolly', text: 'Transactions', route: '/transactions'},
            {icon: 'fas fa-sign-out-alt', text: 'Logout', action: 'logout'},
        ]

    }),

    methods: {
        menuClick(action) {
            if (action == "logout") {
                localStorage.removeItem("user-token");
                this.$router.push('/login');
            }
        }
        // logout() {
        //     localStorage.removeItem("user-token");
        //     this.$router.push('/login');
        // }
    }
}
</script>

<style scoped>
    div >>> .v-list a {
        text-decoration: none;
    }
</style>