<script>
    import { base } from '$app/paths';
    import { chapterColours, chapterDescriptions } from './chapterColours';
    import '../assets/global-styles.css';
    import Arrow from './assets/icons/arrow.svelte';

    let { Chapter, textColour } = $props();

    const imageUrl = `${base}/web-assets/card_thumbnails/LOSO Icon_${Chapter}.png`;
    const chapterDescription =
        chapterDescriptions[Chapter] ?? "No description available for this chapter.";
    const colour = chapterColours[Chapter] ?? "var(--brandYellow)";
</script>

<section class="band" style="--chapterColour: {colour}">
    <div class="content">
        <div class="accent-bar"></div>

        <h2 class="title {Chapter.length > 25 ? 'long' : ''}">{Chapter}</h2>

        <div class="row">
            <img src={imageUrl} alt={Chapter} loading="lazy" class="thumbnail" />

            <div class="text">
                <p>{chapterDescription}</p>

                <a
                    href={`${base}/category/${Chapter.toLowerCase().replaceAll(" ", "-")}`}
                    class="link-button" style:color={textColour}
                >
                    Learn more about {Chapter.toLowerCase()}
                    <span class="arrow"><Arrow height={13} /></span>
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    /* Full-bleed tinted band */
    .band {
        width: 100dvw;
        margin-left: calc(50% - 50dvw);
        padding: 30px 0 40px;
        background-color: color-mix(in srgb, var(--chapterColour) 35%, white);
    }

    .content {
        width: min(900px, var(--grid-width));
        margin: 0 auto;
    }

    /* Gradient accent bar above the title */
    .accent-bar {
        width: 316px;
        max-width: 60%;
        height: 13px;
        background: linear-gradient(270deg, #DC4633 0%, #F2C500 49%, #6FC7EA 100%, #00A189 100%);
    }

    .title {
        margin: 30px 0 24px;
        font-size: 35px;
        line-height: 1.1;
        text-align: left;
        color: var(--brandBlack, #000);
    }

    .title.long {
        font-size: 30px;
        font-weight: bold;
    }

    /* Thumbnail on the left, text on the right */
    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 55px;
    }

    .thumbnail {
        flex: 0 0 300px;
        width: 300px;
        height: auto;
        display: block;
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }

    .text p {
        margin: 0;
        font-size: 16px;
        line-height: 1.5;
    }

    .link-button {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        padding: 18px 30px;
        border-radius: 50px;
        background-color: var(--chapterColour);
        font-family: Roboto, sans-serif;
        font-size: 16px;
        text-decoration: none;
    }

    .link-button:hover {
        text-decoration: underline;
    }

    /* Stack on small screens */
    @media (max-width: 700px) {
        .row {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
        }
        .thumbnail {
            flex-basis: auto;
            width: 100%;
            max-width: 300px;
        }
        .text p {
            font-size: 18px;
        }
    }
</style>