const app = Vue.createApp({
    data(){
        return{
            data:[
                {
                    id:1,
                    textContent:"Onur",
                    like:0,
                    dislike:0,
                },
            ],
            textContent_data:null,

        }
    },
    methods:{
        add(){
            console.log("1")
            this.data.push({
                id:this.data.size +1,
                textContent:this.textContent_data,
                like:0,
                dislike:0
            });
            console.log("Çalıştı")
            console.log(this.data)
        },
        sendWithEnter(e){
            console.log("2")

            console.log(e)
            // if(e.key == "Enter"){

            // }
            if(e.keyCode  == 13){
                this.add();
            }
        },
        removeItem(item){
            console.log("3")

            this.data = this.data.filter(i => i !=item);
        }
    }
}).mount('#app');