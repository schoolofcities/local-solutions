<script>
    import FeaturedSolution from "$lib/FeaturedSolution.svelte";
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";

    let { data } = $props();

    let featured = data.cohort2026;

    const tagClicked = (tag) => {
        const params = new URLSearchParams({ tags: tag });
        window.open(`/local-solutions/?${params.toString()}#solutions-map`, '_blank')
    }
</script>

<svelte:head>
    <title>2026 Cohort - Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="2026 Cohort" 
        Chapter=""/>

    <div class="body-text">
        <p>
            Explore the 2026 finalists below. 
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