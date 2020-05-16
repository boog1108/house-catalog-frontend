<template>
  <div id="house-tab">
		<div id="house-info">
			<strong id="title">Info</strong>
			<ul class="house-list">
				<li v-bind:value="house.houseType">
					<strong>House Type:</strong> {{house.houseType}}
				</li>
				<li v-bind:value="house.dealType">
					<strong> Type:</strong> {{house.dealType}}
				</li>
				<li v-bind:value="house.rooms">
					<strong>Rooms: </strong>{{house.rooms}}
				</li>
				<li v-bind:value="house.bathrooms">
					<strong>Baths: </strong>{{house.bathrooms}}
				</li>
				<li v-bind:value="house.price">
					<strong>Price: </strong>{{house.price}} $
				</li>
				<li v-bind:value="house.city">
					<strong>City: </strong>{{house.city}}
				</li>
				<li v-bind:value="house.country">
					<strong>Country: </strong>{{house.country}}
				</li>
			</ul>
		</div>
		<div id="buttons">
			<button id="open" v-on:click="$emit('open-url', house.url)"><strong>OPEN</strong></button>
			<button id="delete" v-on:click="$emit('delete-house', house.id)"><strong>DELETE</strong></button>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'House',
    props: ['house'],
	methods: {
		openLink () {
			// console.log(house.url);
			// open(house.url, '_blank');
		}
	}
  }
</script>

<style scoped>
	#house-tab {
		display: block;
		background: lightsalmon;
		border: 3px dashed black;
		border-radius: 10px;
		margin-bottom: 15px;
	}

	#house-tab:hover {
		background-color: cornflowerblue;
	}

	#house-info {
		display: inline-block;
		margin: 10px;
		border-radius: 12px;
		width: 70%;
		background-color: aliceblue;
	}

	#title {
		font-size: x-large;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}

	#buttons {
		display: inline-block;
		position: relative;
		bottom: 150px;
	}

	#open {
		display: block;
		position: relative;
		top: 70px;
		font-size: large;
		color: white;
		width: 100px;
		background-color: green;
		border: 5px solid black;
		border-radius: 12px;
	}

	#open:hover {
		background-color: darkgreen;
	}

	#delete {
		display: block;
		position: relative;
		top: 120px;
		font-size: large;
		color: white;
		width: 100px;
		background-color: red;
		border: 5px solid black;
		border-radius: 12px;
	}

	#delete:hover {
		background-color: darkred;
	}

	li {
		overflow: hidden;
	}
</style>
