<template>
   <div id="myHouses">
       <Houses/>
   </div>
</template>

<script>
  import Houses from '../components/Houses';

  export default {
    name: 'MyHouses',
    components: {
      Houses
    }
	}
</script>

<style scoped>
	#myHouses {
		display: block;
		margin-top: 30px;
		margin-bottom: 30px;
		background-color: orangered;
		border: 4px dashed black;
		border-radius: 12px;
		padding: 5px;
		max-height: 600px;
		overflow-y: auto;
	}

	::-webkit-scrollbar-thumb {
		background: yellow;
		border-radius: 10px;
	}
</style>
