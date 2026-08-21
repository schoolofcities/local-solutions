<script>
    import Close from "./assets/icons/close.svelte";
    let {
        imageUrl,
        Thumbnail_Alt,
        Thumbnail_Caption,
        Thumbnail_Source,
        closeImageViewer
    } = $props();

    function handleOutsideClick(event) {
        const clickedImage = event.target.closest(".thumbnail");
        const clickedCaption = event.target.closest(".viewer-caption");
        const clickedClose = event.target.closest(".viewer-close-button");

        if (!clickedImage && !clickedCaption && !clickedClose) {
            closeImageViewer();
        }
    }

</script>


<div class="viewer-container" onclick={handleOutsideClick}>
    <div class="viewer-close-button">
        <button onclick={closeImageViewer}><Close/></button>
    </div>
    <img src={imageUrl} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
    <p class="viewer-caption"><span class="caption-text">{Thumbnail_Caption}</span> Photo credits: {Thumbnail_Source}</p>
</div>

<style>
    :root {
        --photo-viewer-width: 80%;
    }

    .viewer-container {
        position: fixed;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8); 
        z-index: 9999; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .thumbnail {
        max-width: 1050px;
        width: var(--photo-viewer-width);
        height: var(--photo-viewer-width);
        object-fit: cover;
    }

    .viewer-close-button {
        max-width: 1050px;
        width: var(--photo-viewer-width);
        display: flex;
        flex-direction: row;
        justify-content: right;
    }

    .viewer-caption {
        font-size: 13px;
        max-width: 1050px;
        width: var(--photo-viewer-width);
        background-color: #2B2B2B;
        margin-top: 0;
        padding: 15px;
        box-sizing: border-box;
        color: white;
    }

    .caption-text {
        font-weight: bold;
    }

    button {
        background-color: #00000000;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

</style>