<script>
    import { chapterColours } from "./chapterColours";
    import "../assets/global-styles.css";
    export let Chapter;
    export let toggle = false;
    export let clicked = false;
</script>

<div>
    {#if toggle}
        <button 
            class="chip" style:background-color={clicked ? chapterColours[Chapter] : "white"}
            style:color={clicked ? "white" : chapterColours[Chapter]}
            style:border={`1px solid ${chapterColours[Chapter]}`}
            on:click={() => {
                clicked = !clicked;
            }}>
            {Chapter}
        </button>
    {:else}
        <a href={`/local-solutions/category/${Chapter.toLowerCase().replace(" ", "-")}`} target="_blank" 
            class="chip" style:background-color={chapterColours[Chapter]} style:color="white">
            {Chapter}
        </a>
    {/if}
</div>

<style>
    .chip {
        font-family: TradeGothicBold;
        padding: 7px 15px 7px 15px;
        width: fit-content;
        font-size: 14px;
        border-radius: 50px;
        text-transform: uppercase;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
    }
    .chip:hover {
        cursor: pointer;
    }
</style>