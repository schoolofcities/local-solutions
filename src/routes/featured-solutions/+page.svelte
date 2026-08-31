<script>
    import FeaturedSolution from "$lib/FeaturedSolution.svelte";
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";

    let { data } = $props();

    let featured = data.spotlighted;

    const tagClicked = (tag) => {
        const params = new URLSearchParams({ tags: tag });
        window.open(`/local-solutions/?${params.toString()}#solutions-map`, '_blank')
    }
</script>

<svelte:head>
    <title>Featured Solutions - Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="Featured Solutions" 
        Chapter=""/>

    <div class="body-text">
        <p>
            Each of the following featured solutions is covered in depth. In the main solutions repository, these featured solutions are indicated with a star icon. Click on solution to learn more!
        </p>
    </div>

    <div class="solutions">
        {#each featured as solution}
            <FeaturedSolution {...solution} {tagClicked}/>
        {/each}
    </div>
    
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