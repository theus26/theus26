<template>
  <div id="burguer-table">
    <!--qui dentro vai ficar toda a tabela-->
   
    <div>
      <div id="burguer-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações</div>

        <!--saber o status do pedido-->
      </div>
    </div>
    <div id="burguer-table-rows">
      <div
        class="burguer-table-rows"
        v-for="burguer in hamburgueres"
        :key="burguer.id"
      >
        <div class="order-number">{{ burguer.id }}</div>
        <div>{{ burguer.nome }}</div>
        <div>{{ burguer.pao }}</div>
        <div>{{ burguer.carne }}</div>
        <div>
          <ul>
            <li v-for="(opcional, index) in burguer.opcionais" :key="index">
              {{ opcional }}
            </li>
          </ul>
        </div>

        <select id="acoes" @change="updateBurguer($event, burguer.id)">
          <option
            v-for="s in status"
            :key="s.id"
            :value="s.tipo"
            :selected="burguer.status == s.tipo"
          >
            {{ s.tipo }}
          </option>
        </select>
        <button id="btnsubmit" @click="deleteBurguer(burguer.id)">
          Cancelar
        </button>
        <!--esse parametro é para se basear pelo id para saber qual deletar na pagina-->
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message.vue";

export default {
  name: "Dashboard",
  components: Message,

  data() {
    return {
      hamburgueres: null,
      hamburgueres_id: null,
      status: [],
     
    };
  },

  methods: {
    async getPedidos() {
      // esse get vem de pegar os pedidios, estou resgatando os dados cadastrados

      const req = await fetch("http://localhost:3000/hamburgueres"); // 1º fiz a requisição na pagina de pedidos,
      const data = await req.json(); // 2º transformei os dados recebidos em json,
      this.hamburgueres = data; // 3º estou pegando a variavel de hambuerguers vazia la em DATA e ela vai receber os dados da variavél data
      // console.log(this.hamburgueres);
      this.getStatus();
    },
    async getStatus() {
      const req = await fetch("http://localhost:3000/status");
      const data = await req.json();
      this.status = data;
      console.log(this.status);
      // estou pegando os dados do BD parte do status e trazendo eles para meu select
    },

    async deleteBurguer(id) {
      console.log("Pedido Apagado !");
      const req = await fetch(`http://localhost:3000/hamburgueres/${id}`, {
        method: "DELETE",
      });
      const res = await req.json();
      this=msg;

      this.getPedidos();
      // estou apagando meus dados cadastrados
    },
    async updateBurguer(event, id) {
      const option = event.target.value;
      const dataJson = JSON.stringify({ status: option });
      const req = await fetch(`http://localhost:3000/hamburgueres/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      console.log(req);
    },
  },
  mounted() {
    this.getPedidos(); // depois de fazer a requisição monto tudo na tela
  },
};
</script>

<style scoped>
#burguer-table {
  max-width: 1200px; /* Tamanho maximo da tabela  */
  margin: 0 auto; /* alinhamos ela no meio  */
}
#burguer-table-heading,
.burguer-table-rows {
  /* Quebramos a linha  */
  display: flex;
  flex-wrap: wrap;
}
#burguer-table-heading {
  font-weight: bold;
  border-bottom: 3px solid #222;
  padding: 12px;
}

#burguer-table-heading div,
.burguer-table-rows div {
  /* Espaçamento entre os titulos */
  width: 19%;
}
.burguer-table-rows {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
select {
  padding: 12px 6px;
  margin-right: 12px;
  margin-top: 20px;
}
#btnsubmit {
  background-color: #222;
  width: 80px;
  height: 40px;
  color: #fcba03;
  padding: 12px;
  font-weight: bold;
  border: 1px solid #211;
  transition: 0.5s;
  margin-top: 20px;
}
#btnsubmit:hover {
  background: #fff;
  color: #222;
}
</style>