<script>
    import { onMount, tick } from 'svelte';
    import { geoPath, geoConicConformal } from 'd3-geo';
    import { page } from '$app/stores';
    import { chapterColours, provincePostalCodes } from './chapterColours';
    import Select from 'svelte-select';
    import ChapterChips from './ChapterChips.svelte';

    let {
        home,
        Chapter,
        provinceCounts,
        totalProvinceCounts,
        municipalities,
        provinces,
        tags,
        searchText = $bindable(""),
        selectedProvince = $bindable(undefined),
        selectedMunicipalities = $bindable([]),
        selectedTags = $bindable([]),
        selectedChapters = $bindable([]),
        activeProvinceFilter,
        onFilterProvince,
        onClear,
        onApply,
        addTag = $bindable(), 
    } = $props();

    function filterProvince(postal, label, group) {
        const alreadyAdded = pendingProvince?.value === postal;
        if (alreadyAdded) return;

        const item = {
            value: postal,
            label: label,
            group: group ?? undefined,
            groupItem: group ? true : false,
        };

        pendingProvince = item;
        selectedProvince = item;
        onFilterProvince();
    }

    let pendingSearch = $state(searchText);
    let pendingProvince = $state(selectedProvince);
    let pendingMunicipalities = $state(selectedMunicipalities);
    let pendingTags = $state(selectedTags);
    let pendingChapters = $state({ ...selectedChapters });

    addTag = (tagInfo) => {
        const already = pendingTags.some(t => t.value === tagInfo.value);
        if (!already) pendingTags = [...pendingTags, tagInfo];
    };

    function applyFilters() {
        searchText = pendingSearch;
        selectedProvince = pendingProvince;
        selectedMunicipalities = [...pendingMunicipalities];
        selectedTags = [...pendingTags];
        selectedChapters = pendingChapters ? { ...pendingChapters } : {};
        onApply();
    }

    function clearFilters() {
        pendingSearch = "";
        pendingProvince = undefined;
        pendingMunicipalities = [];
        pendingTags = [];
        Object.keys(chapterColours).forEach((c) => {
            pendingChapters[c] = false;
            selectedChapters[c] = false;
        });
        onClear(); // still tells parent to reset its side
    }


    let mapData = $state([]);
    let projection = $state([]);
    let path = $state([]);
    let radius = 15;

    let layoutWidth = $state();
    let windowWidth = $state();
    let width = $derived.by(() => {
        if (windowWidth > 750) {
            return Math.min(layoutWidth * 0.6, 600);
        } else {
            return layoutWidth;
        }
    });
    let height = $derived(width * .8);
    let filtersWidth = $derived.by(() => {
        if (windowWidth > 750) {
            return layoutWidth * 0.4;
        } else {
            return layoutWidth;
        }
    })

    async function loadMapData() {
        layoutWidth = document.getElementById("solutions-map").clientWidth;
        windowWidth = window.innerWidth;
        try {
            mapData = $page.data.mapGeo;
            projection = geoConicConformal()
                .rotate([100, 0, 0])
                .parallels([49, 77])
                .fitExtent([[10, 10], [width - 10, height - 10]], mapData);
            path = geoPath(projection);
        } catch (error) {
            console.error('Error loading map data:', error);
        }
    }

    const projectMap = () => {
        layoutWidth = document.getElementById("solutions-map").clientWidth;
        windowWidth = window.innerWidth;
        projection = geoConicConformal()
            .rotate([100, 0, 0])
            .parallels([49, 77])
            .fitExtent([[10, 10], [width - 10, height - 10]], mapData);
        path = geoPath(projection);
    }

    onMount(() => {
        loadMapData();
  		window.addEventListener("resize", projectMap);

		return () => {
			window.removeEventListener("resize", projectMap);
		};
    });
</script>

<div class="layout" id="solutions-map">
    {#if width}
    <div>
        <h2 class="header">Browse the {Chapter ? Chapter.toLowerCase() : " "} solutions:</h2>
        {#if mapData?.features && width}
            {#if Object.keys(totalProvinceCounts).length > 5}
                <div style="height: {height + 15}px; width: {windowWidth > 750 ? width + 15 : width}px">
                    <svg {width} {height} class="map"
                        style="--chapterColour: {Chapter ? chapterColours[Chapter] : '#001D4E'}">
                        {#each mapData.features as province (province.properties.name)}
                            <path
                                d={path(province)}
                                id={province.properties.Postal}
                                class="province"
                                stroke="white"
                                stroke-width="1.5"
                            />
                            {#if provinceCounts[province.properties.Postal] > 0}
                                {@const [cx, cy] = projection(province.properties.centroid)}
                                {@const postal = province.properties.Postal}
                                {@const isSmall = ["NS","NB","PE"].includes(postal)}
                                <g class="org-count" role="button" tabindex="0"
                                    aria-label="Filter solutions in {province.properties.name}"
                                    onclick={() => filterProvince(postal, province.properties.name, "Provinces & Territories")}
                                    onkeyup={e => (e.key === 'Enter' || e.key === ' ') && filterProvince(postal, province.properties.name, "Provinces & Territories")}>
                                    <circle {cx} {cy} r={isSmall ? radius - 3 : radius} class="org-count-circle" />
                                    <text x={cx} y={cy} class="org-count-text">{provinceCounts[postal]}</text>
                                </g>
                            {/if}
                        {/each}

                        {#if provinceCounts["Across Canada"] > 0}
                            <g class="org-count" role="button" tabindex="0"
                                aria-label="Filter solutions across Canada"
                                onclick={() => filterProvince("Across Canada", "Across Canada", null)}
                                onkeyup={e => (e.key === 'Enter' || e.key === ' ') && filterProvince("Across Canada", "Across Canada", null)}>
                                <text x={width - 100} y={80} class="org-count-canada-text">Across Canada</text>
                                <circle cx={width - 100} cy={110} r={radius + 5} class="org-count-circle" />
                                <text x={width - 100} y={110} class="org-count-text canada">{provinceCounts["Across Canada"]}</text>
                            </g>
                        {/if}
                    </svg>
                </div>
            {:else}
                <div class="condensed-map" style="--chapterColour: {Chapter ? chapterColours[Chapter] : '#001D4E'}; width: ${width}px; height: ${height}px">
                    {#each Object.keys(provinceCounts) as postal}
                        {#if postal == "Across Canada"}
                            <div class="square" role="button" tabindex="0" 
                                aria-label="Filter solutions across Canada"
                                onclick={() => filterProvince("Across Canada", "Across Canada", null)}
                                onkeyup={e => (e.key === 'Enter' || e.key === ' ') && filterProvince("Across Canada", "Across Canada", null)}>
                                <span>{postal}</span>
                                <span class="count">{provinceCounts[postal]}</span>
                            </div>
                        {:else}
                            <div class="square" role="button" tabindex="0"
                                    aria-label="Filter solutions in {provincePostalCodes[postal]}"
                                    onclick={() => filterProvince(postal, provincePostalCodes[postal], "Provinces & Territories")}
                                    onkeyup={e => (e.key === 'Enter' || e.key === ' ') && filterProvince(postal, provincePostalCodes[postal], "Provinces & Territories")}>
                                <span>{provincePostalCodes[postal]}</span>
                                <span class="count">{provinceCounts[postal]}</span>
                            </div>
                        {/if}
                    {/each}
                </div>
            {/if}
        {/if}
    </div>

    <div class="filters" style="width: {filtersWidth}px">
        <h3 class="header">Filters</h3>
        <div class="select-box">
            <input type="search" placeholder="Search" id="search-box" bind:value={pendingSearch} />
        </div>
        <div class="select-box province-select">
            <Select items={provinces} showChevron bind:value={pendingProvince}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={item => item.group}
                placeholder="Province/Territory" />
        </div>
        <div class="select-box">
            <Select items={municipalities} multiple showChevron bind:value={pendingMunicipalities}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={item => item.group}
                placeholder="Municipality" />
        </div>
        <div class="select-box">
            <Select items={tags} multiple showChevron bind:value={pendingTags}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={item => item.group}
                placeholder="Tags" />
        </div>

        {#if home}
            <div>
                <p style="color: var(--brandGray70); margin:0; padding-bottom: 10px; font-size: 16px;">Category</p>
                <div id="category-chips">
                    {#each Object.keys(chapterColours) as cat}
                        <ChapterChips toggle Chapter={cat} bind:clicked={pendingChapters[cat]} />
                    {/each}
                </div>
            </div>
        {/if}

        <div>
            <button class="filter-button" id="apply-filter" onclick={applyFilters}>Apply</button>
            <button class="filter-button" id="clear-filter" onclick={clearFilters}>Clear</button>
        </div>
    </div>
    {/if}
</div>

<style>
    .layout {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 1530px;
        margin-left: calc((100dvw - 1530px)/2);
    }

    .filters {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding-bottom: 15px;
        max-width: 90dvw;
    }

    @media (max-width: 1610px) {
        .layout {
            width: var(--grid-width);
            margin-left: calc((100dvw - var(--grid-width))/2);
        }
    }

    @media (max-width: 1100px) {
        .layout {
            width: calc(95dvw - 45px);
            margin-left: calc((5dvw + 45px)/2);
        }
    }

    @media (max-width: 750px) {
        .layout {
            width: 95dvw;
            margin-left: calc(5dvw/2);
            flex-direction: column;
            align-items: center;
        }
        

        .filters {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 20px;
            width: 90dvw;
        }
    }

    .header {
        font-family: TradeGothicBold;
        color: var(--brandGray70);
        margin: 0;
        padding-right: 20px;
    }

    h2.header {
        font-size: 32px;
        padding-bottom: 15px;
    }

    .map {
        background-color: var(--brandWhite);
        border-radius: 10px;
        margin-left: 0;
    }

    .province {
        fill: #d9d9d9;
    }

    .org-count:focus {
        border: 2px solid var(--brandGray70);
    }

    .org-count:hover {
        cursor: pointer;
        opacity: 75%;
    }

    .org-count-circle {
        fill: var(--chapterColour);
    }

    .org-count-text {
        font-family: RobotoBold;
        fill: white;
        dominant-baseline: central;
        text-anchor: middle;
    }

    .org-count-text.canada {
        font-size: 24px;
    }

    .select-box {
        font-family: Roboto;
        --placeholder-color: var(--brandGray70);
        --icons-color: var(--brandGray70);
        --border-radius: 20px;
        --border: none;
        --border-focused: none;
        --border-hover: none;
        --padding: var(--internal-padding);
        --multi-item-outline: none;
    }

    .select-box:hover {
        cursor: pointer;
    }

    .province-select {
        --max-height: 40px;
    }

    #search-box {
        width: 100%;
        font-family: Roboto;
        font-size: 16px;
        border-radius: 50px;
        border: none;
        padding: 10px 0px 10px 15px;
    }

    #search-box::placeholder {
        color: var(--brandGray70);
    }

    #search-box:focus {
        color: var(--brandGray70);
    }

    .org-count-canada-text {
        font-family: Roboto;
        dominant-baseline: bottom;
        text-anchor: middle;
        font-size: 20px;
        font-style: italic;
    }

    .filter-button {
        border: none;
        font-family: Roboto;
        width: fit-content;
        padding: 10px 15px 10px 15px;
        border-radius: 10px;
        font-size: 16px;
    }

    .filter-button:hover {
        cursor: pointer;
    }

    #apply-filter {
        background-color: var(--brandGray70);
        color: white;
    }

    #clear-filter {
        color: var(--brandGray70);
        background-color: white;
        border: 1px solid;
        border-color: var(--brandGray70);
    }

    #category-chips {
        display: flex;
        flex-wrap: wrap;
        gap:8px;
    }

    .condensed-map {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        align-items: center;
        gap: 10px;
        background-color: white;
        border-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        margin-right: 15px;
        min-height: 228px;
        min-width: 380px;
        margin-bottom: 20px;
        max-width: 90dvw;
        flex-wrap: wrap;
    }

    .condensed-map .square {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 10px;
        background-color: var(--chapterColour);
        color: white;
        font-family: RobotoBold;
        width: 100px;
        height: 100px;
        transition: transform 0.2s ease;
        padding: 10px;
    }

    .condensed-map .square:hover {
        transform: 
            scale(1.075);
    }

    .square .count {
        font-size: 30px;
    }
</style>