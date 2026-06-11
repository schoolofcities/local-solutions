<script>
    import SolutionsGrid from '$lib/SolutionsGrid.svelte';
    import TitleSection from '$lib/TitleSection.svelte';

    let { data } = $props();
    const Chapter = "Small businesses";
    
    let solutionsList = data.categorySolutions[Chapter].list;
    let provinceCounts = data.categorySolutions[Chapter].counts;

</script>

<div>
    <TitleSection Title="Small businesses" {Chapter}/>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
</div>

<style>

</style>