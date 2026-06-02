<script>
    import { marked } from 'marked'
    import SolutionCardTitle from './SolutionCardComponents/SolutionCardTitle.svelte';
    import SolutionCardDescription from './SolutionCardComponents/SolutionCardDescription.svelte';
    import { chapterColours } from './chapterColours';
    import Tag from './Tag.svelte';
    import '../assets/global-styles.css';

    import { tick } from 'svelte';
    import { onMount } from 'svelte';

    export let Organization;
    export let Project;
    export let Display_Location;
    export let Municipalities_List;
    export let Provinces_List;
    export let Chapter;
    export let Subcategory;
    export let Spotlighted;
    export let Cohort;
    export let Summary;
    export let Tags;
    export let Card_Thumbnail;
    export let Thumbnail_Alt;
    export let ID_Num;

    let colour = chapterColours[Chapter];

    let descriptionExpanded = false;
    let contentEl;

    async function toggleExpanded() {
        descriptionExpanded = !descriptionExpanded;
    }


    let containerEl;
    let titleEl;
    let tagsEl;
    let collapsedHeight = '8rem'; 

    function recalcHeight() {
        if (!containerEl || !titleEl || !tagsEl) return;
        const containerH = 400; // your min-height
        const titleH = titleEl.getBoundingClientRect().height;
        const tagsH = tagsEl.getBoundingClientRect().height;
        const buttonH = 24; // approximate show more/less button
        const padding = 40; // 20px top + bottom padding
        collapsedHeight = `${containerH - titleH - tagsH - buttonH - padding}px`;
    }

    onMount(async () => {
        await tick();
        recalcHeight();

		const resizeHandler = () => {
            recalcHeight();
		};
		window.addEventListener('resize', resizeHandler);

		return () => window.removeEventListener('resize', resizeHandler);
	
    });
        
</script>

<div class="container" bind:this={containerEl}>
    <div bind:this={titleEl}>
        <SolutionCardTitle
        Project={Project} 
        Organization={Organization} 
        Card_Thumbnail={Card_Thumbnail} 
        Thumbnail_Alt={Thumbnail_Alt} 
        ID_Num={ID_Num} Chapter={Chapter} 
        Display_Location={Display_Location}/>
    </div>

    <div class="description-wrapper">
        <SolutionCardDescription Summary={Summary} colour={colour} collapsedHeight={collapsedHeight}/>
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