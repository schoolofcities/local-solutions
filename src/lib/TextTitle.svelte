<script>
    import { pdfPaths } from "./chapterColours";
    import DownloadIcon from "$lib/assets/icons/download.svelte"
    import "../assets/global-styles.css"

    export let chapter = "";
    export let title;
    export let subtitle;
    export let background = "Yellow";
</script>

<div class="container {chapter ? "has-link" : ""}">
    <div class="title-text"
        style:background-color={background == "Yellow" ? "var(--brandYellow)" : "var(--LoSoNavyBlue)"}>
        <h2 style:color={background == "Yellow" ? "var(--LoSoNavyBlue)" : "var(--brandYellow)"}>
        {title.toUpperCase()}</h2>
    </div>
    {#if chapter && pdfPaths[chapter]}
        <a href={pdfPaths[chapter]} target="_blank" class="pdf-link">
            Download this chapter as a PDF <DownloadIcon fill="var(--brandYellow)"/>
        </a>
    {/if}
</div>

<style>
    .container.has-link {
        display: grid;
        grid-template-columns: 75% 25%;
        align-items: center;
    }

    .title-text {
        background-color: var(--brandYellow);
        width:fit-content;
    }

    h2 {
        margin: 0;
        /* padding-left: calc((100dvw - min(1545px, 90dvw)) / 2); */
        padding-left: calc((100dvw - min(var(--grid-width), 90dvw))/2);
        padding-top: 15px;
        padding-bottom: 15px;
        padding-right: 15px;
    }
    
    .pdf-link {
        color: var(--brandYellow);
        font-family: TradeGothicBold;
        background-color: var(--LoSoNavyBlue);
        border-radius: 50px;
        padding: 10px 15px 10px 15px;
        width: fit-content;
        position: absolute;
        right: calc((100dvw - min(950px, 90dvw))/2);
        text-decoration: none;
        font-size: 16px;
    }

    @media (max-width: 900px) {
        .container.has-link {
            display: flex;
            flex-direction: column-reverse;
            align-items: start;
        }

        .title-text {
            width: fit-content;
            max-width: 85dvw;
            right: 10dvw;
        }

        h2 {
            font-size: 25px;
        }

        .pdf-link {
            position: relative;
            right: auto;
            align-self: center;
            margin-bottom: 15px;
        }
    }
</style>