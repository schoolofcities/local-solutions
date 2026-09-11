<script>
	export let svg1080;
	export let svg720;
	export let svg360;
	export let standalone = true;
	export let shapeAround = false;

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
  

  
<div class="svg-container-wrapper" class:standalone={standalone} class:shape-around={shapeAround} bind:this={container}>
	{#if inputSVG}
		<div class="svg-container">
			{@html inputSVG}
		</div>
	{/if}
</div>

<style>
	.svg-container-wrapper {
		float: inline-end;
		padding-left: 20px;
		z-index: -1;
	}

	.standalone {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		margin-bottom: 20px;
		padding-left: 0px;
		padding-right: 0px;
		max-width: 100%;
		float: none;
	}
	
	.standalone .svg-container {
		height: auto;
	}

	.svg-container-wrapper.shape-around {
		float: inline-end;
		shape-outside: polygon(63% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 44%, 63% 44%) border-box;
		shape-margin: 10px;
		padding-left: 10px;
		margin-inline-end: calc((100dvw - min(var(--grid-width), 90dvw, 900px)) / 2);
	}

	@media (max-width: 600px) {
		.svg-container-wrapper {
			float: none;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20px;
			margin-bottom: 20px;
			padding-left: 0px;
			padding-right: 0px;
			max-width: 100%;
			float: none;
		}

	}
</style>