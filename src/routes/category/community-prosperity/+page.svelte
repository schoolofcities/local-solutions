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
        '<a href="" target="_blank">URL</a>.',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title="Community prosperity and dignity" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            A community’s wealth can be measured in more than just financial assets: inclusive opportunities, meaningful work, and mutual aid all contribute to prosperity and support community members in leading dignified lives.1 Before they can prosper, individuals need to first meet their basic needs, beginning with shelter and food. Community wealth building initiatives help to improve residents’ access to these basics, and help to build on them by creating more opportunities for participation and sharing in the economy.  
        </p>
        <p>
            Challenges in meeting fundamental needs are exacerbated by poverty, economic precarity, homelessness, and language barriers. In 2023, over 10% of Canadians lived in poverty, as measured by a household's ability to afford shelter, clothing, food, transportation, and other necessities like telecommunications services.2 While poverty rates in Canada had been decreasing before the start of the pandemic, since 2020 they have increased for every demographic group across the country, but especially single parents, recent immigrants, Indigenous people, and people with disabilities.3 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/community-prosperity/wealth_dignity_poverty-line.svg`}
        />
        <p>
            Expanding access to employment opportunities and minimizing income equality are one path to prosperity. Many people face barriers to employment, which can include disability, homelessness, and addiction. The employment rate for people with disabilities in 2022 was 16% lower than for those without,4 and over a third of those who are employed report feeling disadvantaged in employment.5 For those in the workforce, there are still large wage disparities corresponding to race, immigration status, disability, gender, and Indigeneity. For example, in 2023 Indigenous individuals earned $7,500 less than the national median after-tax income.6  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/community-prosperity/wealth_dignity_income.svg`}
        />
        <p>
            The rising cost of living has also put pressure on Canadians’ ability to meet their basic needs, including accessing healthy food. Between 2021 and 2023, roughly a third of meat and produce grocery items were subject to “shrinkflation” as the size of the product – but not its price – was reduced.7 These rising costs, coupled with income pressures, meant that in 2022 nearly 17% of Canadian households were food insecure and could not afford nutritious and culturally relevant food.8 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/community-prosperity/wealth_dignity_food-insecurity.svg`}
        />
        <p>
            As we work toward more systemic solutions to address poverty and wealth inequality, communities across the country can play a role in helping their most vulnerable members meet their immediate basic needs. Many of the organizations featured in this chapter are using innovative community wealth-building strategies and tools such as social procurement, workforce development, and mutual aid to build more inclusive economies. 
        </p>
        <p>
            Social procurement uses purchasing power to drive progress on social, economic, and workforce development goals. Community benefit agreements (CBAs) are one way to institutionalize these purchasing practices: they create legally enforceable agreements negotiated between a developer and the community surrounding the project. 
        </p>
        <p>
            Other solutions feature workforce development policies that create opportunities aimed at people who are often excluded or discriminated against in the labour market to earn a living wage, access income supports like health benefits, and receive skills development training that help them stay employed long-term. Coupled with local and social procurement, practices like these increase the size of the social-impact economy and thus the social return on investment throughout the general economy. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/community-prosperity/wealth_dignity_wages-map.svg`}
        />
        <p>
            Community organizations also play a major role in strengthening local food security. Urban spaces are not usually seen as sites of food production and agriculture – most city residents rely instead on purchasing food transported from other places – but cities have the potential to be sources of nourishment. Many of the organizations featured in this chapter are unlocking existing and potential sources of food abundance, like urban tree fruit, surplus food from local retailers, and community gardens and food forests in open spaces. Other initiatives, especially those organized around food access and distribution, are fostering the social connections necessary to sustain mutual aid and local leadership. Economic and workforce development programs do this too, by empowering businesses and individuals to succeed.  
        </p>
        <p>
            Together, these and other solutions across the country lay the foundation for our communities to be places where all people are able to eat, drink, work, and thrive – now and into the future. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>