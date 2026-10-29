<script>
    import { passive } from "svelte/legacy";
    import ChevronDown from "./assets/icons/chevron-down.svelte";

    let { 
        link = "", 
        content, 
        dropdown = false, 
        dropdownValues = [{label: "", link: ""}], // [{label: "", link: ""}],
        align = "left",
        rightOverflow = false,
    } = $props();

    let hoveredToggle = $state(false);
    let clickedToggle = $state(false);

</script>

<div
    class="toggle-wrapper"
    onmouseenter={() => hoveredToggle = true}
    onmouseleave={() => hoveredToggle = false}
    role="button"
    tabindex=0
>
    {#if dropdown && link == ""}
        <button class="desktop-button" class:hovered={hoveredToggle || clickedToggle} 
            onclick={() => {
                if (dropdown) {
                    clickedToggle = !clickedToggle;
                    hoveredToggle = false;
                }
            }}
            onkeyup={(key) => {
                clickedToggle = !clickedToggle;
            }}
            tabindex=0
        >
            {content} 
            <div class="chevron {clickedToggle ? "rotated" : ""}">
                <ChevronDown/>
            </div>
        </button>
        <ul class="dropdown-section" style:display={(clickedToggle || hoveredToggle) ? "grid" : "none"} style:right={rightOverflow ? "calc(max(-40px, -3dvw))" : "0"}
            >
            {#each dropdownValues as value}
                <a href={value.link} 
                    onclick={() => {
                        clickedToggle = false;
                    }}
                    onkeyup={(key) => {
                        clickedToggle = false;
                    }}
                >
                    <li>{value.label}</li>
                </a>
            {/each}
        </ul>
    {:else if dropdown}
        <a class="desktop-button" class:hovered={hoveredToggle} href={link}>
            {content}
            <div class="chevron">
                <ChevronDown/>
            </div>
        </a>
        <ul class="dropdown-section" style:display={(hoveredToggle) ? "grid" : "none"} style:right={rightOverflow ? "calc(max(-40px, -3dvw))" : "0"}
            >
            {#each dropdownValues as value}
                <a href={value.link} 
                    onclick={() => {
                        hoveredToggle = false;
                    }}
                    onkeyup={(key) => {
                        hoveredToggle = false;
                    }}
                >
                    <li>{value.label}</li>
                </a>
            {/each}
        </ul>
    {:else}
        <a class="desktop-button" class:hovered={hoveredToggle} href={link}>
            {content}
        </a>
    {/if}
</div>

<style>
    .toggle-wrapper {
        position: relative;
        display: inline-block;
        height: 100%;
        flex-shrink: 0; 
    }

    .desktop-button {
        height: 100%;
        border: none;
        font-family: TradeGothicBold;
        font-size: 18px;
        background-color: #ffffff00;
        color: var(--LoSoNavyBlue);
        fill: var(--LoSoNavyBlue);
        display: flex;
        align-items: center;
        padding: 0 15px 0 15px;
        text-decoration: none;
        white-space: nowrap;     
        flex-shrink: 0;
    }
    
    .desktop-button:hover {
        cursor: pointer;
    }

    .desktop-button.hovered {
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
        padding: 20px 30px 20px 30px !important;
        justify-items: start;
        width: max-content;
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

    .chevron {
        rotate: 0deg;
        transition: rotate 0.3s ease-in-out;
    }

    .rotated {
        rotate: 180deg;
    }

    @media (max-width: 1200px) {
        .desktop-button {
            font-size: 17px;
        }
    }

    @media (max-width: 950px) {
        .desktop-button {
            display: none;
        }

    }

</style>