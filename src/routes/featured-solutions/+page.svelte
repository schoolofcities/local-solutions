<script>
    import FeaturedSolution from "$lib/FeaturedSolution.svelte";
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";
    import { base } from "$app/paths";

    let { data } = $props();

    let featured = data.spotlighted;

    const tagClicked = (tag) => {
        const params = new URLSearchParams({ tags: tag });
        window.open(`${base}/?${params.toString()}#solutions-map`, '_blank')
    }
</script>

<svelte:head>
    <title>Featured Solutions - Learning from What Works | School of Cities</title>
</svelte:head>


<div>
    <!-- <Password/> -->

    <TitleSection Title="Featured Solutions" 
        Chapter=""/>

    <div class="body-text">
        <p>
            Each of the following featured solutions is covered in depth. In the main solutions repository, these featured solutions are indicated with a star icon and yellow "Featured" tag. Click on a solution to learn more!
        </p>
    </div>

    <SolutionsGrid Chapter="" solutionsList={featured} provinceCounts={{}} hasMap={false}/>
    
</div>