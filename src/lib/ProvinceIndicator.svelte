<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { chapterColours } from './chapterColours';
    import { geoConicConformal, geoPath } from 'd3-geo';
    import MapleLeaf from './assets/icons/Maple_Leaf.svelte';

    let {
        province,
        chapter,
    } = $props();

    let width = $state();
    let height = $state();
    let projection = $state();
    let path = $state();
    let padding = $state();

    let provinceData = $derived($page.data.provinceGeo[province]);

    let colour = $derived(chapterColours[chapter]);

    function adjustWidth() {
        width = window.innerWidth > 900 ? 190 : 100;
        height = width;
        padding = window.innerWidth > 900 ? 30 : 15;
        const border = width == 190 ? 20 : 10;
        projection = geoConicConformal()
            .rotate([106, 0, 0])
            .parallels([49, 77])
            .fitExtent([[border, border], [width-border, height-border]], provinceData);
        path = geoPath(projection);
    }

    onMount(() => {
        adjustWidth();
        window.addEventListener("resize", adjustWidth);
        
		return () => {
			window.removeEventListener("resize", adjustWidth);
		};
    })
</script>

{#if width}
    {#if province == "Across Canada"}
        <svg {width} {height} class="map province-indicator canada" 
        style:background-color={colour}
        style:border-radius={width == 190 ? "50px" : "25px"}>
            <MapleLeaf id="leaf" width={width - (2 * padding)} height={width - (2 * padding)} padding={padding} fill="white"/>
        </svg>
    {:else}
        <svg {width} {height} class="map province-indicator" 
        style:background-color={colour}
        style:border-radius={width == 190 ? "50px" : "25px"}>
            <path
                d={path(provinceData)}
                id={`indicator-${province}`}
                fill="white"
            />
        </svg>
    {/if}
{/if}

<style>
    #leaf {
        transform: translate(-50%, -50%)
    }
</style>