var app = new Vue({
  el: '#app',
  data: {
    message:"HelloWorld!",
    pokemons: [
      {id:"#001",
       nom:"Bulbizarre",
       description:"	Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance.",
       type1:"Plante",
       type2:"Poison",
       evolution1:"#002",
       evolution2:"#003",
       img:"https://www.pokebip.com/pokedex/images/gen4_general/1.png"
      }
    ]
  },
  methods:{
    test: function(){
      alert("toto");
    }
  }
})