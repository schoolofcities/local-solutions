<script>
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";

    export let data;

</script>

<div>
    <SolutionsGrid solutionsList={data.solutions}/> 
</div>

<style>

</style>