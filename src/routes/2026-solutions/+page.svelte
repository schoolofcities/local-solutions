<script>
    import FeaturedSolution from "$lib/FeaturedSolution.svelte";
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";
    import { base } from "$app/paths";

    let { data } = $props();

    let featured = data.cohort2026;

    const tagClicked = (tag) => {
        const params = new URLSearchParams({ tags: tag });
        window.open(`${base}/?${params.toString()}#solutions-map`, '_blank')
    }
</script>

<svelte:head>
    <title>2026 Cohort - Learning from What Works | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="2026 Cohort" 
        Chapter=""/>

    <div class="body-text">
        <p>
            Communities across Canada are navigating an uncertain political and economic environment in 2026, with technological disruption, trade wars, and tariffs compounding affordability challenges for many across the country. Yet the solutions in this year's cohort demonstrate how local action can mitigate against macro-level effects. They stood out in terms of demonstrated impact, creative approach, and potential to scale. 
        </p>
        <p>
            Several initiatives are focused on improving the physical and social infrastructure that allows communities to thrive, from creating new health-care partnerships to making dedicated spaces for art. Others respond to the fragmented nature of funding streams with creative initiatives that are “multi-solving,” addressing housing and workforce development, or youth mental health and climate change, simultaneously. 
        </p>
        <p>
            Now in its second year, the Learning from What Works project continues to offer a hopeful, forward-looking change in perspective. This inspiring group of initiatives shows that great ideas, co-created with communities, are at the heart of creating positive change.
        </p>
    </div>
    <SolutionsGrid Chapter="" solutionsList={featured} provinceCounts={{}} hasFilters={false}/>

    <!-- <div class="solutions">
        {#each featured as solution}
            <FeaturedSolution {...solution} {tagClicked}/>
        {/each}
    </div> -->
    
</div>

<style>
    .solutions {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #D9D9D9;
        align-items: center;
        justify-content: center;
        gap: 15px;
        box-sizing: border-box;
        max-width: 100dvw;
        padding: 15px 0;
    }
</style>