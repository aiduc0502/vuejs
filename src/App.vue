<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-container v-bind:frameworks="frameworks"></app-container>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
  import Header from './components/header.vue'
  import Container from './components/container.vue'
  import Footer from './components/footer.vue'
  export default {
    components: {
      'app-header': Header,
      'app-container': Container,
      'app-footer': Footer
    },
    data () {
      return {
        frameworks :[
        {name: 'Angular', content: 'This is an Angular framework' ,show: false},
        {name: 'React', content: 'This is a React framework' ,show: false},
        {name: 'Vue', content: 'This is a Vue framework' ,show: false},
        {name: 'Sail', content: 'This is a Sail framework' ,show: false},
        {name: 'Redux', content: 'This is a Redux framework' ,show: false},
        {name: 'Node', content: 'This is a Node framework' ,show: false},
        ],
        title: 'Vuejs'
      }
    },
    methods: {
      updateTitle: function(data){
        this.title = data;
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
