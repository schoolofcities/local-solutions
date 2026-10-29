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
    const Chapter = "Youth";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        'Ministry of Canadian Heritage, <i>Canada’s First State of Youth Report: For Youth, With Youth, by Youth</i> (Government of Canada, 2021), <a href="https://www.canada.ca/en/canadian-heritage/campaigns/state-youth/report.html" target="_blank">URL</a>.',
        'Ministry of Canadian Heritage, <i>State of Youth Report</i>.',
        'Ministry of Canadian Heritage, <i>State of Youth Report</i>.',
        'Statistics Canada, “Homeownership Rate by Age of Primary Household Maintainer, Canada, 2011 to 2021,” <a href="https://www12.statcan.gc.ca/census-recensement/2021/as-sa/fogs-spg/alternative.cfm?topic=7&lang=E&dguid=2021A000011124&objectId=7" target="_blank">URL</a>.',
        'Statistics Canada, “Millennials in the Canadian Housing Market: An Intergenerational Comparison,” <i>The Daily</i>, May 6, 2026, <a href="https://www150.statcan.gc.ca/n1/pub/46-28-0001/2026001/article/00001-eng.htm" target="_blank">URL</a>.',
        'Rideau Hall Foundation, “Understanding Youth and Child Civic Engagement In Canada,” media release, November 23, 2022, <a href="https://rhf-frh.ca/media-releases/understanding-youth-and-child-civic-engagement-in-canada/" target="_blank">URL</a>.',
        'Constance Flanagan and Peter Levine, “Civic Engagement and the Transition to Adulthood,” <i>The Future of Children</i> 20, no. 1 (2010): 159–79, <a href="https://doi.org/10.1353/foc.0.0043" target="_blank">DOI</a>.',
        'Joshua Littenberg-Tobias and Alison K. Cohen, “Diverging Paths: Understanding Racial Differences in Civic Engagement Among White, African American, and Latina/o Adolescents Using Structural Equation Modeling,” <i>American Journal of Community Psychology</i> 57, nos. 1–2 (2016): 102–17, <a href="https://doi.org/10.1002/ajcp.12027" target="_blank">DOI</a>; Tony DeCesare, “Still Leaving Citizens Behind: Reconceiving the Civic Empowerment Gap as a Democratic Capability Gap,” <i>Journal of Philosophy & History of Education</i> 66, no. 1 (2016): 13–26, <a href="http://journalofphilosophyandhistoryofeducation.com/jophe66_individual_files/DeCesareJOPHE66.pdf" target="_blank">URL</a>.',
        'Rideau Hall Foundation, “Understanding Youth and Child Civic Engagement In Canada.”',
        'This phrase is the subtitle of the <i>Canada’s First State of Youth Report</i> (Ministry of Canadian Heritage).',
    ];
</script>

<svelte:head>
    <title>Civic Engagement and Democracy - Local Solutions | School of Cities</title>
</svelte:head>


<div>
    <Password/>
    <TitleSection Title="Youth" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <div class="inline-images">
            <GraphicSingle standalone={false}
                svg720={`${base}/web-assets/youth/civic_engagement_youths.svg`}
            />
            <p>
                Canada’s future resides in its young people, and that future looks bright. Youth – generally defined as those between the ages of 15 and 29 – are better educated, live more sustainably, and are more connected to technology than older populations today.<Footnote id={addFootnote(fns[0])}/> The most diverse generation in Canadian history, this group has more exposure to those who have different backgrounds and experiences, and as a result is more likely than previous generations to value inclusivity and participation from a range of voices.<Footnote id={addFootnote(fns[1])}/> Yet this is a challenging time for young people. The societal and educational disruptions of the COVID-19 pandemic fell disproportionately on youth, many of whom had their education interrupted for extended periods. More recent economic uncertainty and the rising use of artificial intelligence in the workplace mean this generation is entering the workforce at a time of profound uncertainty that will affect their early career paths. For many young people, particularly those from racialized communities, unpaid internships and volunteer opportunities for career development are out of reach because they must find paid employment to support their education, and programs that offer a stipend or compensation are particularly valuable.<Footnote id={addFootnote(fns[2])}/>
            </p>
        </div>
        <p>
            Youth also bear the brunt of a lack of affordable housing. The 2021 census showed that fewer than 20% of those under 25 own their own homes – a figure that has fallen by over 5% since 2011<Footnote id={addFootnote(fns[3])}/> – and that Millennials are less likely to be homeowners than were previous generations at the same age.<Footnote id={addFootnote(fns[4])}/> Rising rents and displacement therefore have a particularly significant impact on this population, and many are creating or turning to innovative housing models such as shared ownership, land trusts, and co-living. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/youth/civic_engagement_youth-urban.svg`}
            svg360={`${base}/web-assets/youth/civic_engagement_youth-urban_360.svg`}
        />
        <p>
            The unfolding realities of the climate crisis have contributed to rising levels of anxiety, as young people face the prospect of a more chaotic and unpredictable future. In the realm of mental health, youth have emerged as a distinct group, with new government programs to address access to care, in places of all sizes, including in rural, remote, and Indigenous areas.
        </p>
        <div class="inline-images">
            <GraphicSingle standalone={false}
                svg720={`${base}/web-assets/youth/civic_engagement_metric-purpose.svg`}
            />
            <p>
                As the networks and spaces that used to underpin communities have shifted and changed, young people have shown lower levels of social engagement and experienced higher rates of loneliness than adults.<Footnote id={addFootnote(fns[5])}/> With fewer opportunities to participate in forms of civic activity that cut across divisions such as class, race, income, and age, youth today are missing out on opportunities to build a sense of belonging, explore their identities, and better understand their rights, obligations, and responsibilities as citizens.<Footnote id={addFootnote(fns[6])}/>
            </p>
        </div>
        <p>
            In particular, youth of colour and young people living in economically marginalized communities are even less likely to be engaged in civic processes, a phenomenon that some scholars have referred to as a “civic engagement gap” or “empowerment gap.”<Footnote id={addFootnote(fns[7])}/> In part, these demographic disparities are structural: youth below the age of 18 are often excluded from formal decision-making due to legal voting ages, and few public engagement processes have formal channels for youth participation. The decline in the number of third spaces available has also hit young people hard, as they have fewer places of their own to gather.
        </p>
        <p>
            However, many young people are eager to play a more active role in solving problems in their schools and communities.<Footnote id={addFootnote(fns[8])}/> Youth bring a new perspective and a sense of urgency: the consequences of delaying housing construction, adopting more inclusive policies, or taking climate action can seem much more pressing to people whose lives are still taking shape. The stories featured in this category span a range of ages, places, and areas of focus, but they have one thing in common: young people are at the heart of each initiative, whether as founders, as participants, or both. Several programs in schools and communities give youth a way to provide input on local matters, lead projects, and shape their environments. Others are focused on young people supporting each other and being a central part of future change. 
        </p>
        <p>
            These projects are notable for their incorporation of care and spontaneous joy, from getting on a bike to nurturing a garden. They lay the groundwork for a brighter future for youth, with youth, and by youth.<Footnote id={addFootnote(fns[9])}/>
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>