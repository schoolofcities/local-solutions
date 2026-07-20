<script>
    import { chapterColours } from "./chapterColours";
    import "../assets/global-styles.css";
    export let Chapter;
    export let toggle = false;
    export let clicked = false;
    export let large = false;
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
            class="chip {large ? "large" : ""}" style:background-color={chapterColours[Chapter]} style:color="white">
            {Chapter}
        </a>
    {/if}
</div>

<style>
    .chip {
        display: inline-block;
        font-family: TradeGothicBold;
        padding: 5px 13px;
        width: fit-content;
        font-size: 13px;
        border-radius: 50px;
        text-transform: uppercase;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        white-space: nowrap;
    }
    .chip:hover {
        cursor: pointer;
    }
    .large {
        font-size: 20px;
        padding: 9px 22px 9px 22px;
    }

    @media (max-width: 500px) {
        .large {
            font-size: 16px;
            padding: 8px 17px 8px 17px;
        }
    }
</style>