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
    const Chapter = "Community prosperity";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        'Philip McCann, “How Have Place-Based Policies Evolved to Date and What Are They For Now?,” Background paper for the OECD-EC High-Level Expert Workshop Series on Place-Based Policies for the Future, workshop 1, April 14, 2023, <a href="https://www.oecd.org/cfe/regionaldevelopment/place-based-policies-for-the-future.htm" target="_blank">URL</a>.',
        'Annabella Liao, “Building community wealth,” Social Innovation Canada, August 21, 2023, <a href="https://sicanada.org/2023/08/21/building-community-wealth/" target="_blank">URL</a>.',
        'Benoît-Paul Hébert et al., “A demographic, employment and income profile of persons with disabilities aged 15 years and over in Canada, 2022,” Statistics Canada, May 28, 2024, <a href="https://www150.statcan.gc.ca/n1/pub/89-654-x/89-654-x2024001-eng.htm" target="_blank">URL</a>.',
        'Sharanjit Uppal, “Perceptions of labour market discrimination among persons with disabilities in Canada,” Statistics Canada, October 29, 2025, <a href="https://www150.statcan.gc.ca/n1/pub/75-006-x/2025003/article/00002-eng.htm" target="_blank">URL</a>.',
        'Statistics Canada, “Average and Median Market, Total and After-Tax Income of Individuals by Selected Demographic Characteristics,” May 1, 2025, <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110009101" target="_blank">URL</a>.',
    ];
</script>

<svelte:head>
    <title>Community Prosperity - Learning from What Works | School of Cities</title>
</svelte:head>


<div>
    <Password/>
    <TitleSection Title="Community prosperity" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Canada’s economy is rooted in its places, and local communities are at the heart of innovation and growth. In both urban and rural parts of the country, place-based economic development strategies grow from the networks, institutions, and governance structures within communities, building a foundation for shared prosperity and agency.<Footnote id={addFootnote(fns[0])}/> Canada’s economy is rooted in its places, and local communities are at the heart of innovation and growth. In both urban and rural parts of the country, place-based economic development strategies grow from the networks, institutions, and governance structures within communities, building a foundation for shared prosperity and agency.
        </p>
        <p>
            Inclusive opportunities, meaningful work, and mutual aid all contribute to prosperity and support community members in leading dignified lives.<Footnote id={addFootnote(fns[1])}/> Community wealth-building initiatives help residents access more opportunities for participation and sharing in the economy. Expanding access to employment opportunities, skills development, and training can create a path to prosperity. Many people face barriers to employment, such as disability, homelessness, or addiction, which can make accessing these opportunities more difficult. The employment rate for people with disabilities in 2022 was 16% lower than for those without,<Footnote id={addFootnote(fns[2])}/> and over a third of those who are employed report feeling disadvantaged in finding work.<Footnote id={addFootnote(fns[3])}/> For those in the workforce, there are also large wage disparities corresponding to race, immigration status, disability, gender, and Indigeneity. For example, in 2023 Indigenous individuals earned $7,500 less than the national median after-tax income.<Footnote id={addFootnote(fns[4])}/>
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/community-prosperity/wealth_dignity_wages-map.svg`}
            svg360={`${base}/web-assets/community-prosperity/wealth_dignity_wages-map_360.svg`}
        />
        <div class="inline-images">
            <GraphicSingle standalone={false}
                svg720={`${base}/web-assets/community-prosperity/wealth_dignity_income.svg`}
            />
            <p>
                Addressing employment inequality within communities is a step towards ensuring our most vulnerable members are able to meet their immediate basic needs. Many of the organizations featured in this collection are using innovative community wealth-building strategies and tools such as social procurement, workforce development, and mutual aid to build more inclusive economies.  
            </p>
        </div>
        <p>
           Social procurement uses purchasing power to drive progress on social, economic, and workforce development goals. Community benefit agreements (CBAs) are one way to institutionalize these purchasing practices: they create legally enforceable agreements negotiated between a developer and the community surrounding the project. “Buy local” initiatives can also help to bring more transparency to purchasing decisions, so consumers have more information about how their purchases contribute to local economies.  
        </p>
        <p>
            Other solutions feature workforce development policies that create opportunities aimed at people who are often excluded or discriminated against in the labour market to earn a living wage, access income supports like health benefits, and receive skills development training that help them stay employed long-term. Coupled with local and social procurement, practices like these increase the size of the social-impact economy and thus the social return on investment throughout the general economy.     
        </p>
        <p>
            Together, these and other solutions across the country lay the foundation for our communities to be places where everyone is able to live, work, and thrive – now and into the future. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>