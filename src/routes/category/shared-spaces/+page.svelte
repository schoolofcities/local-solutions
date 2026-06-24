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
    const Chapter = "Shared spaces";

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
            Shared spaces where people can interact with their neighbours are the foundations on which strong communities are built. They encourage informal encounters and foster a sense of place, making them essential components of social infrastructure.1 While most cities and towns have places for people to gather and participate in cultural, social, and recreational life, these are often insufficient to support the rapid growth of both urban and rural areas across the country. Many are commercial spaces that, while an essential part of communities, are not public in the true sense of the word. At the same time, many traditional public gathering spaces, such as churches, libraries, schools, and community centres are facing multiple challenges: aging infrastructure, funding shortages, and the need to serve multiple purposes, from food distribution and job training to providing places of refuge in extreme weather events.2  
        </p>
        <p>
            Great public spaces encourage a feeling of belonging; they build social networks and engender trust. The period of pandemic isolation challenged the social fabric and highlighted the importance of local, diverse public spaces. Although many Canadians do have access to formal gathering places, and their sense of belonging has steadily improved since 2021, many still feel isolated from their community and lack spaces to gather informally and socialize with their neighbours. A recent survey by the YMCA found that a third of Canadians report not having access to a community space outside their work or home. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/shared-spaces/community-spaces_belonging-bar-chart.svg`}
        />
        <p>
            Community gathering places improve quality of life.3 They bridge age, culture, and class divides, and help reduce social isolation by creating opportunities for spontaneous and meaningful interactions. A common theme in the solutions featured in this chapter is “adaptive reuse” – the process of repurposing a space to fulfill a new function – creating new, inclusive community hubs, whether indoors or out, that meet local needs.4 Across Canada, parking lots, decommissioned schools, churches, and vacant lots are being temporarily or permanently reimagined as community centres, performance halls, and event hubs. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/shared-spaces/community-spaces_percapita.svg`}
        />
        <p>
            Other initiatives highlighted in the chapter illustrate how even simple improvements to existing public places can have a positive effect on community life. Some of these projects improve underused or neglected neighbourhood spaces with public art and safety infrastructure. Some enhance public places through “tactical urbanism,” using short-term and low-cost interventions such as seating, murals, and portable accessibility ramps to catalyze long-term change.5 All contribute to keeping public spaces safe, accessible, and community-oriented. Pass-through spaces such as streets, stairwells, and alleyways are an essential component of collective life, enabling fleeting but meaningful social connections between neighbours.6 And when public spaces are activated by thoughtful placemaking interventions, people are 50% more likely to linger and engage in casual social encounters.7  
        </p>
        <p>
            Ultimately, initiatives like those showcased here support public health and social equity by ensuring that all residents have access to shared environments that make communities vibrant, connected, and resilient. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>