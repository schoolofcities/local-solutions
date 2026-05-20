<script>
    export let Project;
    export let Organization;
    export let Card_Thumbnail;
    export let Thumbnail_Alt;
    export let ID_Num;
    export let Chapter;

    import ChapterChips from "$lib/ChapterChips.svelte";
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
        margin-bottom: 15px;
    }

    .title-section {
        display: flex;
        align-items: center;
        margin-left: 5px;
    }

    :global(.title-section h2) {
        font-family: SourceSerifBold;
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    :global(.title-section h3) {
        font-family: SourceSerif;
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .thumbnail {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
</style>