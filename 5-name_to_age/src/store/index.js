import {createStore} from 'vuex';


const app = createStore({
    state:{
        userList:[
            {id:1,name:"onur",job:"Software Engineer"},
            {id:2,name:"özgür",job:"Management Asistant"},
            {id:3,name:"M.Berat",job:"Student"},
        ],
        name:"onur",
    },
    // dispatch
    // actions :{

    // },
    // commit
    mutations:{ 
        changeName(state, payload){
            state.name=payload.name;
        },
    },
    getters:{
        getUsers(state){
            return state.userList;
        },
        getName(state){
            return state.name;
        }
    },
});

export default app;