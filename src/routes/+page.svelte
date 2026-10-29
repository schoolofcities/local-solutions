<script>
    import "../assets/global-styles.css";
    import HomePageTitle from "$lib/HomePageTitle.svelte";
    import SolutionsGrid from "$lib/SolutionsGrid.svelte";
    import MethodologyCallout from "$lib/MethodologyCallout.svelte";
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import Password from "$lib/Password.svelte";
    import ContactForm from "$lib/ContactForm.svelte";

    export let data;

</script>

<svelte:head>
    <title>Local Solutions | School of Cities</title>
</svelte:head>

<div>
    <Password/>
    <HomePageTitle/>
    <div class="body-text title-text">
        <p>
            Learning From What Works is an initiative led by the School of Cities and the Canadian Urban Institute to identify effective, locally driven solutions to the complex challenges communities are facing across Canada. Through two national competitions, we've heard from organizations across the country who are leading community-based solutions that are showing success.
        </p>
        <p>
            This website features over 100 of the most promising submissions we received, including 23 <a href="/local-solutions/featured-solutions">finalists</a> whose inspiring initiatives are covered in depth. The transformative local solutions are from a range of organizations and address housing, mental health, climate change, and more. 
        </p>
        <p>
            We also explore how to scale social innovations like these so Canada can expand on “what works,” building on local assets and trust to address our most pressing economic, social, environmental, and cultural challenges. Our research report uses examples from Canada and around the world to highlight the importance of networks and funding, storytelling, and breaking down barriers to bring promising local solutions to new places and sectors.
        </p>
    </div>
    <MethodologyCallout/>
    <div class="body-text">
        <p>
            Explore our collection of over 100 scalable ideas that work below. 
        </p>
    </div>
    <SolutionsGrid solutionsList={data.solutions} provinceCounts={data.provinceCounts} home={true}/> 

    <div style="margin-top: 50px;">
        <ContactForm/>
    </div>
</div>

<style>
    @media (min-width: 500px) {
        .title-text {
            margin-top: 40px;
        }
    }

    @media (max-width: 500px) {
        .title-text {
            margin-top: 30px;
        }
    }
</style>