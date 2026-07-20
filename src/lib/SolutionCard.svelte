<script>
    import SolutionCardTitle from './SolutionCardComponents/SolutionCardTitle.svelte';
    import SolutionCardDescription from './SolutionCardComponents/SolutionCardDescription.svelte';
    import { chapterColours, spotlightedURL } from './chapterColours';
    import Star from '$lib/assets/icons/star.svelte'
    import Tag from './Tag.svelte';
    import '../assets/global-styles.css';
    import { tick, onMount } from 'svelte';
    import { goto } from '$app/navigation';

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
        Description,
        Learning_from_what_worked,
        Tags,
        Card_Thumbnail,
        Thumbnail_Alt,
        ID_Num,
        tagClicked,
        Thumbnail_Credits,
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
            {Display_Location}
            {Spotlighted}
            {Thumbnail_Credits}/>
    </div>

    <div class="description-wrapper">
        <SolutionCardDescription {Summary} {collapsedHeight} {Project}
            {Chapter} {ID_Num} onresize={recalcHeight} 
            {Spotlighted}/>
    </div>
    
    <div class="tag-section">
        <div class="tags {Spotlighted ? "star-tags" : ""}" bind:this={tagsEl}>
            {#each Tags as tag}
                <Tag label={tag} {tagClicked}/>
            {/each}
        </div>
    </div>
</div>

<style>
    :root {
        --card-width: 85dvw; /* global scope */
    }

    .container {
        width: var(--card-width);
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

    .tags {
        margin-top: auto;
        /* margin-top: 15px; */
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .star-tags {
        width: calc(var(--card-width) - 40px - 40px);
    }

    @media (min-width: 550px) {
        :root {
            --card-width: 500px;
        }
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        :root {
            --card-width: 45dvw;
        }
    }
</style>