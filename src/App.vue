<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer id="footer"/>
  </div>
</template>

<script>
  import Header from './components/layout/Header';
  import Footer from './components/layout/Footer'

  export default {
    name: 'App',
    components: {
      Footer,
      Header
    }
  }
</script>

<style>
  body {
    overflow: hidden;
    background-color: lightgoldenrodyellow;
    overflow-y: auto;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px lightgoldenrodyellow;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightskyblue;
    border-radius: 10px;
  }

  #app {
    font-family: Arial, sans-serif;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    min-width: 480px;
  }

  #footer {
    position: absolute;
    left: 50%;
    top: 800px;
    transform: translateX(-50%);
  }
</style>
