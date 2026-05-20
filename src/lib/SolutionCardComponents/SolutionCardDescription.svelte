<script>
    import { marked } from 'marked';
    import { createEventDispatcher, tick } from 'svelte';
    import '../../assets/global-styles.css';

    export let Summary;
    export let colour;

    const dispatch = createEventDispatcher();

    let descriptionExpanded = false;
    let contentEl;

    async function toggleExpanded() {
        descriptionExpanded = !descriptionExpanded;

        await tick();

        dispatch('resize');
    }
</script>

<div>
    <div
        class="summary"
        class:expanded={descriptionExpanded}
        bind:this={contentEl}
        style="--full-height: {contentEl ? contentEl.scrollHeight + 'px' : 'auto'}"
    >
        {@html marked(Summary)}
    </div>
    <button 
        class="show-more-less" 
        on:click={toggleExpanded}
        style:color={colour}>
        {descriptionExpanded ? "Show less" : "Show more"}
    </button>
</div>

<style>
    .summary {
        position: relative;
        height: 6rem;
        overflow: hidden;
        transition: height 0.35s ease;
        margin-bottom: 1rem;
        font-family: Inter;
    }

    :global(.summary p) {
        font-family: Inter !important;
        font-size: 14px !important; 
        color: var(--brandBlack);
    }

    
    :global(.summary a) {
        color: var(--brandBlack);
    }

    .summary::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2rem;
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
        font-family: Inter;
        font-size: 14px;
        margin: 0 auto;
        display: block;
    }

    .show-more-less:hover {
        opacity: 75%;
        cursor: pointer;
    }

</style>