<script>
	export let svg1080;
	export let svg720;
	export let svg360;

	let inputSVG;
	let svgWidth = 0;
	let container;
	let resizeHandler;

	// Function to select which SVG to load based on screen width
	function pickSVGPath(width) {
		if (width >= 1080 && svg1080) return [svg1080, 1080];
		if (width >= 720 && svg720) return [svg720, 720];
		if (svg360) return [svg360, 360];

		return [svg720 ?? svg1080 ?? null, svg720 ? 720 : 1080];
	}
  
	// Fetch SVG content as text
	async function loadSVG(path) {
		try {
			const response = await fetch(path);
			if (!response.ok) throw new Error(`Failed to load SVG from ${path}`);
			return await response.text(); // Return the SVG content as a string
		} catch (e) {
			console.error(`Error loading SVG from ${path}:`, e);
			return '';
		}
	}
  
	async function handleVisibility(width) {
		const [path, widthValue] = pickSVGPath(width);
		if (!path) return;
		svgWidth = widthValue;
	
		inputSVG = await loadSVG(path);
	}
  
	import { onMount, onDestroy } from 'svelte';
  
	onMount(() => {
		const observer = new IntersectionObserver(async ([entry]) => {
		if (entry.isIntersecting) {
			await handleVisibility(window.innerWidth);

			resizeHandler = () => handleVisibility(window.innerWidth);
			window.addEventListener('resize', resizeHandler);

			observer.disconnect();
		}
		});

		if (container) observer.observe(container);
  
		onDestroy(() => {
			window.removeEventListener('resize', resizeHandler);
		});
	});
</script>
  

  
<div class="svg-container-wrapper" bind:this={container}>
	{#if inputSVG}
		<div class="svg-container" style="--svg-width: {svgWidth}px;">
			{@html inputSVG}
		</div>
	{/if}
</div>

<style>

	.svg-container-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 10px;
		padding-left: 0px;
		padding-right: 0px;
		max-width: 100%;
	}
	
	.svg-container {
		width: var(--svg-width);
		height: auto;
	}
</style>