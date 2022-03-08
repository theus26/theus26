<template>
  <div class="pedidos">
    <p>{{ msg }}</p>
   
  </div>
</template>

<script>
export default {
  name: "Message",

  props: {
    msg: String,
   
  },
};
</script>


<style scoped>
.pedidos {
  background: #cce5ff;
  border: 2px solid #b8daff;
  color: #000000;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 30px auto;
}
</style>