<template>
  <div>
    <HeadersForm/>
    <nav>
    <router-link id="link" to="/">Login</router-link> 
   
  </nav>
  <router-view/>

<Footer/>
  </div>
</template>


<script>
import HeadersForm from './components/HeadersForm.vue'
import Footer from './components/Footer.vue'
export default {
  name:'App',
  components:{
    HeadersForm,
    Footer
  }
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#link{
  display: block;
}


</style>



