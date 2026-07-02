<script>
    import { base } from '$app/paths';
    import { error } from '@sveltejs/kit';
    import { parseMarkdown } from '$lib/markdown.js';
    import { hexToRgba, chapterColours,  } from '$lib/chapterColours.js';
    import ProvinceIndicator from '$lib/ProvinceIndicator.svelte';
    import ImageSingle from '$lib/ImageSingle.svelte';
    import ChapterChips from '$lib/ChapterChips.svelte';
    import LightBulb from '$lib/assets/icons/light-bulb.svelte';

	let { 
        params,
        data
     } = $props();

    let solution = data.solution;
     
</script>

<div>
    <div id="header-section" class="body-text-with-background" style:background-color={hexToRgba(chapterColours[solution.Chapter], 0.3)}>
        <div class="image-container">
            <div class="province-indicator">
                <ProvinceIndicator
                    province={solution.Provinces_List[0]}
                    chapter={solution.Chapter}
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
        <ChapterChips Chapter={solution.Chapter} large={true}/>
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
    </div>
</div>

<style>
    .body-text {
        max-width: var(--grid-width);
        width: 90dvw;
        margin-left: calc((100dvw - min(var(--grid-width), 90dvw))/2);
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

    :global(#learning-from-what-worked li, a) {
        width: auto !important;
        font-size: 17px;
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