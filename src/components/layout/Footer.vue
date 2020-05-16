<template>
    <div>
			<div id="disclaimer">
				<hr/>
				This application is property of <strong>Aboubacar Bamba</strong>. Contact me on:
				<br/>
				<div id="contacts"></div>
				<a href="https://www.linkedin.com/in/aboubacar-bamba-37a3791a9/" target="_blank">
					<img class="contact-logo" src="../../assets/linkedinLogo.jpg" />
				</a>
				<a href="https://github.com/MrFantasyTeam" target="_blank">
					<img class="contact-logo" src="../../assets/githubLogo.png" />
				</a>
			</div>
		</div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
	#disclaimer {
		width: 400px;
		display: block;
		text-align: center;
	}

	#contacts {
		display: block;
		margin: 20px;
	}

	.contact-logo {
		width: 35px;
		height: 35px;
	}
</style>
