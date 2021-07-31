const app=Vue.createApp({
    data(){
        return{
            input_text:"",
            v_for_array:[
                {
                    id:1,
                    message:"Onur Şen",
                    complated:false,
                },
              
            ],
        }
    },
    methods:{
        addInputValueToArray(){
            console.log(this.input_text)
            this.v_for_array.push({message:this.input_text, complated:false});
            console.log(this.v_for_array)
        },
        remoteItem(item){
            console.log(item)
            this.v_for_array = this.v_for_array.filter(i => i != item);
        }
    },
    computed:{
        complated_computed(){
            return this.v_for_array.filter(i => i.complated).length;
        },
        un_complated_computed(){
            return this.v_for_array.filter(i => !i.complated).length;
        }
    }
    
}).mount('#app');