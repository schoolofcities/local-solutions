<script>
    import SolutionCardTitle from './SolutionCardComponents/SolutionCardTitle.svelte';
    import SolutionCardDescription from './SolutionCardComponents/SolutionCardDescription.svelte';
    import { chapterColours } from './chapterColours';
    import Tag from './Tag.svelte';
    import '../assets/global-styles.css';
    import { tick, onMount } from 'svelte';

    let {
        Organization,
        Project,
        Display_Location,
        Municipalities_List,
        Provinces_List,
        Chapter,
        Subcategory,
        Spotlighted,
        Cohort,
        Summary,
        Tags,
        Card_Thumbnail,
        Thumbnail_Alt,
        ID_Num,
    } = $props();

    let containerEl = $state(null);
    let titleEl = $state(null);
    let tagsEl = $state(null);
    let collapsedHeight = $state('8rem');

    function recalcHeight() {
        if (!containerEl || !titleEl || !tagsEl) return;
        const containerH = 400;
        const titleH = titleEl.getBoundingClientRect().height;
        const tagsH = tagsEl.getBoundingClientRect().height;
        const buttonH = 24;
        const padding = 40;
        collapsedHeight = `${containerH - titleH - tagsH - buttonH - padding}px`;
    }
    
    $effect(() => {
        Summary;
        Tags;
        tick().then(() => recalcHeight());
    });

    onMount(async () => {
        await tick();
        recalcHeight();

        window.addEventListener('resize', recalcHeight);
        return () => window.removeEventListener('resize', recalcHeight);
    });
</script>

<div class="container" bind:this={containerEl}>
    <div bind:this={titleEl}>
        <SolutionCardTitle
            {Project}
            {Organization}
            {Card_Thumbnail}
            {Thumbnail_Alt}
            {ID_Num}
            {Chapter}
            {Display_Location}/>
    </div>

    <div class="description-wrapper">
        <SolutionCardDescription {Summary} {collapsedHeight} onresize={recalcHeight}/>
    </div>

    <div class="tags" bind:this={tagsEl}>
        {#each Tags as tag}
            <Tag label={tag}/>
        {/each}
    </div>
</div>

<style>
    .container {
        width: 85dvw;
        box-sizing: border-box;
        padding: 20px;
        background-color: white;
        height: fit-content;
        min-height: 400px;
        display: flex;
        flex-direction:column; 
        justify-content:space-between;
    }

    .description-wrapper {
        flex: 1;          
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    @media (min-width: 550px) {
        .container {
            width: 500px;
        }
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        .container {
            width: 45dvw;
        }
    }

    .tags {
        margin-top: auto;
        /* margin-top: 15px; */
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
</style>