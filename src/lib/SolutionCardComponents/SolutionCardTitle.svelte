<script>
    import { base } from '$app/paths';
    import { spotlightedURL } from '$lib/chapterColours';
    import ChapterChips from "$lib/ChapterChips.svelte";
    import LocationIcon from "$lib/assets/icons/location.svelte"
    import PhotoViewer from '$lib/PhotoViewer.svelte';

    let {
        Project,
        Organization,
        Card_Thumbnail,
        Thumbnail_Alt,
        ID_Num,
        Chapter,
        Display_Location,
        Spotlighted,
        Thumbnail_Caption,
        Thumbnail_Source,
    } = $props();
    
    let showImageViewer = $state(false);
    const imageUrl = `${base}/web-assets/card_thumbnails/${ID_Num}.jpg`

    function closeImageViewer() {
        showImageViewer = false;
    }
</script>

<div class="title-container"
    style={Card_Thumbnail ? 
        "display: grid; grid-template-columns: 55% 45%" : 
        ""}>
    <div class="card-title-section"> 
        <div style="width: 100%">
            {#if Spotlighted}
            <a class="title-url" href={spotlightedURL(Chapter[0], Project, ID_Num)} target="_blank">
                <h2>{@html Organization}</h2>
                <h3>{@html Project}</h3>
            </a>
            {:else}
            <h2>{@html Organization}</h2>
            <h3>{@html Project}</h3>
            {/if}
            <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 5px;">
                {#each Chapter as entry}
                    <ChapterChips Chapter={entry}/>
                {/each}
            </div>
            <div class="location">
                <LocationIcon/>
                <h3 id="location-text">{Display_Location}</h3>
            </div>
        </div>
    </div>
    
    {#if Card_Thumbnail}
        <button style="border: none; background-color: #ffffff00; display: flex;" onclick={() => {
            showImageViewer = true;
        }}>
            <img src={imageUrl} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
        </button>
    {/if}

    {#if showImageViewer}
        <PhotoViewer {imageUrl} {Thumbnail_Alt} {Thumbnail_Caption} {Thumbnail_Source} {closeImageViewer}/>
    {/if}
    
</div>

<style>
    .title-container {
        width: 100%;
    }

    .card-title-section {
        display: flex;
    }

    .title-url {
        text-decoration: none;
    }

    :global(.card-title-section h2) {
        font-family: SourceSerifBold;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    :global(.card-title-section h3) {
        font-family: SourceSerif;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .thumbnail {
        padding-left: 5%;
        width: 95%;
        height: 150px;
        object-fit: cover;
    }

    .location {
        margin-top: 15px;
        display: flex;
        gap: 5px;
    }

    #location-text {
        font-size: 16px;
        margin: 0;
        font-family: TradeGothicBold;
    }

    button:hover {
        cursor: pointer;
    }

</style>