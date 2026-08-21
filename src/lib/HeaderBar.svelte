<script>
	import Logo from '../assets/loso-logo.svg';
    import ChevronDown from './assets/icons/chevron-down.svelte';
    import "../assets/global-styles.css";
    import { chapterColours } from './chapterColours';
    import { page } from '$app/stores';
    import { slugify } from '$lib/chapterColours';
    import { slide } from 'svelte/transition';
    import SofCLogo from "../assets/sofc-uoft-logo-blue-colour.svg";
    import SofCDotsLogo from "../assets/sofc-dots-logo-dark.svg";
    import HeaderBarButton from './HeaderBarButton.svelte';

    let spotlightedHovered = $state(false);
    let mobileMenuOpen = $state(false);
    let mobileCategoriesOpen = $state(false);

    let spotlighted = $page.data.spotlighted;

    let categoriesDropdownValues = [];
    Object.keys(chapterColours).forEach((key) => {
        categoriesDropdownValues.push({
            label: key,
            link: `/local-solutions/category/${slugify(key)}`
        })
    });

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

    <div class="container" role="navigation">
        <a href="/local-solutions" class="logo-link">
            <img src={Logo} alt="Local Solutions logo" class="logo-top"/>
        </a>
        <div class="right-side">
            <div class="nav-buttons">
                <HeaderBarButton link="/local-solutions/about" content="About"/>
                <HeaderBarButton link="/local-solutions/scaling-social-innovation" content="Methodology"/>
                <HeaderBarButton link="/local-solutions/featured-solutions" content="Featured Solutions"/>
                <HeaderBarButton content="Categories" dropdown={true} dropdownValues={categoriesDropdownValues} rightOverflow={true}/>

                <a href="https://www.schoolofcities.utoronto.ca" target="_blank" id="sofc-logo">
                    <img src={SofCLogo} alt="School of Cities logo" class="logo-top"/>
                </a>
                <button
                    class="hamburger"
                    class:open={mobileMenuOpen}
                    onclick={toggleMobileMenu}
                    aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            
            <a href="https://www.schoolofcities.utoronto.ca" target="_blank" id="desktop-sofc-logo">
                <img src={SofCDotsLogo} alt="School of Cities logo" class="logo-top"/>
            </a>
        </div>
    </div>

    <!-- Mobile menu panel -->
    {#if mobileMenuOpen}
        <div class="mobile-menu" transition:slide>
            <a
                class="mobile-link"
                href="/local-solutions/about"
                target="_blank"
            >
                About
            </a>

            <a
                class="mobile-link"
                href="/local-solutions/scaling-social-innovation"
                target="_blank"
            >
                Methodology
            </a>

            <a
                class="mobile-link"
                href="/local-solutions/featured-solutions"
                target="_blank"
            >
                Featured Solutions
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
    {/if}
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
        align-items: center;
    }

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
    }

    #sofc-logo {
        display: none;
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

    .mobile-menu {
        display: none;
    }

    .right-side {
        display: flex;
        flex-direction: row;
    }

    @media (max-width: 1080px) {
        .desktop-button {
            height: 40px;
        }

        .logo-top {
            height: 40px;
        }
    }

    @media (max-width: 800px) {
        .desktop-button {
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
        .desktop-button {
            display: none;
        }

        #desktop-sofc-logo {
            display: none;
        }

        .logo-top {
            height: 30px;
        }

        .hamburger {
            display: flex;
            z-index: 10;
        }
        
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

        .mobile-link:hover {
            color: var(--brandYellow);
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
            text-decoration-thickness: 2px;
            color: var(--brandYellow);
        }

        .mobile-dropdown li {
            color: white;
            font-family: RobotoBold;
            padding: 6px 0;
            list-style-type: none;
        }

        #sofc-logo {
            display: inline;
        }

    }

</style>