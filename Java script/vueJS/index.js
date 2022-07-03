const app = Vue.createApp({

    data(){
        return{
            cart: 0,
            product: 'Socks',
            brand: 'meow',
            details: ['soft','beautiful','good materials'],
            selectedVariant: 0,
            variants: [
                {id: "socks_1", color:'gray', image: 'https://images.unsplash.com/photo-1613151848917-80e67f421fff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', quantity: 20},  
                {id: "socks_2", color:'red', image: 'https://images.unsplash.com/photo-1641399122809-e3c85958eb67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', quantity: 0}
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        title(){
            return this.product + ' ' + this.brand
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})