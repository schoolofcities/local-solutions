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
    const Chapter = "Housing";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        '<a href="" target="_blank">URL</a>.',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title={Chapter} {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Access to secure, affordable housing is a fundamental determinant of well-being. When people have access to adequate housing, they can participate fully in their communities, pursue education and employment, and build a sense of belonging. But population growth, limited housing supply, and labour shortages in construction have left many Canadians struggling to find and maintain stable homes, resulting in weakening local economies and deepening inequality.1 
        </p>
        <p>
            Decades of policy shifts have contributed to this reality. In the 1970s, governments viewed housing as a tool for income redistribution, but subsequent decades brought funding cuts, the devolution of responsibility for public construction to lower levels of government jurisdiction, and a growing reliance on market forces for delivering housing.2 More recently, rising construction costs, development charges, and financing challenges have slowed new projects,3 while pandemic-related pressures and high net immigration have intensified demand.4 According to the Canada Mortgage and Housing Corporation (CMHC), Canada needs at least 430,000 and up to 480,000 housing starts each year until 2035 to meet projected demand.5  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_starts-households-chart.svg`}
        />
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_FAA-housing-units.svg`}
        />
        <p>
            With housing costs far outpacing wages,6 a projected 2.6 million households will be in “core housing need” by 20277 – meaning their current housing is inadequate, unaffordable, or unsuitable, and that they would need to spend 30% or more of their income to access acceptable housing.8 There is also a mismatch between housing types available and residents’ needs. With a persistent shortage of purpose-built rental units, any type of recently built dwelling that is available is being rented out; nearly half of the new housing built between 2016 and 2021 was rented rather than owned by the occupants, the highest proportion since the apartment boom in the 1960s.9 Purpose-built rentals have historically comprised only a small share of new construction, and social housing accounted for just 3.5% of total dwellings in 2022.10 With renting on the rise and home ownership declining in nearly all provinces and territories,11 the mix of available housing needs to shift to reflect the current Canadian reality. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_typology-tree-map.svg`}
        />
        <p>
            The 2022 Canadian Housing Survey found that about 246,000 households were on a waiting list for subsidized housing, and that almost two-thirds had been waiting for two years or longer. Of those on the waitlist, roughly 42% were living in unaffordable housing.12 The 2024 Canadian Social Survey found that nearly half of respondents were “very concerned” about housing affordability, and that over a third of households struggled to cover essential expenses over the previous year.13 These trends highlight both the strain that the housing crisis puts on households and the urgency of increasing the availability of housing options to align with Canadians’ needs. 
        </p>
        <p>
            Recent government initiatives aim to expand the supply of affordable homes. The new Build Canada Homes federal agency, for example, will leverage public lands, provide flexible financial incentives for builders, attract complementary private capital, and support modern manufacturing methods to increase efficiency.14 Policies supporting middle housing – multi-unit or clustered housing types compatible with single-family homes – have also helped diversify housing stock, supporting more walkable and inclusive communities.15 
        </p>
        <p>
            Community-led housing initiatives play an increasingly important role. Often led by non-profit organizations, co-operatives, and community land trusts (CLTs), these projects prioritize long-term affordability and community control over development, ownership, and operation. The solutions featured in this chapter illustrate how policy, design, and finance models can work together to improve housing outcomes, grouped into the following categories: 
        </p>
        <ul>
            <li>
                Enabling construction of more housing with a focus on affordability 
            </li>
            <li>
                Improving efficiency and sustainability through modular housing 
            </li>
            <li>
                Providing housing as a right with support for those most in need 
            </li>
        </ul>
        <p>
            To increase affordable supply, strategies include innovative ownership and financing models, municipal investment, and middle housing education. Modular housing can accelerate construction, reduce costs, and combine sustainability with affordability – especially for smaller or resource-constrained communities. Pairing housing with supportive services helps meet the needs of vulnerable populations through short-term supportive housing, retrofitted buildings, and incentives for accessible rental units.  
        </p>
        <p>
            These solutions confront the housing crisis from multiple angles. They show that governments, organizations, and community-led initiatives are proactive in making housing more accessible across Canada. Housing is not just a physical necessity – it is a human right essential for individual and community well-being.  
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>