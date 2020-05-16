<template>
    <div id="container">
      <h1>House Catalog</h1>
      <nav>
        <router-link class="block" id="home" to="/home">Home</router-link>
        <router-link class="block" id="insert" to="/insert">Insert</router-link>
        <router-link class="block" id="myHouses" to="/myHouses">My Houses</router-link>
      </nav>
    </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style scoped>
	#container {
		text-align: center;
	}

	h1 {
		font-size: xx-large;
		text-decoration: underline;
	}

	nav {
		margin: 0;
		padding: 0;
		background-color: black;
		display: inline-block;
	}

	.block {
		color: white;
		float: left;
		display: inline-block;
		width: 90px;
		padding: 5px;
		margin: 3px;
		text-decoration: none;
	}

	#home {
		background-color: green;
	}

	#insert {
		background-color: blue;
	}

	#myHouses {
		background-color: red;
	}

	#home:hover, #insert:hover, #myHouses:hover {
		background-color: black;
	}
</style>
