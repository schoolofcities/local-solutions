<script>
    import { chapterColours, pdfPaths } from "./chapterColours";
    import "../assets/global-styles.css";
    import HeaderBar from "./HeaderBar.svelte";

    export let Chapter;
    export let Title;
    export let Subtitle = "";
</script>

<div class="container {Subtitle ? "has-subtitle" : ""}">
    <HeaderBar/>
    <div class="content">
        <div class="title-section">
            <h2 class="title {Title.length > 25 ? "long" : ""}">
                {Title.toUpperCase()}
            </h2>
            {#if Subtitle}
                <h3 class="subtitle">{Subtitle}</h3>
            {/if}
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
        max-width: calc(90dvw - 530px - 15dvw);
    }

    .title {
        font-size: 80px;
        text-wrap: wrap;
        margin: 0;
        text-align: left;
    }

    .title.long {
        font-size: 55px;
        font-weight: bold;
    }

    .has-subtitle .title {
        font-size: 45px;
    }

    .subtitle {
        margin: 0;
        font-size: 40px;
        font-family: TradeGothicLTLight;
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
        max-width: 530px;
    }

    .project-banner h2 {
        font-size: 40px;
        margin: 0;
        color: var(--LoSoNavyBlue);
    }

    .project-banner h3 {
        font-family: TradeGothicLTLight;
        font-size: 40px;
        color: var(--LoSoNavyBlue);
        margin: 0;
    }

    @media (max-width: 1400px) {
        .title.long {
            font-size: 50px;
        }

        .has-subtitle .title {
            font-size: 40px;
        }

        .subtitle {
            font-size: 35px;
        }
    }

    @media (max-width: 1250px) {
        .title.long {
            font-size: 45px;
        }

        .has-subtitle .title {
            font-size: 40px;
        }

        .subtitle {
            font-size: 35px;
        }

    }

    @media (max-width: 1150px) {
        .title.long {
            font-size: 40px;
        }

        .has-subtitle .title {
            font-size: 35px;
        }

        .subtitle {
            font-size: 30px;
        }
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

        .title {
            font-size: 60px;
        }

        .title-section {
            max-width: calc(90dvw - 400px - 15dvw);
        }

        .project-banner {
            padding: 10px;
        }

        .project-banner .text {
            width: 400px;
        }

        .project-banner h2 {
            font-size: 30px;
        }

        .project-banner h3 {
            font-size: 30px;
        }
    }

    @media (max-width: 1000px) {
        .title.long {
            font-size: 35px;
        }

        .subtitle {
            font-size: 30px;
        }
    }

    @media (max-width: 880px) {
        .title.long {
            font-size: 30px;
        }

        .subtitle {
            font-size: 25px;
        }

        .has-subtitle.container {
            padding-bottom: calc(175px + 15px);
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

        .has-subtitle .project-banner h2 {
            font-size: 20px;
        }

        .has-subtitle .project-banner h3 {
            font-size: 20px;
        }
    }

    @media (max-width: 800px) {
        .container {
            padding-bottom: calc(175px + 15px);
        }

        .background {
            height: 175px;
        }

        .content {
            height: 175px;
        }

        .title {
            font-size: 50px;
        }

        .title-section {
            max-width: calc(90dvw - 350px - 15dvw);
        }

        .project-banner .text {
            width: 350px;
        }

        .project-banner h2 {
            font-size: 25px;
        }

        .project-banner h3 {
            font-size: 25px;
        }
    }

    @media (max-width: 750px) {
        .title.long {
            font-size: 26px;
        }

        .subtitle {
            font-size: 22px;
        }
    }


    @media (max-width: 650px) {
        .container {
            padding-bottom: calc(150px + 15px);
        }

        .background {
            height: 150px;
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
        }

        .title {
            font-size: 40px;
            text-align: left;
            align-self: flex-start;
        }

        .title.long {
            font-size: 24px;
        }

        .subtitle {
            font-size: 20px;
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

        .project-banner h2 {
            font-size: 20px;
        }

        .project-banner h3 {
            font-size: 20px;
        }
    }

    @media (max-width: 500px) {
        .title {
            font-size: 35px;
        }

        .title.long {
            font-size: 23px;
        }

        .subtitle {
            font-size: 19px;
        }

        .project-banner h2 {
            font-size: 18px;
        }

        .project-banner h3 {
            font-size: 18px;
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