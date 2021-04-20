<template>
    <nav>
        <v-toolbar class="mt-5" flat>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="$emit('toggle-drawer')"></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <span class="caption">Overview Dashboard</span><br>Wallet
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
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>