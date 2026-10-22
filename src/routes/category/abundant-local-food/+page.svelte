<script>
    import Password from '$lib/Password.svelte';
    import SolutionsGrid from '$lib/SolutionsGrid.svelte';
    import TitleSection from '$lib/TitleSection.svelte';
    import TextTitle from '$lib/TextTitle.svelte';
    import GraphicSingle from '$lib/GraphicSingle.svelte';
    import Footnote from '$lib/Footnote.svelte';
    import Footnotes from '$lib/Footnotes.svelte';
	import { createFootnoteStore } from '$lib/footnoteUtils';
    import { base } from '$app/paths';
    
    let { data } = $props();
    const Chapter = "Abundant local food";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        'Sylvain Charlebois, Kristina Kupferschmidt, and Stacey Taylor, <i>Canada\'s Food Price Report</i>, 16th ed. (Dalhousie University: 2025), 5, <a href="https://harvest.usask.ca/server/api/core/bitstreams/34926135-c884-43f4-acc1-99137d9d3a4b/content" target="_blank">URL</a>.',
        'Statistics Canada, “Shrinking products, rising prices: Food-specific quantity adjustments in the Consumer Price Index,” February 18, 2025, <a href="https://www150.statcan.gc.ca/n1/pub/11-627-m/11-627-m2025016-eng.htm" target="_blank">URL</a>.',
        'Statistics Canada, “Canadians are facing higher levels of food insecurity,” May 16, 2024, <a href="https://www.statcan.gc.ca/o1/en/plus/6257-canadians-are-facing-higher-levels-food-insecurity" target="_blank">URL</a>.',
        'Jason Massey et al., “The Association Between Census Tract Healthy Food Accessibility and Life Expectancy in the United States,” <i>Journal of Urban Health</i> 100, no. 3 (2023): 572–76, <a href="https://doi.org/10.1007/s11524-023-00742-x" target="_blank">URL</a>.',
        'Statistics Canada, “Dimensions of poverty hub,” accessed November 18, 2025, <a href="https://www.statcan.gc.ca/en/topics-start/poverty#info-povertyindex" target="_blank">URL</a>.',
        'Sam DiBellonia and Tania Oliveira, “No progress, no plan: What the latest poverty numbers tell us,” Maytree, May 28, 2025, <a href="https://maytree.com/publications/no-progress-no-plan-what-the-latest-poverty-numbers-tell-us/" target="_blank">URL</a>.',
        'Richard Matern et al., <i>HungerCount 2025</i>, Food Banks Canada, 2025, <a href="https://content.foodbankscanada.ca/wordpress/2025/10/FBC_HungerCount_EN_2025.pdf" target="_blank">URL</a>.',
        'Office of the Prime Minister, “Prime Minister Carney Announces New Measures to Make Groceries and Other Essentials More Affordable for Canadians,” press release, January 26, 2026, <a href="https://www.pm.gc.ca/en/news/news-releases/2026/01/26/prime-minister-carney-announces-new-measures-make-groceries-and-other" target="_blank">URL</a>.',
        'Matern et al., <i>HungerCount 2025</i>.',
    ];
</script>

<svelte:head>
    <title>Abundant local food - Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>
    <TitleSection Title="Abundant local food" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Supply chain disruptions, trade disputes, global conflicts, and several years of record-breaking heat and intensifying climate extremes have caused food prices to increase dramatically in recent years. Canada’s Food Price Report forecast that consumers in 2026 would end up paying 27% more for food than they were five years earlier, with annual price increases of 4% to 6% expected to continue.<Footnote id={addFootnote(fns[0])}/> The rising cost of living has also put pressure on Canadians’ ability to meet their basic needs, including accessing healthy food. Between 2021 and 2023, roughly a third of meat and produce grocery items were subject to “shrinkflation” as the size of the product – but not its price – was reduced.<Footnote id={addFootnote(fns[1])}/> These rising costs, coupled with income pressures, meant that in 2022 nearly 17% of Canadian households were food insecure.<Footnote id={addFootnote(fns[2])}/>
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/abundant-local-food/abundant_food_CPI_comparison.svg`}
            svg360={`${base}/web-assets/abundant-local-food/abundant_food_CPI_comparison_360.svg`}
        />
        <p>
            Access to fresh and healthy food is associated with better health outcomes, a longer life expectancy, and higher educational attainment,<Footnote id={addFootnote(fns[3])}/> but many in Canada lack access to even minimal sustenance. Challenges in meeting this fundamental need are exacerbated by poverty, economic precarity, homelessness, and language barriers. In 2023, over 10% of Canadians lived in poverty, as measured by a household's ability to afford shelter, clothing, food, transportation, and other necessities like telecommunications services.<Footnote id={addFootnote(fns[4])}/> While poverty rates in Canada had been decreasing before the start of the pandemic, since 2020 they have increased for every demographic group across the country, but especially for single parents, recent immigrants, Indigenous people, and people with disabilities.<Footnote id={addFootnote(fns[5])}/> The combination of inflation, tariffs, and economic instability has increased reliance on food banks and food programs, even among those who have employment as their main source of income. Food scarcity is particularly severe in Canada’s North, but even within urban regions ease of access to food can vary from neighbourhood to neighbourhood.<Footnote id={addFootnote(fns[6])}/>
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/abundant-local-food/wealth_dignity_food-insecurity.svg`}
            svg360={`${base}/web-assets/abundant-local-food/wealth_dignity_food-insecurity_360.svg`}
        />
        <p>
            Community organizations play a major role in strengthening local food security. The federal government has recognized the value of local organizations through a new Local Food Infrastructure Fund, which supports food banks and other non-profits in acquiring and distributing nutritious food.<Footnote id={addFootnote(fns[7])}/> In 2025, Canada’s 5,500 food banks served over 2 million visitors per month, a third of whom are children – a number that has doubled since 2019.<Footnote id={addFootnote(fns[8])}/> Several local initiatives featured in this collection, especially those organized around food access and distribution, are fostering the social connections necessary to sustain mutual aid and local leadership.
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/abundant-local-food/abundant_food_item_prices_colour.svg`}
            svg360={`${base}/web-assets/abundant-local-food/abundant_food_item_prices_colour_360.svg`}
        />
        <p>
            Others are unlocking existing and potential sources of food abundance, like urban tree fruit, surplus food from local retailers, and community gardens and food forests in open spaces. While urban spaces are not usually seen as sites of food production and agriculture – most city residents rely on purchasing food transported from other places – cities do have the potential to be sources of nourishment. As several of these initiatives show, they can also be sources of connection, skill development, and local economic resilience.
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>