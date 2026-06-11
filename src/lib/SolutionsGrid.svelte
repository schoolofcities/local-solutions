<script>
    import MapFilters from "./MapFilters.svelte";
    import SolutionCard from "./SolutionCard.svelte";
    import { page } from '$app/stores';
    import { chapterColours } from './chapterColours';
    import { tags, locations } from "./mapFilterConstants";

    let {
        solutionsList,
        Chapter = "",
        home = false,
    } = $props();


    let selectedLocations = $state(
        locations.filter(l =>
            $page.url.searchParams.get('province')?.split('|').filter(Boolean).includes(l.value)
        )
    );
    let selectedTags = $state(
        tags.filter(t =>
            $page.url.searchParams.get('tags')?.split('|').filter(Boolean).includes(t.value)
        )
    );

    const activeCategories = $page.url.searchParams.get('category')?.split('|') ?? [];
    let selectedCategories = $state(
        Object.fromEntries(Object.keys(chapterColours).map(c => [c, activeCategories.includes(c)]))
    );

    let searchValue = $state($page.url.searchParams.get('search')?.toLowerCase() ?? '');


    const filteredSolutionsList = $derived(
        solutionsList.filter(solution => {
            const matchesProvince = selectedLocations?.length === 0
                || selectedLocations.some(l => solution.Provinces_List.includes(l.value));

            const matchesTags = selectedTags?.length === 0
                || selectedTags.some(t => solution.Tags.includes(t.value));

            const activeCategories = Object.keys(selectedCategories).filter(c => selectedCategories[c]);
            const matchesCategory = activeCategories?.length === 0
                || activeCategories.includes(solution.Chapter);
            
            const matchesSearch = searchValue?.length === 0 || 
                (solution.Summary.toLowerCase().includes(searchValue) || 
                solution.Project.toLowerCase().includes(searchValue) || 
                solution.Organization.toLowerCase().includes(searchValue));

            return matchesProvince && matchesTags && matchesCategory && matchesSearch;
        })
    );

    const provinceCounts = $derived(
        filteredSolutionsList.reduce((counts, solution) => {
            solution.Provinces_List.forEach(province => {
                counts[province] = (counts[province] ?? 0) + 1;
            });
            return counts;
        }, {})
    );

    $effect(() => {
        console.log(filteredSolutionsList)
    })
</script>

<div class="body">
    <MapFilters {Chapter} {provinceCounts} {home} 
        bind:selectedLocations
        bind:selectedTags
        bind:selectedCategories
        bind:searchValue/>
    <div class="solutions">
        {#each filteredSolutionsList as solution}
            <SolutionCard
                {...solution}
            />
        {/each}
    </div>
    {#if filteredSolutionsList.length == 0}
        <p style="color: var(--brandGray70); text-align: center; margin:15px 0 5px 0; font-family:RobotoBold;">No results found.</p>
        <p style="color: var(--brandGray70); text-align: center; margin:0; margin-bottom: 15px;">Try adjusting your search criteria.</p>
    {/if}
</div>

<style>
    .body {
        background-color: #D9D9D9;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
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