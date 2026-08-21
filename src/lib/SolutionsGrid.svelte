<script>
    import MapFilters from "./MapFilters.svelte";
    import SolutionCard from "./SolutionCard.svelte";
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { chapterColours } from './chapterColours';
    import { tags, locations } from "./mapFilterConstants";
    import { browser } from '$app/environment';

    let {
        solutionsList,
        Chapter = "",
        home = false,
    } = $props();

    let municipalitiesSet = new Set();
    
    solutionsList.forEach((solution) => {
        solution.Municipalities_List.forEach((municipality) => {
            municipalitiesSet.add(municipality);
        });
    })
    let municipalities = Array.from(municipalitiesSet, (item) => {
        return {value: item, label: item};
    });

    const fromUrl = (list, param) => {
        if (param === "category") {
            let active = $page.url.searchParams.get(param)?.split('|') ?? [];
            return Object.fromEntries(
                Object.keys(chapterColours).map(c => [c, active.includes(c)])
            );
        }

        if (param === "search") {
            return $page.url.searchParams.get(param) ?? "";
        }

        if (param === "province") {
            return list.find((item) => item.value == $page.url.searchParams.get(param));
        }

        return list.filter(item =>
            $page.url.searchParams
                .get(param)
                ?.split('|')
                .filter(Boolean)
                .includes(item.value)
        );
    };

    let searchText = $state(fromUrl(null, 'search'));
    let selectedProvince = $state(fromUrl(locations, 'province'));
    let selectedMunicipalities = $state(fromUrl(municipalities, 'municipality'));
    let selectedTags = $state(fromUrl(tags, 'tags'));
    let selectedChapters = $state(fromUrl(null, 'category'));
    let activeProvinceFilter = $state(null); 

    let availableMunicipalities = $derived.by(() => {
        const set = new Set();
        // Filter by everything EXCEPT municipality
        solutionsList
            .filter(s => matchesSearch(s) && matchesProvinces(s) && matchesTags(s) && matchesChapters(s))
            .forEach(s => s.Municipalities_List.forEach(m => set.add(m)));
        selectedMunicipalities.forEach(m => set.add(m.value));
        return Array.from(set).sort().map(m => ({ value: m, label: m }));
    });

    let availableTags = $derived.by(() => {
        const set = new Set();
        solutionsList
            .filter(s => matchesSearch(s) && matchesProvinces(s) && matchesMunicipalities(s) && matchesChapters(s))
            .forEach(s => s.Tags?.forEach(t => {
                if (isNaN(parseInt(t)))
                    set.add(t)
            }));
        selectedTags.forEach(t => set.add(t.value));
        return Array.from(set).sort().map(t => {
            const original = tags.find(tag => tag.value === t);
            return original ?? { value: t, label: t };
        });
    });

    let availableProvinces = $derived.by(() => {
        const set = new Set();
        solutionsList
            .filter(s => matchesSearch(s) && matchesMunicipalities(s) && matchesTags(s) && matchesChapters(s))
            .forEach(s => s.Provinces_List.forEach(p => set.add(p)));
        // selectedProvinces.forEach(p => set.add(p.value));
        set.add(selectedProvince?.value);
        return locations.filter(loc => set.has(loc.value));
    });

    function matchesSearch(s) {
        if (!searchText) return true;
        const q = searchText.toLowerCase();
        return s.Project?.toLowerCase().includes(q) || s.Organization?.toLowerCase().includes(q) || s.Description?.toLowerCase().includes(q) || s.Tags?.join().toLowerCase().includes(q) || s.Chapter?.join().toLowerCase().includes(q);
    }
    function matchesProvinces(s) {
        // const vals = selectedProvinces.map(p => p.value);
        // if (activeProvinceFilter) return s.Provinces_List.includes(activeProvinceFilter);
        // if (vals.length === 0) return true;
        if (!selectedProvince) return true;
        return (s.Provinces_List.includes(selectedProvince.value));
    }
    function matchesMunicipalities(s) {
        const vals = selectedMunicipalities.map(m => m.value);
        if (vals.length === 0) return true;
        return vals.some(m => s.Municipalities_List.includes(m));
    }
    function matchesTags(s) {
        const vals = selectedTags.map(t => t.value);
        if (vals.length === 0) return true;
        return vals.some(t => s.Tags?.includes(t));
    }
    function matchesChapters(s) {
        const active = Object.keys(selectedChapters).filter(c => selectedChapters[c]);
        if (active.length === 0) return true;
        return s.Chapter?.some(c => active.includes(c));
    }
    let filteredSolutionsList = $derived(
        solutionsList.filter(s => {
            const hasProvince = selectedProvince !== undefined;
            // const hasProvince = selectedProvinces.length > 0;
            const hasMunicipality = selectedMunicipalities.length > 0;
            
            const locationMatch =
                (!hasProvince && !hasMunicipality) ||
                (hasProvince && !hasMunicipality && matchesProvinces(s)) ||
                (!hasProvince && hasMunicipality && matchesMunicipalities(s)) ||
                (hasProvince && hasMunicipality &&
                    (matchesProvinces(s) || matchesMunicipalities(s)));

            return (
                matchesSearch(s) &&
                locationMatch &&
                matchesTags(s) &&
                matchesChapters(s)
            );
            // return (matchesSearch(s) && matchesProvinces(s) && matchesMunicipalities(s) &&
            // matchesTags(s) && matchesChapters(s));
        })
    );

    const provinceCounts = $derived.by(() => {
        const counts = filteredSolutionsList.reduce((acc, s) => {
            s.Provinces_List.forEach(p => { acc[p] = (acc[p] ?? 0) + 1; });
            return acc;
        }, {});

        const key = "Across Canada";
        if (key in counts) {
            const value = counts[key];
            delete counts[key];
            counts[key] = value;
        }

        return counts;
    });

    const totalProvinceCounts = $derived.by(() => {
        const counts = solutionsList.reduce((acc, s) => {
            s.Provinces_List.forEach(p => { acc[p] = (acc[p] ?? 0) + 1; });
            return acc;
        }, {});
        return counts;
    });
    
    let addTag = $state();

    function tagClicked(label) {
        const tagInfo = tags.find(t => t.value === label);
        if (!tagInfo) return;

        const alreadySelected = selectedTags.some(t => t.value === tagInfo.value);
        if (!alreadySelected) {
            selectedTags = [...selectedTags, tagInfo];
        }

        addTag?.(tagInfo);
        applyFiltersToURL();
    } 

    const syncToUrl = (searchParams, selected, param) => {
        if (param === "category") {
            const chipValues = Object.keys(selected).filter(c => selected[c]).join('|');
            chipValues.length ? searchParams.set(param, chipValues) : searchParams.delete(param);
        } else if (param === "province") {
            selected ? searchParams.set(param, selected.value) : searchParams.delete(param);
        } else {
            selected?.length
                ? searchParams.set(param, selected.map(i => i.value).join('|'))
                : searchParams.delete(param);
        }
    };

    function applyFiltersToURL() {
        const searchParams = new URLSearchParams();
        if (searchText) {
            searchParams.set("search", searchText);
        }

        // syncToUrl(searchParams, selectedProvinces, 'province');
        syncToUrl(searchParams, selectedProvince, 'province');
        syncToUrl(searchParams, selectedTags, 'tags');
        syncToUrl(searchParams, selectedChapters, 'category');
        syncToUrl(searchParams, selectedMunicipalities, 'municipality');

        const query = searchParams.toString();
        goto(`${$page.url.pathname}?${query}#solutions-map`);
    }

    function clearFilters() {
        searchText = "";
        selectedProvince = undefined;
        selectedMunicipalities = [];
        selectedTags = [];
        selectedChapters = Object.fromEntries(Object.keys(chapterColours).map(c => [c, false]));
        activeProvinceFilter = null;
        goto($page.url.pathname + '#solutions-map');
    }

    function filterProvince() {
        applyFiltersToURL();
    }
</script>

<div class="body" id="solutions-grid">
    <MapFilters
        {Chapter}
        {provinceCounts}
        {totalProvinceCounts}
        {home}
        municipalities={availableMunicipalities}
        provinces={availableProvinces}
        tags={availableTags}
        {activeProvinceFilter}
        onFilterProvince={filterProvince}
        onClear={clearFilters}
        onApply={applyFiltersToURL}
        bind:searchText
        bind:selectedProvince
        bind:selectedMunicipalities
        bind:selectedTags
        bind:selectedChapters
        bind:addTag
    />
    {#if filteredSolutionsList.length !== 0}
        <div class="solutions-count">
            <p>Showing {filteredSolutionsList.length} solution{filteredSolutionsList.length > 1 ? "s" : ""}</p>
        </div>
     {/if}
    <div class="solutions">
        {#each filteredSolutionsList as solution (solution.ID_Num)}
            <SolutionCard {...solution} {tagClicked}/>
        {/each}
    </div>
    {#if filteredSolutionsList.length === 0}
        <p style="color: var(--brandGray70); text-align: center; margin:15px 0 5px 0; font-family:RobotoBold;">No results found.</p>
        <p style="color: var(--brandGray70); text-align: center; margin:0; margin-bottom: 15px;">Try adjusting your search criteria.</p>
    {/if}
</div>

<style>
    .body {
        background-color: #D9D9D9;
        width: 100%;
        padding: 30px 0px;
    }

    .solutions {
        width: 95dvw;
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, 500px);
        gap: 15px;
        align-items: start;
        justify-content: center;
        margin: 0 auto;
    }

    .solutions-count p {
        font-size: 14px;
        font-family: RobotoBold;
        color: var(--brandGray70);
        margin: 0;
        text-align: right;
        margin-right: calc((100dvw - min(var(--grid-width), 90dvw))/2);
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        .solutions {
            grid-template-columns: repeat(auto-fill, 45dvw);
        }
    }

    @media (max-width: 550px) {
        .solutions {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
