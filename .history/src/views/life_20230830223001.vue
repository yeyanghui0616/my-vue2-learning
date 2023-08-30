<template>
    <div>
        
    </div>
</template>
 
<script>
export default {
    data() {
        return {
        };
    },
    // 生命周期狗子
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    

    methods: {
    },
};
</script>
 
<style lang="scss">
 
</style> 