<template>
  <div>
    <Message :msg="msg"  v-show="msg"/>
    <div>
      <form id="burguer-form" @submit="createBurguer">
        <div class="input-container">
          <label id="opcionais-title" for="Nome">Nome do Cliente:</label>
          <input
            type="text"
            id="Nome"
            name="Nome"
            v-model="nome"
            placeholder="Digite seu Nome"
          />
        </div>

        <div class="input-container">
          <label id="opcionais-title" for="Pão"> Selecione seu Pão:</label>
          <select name="pao" id="pao" v-model="pao">
            <option value="">Escolha o pão</option>
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">
              {{ pao.tipo }}
            </option>
          </select>
        </div>

        <div class="input-container">
          <label id="opcionais-title" for="Carne">
            Selecione a Carne do seu burguer:</label
          >
          <select name="carne" id="carne" v-model="carne">
            <option value="">Escolha a carne:</option>
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">
              {{ carne.tipo }}
            </option>
          </select>
        </div>

        <div id="opcionais-container" class="input-container">
          <label id="opcionais-title" for="Carne">
            Selecione os Opcionais:
          </label>
          <div
            class="checkbox-container"
            v-for="opcional in opcionaisData"
            :key="opcional.id"
          >
            <input
              type="checkbox"
              name="opcionais"
              v-model="opcionais"
              :value="opcional.tipo"
            />
            <span>{{ opcional.tipo }}</span>
          </div>
        </div>
        <div class="input-container">
          <input type="submit" id="btn-submit" value="Cria meu Burguer!" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Message from './Message.vue'
export default {
  name: "Formulario",
  components:{
    Message

  },

  data() {
    return {
      paes: null, // esses valores são nulos pois serão substituidos pelos valores do bd no Backend
      carnes: null, // valores no db.json
      opcionais: [], // valores no db.json
      pao: null, //esses valores são os valores que o usuario vai escolher apartir dos valores que estão no bd.json
      carne: null, // valores a serem escolhidos pelo usuario // valores a serem escolhidos pelo usuario, é array pois ele vai chamar de um objeto
      opcionaisData: null,
      msg: null, // essa mensagem vai ser a mensagem exibida apos fazer o pedido,
      nome: null,
      
    };
  },
  methods: {
    async getIngredientes() {
      const req = await fetch("http://localhost:3000/ingredientes"); // estou fazendo a requisição no db.json para trazer meus dados
      const data = await req.json(); // após pegar os dados através de local host, transformo elas em uma arquivos JSON.
      // após fazer isso voce chama o metodo para executar
      //console.log(data)
      this.paes = data.paes; // esse this paes estou pegando do data de cima, agora esse data.paes estou pegando do arquivo json
      this.carnes = data.carnes;
      this.opcionaisData = data.opcionais;
      
    },

    async createBurguer(e) {
      e.preventDefault();
      // vou criar uma variavel para receber os pedidos
      const data = {
        // criei um objeto
        nome: this.nome, // estou enviando o nome
        pao: this.pao, // o valor pao
        carne: this.carne, // a carne
        opcionais: Array.from(this.opcionais),
        status: "Solicitado",
      };
      //console.log(data)
      const dataJson = JSON.stringify(data); //vai transformar os dados em textos, os dados são aqueles selecionados  na escolha do hamburguer

      const req = await fetch("http://localhost:3000/hamburgueres", {
        method: "POST",
        headers: { "content-type": "application/json" }, // estou dizendo que o tipo de dado enviado é o JSON
        body: dataJson,
      }); // aqui estou fazendo a requisição pra enviar meus dados para meu arquivo bd.json, usando um metodo, especificações e o arquivo de texto
      const receber = await req.json(); // recebendo os meus dados json
      console.log(receber);
      
      this.msg=`Pedido Nº ${receber.id} realizado com sucesso !`
       
    

      // limpar os campos apos enviar a requisição
          this.nome = "";
          this.carne = "";
          this.pao = "";
          this.opcionais = "";
          setTimeout(() => this.msg ="", 2000)
         

    },
  },
  mounted() {
    this.getIngredientes();
  },
};
</script>

<style scoped>
#burguer-form {
  max-width: 400px;
  margin: 0 auto; /* Centraliza o form no meio */
  margin-top: 50px;
}
.input-container {
  display: flex; /* esse display flex com flex-direction: column - isso faz com que os labels fiquem em cima */
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 20px;
}
label {
  font-weight: bold;
  margin-bottom: 1px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #fcba03;
  margin-top: 20px;
}
.input.select {
  padding: 5px 1px;
  width: 200px;
}

#opcionais-container {
  display: flex;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;
}
#opcionis-title {
  width: 100%;
}

#checkbox-container {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin-bottom: 20px;
}
.checkbox-container input {
  width: auto;
}

#btn-submit {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}
#btn-submit:hover {
  background-color: transparent;
  color: #222;
}
</style>