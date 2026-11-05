<script>
    import { chapterColours, pdfPaths } from "./chapterColours";
    import "../assets/global-styles.css";
    import { base } from '$app/paths';

    export let Chapter;
    export let Title;
    export let Subtitle = "";
</script>

<div class="container {Subtitle ? "has-subtitle" : ""}">
    <div class="content">
        <div class="title-section">
            {#if chapterColours[Chapter]}
                <img src={`${base}/web-assets/card_thumbnails/LOSO Icon_${Chapter}.png`} alt={Chapter} class="chapter-icon"/>
            {/if}
            <div>
                <h2 class="title {Title.length > 25 ? "long" : ""} {(chapterColours[Chapter] && (Title.split(' ').some((word) => word.length >= 10) || Title.length >= 15)) ? "med" : ""}">
                    {Title.toUpperCase()}
                </h2>
                {#if Subtitle}
                    <h3 class="subtitle">{Subtitle}</h3>
                {/if}
            </div>
        </div>
        <div class="project-banner">
            <div class="text">
                <h2>LEARNING FROM WHAT WORKS:</h2>
                <h3>Leveraging local solutions to make better places</h3>
            </div>
        </div>
    </div>
    <div class="background" style:background-color={chapterColours[Chapter] ? chapterColours[Chapter] : "var(--brandYellow)"}></div>
    
</div>

<style>
    .container {
        position: relative;
        padding-bottom: calc(250px + 25px);
    }

    .background {
        width: 100dvw;
        height: 250px;
        opacity: 30%;
        position: absolute;
        z-index: 0;
    }

    .content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        max-width: 1545px;
        width: 90dvw;
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 250px;
    }

    .title-section {
        max-width: calc(90dvw - clamp(300px, 40vw, 530px) - 10dvw);
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .title {
        font-size: clamp(35px, 5vw, 80px);
        text-wrap: wrap;
        margin: 0;
        text-align: left;
        color: var(--LoSoNavyBlue);
    }

    .title.med {
        font-size: clamp(30px, 4.25vw, 60px);
    }

    .title.long {
        font-size: clamp(25px, 3vw, 55px);
        font-weight: bold;
    }

    .has-subtitle .title {
        font-size: clamp(24px, 3.25vw, 50px);
    }

    .subtitle {
        margin: 0;
        font-family: TradeGothicLTLight;
        font-size: clamp(22px, 3vw, 45px);
        color: var(--LoSoNavyBlue);
    }

    .project-banner {
        right: 0;
        position: absolute;
        background-color: var(--brandYellow);
        padding: 15px;
    }
    
    .project-banner::after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 100%;
        width: calc((100dvw - min(1545px, 90dvw))/2);
        background-color: var(--brandYellow);
    }

    .project-banner .text {
        width: clamp(300px, 40vw, 530px);
    }

    .project-banner h2 {
        font-size: clamp(22px, 3vw, 40px);
        margin: 0;
        color: var(--LoSoNavyBlue);
    }

    .project-banner h3 {
        font-family: TradeGothicLTLight;
        /* font-size: 40px; */
        font-size: clamp(20px, 2.75vw, 40px);
        color: var(--LoSoNavyBlue);
        margin: 0;
    }

    .chapter-icon {
        height: clamp(50px, 10vw, 150px);
    }


    @media (max-width: 1080px) {
        .container {
            padding-bottom: calc(200px + 20px);
        }

        .background {
            height: 200px;
        }

        .content {
            height: 200px;
        }


        .title-section {
            max-width: calc(90dvw - clamp(300px, 35vw, 530px) - 15dvw);
        }

        .project-banner {
            padding: 10px;
        }

        .project-banner .text {
            width: clamp(300px, 35vw, 530px);
        }
    }


    @media (max-width: 880px) {
        .has-subtitle.container {
            padding-bottom: calc(175px);
        }

        .has-subtitle .background {
            height: 175px;
        }
        
        .has-subtitle .content {
            display: flex;
            flex-direction: column;
            height: 175px;
            justify-content: center;
            gap: 10px;
            align-items: start;
        }

        .has-subtitle .title-section {
            max-width: 100%;
        }

        .has-subtitle .title {
            text-align: left;
            align-self: flex-start;
        }

        .has-subtitle .project-banner {
            position: static;
            align-self: flex-end;
            margin-right: -5dvw;   
            padding-right: 5dvw;  
        }

        .has-subtitle .project-banner::after {
            display: none;  
        }

        .has-subtitle .project-banner .text {
            width: 100%;
        }
    }

    @media (max-width: 700px) {
        .container {
            padding-bottom: calc(160px);
        }

        .background {
            height: 160px;
        }

        .content {
            display: flex;
            flex-direction: column;
            height: 150px;
            justify-content: center;
            gap: 10px;
            align-items: start;
        }

        .title-section {
            max-width: 100%;
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
        }

        .title {
            /* font-size: 40px; */
            text-align: left;
            align-self: flex-start;
        }

        .project-banner {
            position: static;
            align-self: flex-end;
            margin-right: -5dvw;   
            padding-right: 5dvw;  
        }

        .project-banner::after {
            display: none;  
        }

        .project-banner .text {
            width: 100%;
        }
    }

    @media (max-width: 425px) {
        .background {
            height: 175px;
        }

        .content {
            height: 175px;
        }

        .project-banner {
            width: 300px;
        }
    }

</style>