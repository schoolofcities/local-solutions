<script>
    import "../assets/global-styles.css";
    import { chapterColours } from "./chapterColours";
    import Logo from '../assets/sofc-uoft-logo-blue-colour.svg';

    let items = [];

    Object.keys(chapterColours).forEach((key) => {
        items.push({"label": key, "colour": chapterColours[key]})
    })

    $: angleStep = 360 / items.length;
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
    <div class="orbit-container">
        <div class="center">
            <h2>A nation of place-based solutions</h2>
            <h3>Click to learn more!</h3>
        </div>

        {#each items as item, i}
        <a href="./category/{item.label.toLowerCase().replace(" ", "-")}" target="_blank">
            <div
            class="node"
            style="
                --angle: {i * angleStep}deg;
                --numCircles: {items.length};
                background-color: {item.colour};
            "
            >
            {item.label}
            </div>
        </a>
        {/each}
    </div>
</div>

<style>
    :root {
        --circle-container: 85dvh;
        --orbit: 30dvh;
    }

    .container {
        display: flex;
        flex-direction: row;
        gap: 5dvw;
    }

    .left {
        align-self: center;
    }

    .logo-link {
        padding-left: calc(((100dvw - var(--circle-container) - 375px - 5dvw)/2));
    }

    .logo {
        margin-top: 20px;
        height: 70px;
    }

    .title {
        padding-left: calc((100dvw - var(--circle-container) - 375px - 5dvw)/2);
        padding-top: 20px;
        padding-bottom: 20px;
        width: 375px;
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
        width: var(--circle-container);
        height: var(--circle-container);
    }

    .center {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: calc(var(--circle-container)/3); height: calc(var(--circle-container)/3);
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 600;
    }

    .center h2, h3 {
        text-align: center;
        color: var(--LoSoNavyBlue);
        font-size: 5dvh;
        margin: 0;
    }

    .center h3 {
        font-family: TradeGothicLTLight;
        font-size: 4dvh;
    }

    .node {
        position: absolute;
        top: 50%; left: 50%;
        width: calc(2*var(--circle-container)/var(--numCircles)); 
        height: calc(2*var(--circle-container)/var(--numCircles));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 3.5dvh;
        color: white;
        padding: 8px;
        box-sizing: border-box;
        font-family: TradeGothicBold;

        transform:
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--orbit))
            rotate(calc(-1 * var(--angle)));

        transition: transform 0.2s ease;
    }

    .node:hover {
        transform:
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--orbit))
            rotate(calc(-1 * var(--angle)))
            scale(1.075);
    }

    @media (max-width: 1100px) {
        :root {
            --circle-container: 75dvh;
            --orbit: 27dvh;
        }   

        .left {
            width: calc(92dvw - var(--circle-container));
        }

        .logo {
            margin-top: 15px;
            height: 50px;
        }

        .logo-link {
            padding-left: 20px;
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

    @media (max-width: 850px) {
        .title h2 {
            font-size: 30px;
        }

        .title h3 {
            font-size: 25px;
        }

        .logo {
            height: 40px;
        }

    }


    @media (max-width: 750px) {
        :root {
            --circle-container: 85dvw;
            --orbit: 30dvw;
        }

        .left {
            align-self: auto;
            width: 100%;
        }

        .container {
            flex-direction: column;
            justify-content: center;
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

        .title h2 {
            font-size: 35px;
        }

        .title h3 {
            font-size: 30px;
        }

        .center h2, h3 {
            text-align: center;
            color: var(--LoSoNavyBlue);
            font-size: 5dvw;
            margin: 0;
        }

        .center h3 {
            font-family: TradeGothicLTLight;
            font-size: 4dvw;
        }

        .node {
            font-size: 3.5dvw;
        }

        .orbit-container {
            left: calc((100dvw - var(--circle-container))/2)
        }
    }
</style>