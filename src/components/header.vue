<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>
<script>
  //sử dụng bus từ main.js để thay đổi 1 giá trị title trong header thôi 
  //nếu k có this.title trong này thì footer k đổi title
  import { bus } from "../main"
  export default {
    props: {
      title: {
        type: String
      }
    },
    data() {
      return {
        //title: "Vue Header"
      }
    },
    methods: {
      changeTitle: function() {
        // this.title = "Vue change"
        
        // cách 1 dùng $emit thay đổi cả 2 header và footer
        //----this.$emit("changeTitle", "Vue change")
        
        // cách 2 dùng bus
        // và trong data k có title
        this.title = "Header change title";
        bus.$emit("titleChanged", "Header change title")
      }
    },

    //lifecycle
   /* beforeCreate() {
      alert('Before Create');
    },
    created() {
      alert('Created');
    },
    beforeMount() {
      alert('Before Mount');
    },
    mounted() {
      alert('Mounted');
    },
    beforeUpdate() {
      alert('Before Update');
    },
    updated(){
       alert('Updated');
    }*/

  }
</script>
<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
