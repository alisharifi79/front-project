const vm = Vue.createApp({
    data(){
        return{
            fristName: 'John',
            lastName: 'Doe',
            url:"https://google.com",
            age:"21"
        }
    },
    methods:{
        increment(){
            this.age+=1
        },
        decrement(){
            this.age-=1
        },
        updateLastName(event){
            this.lastName = event.target.value
        },
        updateFristName(event){
            this.fristName = event.target.value
        }
    },
    computed: {
        fullName(){
            return `${this.fristName} ${this.lastName}`
        },
    },
    watch:{
        age(newVal, oldVal){
            setTimeout(() =>{
                this.age = 20
            },3000)
        }
    }
}).mount('#app')

// setTimeout(() =>{
//     vm.fristName = 'Bob'
// }, 2000)

// Vue.createApp({
//     data(){
//         return{
//             fristName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('#app2')