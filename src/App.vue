<template>
  <v-app>

    <!-- <div v-if="!['login', 'register'].includes(this.$router.history.current.path)"> -->
      <!-- <SideBar /> -->

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
// import SideBar from './components/SideBar'
// import { useRoute } from 'vue-router';
export default {
  name: 'App',
  // components: {
  //   SideBar,
  // },


  data: () => ({
    //
  }),

  mounted () {
    console.log(this.$router.history.current.path);
  }
};
</script>
