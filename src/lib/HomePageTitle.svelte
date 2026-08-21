<script>
    import "../assets/global-styles.css";
    import { chapterColours } from "./chapterColours";
    import Logo from '../assets/sofc-uoft-logo-blue-colour.svg';

    let {
        style = "grid" // "circle" or "grid"
    } = $props();

    let items = [];

    Object.keys(chapterColours).forEach((key) => {
        items.push({"label": key, "colour": chapterColours[key]})
    })

    let angleStep = $derived(360 / items.length);
    const orbitRadius = 30; 
</script>

<div class="container">
    <div class="left">
        <div class="title">
            <h2>Learning from what works:</h2>
            <h3>Leveraging local solutions to make better places</h3>
        </div>
        
        <a href="https://schoolofcities.utoronto.ca/" target="_blank" class="logo-link">
            <img src={Logo} alt="School of Cities logo" class="logo"/>
        </a>
    </div>
    <div class="orbit-container" class:circle={style == "circle"}>
        {#if style == "circle"}
            <div class="instructions center">
                <h2>A nation of place-based solutions</h2>
                <h3>Click a category to learn more!</h3>
            </div>
            {#each items as item, i}
            <a href="./category/{item.label.toLowerCase().replace(" ", "-")}" target="_blank" class="node-link">
                <div
                class="node in-circle"
                style="
                    --angle: {(i * angleStep) - 90}deg;
                    --numCircles: {items.length};
                    background-color: {item.colour};
                "
                >
                {item.label}
                </div>
            </a>
            {/each}
        {:else if style == "grid"}
            <div class="grid-circles" style="--numCircles: {items.length};">
                {#each items as item, i}
                    <a href="./category/{item.label.toLowerCase().replace(" ", "-")}" target="_blank" class="node-link">
                        <div class="node" style="background-color: {item.colour};">
                            {item.label}
                        </div>
                    </a>
                {/each}
                <div class="instructions">
                    <h2>A nation of place-based solutions</h2>
                    <h3>Click a category to learn more!</h3>
                </div>
            </div>
        {/if}
    </div>
</div>

<style>
    :root {
        --circle-container: 72dvh;
        --orbit: 25dvh;
    }

    .container {
        display: flex;
        flex-direction: row;
        gap: 5dvw;
    }

    .left {
        align-self: center;
        padding-left: calc((100dvw - var(--circle-container) - 375px - 5dvw)/2);
        box-sizing: border-box;
    }

    .logo {
        margin-top: 20px;
        height: 70px;
    }

    .title {
        padding: 20px;
        padding-right: 5px;
        width: 375px;
        box-sizing: border-box;   /* set once, everywhere — box never grows/shrinks unexpectedly */
        background-color: var(--brandYellow);
        height: fit-content;
    }

    .title h2 {
        font-family: TradeGothicBold;
        color: var(--LoSoNavyBlue);
        text-align: left;
        font-size: 50px;
        text-transform: uppercase;
        margin: 0;
    }

    .title h3 {
        font-family: TradeGothicLTLight;
        color: var(--LoSoNavyBlue);
        text-align: left;
        font-size: 45px;
        margin: 0;
    }

    .orbit-container {
        position: relative;
        padding-top: 1dvh;
        width: var(--circle-container);
    }

    .orbit-container.circle {
        height: var(--circle-container);
    }

    .instructions {
        width: calc(var(--circle-container)/3); 
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }

    .center { 
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        height: calc(var(--circle-container)/3);
    }

    .instructions h2, .instructions h3 {
        text-align: center;
        color: var(--LoSoNavyBlue);
        margin: 0;
    }

    .instructions h2 {
        font-family: TradeGothicBoldOblique;
        font-size: 3dvh;
    }

    .instructions h3 {
        font-family: TradeGothicLTLightOblique;
        font-size: 2.75dvh;
    }

    .grid-circles {
        display: grid;
        grid-template-columns: repeat(auto-fill, calc(2*var(--circle-container)/var(--numCircles) - 10px));
        justify-content: center;
        width: var(--circle-container);
        gap: 10px;
    }

    .node-link {
        height: fit-content;
        width: fit-content;
        text-decoration: none;
    }

    .node {
        width: calc(2*var(--circle-container)/var(--numCircles) - 10px); 
        height: calc(2*var(--circle-container)/var(--numCircles) - 10px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        padding: 8px;
        box-sizing: border-box;
        font-family: TradeGothicBold;
        font-size: 3dvh;
    }

    .node.in-circle {
        width: calc(2*var(--circle-container)/var(--numCircles)); 
        height: calc(2*var(--circle-container)/var(--numCircles));
        position: absolute;
        top: 50%; left: 50%;
        transform:
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--orbit))
            rotate(calc(-1 * var(--angle)));

        transition: transform 0.2s ease;
    }

    .node:hover {
        transform:
            scale(1.075);
    }

    .node.in-circle:hover {
        transform:
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--orbit))
            rotate(calc(-1 * var(--angle)))
            scale(1.075);
    }

    @media (min-width: 1100px) {
        .title {
            max-width: calc(100dvw - 85dvh);
        }
        .title h2 { font-size: 40px; }
        .title h3 { font-size: 35px; }
    }

    @media (max-width: 1100px) {
        :root {
            --circle-container: 65dvh;
        }

        .left {
            width: calc(92dvw - var(--circle-container));
        }

        .logo-link {
            display: block;
            width: 100%;
            padding-left: 20px;
            box-sizing: border-box;
        }

        .logo {
            margin-top: 15px;
            width: 100%;
            height: auto;   /* replaces the fixed height: 50px */
        }

        .title {
            padding: 20px;
            box-sizing: border-box;
            width: 100%;
        }

        .title h2 {
            font-size: 35px;
        }

        .title h3 {
            font-size: 30px;
        }

        .center h2 {
            font-size: 4dvh;
        }

        .center h3 {
            font-size: 3.5dvh;
        }
    }

    
    

    @media (max-width: 800px) {
        :root {
            --circle-container: 85dvw;
            --orbit: 30dvw;
        }

        .container {
            flex-direction: column;
            justify-content: center;
        }

        .left {
            align-self: auto;
            width: 100%;
        }

        .logo-link {
            display: none;
        }

        .title {
            padding-left: 5dvw;
            padding-right: 5dvw;
            text-align: center;
            width: 100%;
            text-wrap: wrap;
            box-sizing: border-box;
        }

        .title h2 { font-size: 30px; }
        .title h3 { font-size: 25px; }

        .center h2, .center h3 {
            text-align: center;
            color: var(--LoSoNavyBlue);
            font-size: 5dvw;
            margin: 0;
        }

        .center h3 {
            font-family: TradeGothicLTLight;
            font-size: 4dvw;
        }

        .instructions h2 {
            font-size: 3.5dvw;
        }

        .instructions h3 {
            font-size: 3dvw;
        }

        .node {
            font-size: 3.5dvw;
        }

        .orbit-container {
            left: calc((100dvw - var(--circle-container)) / 2);
        }
    }
</style>