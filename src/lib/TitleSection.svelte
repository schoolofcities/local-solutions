<script>
    import { chapterColours, chapterFullNames } from "./chapterColours";
    import "../assets/global-styles.css";

    export let Chapter;
    export let Title;
</script>

<div class="container">
    <div class="content">
        <h2 class="title">{(chapterFullNames[Title] ? chapterFullNames[Title] : Title).toUpperCase()}</h2>
        <div class="project-banner">
            <div class="text">
                <h2>LEARNING FROM WHAT WORKS:</h2>
                <h3>Leveraging local solutions to make better places</h3>
            </div>
        </div>
    </div>
    <div class="background" style:background-color={chapterColours[Chapter]}></div>
</div>

<style>
    .background {
        width: 100dvw;
        height: 300px;;
        opacity: 30%;
        position: absolute;
        z-index: 0;
    }
    .content {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        max-width: 1545px;
        width: 95dvw;
        z-index: 1;
    }

    .title {
        font-size: 80px;
        max-width: 500px;
        text-wrap: wrap;
    }

    .project-banner {
        background-color: var(--brandYellow);
    }

    .project-banner .text {
        max-width: 520px;
    }

    .project-banner h2 {
        font-size: 40px;
        margin: 0;
    }

    .project-banner h3 {
        font-family: TradeGothicLTLight;
        font-size: 40px;
        margin: 0;
    }
</style>