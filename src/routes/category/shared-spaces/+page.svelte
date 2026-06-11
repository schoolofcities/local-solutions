<script>
    import Password from '$lib/Password.svelte';
    import SolutionsGrid from '$lib/SolutionsGrid.svelte';
    import TitleSection from '$lib/TitleSection.svelte';

    let { data } = $props();
    const Chapter = "Shared spaces";
    
    let solutionsList = data.categorySolutions[Chapter].list;
    let provinceCounts = data.categorySolutions[Chapter].counts;

</script>

<div>
    <Password/>
    <TitleSection Title={Chapter} {Chapter}/>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
</div>

<style>

</style>