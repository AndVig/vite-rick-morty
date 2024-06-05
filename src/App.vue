<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';

export default{
  name:'AppRickMorty',
  components:{
    AppHeader,
    AppMain,
  },
  data(){
    return{
      store,
    };
  },
  created(){
    console.log("chiamata")
    axios.get(this.store.apiUrl).then(this.store.results= response.data);
  },
};
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style>

</style>
