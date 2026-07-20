<script>
    import Close from "./assets/icons/close.svelte";
    let {
        imageUrl,
        Thumbnail_Alt,
        Thumbnail_Credits,
        closeImageViewer
    } = $props();

</script>

<div class="viewer-container">
    <div class="viewer-close-button">
        <button onclick={closeImageViewer}><Close/></button>
    </div>
    <img src={imageUrl} alt={Thumbnail_Alt} loading="lazy" class="thumbnail" />
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

    button {
        background-color: #00000000;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

</style>