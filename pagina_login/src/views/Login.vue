<template>
  <form @click="input">
    <div class="container">
      <div class="card">
        <h1>Entrar</h1>
        <div class="label-float">
          <input type="text" name="nome" id="txtnome" />
          <label id="labelNome" for="nome">Digite Seu usuario:</label>
        </div>

        <div class="label-float">
          <input type="password" name="senha" id="txtsenha" />
          <label id="labelSenha" for="senha">Digite Sua Senha:</label>
        </div>
        <button id="btn">Entrar</button>
        <div>
          Não tem usuario,
          <router-link to="/TelaCadastro"> Cadastre-se.</router-link>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  methods: {
    async input() {
      var inputNome = document.getElementById("txtnome");
      var labelNome = document.getElementById("labelNome");
      var inputSenha = document.getElementById("txtsenha");
      inputNome.addEventListener("keyup", () => {
        if (inputNome.value.length <= 1) {
          labelNome.style.color = "red";
          labelNome.style.borderBottom = "red";
          labelNome.style.marginBottom = "200px";
          labelNome.innerHTML =
            "<strong> Usuario: *Insira no minimo 5 caracteres</strong>";
          console.log("testando");
        } else {
          labelNome.style.color = "green";
          labelNome.style.borderBottom = "green";
          
          labelNome.innerHTML =
            "<strong> Nome </strong>";
        }
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}
.card {
  background-color: bisque;
  padding: 100px;
  border-radius: 4%;
}
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.label-float input {
  width: 100%;
  padding: 5px 5px;
  display: inline-block;
  border: 0;
  border-bottom: 2px solid #000000;
  background-color: transparent;
  outline: none;
  min-width: 180px;
  font-size: 16px;
  transition: all 0.3s ease-out;
  border-radius: 0;
}
.label-float {
  position: relative;
  padding-top: 30px;
  margin-top: 5%;
  margin-bottom: 5%;
}
.label-float input:focus {
  border-bottom: 2px solid #999393;
}
.label-float label {
  color: rgb(0, 0, 0);
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 13px;
  transition: all 0.3s ease-out;
}
.label-float input:focus + label {
  font-size: 15px;
  margin-top: 0;
  color: rgb(55, 55, 61);
}
#btn {
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 15px;
}
button {
  margin-left: 50px;
}
</style>
