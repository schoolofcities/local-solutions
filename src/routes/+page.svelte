<script>
    import "../assets/global-styles.css";
    import HeaderBar from "$lib/HeaderBar.svelte";
    import HomePageTitle from "$lib/HomePageTitle.svelte";
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";
    import MethodologyCallout from "$lib/MethodologyCallout.svelte";
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Footer from "$lib/Footer.svelte";
    import Password from "$lib/Password.svelte";

    export let data;

</script>

<div>
    <Password/>
    <HeaderBar/>
    <HomePageTitle/>
    <div class="body-text">
        <p>
            Learning From What Works is an initiative led by the School of Cities and the Canadian Urban Institute to identify effective, locally driven solutions to the complex challenges communities are facing across  Canada. In May 2025, we issued a national call for innovative approaches to solving place-based challenges. The response was inspiring: we heard from over 120 organizations across the country whose community-based solutions are already showing success.
        </p>
        <p>
            This report features 89 of the most promising submissions we  received, including 16 finalists whose inspiring initiatives are covered in depth. The transformative local solutions are from a range of  organizations and address housing, mental health, climate change, and more. The report also features a chapter about how to scale social innovations like these so Canada can expand on “what works,” building on local assets and trust to address our most pressing economic, social,  environmental, and cultural challenges.
        </p>
        <p>
            The report was launched at the Canadian Urban Institute’s State of Canada’s Cities Summit, held in Ottawa in December 2025.
        </p>
    </div>
    <MethodologyCallout/>
    <SolutionsGrid solutionsList={data.solutions} provinceCounts={data.provinceCounts} home={true}/> 
    <Footer/>
</div>

<style>
</style>