<template>
    <div id="app">
        <div>{{name}}</div>
        <al-selector v-model="resArr" level="2"/>
        selector:  {{  resArr }}
        <al-cascader v-model="resArr2" level="2" data-type="name" custom-item="全部" />
        cascader:  {{  resArr2 }}
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                 name: 'this is test demo',
                 resArr:[],
                 resArr2:[]
            }
        },
    }
</script>

<style scoped>
    
</style>