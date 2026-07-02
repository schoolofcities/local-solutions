<script>
    import { base } from '$app/paths';
    export let Project;
    export let Organization;
    export let Card_Thumbnail;
    export let Thumbnail_Alt;
    export let ID_Num;
    export let Chapter;
    export let Display_Location;
    export let isFinalist;

    import ChapterChips from "$lib/ChapterChips.svelte";
    import LocationIcon from "$lib/assets/icons/location.svelte"
</script>

<div class="title-container"
    style={Card_Thumbnail ? 
        "display: grid; grid-template-columns: 55% 45%" : 
        ""}>
    <div class="card-title-section"> 
        <div>
            <h2>{@html Organization}</h2>
            <h3>{@html Project}</h3>
            <ChapterChips Chapter={Chapter}/>
            <div class="location">
                <LocationIcon/>
                <h3 id="location-text">{Display_Location}</h3>
            </div>
            <!-- {#if isFinalist}
                <div>
                    <button onclick={() => {window.open(`/local-solutions/category/${slugify(Chapter)}/${ID_Num}-${slugify(Project)}`, '_blank')}} id="overlay-toggle">
                        Read in-depth profile →
                    </button>
                </div>
            {/if} -->
        </div>
    </div>
    
    <div>
        {#if Card_Thumbnail}
            <img src={`${base}/web-assets/card_thumbnails/${ID_Num}.jpg`} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
        {/if}
    </div>
    
</div>

<style>
    .title-container {
        width: 100%;
    }

    .card-title-section {
        display: flex;
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

    #overlay-toggle {
        background-color: var(--brandYellow);
        color: black;
        font-family: SourceSerif;
        border: 1px solid black;
        border-radius: 10px;
        margin-top: 10px;
    }

    #overlay-toggle:hover {
        cursor: pointer;
    }
</style>