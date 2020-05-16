<template>
    <div id="body">
      <h4>
        Manage the houses you found online and
        find your next house more efficiently!
      </h4>
      <button >
        <router-link id="start" to="/insert">START NOW</router-link>
      </button>
    </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
	#body {
		text-align: center;
	}

	h4 {
		font-size: x-large;
		text-align: justify;
		display: block;
		background-color: lightgreen;
		border-style: dashed;
		border-width: thick;
		border-radius: 10px;
		padding: 30px 50px;
		width: 400px;
	}

  #start {
    font-size: x-large;
		font-weight: bold;
		color: black;
		text-decoration: none;
  }

	button {
		position: relative;
		top: 100px;
		background: orange;
		border: 2px solid black;
		border-radius: 12px;
	}

	button:hover {
		background-color: darkorange;
	}
</style>
