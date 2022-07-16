let vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            selectedTextColor: '',
            size: 150
        }
    },
    computed:{
        circleClasses(){
            return {
                purple: this.isPurple
            }
        },
        circleSize(){
            return {
                width: this.size + 'px',
                height: this.size + 'px',
                lineHeight: this.size + 'px'
            }
        },
        circleRotation(){
            return {
                transform: 'rotate(10deg)'

            }
        },
    }
}).mount('#app')