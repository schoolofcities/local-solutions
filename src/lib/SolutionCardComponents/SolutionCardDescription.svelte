<script>
    import { parseMarkdown } from '$lib/markdown.js';
    import { tick } from 'svelte';
    import { spotlightedURL } from '$lib/chapterColours';
    import ChevronDown from '$lib/assets/icons/chevron-down.svelte';
    import Star from '$lib/assets/icons/star.svelte'
    import '../../assets/global-styles.css';

    let { collapsedHeight = '10rem', Summary, onresize, Chapter, ID_Num, Project, Spotlighted } = $props();

    let descriptionExpanded = $state(false);
    let contentEl = $state(null);

    async function toggleExpanded() {
        descriptionExpanded = !descriptionExpanded;
        await tick();
        onresize?.();
    }
</script>

<div>
    <div
        class="summary"
        class:expanded={descriptionExpanded}
        bind:this={contentEl}
        style="
        --collapsed-height: {collapsedHeight};
        --full-height: {contentEl ? contentEl.scrollHeight + 'px' : 'auto'}"
    >
        {@html parseMarkdown(Summary)}
    </div>
    <div id="buttons">
        <button 
            class="show-more-less chevron {descriptionExpanded ? "rotated" : ""}"
            onclick={toggleExpanded}
            style:color="black">
            <ChevronDown/>
        </button>
        {#if Spotlighted}
                <a href={spotlightedURL(Chapter[0], Project, ID_Num)} target="_blank" class="star-button">  
                    <Star fill="var(--brandYellow)" width="40px"/>
                </a>
        {/if}
    </div>
</div>

<style>
    .summary {
        position: relative;
        height: var(--collapsed-height);
        overflow: hidden;
        transition: height 0.35s ease;
        margin-bottom: 0.5rem;
        font-family: Roboto;
    }

    .chevron {
        rotate: 0deg;
        transition: rotate 0.3s ease-in-out;
    }

    .rotated {
        rotate: 180deg;
    }

    #buttons {
        box-sizing: border-box;
        position: relative;
    }

    .star-button {
        position: absolute;
        right: 0;
    }

    :global(.summary p) {
        font-family: Roboto !important;
        font-size: 14px !important; 
        color: var(--brandBlack);
        line-height: 24px;
    }

    
    :global(.summary a) {
        color: var(--brandBlack);
        font-size: 14px !important; 
    }

    .summary::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2.5rem;
        background: linear-gradient(to bottom, transparent, white);
        opacity: 1;
        transition: opacity 0.25s ease;
        pointer-events: none;
    }

    .summary.expanded {
        height: var(--full-height);
        margin-bottom: 0;
    }

    .summary.expanded::after {
        opacity: 0;
    }

    .show-more-less {
        border: none;
        background-color: transparent;
        text-decoration: underline;
        font-family: Roboto;
        font-size: 14px;
        margin: 0 auto;
        display: block;
        /* margin-bottom: 8px; */
        /* margin-bottom: 15px; */
    }

    .show-more-less:hover {
        opacity: 75%;
        cursor: pointer;
    }

    #buttons {
        display: flex;
        flex-direction: row;
    }
    
    #open-profile {
        background-color: var(--brandYellow);
        color: black;
        font-family: SourceSerif;
        font-size: 13px;
        padding: 2px 5px 2px 5px;
        text-decoration: none;
        width: fit-content !important;
        border: 1px solid black;
        border-radius: 50px;
        margin: 0 auto;
        display: block;
        margin-bottom: 20px;
    }

    #open-profile:hover {
        cursor: pointer;
    }
</style>