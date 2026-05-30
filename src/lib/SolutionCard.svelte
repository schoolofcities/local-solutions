<script>
    import { marked } from 'marked'
    import SolutionCardTitle from './SolutionCardComponents/SolutionCardTitle.svelte';
    import SolutionCardDescription from './SolutionCardComponents/SolutionCardDescription.svelte';
    import { chapterColours } from './chapterColours';
    import Tag from './Tag.svelte';
    import '../assets/global-styles.css';

    export let Organization;
    export let Project;
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

    
        
</script>

<div class="container">
    <SolutionCardTitle 
        Project={Project} 
        Organization={Organization} 
        Card_Thumbnail={Card_Thumbnail} 
        Thumbnail_Alt={Thumbnail_Alt} 
        ID_Num={ID_Num} Chapter={Chapter} 
        Municipalities_List={Municipalities_List} 
        Provinces_List={Provinces_List}/>

    <SolutionCardDescription Summary={Summary} colour={colour}/>

    <div class="tags">
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
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }
</style>