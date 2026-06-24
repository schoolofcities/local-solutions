<script>
	import "../assets/global-styles.css"

	export let imageURL = '';
	export let caption = '';
	export let source = '';
	export let altText = '';
	export let maxWidth = '';
	export let link = 'Yes'; // Yes or No open link in new tab
	export let indicatorCorner = false;

</script>

<div 
	class="img-container" 
	style={indicatorCorner ? 
		`max-width: ${maxWidth}; padding: 20px 0 20px 0 !important; max-height: 60dvh; margin-bottom: 0;` 
		: `max-width: ${maxWidth}`}
>

	{#if link === 'Yes'}
		<a href={imageURL} target="_blank">
			<img src={imageURL} alt={altText} loading="lazy" />
		</a>
	{:else}
		<img src={imageURL} alt={altText} loading="lazy" />
	{/if}

	<div class="caption-container">
		<p>
			<span class="caption-text">{@html caption}</span>
			<span class="caption-source">{@html source}</span>
		</p>
	</div>
	
</div>

<style>

	.img-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		padding-top: 10px;
		padding-bottom: 0px;
		margin-bottom: 30px;
		padding-left: 20px;
		padding-right: 20px;
	}

	img {
		width: 100%;
		height: auto;
		max-height: 80dvh;
		min-height: 200px;
		display: block;
		object-fit: cover;
		object-position: center;
	}

	a {
		display: block;
		width: 100%;
	}

	a:hover {
		opacity: 0.95;
	}

	a img {
		width: 100%;
		height: auto;
		display: block;
	}

</style>
