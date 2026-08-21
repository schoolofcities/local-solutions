<script>
    import { base } from '$app/paths';
    import ChapterChips from "$lib/ChapterChips.svelte";
    import LocationIcon from "$lib/assets/icons/location.svelte"
    import PhotoViewer from '$lib/PhotoViewer.svelte';
    import { chapterColours, spotlightedURL } from './chapterColours';
    import Tag from './Tag.svelte';
    import '../assets/global-styles.css';
    import { tick, onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Arrow from './assets/icons/arrow.svelte';
    import ChevronDown from './assets/icons/chevron-down.svelte';

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
        Thumbnail_Caption,
        Thumbnail_Source,
    } = $props();

    
    let showImageViewer = $state(false);
    const imageUrl = `${base}/web-assets/card_thumbnails/${ID_Num}.jpg`

    function closeImageViewer() {
        showImageViewer = false;
    }
    
    let windowWidth = $state(0);

    onMount(() => {
        windowWidth = window.width;
    });

</script>

<div class="container">
    {#if Card_Thumbnail}
        <button style="border: none; background-color: #ffffff00;" onclick={() => {
            showImageViewer = true;
        }}>
            <img src={imageUrl} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
        </button>
    {/if}

    {#if showImageViewer}
        <PhotoViewer {imageUrl} {Thumbnail_Alt} {Thumbnail_Caption} {Thumbnail_Source} {closeImageViewer}/>
    {/if}

    <a href={spotlightedURL(Chapter[0], Project, ID_Num)} class="content">
        <div class="featured-title-section">
            <div>
                <h2>{@html Organization}</h2>
                <h3>{@html Project}</h3>
                
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 5px;">
                    {#each Chapter as entry}
                        <ChapterChips Chapter={entry}/>
                    {/each}
                </div>

                <div class="location">
                    <LocationIcon size={windowWidth > 830 ? 20 : 15}/>
                    <h3 class="location-text">{Display_Location}</h3>
                </div>
            </div>

            <div class="tags {Spotlighted ? "star-tags" : ""}" bind:this={tagsEl}>
                {#each Tags as tag}
                    <Tag label={tag} {tagClicked}/>
                {/each}
            </div>
        </div>
        <ChevronDown width={"30px"} height={"30px"} orientation={"right"}/>
    </a>
</div>

<style>
    .container {
        display: flex;
        flex-direction: row;
        gap: 15px;
        background-color: white;
        padding: 10px;
    }

    .thumbnail {
        width: 267px;
        height: 200px;
        object-fit: cover;
    }

    .featured-title-section {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 180px;
    }

    :global(.featured-title-section h2) {
        font-family: SourceSerifBold;
        font-size: 16px;
        margin-top: 0px;
        margin-bottom: 5px;
    }

    :global(.featured-title-section h3) {
        font-family: SourceSerif;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 10px;
    }


    .location {
        margin-top: 10px;
        display: flex;
        gap: 5px;
    }

    .location-text {
        font-size: 16px;
        margin: 0;
        font-family: TradeGothicBold;
    }

    button:hover {
        cursor: pointer;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
    }

    .content {
        display: flex; 
        flex-direction: row; 
        align-items: center;
        justify-content: space-between;
        max-width: 500px;
        width: 95dvw;
        text-decoration: none;
    }

    @media (max-width: 830px) {
        .container {
            box-sizing: border-box;
            max-width: 95dvw;
        }

        .thumbnail {
            width: 175px;
            height: 175px;
        }

        .content {
            max-width: calc(95dvw - 175px);
        }

        .location-text {
            font-size: 14px;
        }
        
        :global(.featured-title-section h2) {
            font-family: SourceSerifBold;
            font-size: 14px;
            margin-bottom: 5px;
        }

        :global(.featured-title-section h3) {
            font-family: SourceSerif;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .featured-title-section {
            height: fit-content;
        }

        .tags {
            margin-top: 15px;
        }
    }
</style>