<template>
  <div class="container " >
    
    <div class="row mt-2">
      
      <div>
        İsmin :) 
        <input class="" type="text" @keydown.enter="getAgeFromName" v-model="name">
      </div>
      <div class="">
        Yaşın :) 
        <h3>{{age}}</h3>
      </div>
      <button @click="getAgeFromName">Yaşımı getirir misin?</button>
    </div>


    <img v-for="src in src_data" :src="src" :key="src" alt="" width="150" height="100"/>
    <button @click="getNasaDaylyPictures">Get Picture of day</button>
    <pre>{{src_data}}</pre>
  </div>
  
</template>

<script>
import axios from 'axios';
import { mapGetters,mapMutations } from 'vuex';
// import { mapMutations } from 'vuex'

export default {
  name: 'App',
  data(){
    return {
      name:"Onur",
      age:21,
      src_data:[],
      month : new Date().getMonth()+1,
      day : new Date().getDay(),
      year: new Date().getFullYear(),

    }
  },
  components: {
      
  },
  created(){
    console.log(this.userList);
    this.changeName({name:"Özgür"});
    console.log(this.getName)
  },
  methods:{
      ...mapMutations({
      changeName:"changeName",
    }),
    getAgeFromName(){
      axios.get('https://api.agify.io/?name='+this.name)
      .then(res => {
        console.log(res)
        this.age = res.data.age;
       
      });
    },
    getNasaDaylyPictures(){
      // https://api.nasa.gov/planetary/apod?start_date=2021-08-08&api_key=DEMO_KEY
      axios.get('https://api.nasa.gov/planetary/apod?start_date='+this.year+'-'+this.month+'-'+this.day+'&api_key=DEMO_KEY')
      .then(res=>{
        console.log(res)

        this.src_data = res.data.map((value)=>{
          return value['url'];
        });

      });
    },

  },
  computed:{
    ...mapGetters({
      userList: 'getUsers',
      getName: 'getName',
    }),
  
  }
}
</script>

<style>
  .container{
    /* display:flex; */
    /* justify-content: center;
    align-items: center; */
    background-color: rgb(192, 204, 204);
    width:50%;
    margin-left: 25%;
  }
</style>
