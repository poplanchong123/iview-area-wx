<template>
    <div id="app">
        <div>{{ name }}</div>
        <al-selector v-model="resArr" level="2" />
        selector: {{ resArr }}
        <al-cascader v-model="resArr2" level="2" data-type="name" custom-item="全部" @on-change="cascaderChange" />
        <!-- <al-cascader v-model="resArr2" level="2" custom-item="全部" @on-change="cascaderChange" /> -->
        cascader: {{ resArr2 }}
        <button @click="click">点击</button>
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            name: 'this is test demo',
            resArr: [],
            //  resArr2:[ "天津市", "天津市", "和平区" ] 
             resArr2:[ "天津市", "全部"] 
            //  resArr2:[ "天津市", "全部", "全部"]// x
            //  resArr2:[ "全部"] 
        }
    },
    methods: {
        cascaderChange(e) {
            console.log(e);
        },
        click(){
            this.resArr2 = [ "天津市", "天津市", "和平区" ] 

        }
    }
}
</script>

<style scoped></style>