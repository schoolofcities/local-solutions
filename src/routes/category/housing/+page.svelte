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
    const Chapter = 'Housing';

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        'Organisation for Economic Co-operation and Development, <i>OECD Economic Surveys: Canada 2025</i> (OECD Publishing, 2025), <a href="https://doi.org/10.1787/28f9e02c-en" target="_blank">URL</a>.',
        'Canadian Centre for Housing Rights, “Fifty Years in the Making of Ontario’s Housing Crisis: A Timeline,” Canadian Centre for Housing Rights, May 27, 2022, <a href="https://housingrightscanada.com/fifty-years-in-the-making-of-ontarios-housing-crisis-a-timeline/" target="_blank">URL</a>.',
        'Canada Mortgage and Housing Corporation (CMHC), “Fall 2025 Housing Supply Report,” accessed November 10, 2025, <a href="https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/housing-market/housing-supply-report" target="_blank">URL</a>.',
        'OECD, <i>OECD Economic Surveys: Canada 2025</i>.',
        'CMHC, <i>Canada’s Housing Supply Shortages: Moving to a New Framework (2025)</i>, 15, <a href="https://assets.cmhc-schl.gc.ca/sites/cmhc/professional/housing-markets-data-and-research/housing-research/research-reports/accelerate-supply/canadas-housing-supply-shortages-new-framework/2025-canadas-housing-supply-shortages-new-framework-en.pdf?_gl=1*1dc0lsz*_gcl_au*MTMwMTk5ODk5NS4xNzUwMzQ2MDMy*_ga*NTI3MzU3NjY0LjE3MzAyMjMzNzg.*_ga_CY7T7RT5C4*czE3NTA0MzE0MzMkbzE1NCRnMSR0MTc1MDQzMjU2MCRqNTEkbDAkaDA" target="_blank">URL</a>.',
        'OECD, <i>OECD Economic Surveys: Canada 2025</i>, 54.',
        'Ben Segel-Brown and Zachary Vrhovsek, <i>Federal Spending on Housing Affordability in 2024</i> (Office of the Parliamentary Budget Officer, 2024), 1, <a href="https://www.pbo-dpb.ca/en/publications/RP-2425-023-S--federal-spending-housing-affordability-in-2024--depenses-federales-axees-abordabilite-logement-2024" target="_blank">URL</a>.',
        'Statistics Canada, “Housing Indicators, 2021 Census,” last updated May 10, 2023, <a href="https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/dv-vd/housing-logement/index-en.cfm" target="_blank">URL</a>.',
        'Statistics Canada, “To Buy or To Rent: The Housing Market Continues to Be Reshaped by Several Factors as Canadians Search for an Affordable Place to Call Home,” <i>The Daily</i>, September 21, 2022, <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/220921/dq220921b-eng.htm" target="_blank">URL</a>.',
        'OECD, <i>OECD Economic Surveys: Canada 2025</i>.',
        'Statistics Canada, “To Buy or To Rent.”',
        'Statistics Canada, “Housing Affordability in Canada, 2022,” <i>The Daily</i>, September 10, 2024, <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/240910/dq240910b-eng.htm" target="_blank">URL</a>.',
        'Statistics Canada, “Housing Challenges Related to Affordability, Adequacy, Condition and Discrimination, August 2 to September 15, 2024,” <i>The Daily</i>, November 19, 2024, <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/241119/dq241119b-eng.htm" target="_blank">URL</a>.',
        'Housing, Infrastructure and Communities Canada, “Build Canada Homes,” September 14, 2025, <a href="https://housing-infrastructure.canada.ca/bch-mc/index-eng.html" target="_blank">URL</a>.',
        'Daniel G. Parolek, <i>Missing Middle Housing: Thinking Big and Building Small to Respond to Today’s Housing Crisis</i> (Island Press, 2020)',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title={Chapter} {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Access to secure, affordable housing is a fundamental determinant of well-being. When people have access to adequate housing, they can participate fully in their communities, pursue education and employment, and build a sense of belonging. But population growth, limited housing supply, and labour shortages in construction have left many Canadians struggling to find and maintain stable homes, resulting in weakening local economies and deepening inequality.<Footnote id={addFootnote(fns[0])}/> 
        </p>
        <p>
            Decades of policy shifts have contributed to this reality. In the 1970s, governments viewed housing as a tool for income redistribution, but subsequent decades brought funding cuts, the devolution of responsibility for public construction to lower levels of government jurisdiction, and a growing reliance on market forces for delivering housing.<Footnote id={addFootnote(fns[1])}/> More recently, rising construction costs, development charges, and financing challenges have slowed new projects,<Footnote id={addFootnote(fns[2])}/> while pandemic-related pressures and high net immigration have intensified demand.<Footnote id={addFootnote(fns[3])}/> According to the Canada Mortgage and Housing Corporation (CMHC), Canada needs at least 430,000 and up to 480,000 housing starts each year until 2035 to meet projected demand.<Footnote id={addFootnote(fns[4])}/>  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_starts-households-chart.svg`}
            svg360={`${base}/web-assets/housing/housing_starts-households-chart_360.svg`}
        />
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_FAA-housing-units.svg`}
            svg360={`${base}/web-assets/housing/housing_FAA-housing-units_360.svg`}
        />
        <p>
            With housing costs far outpacing wages,<Footnote id={addFootnote(fns[5])}/> a projected 2.6 million households will be in “core housing need” by 2027<Footnote id={addFootnote(fns[6])}/> – meaning their current housing is inadequate, unaffordable, or unsuitable, and that they would need to spend 30% or more of their income to access acceptable housing.<Footnote id={addFootnote(fns[7])}/> There is also a mismatch between housing types available and residents’ needs. With a persistent shortage of purpose-built rental units, any type of recently built dwelling that is available is being rented out; nearly half of the new housing built between 2016 and 2021 was rented rather than owned by the occupants, the highest proportion since the apartment boom in the 1960s.<Footnote id={addFootnote(fns[8])}/> Purpose-built rentals have historically comprised only a small share of new construction, and social housing accounted for just 3.5% of total dwellings in 2022.<Footnote id={addFootnote(fns[9])}/> With renting on the rise and home ownership declining in nearly all provinces and territories,<Footnote id={addFootnote(fns[10])}/> the mix of available housing needs to shift to reflect the current Canadian reality. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/housing/housing_typology-tree-map.svg`}
            svg360={`${base}/web-assets/housing/housing_typology-tree-map_360.svg`}
        />
        <p>
            The 2022 Canadian Housing Survey found that about 246,000 households were on a waiting list for subsidized housing, and that almost two-thirds had been waiting for two years or longer. Of those on the waitlist, roughly 42% were living in unaffordable housing.<Footnote id={addFootnote(fns[11])}/> The 2024 Canadian Social Survey found that nearly half of respondents were “very concerned” about housing affordability, and that over a third of households struggled to cover essential expenses over the previous year.<Footnote id={addFootnote(fns[12])}/> These trends highlight both the strain that the housing crisis puts on households and the urgency of increasing the availability of housing options to align with Canadians’ needs. 
        </p>
        <p>
            Recent government initiatives aim to expand the supply of affordable homes. The new Build Canada Homes federal agency, for example, will leverage public lands, provide flexible financial incentives for builders, attract complementary private capital, and support modern manufacturing methods to increase efficiency.<Footnote id={addFootnote(fns[13])}/> Policies supporting middle housing – multi-unit or clustered housing types compatible with single-family homes – have also helped diversify housing stock, supporting more walkable and inclusive communities.<Footnote id={addFootnote(fns[14])}/> 
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