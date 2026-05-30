<script>
    import { chapterColours } from "./chapterColours";
    import "../assets/global-styles.css";

    export let Chapter;
</script>

<div>
    <a href={`./${Chapter.toLowerCase().replace(" ", "_")}`} target="_blank" 
        class="chip" style:background-color={chapterColours[Chapter]}>
        {Chapter}
    </a>
</div>

<style>
    .chip {
        font-family: TradeGothicBold;
        color: var(--brandWhite);
        padding: 7px 15px 7px 15px;
        width: fit-content;
        font-size: 14px;
        border-radius: 50px;
        text-transform: uppercase;
        text-decoration: none;
    }
</style>