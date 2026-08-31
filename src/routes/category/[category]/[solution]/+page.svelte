<script>
    import { base } from '$app/paths';
    import { error } from '@sveltejs/kit';
    import { parseMarkdown } from '$lib/markdown.js';
    import { hexToRgba, chapterColours,  } from '$lib/chapterColours.js';
    import ProvinceIndicator from '$lib/ProvinceIndicator.svelte';
    import ImageSingle from '$lib/ImageSingle.svelte';
    import ChapterChips from '$lib/ChapterChips.svelte';
    import LightBulb from '$lib/assets/icons/light-bulb.svelte';
    import Password from '$lib/Password.svelte';
    import Arrow from '$lib/assets/icons/arrow.svelte';

	let { 
        params,
        data
     } = $props();

    let solution = $derived(data.solution);
     
</script>

<svelte:head>
    <title>{solution.Project + " - "} Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>
    <div id="header-section" class="body-text-with-background" style:background-color={hexToRgba(chapterColours[solution.Chapter[0]], 0.3)}>
        <div class="image-container">
            <div class="province-indicator">
                <ProvinceIndicator
                    province={solution.Provinces_List[0]}
                    chapter={solution.Chapter[0]}
                    class="province-indicator"
                />
            </div>
            <ImageSingle imageURL={`${base}/web-assets/spotlighted-solutions/${solution.ID_Num}/${solution.Title_Photo}`}
                link="No" indicatorCorner="200"/>
        </div>
    </div>
    <div class="body-text">
        <div class="caption-container">
            <p>
                <span class="caption-text">{@html solution.Title_Caption}</span>
                <span class="caption-source">{"Photo credit: "}{@html solution.Title_Source}</span>
            </p>
        </div>
        <div class="title">
            <h2>{solution.Project}</h2>
            <h3>{solution.Organization}</h3>
        </div>
        
        <div style="display: flex; flex-direction: row; flex-wrap: wrap; gap: 5px;">
            {#each solution.Chapter as entry}
                <ChapterChips Chapter={entry} large={true}/>
            {/each}
        </div>
        <div class="description-text">
            {@html parseMarkdown(solution.Description)}
        </div>
        <div id="learning-from-what-worked" style:background-color="var(--brandYellow)">
            <div id="lightbulb">
                <LightBulb/>
            </div>
            <div id="side-line">
                <h4>Learning from what worked</h4>
                {@html parseMarkdown(solution.Learning_from_what_worked)}
            </div>
        </div>

        <a href="/local-solutions" class="back-link"><Arrow back={true} height={15}/> Back to main page</a>
    </div>
</div>

<style>
    .body-text {
        max-width: min(var(--grid-width), 900px);
        width: 90dvw;
        margin-left: calc((100dvw - min(var(--grid-width), 90dvw, 900px))/2);
        margin-top: 0;
    }

    .body-text-with-background {
        padding-left: calc((100dvw - min(var(--grid-width), 90dvw))/2);
        padding-right: calc((100dvw - min(var(--grid-width), 90dvw))/2);
        box-sizing: border-box;
        width: 100dvw;
    }

    .image-container {
        position: relative;
    }

    .province-indicator {
        position: absolute;
        bottom: 5px;
        right: -15px;
    }
    
    .caption-container {
        margin-top: 0;
    }

    h2 {
        font-family: SourceSerifBold;
        margin: 0;
    }

    h3 {
        font-family: SourceSerif;
        margin: 0;
    }

    .title {
        padding-top: 25px;
        padding-bottom: 15px;
    }

    :global(.description-text p, a) {
        color: black;
        font-size: 17px;
    }

    :global(.caption-container p, .caption-container a) {
        color: var(--brandGray80);
        font-size: 12px;
    }

    #learning-from-what-worked {
        box-sizing: border-box;
        padding: 30px;
        border-radius: 50px;
        margin-bottom: 20px;
    }

    #side-line {
        margin-left: 15px;
    }

    #lightbulb {
        position: absolute;
        height: 31px;
    }

    #learning-from-what-worked h4 {
        margin: 0 30px 0 30px;
        font-size: 25px;
    }
    
    :global(#learning-from-what-worked ul) {
        width: auto !important;
        list-style-type: disc;
        margin: 0;
        padding-left: 40px;
        padding-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-left: 2px solid;
    }
    
    :global(#learning-from-what-worked ul ul) {
        border-left: none;
        list-style-type: circle;
    }

    :global(#learning-from-what-worked li, #learning-from-what-worked a) {
        width: auto !important;
        font-size: 17px;
    }

    .back-link {
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }

    .back-link:hover {
        text-decoration: underline;
    }

    @media (max-width: 500px) {
        h2, h3 {
            font-size: 25px;
        }
        
        #learning-from-what-worked h4 {
            font-size: 20px;
        }

        :global(#learning-from-what-worked li, a) {
            font-size: 15px;
        }
    }
</style>