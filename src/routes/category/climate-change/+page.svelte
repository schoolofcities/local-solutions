<script>
    import Password from '$lib/Password.svelte';
    import SolutionsGrid from '$lib/SolutionsGrid.svelte';
    import TitleSection from '$lib/TitleSection.svelte';
    import TextTitle from '$lib/TextTitle.svelte';
    import GraphicSingle from '$lib/GraphicSingle.svelte';
    import Footnote from '$lib/Footnote.svelte';
    import Footnotes from '$lib/Footnotes.svelte';
	import { createFootnoteStore } from '$lib/footnoteUtils';
    import { base } from '$app/paths';
    
    let { data } = $props();
    const Chapter = "Climate change";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        '<a href="" target="_blank">URL</a>.',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title={Chapter} {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Canada is blessed with natural riches, from vast forests to abundant fresh water and extensive coastlines. Yet these also make us uniquely vulnerable to the risks of a changing climate. Over the past 75 years, Canada’s average land temperature rose by 1.7°C – twice as quickly as the global rate – and the arctic region warmed faster still.1 The changing climate creates environmental threats that put Canadian communities at risk. Extreme weather events such as heat waves, floods, high winds, and storms can damage buildings and critical infrastructure systems. Rising sea levels threaten coastal communities. Wildfires have become a perennial occurrence across the country, prompting mass evacuations and causing billions of dollars in damages.2 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/climate-change/sustainability_wildfire-bars.svg`}
        />
        <p>
            The resilience of the essential ecosystems that underpin key sectors of Canada's economy, including agriculture, tourism, and energy, is increasingly at risk. Added to the extensive costs of rebuilding in the wake of climate-related destruction – for individuals and institutions – is the rising cost of insurance, or gaps in coverage where insurers deem the region too risky.3 The climate crisis is no longer a future threat for Canada’s communities: it is here and now, and it will be felt in our cities.4 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/climate-change/sustainability_climate-risk-maps.svg`}
        />
        <p>
            While federal commitments at the international level have led to some progress on decarbonization, Canada still ranks only in the middle of the pack among its peers in the OECD and G7.5 Both rural and urban municipalities are on the front lines of climate adaptation. Local governments, with their responsibility for key infrastructure, land-use planning, and service delivery, are well positioned to implement place-based solutions that respond directly to community needs.6 Legislation at the municipal level can lead the way to sustainable development by prioritizing transit and active transportation options and encouraging denser and more energy efficient construction.7  
        </p>
        <p>
            Canada’s cities have a strong record of international leadership in climate action: Toronto hosted one of the first global climate conferences in 1988, and Canadian cities were foundational partners in knowledge sharing initiatives like the C40 Cities Climate Leadership Group.8 The Federation of Canadian Municipalities has played a key role in supporting local resilience through the Green Municipal Fund, channelling federal funding to over 2,500 projects since its inception in 2000.9 Across the country, cities have adopted ambitious plans to lower emissions in an equitable and locally responsive way.10  
        </p>
        <p>
            The many inspiring ideas in this chapter show that municipal governments are thinking creatively about how to help ensure their most vulnerable residents can access clean air and water and have safe ways to get around. Some are bringing ideas from other countries like Japan and the U.K; others have developed pioneering frameworks to value natural assets or consider planetary boundaries to understand context-based sustainability.  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/climate-change/sustainability_watersheds-map.svg`}
        />
        <p>
            A number of initiatives build capacity at the neighbourhood, block, or building level, encouraging community involvement in participatory mapping, micro-grants, and home retrofits. More formalized training programs develop skills for everyone from bike mechanics to architects. We were inspired by how these ideas create community bonds while building resilience, from neighbourhood action groups to corporate communities of practice. 
        </p>
        <p>
            The intelligent use of data is at the core of many solutions, with emerging technologies enabling holistic analyses that combine information about ecological threats with socio-economic vulnerabilities to map priority areas for interventions. While climate phenomena tend to affect geographic regions, socio-economic data tend to follow jurisdictional boundaries, making it difficult to map one onto the other. Obtaining specific enough information to plan for climate impacts at a municipal level can be especially difficult, particularly in smaller places.11 These tools represent a significant step forward in understanding where – and who – is most at risk. 
        </p>
        <p>
            While the dangers of a changing climate are grave and widespread, this chapter presents a range of responses that can be implemented in our neighbourhoods and municipalities – actions that are hopeful, practical, and asset-focused. The organizations featured here work with communities to make them stronger, more resilient, and more connected to each other and to the environment. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>