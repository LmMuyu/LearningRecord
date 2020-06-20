<script>
export default {
	onLaunch: function() {
		this.getLogo()
	},
	onShow: function() {
		
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		async getLogo() {
			let logo = await uniCloud.callFunction({
				name: 'template'
			});

			console.log(logo);
		}
	}
};
</script>

<style>
/*每个页面公共css */
</style>
