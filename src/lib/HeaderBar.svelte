<script>
	import Logo from '../assets/loso-logo.svg';
    import ChevronDown from './assets/icons/chevron-down.svelte';
    import "../assets/global-styles.css";
    import { chapterColours } from './chapterColours';
    import { page } from '$app/stores';
    import { slugify } from '$lib/chapterColours';

    let categoriesHovered = false;
    let methodologyHovered = false;
    let spotlightedHovered = false;

    let spotlighted = $page.data.spotlighted;
</script>

<nav>

    <div class="container">
        <a href="/local-solutions" class="logo-link">
            <img src={Logo} alt="Local Solutions logo" class="logo-top"/>
        </a>
        <div class="nav-buttons">
            <div
                onmouseenter={() => methodologyHovered = true}
                onmouseleave={() => methodologyHovered = false}
                role="navigation"
            >
                <a class="button" id="methodology-button" class:hovered={methodologyHovered} href="/local-solutions/scaling-social-innovation">
                    Methodology 
                </a>
            </div>
            <div
                onmouseenter={() => categoriesHovered = true}
                onmouseleave={() => categoriesHovered = false}
                role="navigation"
            >
                <button class="button" id="categories-button" class:hovered={categoriesHovered}>
                    Categories <ChevronDown/>
                </button>
                <ul class="dropdown-section" style:display={categoriesHovered ? "grid" : "none"}>
                    {#each Object.keys(chapterColours) as Chapter}
                        <a href={`/local-solutions/category/${Chapter.toLowerCase().replace(" ", "-")}`} target="_blank">
                            <li>{Chapter}</li>
                        </a>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
</nav>

<style>
    .container {
        padding-left: calc(min(40px, 3dvw));
        padding-right: calc(min(40px, 3dvw));
        height: fit-content;
        border-bottom: 1px solid;
        border-color: var(--brandGray60);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .logo-top {
        margin: 5px 0px 5px 0px;
        height: 45px;
    }

    .nav-buttons {
        max-width: 500px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .button {
        height: 45px;
        border: none;
        font-family: TradeGothicBold;
        font-size: 18px;
        background-color: #ffffff00;
        color: var(--LoSoNavyBlue);
        fill: var(--LoSoNavyBlue);
        display: flex;
        align-items: center;
        margin-top: 5px; 
        padding: 0 15px 0 15px;
        text-decoration: none;
    }
    
    .button:hover {
        cursor: pointer;
    }

    .button.hovered {
        text-decoration: underline;
        text-decoration-color: var(--brandYellow);
        text-decoration-thickness: 3px;
    }

    .dropdown-section {
        background-color: var(--LoSoNavyBlue);
        position: absolute;
        gap: 10px;
        z-index: 5;
        display: grid;
        margin: 0;
        margin-top: 10px;
        padding: 20px 30px 20px 30px !important;
        right: 0;
        width: fit-content;
    }

    .dropdown-section a {
        text-decoration: none;  
    }

    .dropdown-section a:hover {
        text-decoration: underline;
        text-decoration-thickness: 2px;
        color: var(--brandYellow);  
    }

    .dropdown-section li {
        color: white;
        display: flex;    
        font-family: RobotoBold;
        text-align: center;    
    }


    @media (max-width: 1080px) {
        .button {
            height: 40px;
        }

        .logo-top {
            height: 40px;
        }
    }

    @media (max-width: 800px) {
        .button {
            height: 35px;
            font-size: 17px;
        }

        .dropdown-section { 
            margin-top: 9px;
        }

        .logo-top {
            height: 35px;
        }
    }

    @media (max-width: 650px) {
        .button {
            font-size: 16px;
            height: 30px;
        }

        .logo-top {
            height: 30px;
        }
    }

</style>