<script>
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
    import CategoryCard from "$lib/CategoryCard.svelte";
    import { chapterColours, chapterTextColours } from '$lib/chapterColours.js';
</script>

<svelte:head>
    <title>Categories - Learning from What Works | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="Categories" 
        Chapter=""/>

    <div class="body-text">
        <p>
           The School of Cities and Canadian Urban Institute launched the Learning from What Works competition in 2025 to shine a spotlight on some of the local, place-based solutions that are showing success. Over the last two years, organizations across the country – from non-profits to businesses, universities to municipal governments, and even some informal collections of neighbours – have shared their stories of what was working.  
        </p>
        <p>
            The nine categories below reflect the breadth of work taking place across Canada to tackle our most pressing challenges. Click a category to learn more.
        </p>
    </div>

    {#each Object.keys(chapterColours) as Chapter}
        <CategoryCard Chapter={Chapter} textColour={chapterTextColours[Chapter]}/>
    {/each}
</div>

<style>
</style>