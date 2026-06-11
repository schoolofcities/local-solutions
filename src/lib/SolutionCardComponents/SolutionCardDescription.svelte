<script>
    import { marked } from 'marked';
    import { tick } from 'svelte';
    import '../../assets/global-styles.css';

    let { collapsedHeight = '10rem', Summary, onresize } = $props();

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
        {@html marked(Summary)}
    </div>
    <button 
        class="show-more-less" 
        onclick={toggleExpanded}
        style:color="black">
        {descriptionExpanded ? "Show less" : "Show more"}
    </button>
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

    :global(.summary p) {
        font-family: Roboto !important;
        font-size: 14px !important; 
        color: var(--brandBlack);
        line-height: 24px;
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
        margin-bottom: 15px;
    }

    .show-more-less:hover {
        opacity: 75%;
        cursor: pointer;
    }

</style>