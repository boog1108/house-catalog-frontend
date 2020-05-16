<template>
    <div class="houses">
			<div v-bind:key="house.id" v-for="house in houses">
				<House v-bind:house="house" v-on:open-url="openLink" v-on:delete-house="deleteHouse"/>
			</div>
		</div>
</template>

<script>
	import House from './House';
	import axios from 'axios';
	import {host} from '../main';

	export default {
    name: 'Houses',
	components: {
		House,
	},
	props: ['houses'],
	methods: {
		openLink (url) {
			window.open(url, '_blank');
		},
		deleteHouse (id) {
			axios.delete(host +`house/delete`, { params: { "id": id }})
				.then(res => {
					res.data === 'OK' ? alert("Deleted house " + id + " successfully!") : alert("House with id " + id + " not found!");
					this.houses = this.houses.filter(house => house.id !== id);
				})
				.catch(err => console.log(err));
		}
	},
	created () {
		axios.get(host +`house/all`)
			.then(res => this.houses = res.data)
			.catch(err => console.log(err));
	}
  }
</script>

<style scoped>
	.houses {
		margin: 10px;
	}
</style>
