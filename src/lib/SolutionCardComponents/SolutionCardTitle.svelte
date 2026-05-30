<script>
    export let Project;
    export let Organization;
    export let Card_Thumbnail;
    export let Thumbnail_Alt;
    export let ID_Num;
    export let Chapter;
    export let Municipalities_List;
    export let Provinces_List;

    import ChapterChips from "$lib/ChapterChips.svelte";
    import LocationIcon from "$lib/assets/icons/location.svelte"
</script>

<div class="title-container"
    style={Card_Thumbnail ? 
        "display: grid; grid-template-columns: 55% 45%" : 
        ""}>
    <div class="title-section"> 
        <div>
            <h2>{Organization}</h2>
            <h3>{Project}</h3>
            <ChapterChips Chapter={Chapter}/>
            <div class="location">
                <LocationIcon/>
                <h3 id="location-text">{Municipalities_List?.length > 0 ? Municipalities_List[0] + ",": ""} {Provinces_List[0]}</h3>
            </div>
        </div>
    </div>
    
    <div>
        {#if Card_Thumbnail}
            <img src={`./src/assets/card_thumbnails/${ID_Num}.jpg`} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
        {/if}
    </div>
</div>

<style>
    .title-container {
        width: 100%;
    }

    .title-section {
        display: flex;
    }

    :global(.title-section h2) {
        font-family: SourceSerifBold;
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    :global(.title-section h3) {
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
</style>