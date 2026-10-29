<script>
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
    import CategoryCard from "$lib/CategoryCard.svelte";
    import { chapterColours } from '$lib/chapterColours.js';
</script>

<svelte:head>
    <title>About the Team - Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="Categories" 
        Chapter=""/>

    <div class="body-text">

        <p>
            <i>Learning from What Works</i> is led by the University of Toronto’s <a href="https://schoolofcities.utoronto.ca/" target="_blank">School of Cities</a>, with support from the Canadian Urban Institute and RBC.
        </p>
        <p>
            This report features 89 of the most promising submissions we  received, including 16 finalists whose inspiring initiatives are covered in depth. The transformative local solutions are from a range of  organizations and address housing, mental health, climate change, and more. The report also features a chapter about how to scale social innovations like these so Canada can expand on “what works,” building on local assets and trust to address our most pressing economic, social,  environmental, and cultural challenges.
        </p>
        <p>
            The report was launched at the Canadian Urban Institute’s State of Canada’s Cities Summit, held in Ottawa in December 2025.
        </p>

    </div>

    {#each Object.keys(chapterColours) as Chapter}
        <CategoryCard Chapter={Chapter}/>
    {/each}
</div>

<style>
</style>