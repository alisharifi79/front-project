<template>
    <button type="button" @click="onClickAge">Update age Event</button>
    <button type="button" @click="ageChangeFn(3)">Update age CB</button>
    <p>The user is {{ age }} years old</p>
    <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
    name: "UserComp",
    props:{
        age:{
            type:Number,
            // required: true,
            // defualt: 20,
            validator(value){
                return value < 130;
            }
        },
        ageChangeFn:{
            type: Function
        }
    },
    emits: ['age-change'],
    computed: {
        ageDoubled(){
            return this.age*2;
        },
    },
    methods: {
        onClickAge(){
            this.$emit('age-change', 5)
        },
    },
}
</script>

<style>

</style>