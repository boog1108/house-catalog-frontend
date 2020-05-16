<template>
    <div id="box">
			<ul>
				<li>
					House Type:
					<select class="boxes" v-model="houseType">
						<option value="Flat">Flat</option>
						<option value="House">House</option>
						<option value="Loft">Loft</option>
						<option value="Mansion">Villa</option>
					</select>
				</li>
				<li>
					Deal Type:
					<select class="boxes" v-model="dealType">
						<option value="Buy">Buy</option>
						<option value="Rent">Rent</option>
					</select>
				</li>
				<li>
					Rooms:
					<select class="boxes" v-model="rooms">
						<option value=1>1</option>
						<option value=2>2</option>
						<option value=3>3</option>
						<option value=4>4</option>
						<option value=5>5+</option>
					</select>
				</li>
				<li>
					Bathrooms:
					<select class="boxes" v-model="bathrooms">
						<option value=1>1</option>
						<option value=2>2</option>
						<option value=3>3+</option>
					</select>
				</li>
				<li>Price: <input class="boxes" v-model="price"/></li>
				<li>City: <input class="boxes" v-model="city" placeholder="Type city"/></li>
				<li>Country: <input class="boxes" v-model="country" placeholder="Type country"/></li>
				<li>Url: <input class="boxes" v-model="url" placeholder="Copy here the house link"/></li>
			</ul>
			<button v-on:click="insert">ADD</button>
    </div>
</template>

<script>
  import axios from 'axios';
  import {host} from '../main';

  export default {
    name: 'Insert',
    data () {
      return {
        houseType: 'Flat',
        dealType: 'Rent',
        rooms: 1,
        bathrooms: 1,
        price: 0,
        city: '',
        country: '',
        url: ''
      }
    },
    methods: {
      insert () {
        let responseStatus;
        axios.post(host + `house/insert`, null,{
          params: {
            "houseType": this.houseType,
            "dealType": this.dealType,
            "rooms": this.rooms,
            "bathrooms": this.bathrooms,
            "price": this.price,
            "city": this.city,
            "country": this.country,
            "url": this.url
          }
        })
          .then(res => {
            responseStatus = res.status;
            responseStatus === 200 ? this.$router.push('/myHouses') : this.$router.push('/home');
					})
          .catch(err => console.log(err));
      }
    }
  }
</script>

<style scoped>
	ul {
		display: block;
		list-style: none;
		background-color: lightskyblue;
		border-style: dashed;
		border-width: thick;
		border-radius: 10px;
		margin-top: 30px;
		padding: 30px 50px;
	}

	li {
		font-size: large;
		display: block;
		border-bottom-style: solid;
		margin: 10px 5px 5px;
	}

	.boxes {
		float: right;
	}

	button {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 100px;
		height: 40px;
		font-size: x-large;
		font-weight: bold;
		background: orange;
		border: 2px solid black;
		border-radius: 12px;
	}

	button:hover {
		background-color: darkorange;
	}
</style>
