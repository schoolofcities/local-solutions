<script>
	import Logo from '../assets/loso-logo.svg';
    import ChevronDown from './assets/icons/chevron-down.svelte';
    import "../assets/global-styles.css";
    import { chapterColours } from './chapterColours';
    import { page } from '$app/stores';
    import { slugify } from '$lib/chapterColours';
    import { slide } from 'svelte/transition';

    let categoriesHovered = false;
    let methodologyHovered = false;
    let spotlightedHovered = false;

    let spotlighted = $page.data.spotlighted;

    // Mobile menu state
    let mobileMenuOpen = $state(false);
    let mobileCategoriesOpen = $state(false);

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
        if (!mobileMenuOpen) {
            mobileCategoriesOpen = false;
        }
    }

    function closeMobileMenu() {
        mobileMenuOpen = false;
        mobileCategoriesOpen = false;
    }

    function toggleMobileCategories() {
        mobileCategoriesOpen = !mobileCategoriesOpen;
    }
</script>

<nav>

    <div class="container">
        <a href="/local-solutions" class="logo-link" onclick={closeMobileMenu}>
            <img src={Logo} alt="Local Solutions logo" class="logo-top"/>
        </a>

        <!-- Desktop nav -->
        <div class="nav-buttons">
            <div
                onmouseenter={() => methodologyHovered = true}
                onmouseleave={() => methodologyHovered = false}
                role="navigation"
                class="hover-button"
            >
                <a class="button" id="methodology-button" class:hovered={methodologyHovered} href="/local-solutions/scaling-social-innovation">
                    Methodology 
                </a>
            </div>
            <div
                onmouseenter={() => categoriesHovered = true}
                onmouseleave={() => categoriesHovered = false}
                role="navigation"
                class="hover-button"
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

        <!-- Mobile hamburger button -->
        <!-- <button
            class="hamburger"
            class:open={mobileMenuOpen}
            onclick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
        >
            <span></span>
            <span></span>
            <span></span>
        </button> -->
    </div>

    <!-- Mobile menu panel -->
    <!-- {#if mobileMenuOpen}
        <div class="mobile-menu" transition:slide>
            <a
                class="mobile-link"
                href="/local-solutions/scaling-social-innovation"
            >
                Methodology
            </a>

            <button
                class="mobile-link mobile-categories-toggle"
                class:open={mobileCategoriesOpen}
                onclick={toggleMobileCategories}
                aria-expanded={mobileCategoriesOpen}
            >
                Categories <ChevronDown/>
            </button>

            {#if mobileCategoriesOpen}
                <ul class="mobile-dropdown" transition:slide>
                    {#each Object.keys(chapterColours) as Chapter}
                        <a
                            href={`/local-solutions/category/${Chapter.toLowerCase().replace(" ", "-")}`}
                            target="_blank"
                            onclick={closeMobileMenu}
                        >
                            <li>{Chapter}</li>
                        </a>
                    {/each}
                </ul>
            {/if}
        </div>
    {/if} -->
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
        align-items: center;
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

    .hover-button {
        width: fit-content;
        height: fit-content;
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

    /* Hamburger button - hidden on desktop */
    .hamburger {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        z-index: 10;
    }

    .hamburger span {
        display: block;
        width: 26px;
        height: 3px;
        background-color: var(--LoSoNavyBlue);
        border-radius: 2px;
        transition: transform 0.25s ease, opacity 0.25s ease;
    }

    .hamburger.open span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }

    /* Mobile menu panel */
    .mobile-menu {
        display: flex;
        flex-direction: column;
        background-color: var(--LoSoNavyBlue);
        padding: 10px 20px 20px 20px;
    }

    .mobile-link {
        display: flex;
        align-items: center;
        gap: 6px;
        color: white;
        font-family: TradeGothicBold;
        font-size: 18px;
        text-decoration: none;
        background: transparent;
        border: none;
        fill: white;
        padding: 14px 0;
        text-align: left;
        cursor: pointer;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    }

    .mobile-categories-toggle.open {
        color: var(--brandYellow);
    }

    .mobile-dropdown {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 0;
        padding: 10px 0 10px 15px !important;
    }

    .mobile-dropdown a {
        text-decoration: none;
    }

    .mobile-dropdown a:hover {
        text-decoration: underline;
        color: var(--brandYellow);
    }

    .mobile-dropdown li {
        color: white;
        font-family: RobotoBold;
        padding: 6px 0;
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
        .nav-buttons {
            display: none;
        }

        .hamburger {
            display: flex;
        }

        .button {
            font-size: 16px;
            height: 30px;
        }

        .logo-top {
            height: 30px;
        }
    }

</style>
