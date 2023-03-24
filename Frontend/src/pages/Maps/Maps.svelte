<script>
	import MapExtra from './MapExtra.svelte';

	let ready;

	window.initMap = () => {
		ready = true;
	};

</script>

<svelte:head>
	<script	async def src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtSAR45TFgZjOs4nBFFZnII-6mMHLfSYI&callback=initMap&libraries=places"></script>
</svelte:head>

<section>
	{#if ready}
		<MapExtra />
	{/if}
</section>