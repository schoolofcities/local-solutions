<script>
    import '../assets/global-styles.css';
    import { onMount } from 'svelte';
    import { json } from 'd3-fetch';
    import { geoPath, geoConicConformal } from 'd3-geo';
    import { base } from '$app/paths';
    import { chapterColours } from './chapterColours';
    import Select from 'svelte-select';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import ChapterChips from './ChapterChips.svelte';
    import { tags, locations } from './mapFilterConstants';
    import { createEventDispatcher, tick } from 'svelte';
    import Page from '../routes/+page.svelte';
    import { browser } from '$app/environment';

    // const fromUrl = (list, param) => {
    //     if (param === "category") {
    //         let active = $page.url.searchParams.get(param)?.split('|') ?? [];
    //         let result = {};
    //         Object.keys(chapterColours).forEach((chapter) => {
    //             result[chapter] = active.includes(chapter);
    //         });
    //         return result;
    //     } else if (param === "search") {
    //         return $page.url.searchParams.get(param);
    //     } else {
    //         return list.filter(item =>
    //             $page.url.searchParams.get(param)?.split('|').filter(Boolean).includes(item.value)
    //         );
    //     }
    // };

    const fromUrl = (list, param) => {
        if (!browser) {
            if (param === "category") {
                return Object.fromEntries(
                    Object.keys(chapterColours).map(c => [c, false])
                );
            }

            if (param === "search") {
                return "";
            }

            return [];
        }

        if (param === "category") {
            let active = $page.url.searchParams.get(param)?.split('|') ?? [];

            let result = {};

            Object.keys(chapterColours).forEach((chapter) => {
                result[chapter] = active.includes(chapter);
            });

            return result;
        }

        if (param === "search") {
            return $page.url.searchParams.get(param) ?? "";
        }

        return list.filter(item =>
            $page.url.searchParams
                .get(param)
                ?.split('|')
                .filter(Boolean)
                .includes(item.value)
        );
    };

    const syncToUrl = (searchParams, selected, param) => {
        if (param === "category") {
            const chipValues = Object.keys(selected).filter(c => selected[c]).join('|');
            chipValues.length ? searchParams.set(param, chipValues) : searchParams.delete(param);
        } else {
            selected?.length
                ? searchParams.set(param, selected.map(i => i.value).join('|'))
                : searchParams.delete(param);
        }
    };

    let {
        home,
        Chapter,
        provinceCounts,
        selectedLocations = $bindable(fromUrl(locations, 'province')),
        selectedTags = $bindable(fromUrl(tags, 'tags')),
        selectedCategories = $bindable(fromUrl(null, 'category')),
        searchValue = $bindable(fromUrl(null, 'search'))
    } = $props();

    let mapData = $state([]);
    let projection = $state([]);
    let path = $state([]);
    let radius = 15;

    let layoutWidth = $state();
    let windowWidth = $state();
    let width = $derived.by(() => {
        if (windowWidth > 800) {
            return layoutWidth * 0.6;
        } else {
            return layoutWidth;
        }
    });
    let height = $derived(width * .8);
    let filtersWidth = $derived.by(() => {
        if (windowWidth > 800) {
            return layoutWidth * 0.4;
        } else {
            return layoutWidth;
        }
    })

    let pendingLocations = $state(fromUrl(locations, 'province'));
    let pendingTags = $state(fromUrl(tags, 'tags'));
    let pendingCategories = $state(fromUrl(null, 'category'));
    let pendingSearch = $state(fromUrl(null, 'search'));
    const dispatch = createEventDispatcher();

    const applyFilters = () => {
        selectedLocations = pendingLocations ? [...pendingLocations] : [];  
        selectedTags = pendingTags ? [...pendingTags] : [];
        selectedCategories = pendingCategories ? { ...pendingCategories } : {};
        searchValue = pendingSearch;

        const searchParams = new URLSearchParams();
        if (searchValue) {
            searchParams.set("search", searchValue);
        }
        syncToUrl(searchParams, selectedLocations, 'province');
        syncToUrl(searchParams, selectedTags, 'tags');
        syncToUrl(searchParams, selectedCategories, 'category');

        const query = searchParams.toString();
        goto($page.url.pathname + (query ? '?' + query : ''), { noScroll: true });

        dispatch('resize');
    };

    const clearFilters = () => {
        pendingLocations = [];
        pendingTags = [];
        pendingSearch = "";
        selectedLocations = [];
        selectedTags = [];
        searchValue = "";
        Object.keys(chapterColours).forEach((c) => {
            pendingCategories[c] = false;
            selectedCategories[c] = false;
        });
        goto($page.url.pathname, { noScroll: true });
    };

    const filterProvince = (value) => {
        const exists = pendingLocations.some(l => l.value === value);
        if (exists) {
            return;
        }
        pendingLocations = [...pendingLocations, locations.find(l => l.value === value)];
        selectedLocations = pendingLocations;

        const searchParams = new URLSearchParams();
        syncToUrl(searchParams, selectedLocations, 'province');
        syncToUrl(searchParams, selectedTags, 'tags');
        syncToUrl(searchParams, selectedCategories, 'category');
        goto($page.url.pathname + '?' + searchParams.toString(), { noScroll: true });
    };

    async function loadMapData() {
        layoutWidth = document.getElementById("solutions-map").clientWidth;
        windowWidth = window.innerWidth;
        try {
            mapData = await json(`${base}/data/ne_canada_with_centroids.geojson`);
            projection = geoConicConformal()
                .rotate([106, 0, 0])
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
            .rotate([106, 0, 0])
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
        <h2 class="header">Browse the featured solutions:</h2>
        <div style={`height: ${height + 15}px; width: ${windowWidth > 800 ? width + 15 : width}px`}>
            {#if mapData && mapData.features && width}
                <svg {width} {height} class="map"
                    style="--chapterColour: {Chapter ? chapterColours[Chapter] : "#001D4E"}">
                    {#each mapData.features as province (province.properties.name)}
                        <path
                            d={path(province)}
                            id={province.properties.postal}
                            class:province={true}
                            stroke="white"
                            stroke-width="1.5"
                        />

                        {#if provinceCounts[province.properties.postal] > 0}
                            {@const [cx, cy] = projection(province.properties.centroid)}
                            <g class="org-count" id="filter-{province.properties.postal}"
                                role="button" tabindex=0 aria-label="Filter for solutions in {province.properties.name}"
                                onclick={() => filterProvince(province.properties.postal)}
                                onkeyup={(key) => {
                                    if (key.keyCode == 13 || key.keyCode == 32) {
                                        filterProvince(province.properties.postal);
                                    }
                                }}>
                                <circle cx={cx} cy={cy} r={radius} class="org-count-circle"/>
                                <text x={cx} y={cy} class="org-count-text">{provinceCounts[province.properties.postal]}</text>
                            </g>
                        {/if}
                    {/each}

                    {#if provinceCounts["Across Canada"] > 0}
                        <g class="org-count" id="filter-across-canada" role="button"
                            tabindex=0 aria-label="Filter for solutions across Canada"
                            onclick={() => filterProvince("Across Canada")}
                            onkeyup={(key) => {
                                if (key.keyCode == 13 || key.keyCode == 32) {
                                    filterProvince("Across Canada");
                                }
                            }}>
                            <text x={width-100} y={80} class="org-count-canada-text">
                                Across Canada
                            </text>
                            <circle cx={width-100} cy={100} r="15" class="org-count-circle"/>
                            <text x={width-100} y={100} class="org-count-text">{provinceCounts["Across Canada"]}</text>
                        </g>
                    {/if}
                    <text x={7} y={height - 23} class="credits">Map data:</text>
                    <text x={7} y={height - 10} class="credits">Natural Earth</text>
                </svg>
            {/if}
        </div>
    </div>
    <div class="filters" style="width: {filtersWidth}">
        <h3 class="header">Filters</h3>
        <div class="select-box">
            <input type="search" placeholder="Search" id="search-box" bind:value={pendingSearch}/>
        </div>
        <div class="select-box">
            <Select items={locations} multiple={true} showChevron={true}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={(item) => item.group} placeholder="Province/Territory"
                bind:value={pendingLocations}/>
        </div>
        <!-- <div class="select-box">
            <Select items={locations} multiple={true} showChevron={true}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={(item) => item.group} placeholder="Municipality"
                bind:value={pendingLocations}/>
        </div> -->
        <div class="select-box">
            <Select items={tags} multiple={true} showChevron={true}
                containerStyles="font-family: Roboto !important;"
                inputStyles="font-family: Roboto !important;"
                groupBy={(item) => item.group} placeholder="Tags"
                bind:value={pendingTags}/>
        </div>

        {#if home}
            <div>
                <p style="color: var(--brandGray70); margin:0; padding-bottom: 10px; font-size: 16px;">Category</p>
                <div id="category-chips">
                    {#each Object.keys(chapterColours) as Chapter}
                        <ChapterChips
                            toggle={true}
                            {Chapter}
                            bind:clicked={pendingCategories[Chapter]}
                        />
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
    }

    .filters {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        padding-bottom: 15px;
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

    @media (max-width: 800px) {
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

    .credits {
        font-family: Roboto;
        font-size: 14px;
        fill: var(--brandGray70)
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

    .select-box {
        font-family: Roboto;
        --placeholder-color: var(--brandGray70);
        --icons-color: var(--brandGray70);
        --border-radius: 50px;
        --border: none;
        --border-focused: none;
        --border-hover: none;
        --padding: 10px;
        --multi-item-outline: none;
    }

    .select-box:hover {
        cursor: pointer;
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
        font-size: 16px;
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
</style>