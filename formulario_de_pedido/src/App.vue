<template>
  <div>
    <NavBar :logo="logo_source" :alt="descricao" />
   <router-view />
     <Footer />

   
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      logo_source: "/img/logo.png",
      descricao: "MAKE_YOUR_BURGUER",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "HELVETICA";
  box-sizing: border-box;
}
.main-container {
  margin: 50px;
  min-height: 250px;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
  
}
</style>
