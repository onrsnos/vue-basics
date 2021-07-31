const app = Vue.createApp({
    data(){
        return {
            bg_color: false,
            border: false,
            border_radius: false,
            color: false,
            font_bold: false,
            font_italic: false,
        
        }
    },
    methods:{
        updateClass(data,event){
            console.log("çalıştı")
            this.bg_color = data;
            console.log(event)
            
        },
        updateStyle(data){

        }
    },
    computed:{
        class_data(){

        }
    }
}).mount('#app');