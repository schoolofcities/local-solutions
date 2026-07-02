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
    const Chapter = "Civic engagement";

    let solutionsList = data.categorySolutions[Chapter]?.list ?? [];
    let provinceCounts = data.categorySolutions[Chapter]?.counts ?? {};
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
        'Simon Fraser University, Morris J. Wosk Centre for Dialogue, <i>Public Engagement as a Driver of Trust in Democracy: 2024 Survey Results</i>, July 8, 2025, <a href="https://www.sfu.ca/dialogue/news/2025/engagement-democracy-driver-of-trust.html" target="_blank">URL</a>.',
        'Daniel J. Rowe, “Montreal Voter Turnout Dropped Again in 2025, Third Lowest Since 1986,” Montreal/Municipal-Election-2025, <i>CTV News</i>, November 4, 2025, <a href="https://www.ctvnews.ca/montreal/municipal-election-2025/article/montreal-voter-turnout-dropped-again-in-2025-third-lowest-since-1986/" target="_blank">URL</a>; Jennifer Keiller, “Calgary Municipal Election Marked by Lower Voter Turnout,” <i>CBC News</i>, October 24, 2025, <a href="https://www.cbc.ca/news/canada/calgary/calgary-2025-election-turnout-9.6952263" target="_blank">URL</a>; Jackie Carmichael, “Edmonton Election: Why Did So Few Edmontonians Turn up to Vote?,” <i>Edmonton Journal</i>, October 21, 2025, <a href="https://edmontonjournal.com/news/local-news/edmonton-election-why-did-so-few-edmontonians-turn-up-to-vote" target="_blank">URL</a>; Association of Municipalities of Ontario (AMO), “Analysis of 2022 Municipal Post Election Data,” accessed November 5, 2025, <a href="https://www.amo.on.ca/policy/municipal-governance-indigenous-relations/analysis-2022-municipal-post-election-data" target="_blank">URL</a>.',
        'Statistics Canada, “Volunteering and Charitable Giving in Canada, 2018 to 2023,” <i>The Daily</i>, June 23, 2025,<a href="https://www150.statcan.gc.ca/n1/daily-quotidien/250623/dq250623b-eng.htm" target="_blank">URL</a>.',
        'Robert D. Putnam, “Bowling Alone: America’s Declining Social Capital,” <i>Journal of Democracy</i> 6, no.1 (1995), 65–78, <a href="https://doi.org/10.1353/jod.1995.0002" target="_blank">DOI</a>.',
        'Statistics Canada, Quality of Life Hub, “Indicator: Sense of Meaning and Purpose,” March 30, 2022, <a href="https://www.statcan.gc.ca/hub-carrefour/quality-life-qualite-vie/central-centraux/meaning-purpose-sens-but-eng.htm" target="_blank">URL</a>; Statistics Canada, “Loneliness by Gender and Province,” February 19, 2025, <a href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=4510004801" target="_blank">URL</a>.',
        'Rideau Hall Foundation, “Understanding Youth and Child Civic Engagement In Canada,” media release, November 23, 2022, <a href="https://rhf-frh.ca/media-releases/understanding-youth-and-child-civic-engagement-in-canada/" target="_blank">URL</a>.',
        'Constance Flanagan and Peter Levine, “Civic Engagement and the Transition to Adulthood,” <i>The Future of Children</i> 20, no. 1 (2010): 159–79, <a href="https://doi.org/10.1353/foc.0.0043" target="_blank">DOI</a>.',
        'Joshua Littenberg-Tobias and Alison K. Cohen, “Diverging Paths: Understanding Racial Differences in Civic Engagement Among White, African American, and Latina/o Adolescents Using Structural Equation Modeling,” <i>American Journal of Community Psychology</i> 57, nos. 1–2 (2016): 102–17, <a href="https://doi.org/10.1002/ajcp.12027" target="_blank">DOI</a>; Tony DeCesare, “Still Leaving Citizens Behind: Reconceiving the Civic Empowerment Gap as a Democratic Capability Gap,” <i>Journal of Philosophy & History of Education</i> 66, no. 1 (2016): 13–26, <a href="http://journalofphilosophyandhistoryofeducation.com/jophe66_individual_files/DeCesareJOPHE66.pdf" target="_blank">URL</a>.',
        'Rideau Hall Foundation, “Understanding Youth and Child Civic Engagement In Canada.”',
        'James Weinberg, “Civic Education as an Antidote to Inequalities in Political Participation? New Evidence from English Secondary Education,” <i>British Politics</i> 17, no. 2 (2022): 185–209, <a href="https://doi.org/10.1057/s41293-021-00186-4." target="_blank">DOI</a>.',
        'Peter Levine, “The Citizen’s Fundamental Question,” in <i>What Should We Do?: A Theory of Civic Life</i>, ed. Peter Levine (Oxford University Press, 2022), <a href="https://doi.org/10.1093/oso/9780197570494.003.0001" target="_blank">DOI</a>.',
        'Paul J. Kuttner, “Educating for Cultural Citizenship: Reframing the Goals of Arts Education,” <i>Curriculum Inquiry</i> 45, no. 1 (2015): 69–92. ',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title="Civic engagement and democracy" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Participation in civic life is the strongest driver of trust in government and democratic resilience, and is essential for creating strong, inclusive communities.<Footnote id={addFootnote(fns[0])}/> Yet in Canada, many of the core markers of democratic participation are in decline. Voter turnout in federal elections has been below 70% for decades, and at the municipal level – where government policies often have significant impacts on people’s day-to-day lives – turnout plunges to below 40% in cities across the country.<Footnote id={addFootnote(fns[1])}/> Between 2018 and 2023, rates of informal volunteering fell from 74% to 66%, driven largely by a drop in community improvement activities such as maintaining public spaces, participating in public meetings, and organizing events.<Footnote id={addFootnote(fns[2])}/> The trend goes beyond Canada; in some other democracies as well, membership in community groups from bowling leagues to churches to volunteer associations is declining, decreasing opportunities to build trust and strong social ties with others from different backgrounds.<Footnote id={addFootnote(fns[3])}/> The weakening of these traditional forms of social and democratic engagement can, in turn, erode people’s sense of civic agency and individual fulfilment. In a 2025 survey, less than 56% of the population reported a high sense of meaning and purpose, and 13% of people over 15 reported feeling lonely “often” or “always.”<Footnote id={addFootnote(fns[4])}/> At a time when Canadian cities and towns are changing quickly, it seems that residents are becoming more detached from the important decisions and actions that shape their communities – putting the legitimacy and quality of our democracy at risk. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_metric-purpose.svg`}
        />
        <p>
            The figures are even more stark among young people, who have lower levels of social engagement and experience higher rates of loneliness than adults.<Footnote id={addFootnote(fns[5])}/> With fewer opportunities to participate in forms of civic activity that cut across divisions such as class, race, income, and age, youth today are missing out on opportunities to build a sense of belonging, explore their identities, and better understand their rights, obligations, and responsibilities as citizens.<Footnote id={addFootnote(fns[6])}/> In particular, young people living in economically marginalized communities and youth of colour are even less likely to be engaged in civic processes, a phenomenon that some scholars have referred to as a “civic engagement gap” or “empowerment gap.”<Footnote id={addFootnote(fns[7])}/> In part, these demographic disparities are structural: youth below the age of 18 are often excluded from formal decision-making due to legal voting ages, and few public engagement processes have formal channels for youth participation. However, many young people are eager to play a more active role in solving problems in their schools and communities.<Footnote id={addFootnote(fns[8])}/> Youth bring a new perspective and a sense of urgency: the consequences of delaying housing construction, adopting more inclusive policies, or taking climate action can seem much more pressing when their own lives are still taking shape. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_youths.svg`}
        />
        <p>
            This chapter features ideas that fill gaps in existing adult-centred public engagement models, offering new pathways for participation through collaboration, civic dialogue, cultural activity, and youth-led initiatives. Together, they advance community empowerment by expanding who participates, how they participate, and the tools available to shape change.<Footnote id={addFootnote(fns[9])}/> Young people are at the heart of several, with initiatives in schools and communities that give youth a place to provide input on local matters, lead projects, and shape their environments. They are notable for their incorporation of care and spontaneous joy, from getting on a bike to nurturing a garden. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_youth-urban.svg`}
        />
        <p>
            Collective action can make challenges less daunting, and reasoning together is an essential part of thinking through matters of public concern, as it enables us to listen to other perspectives, expand our opinions, and check biases.<Footnote id={addFootnote(fns[10])}/> Several programs in this chapter specifically address loneliness, bringing people together to foster a greater sense of belonging, encourage deeper dialogue, and fight discrimination. Others aim to advance individual, collective, or sectoral capacity by sharing power, knowledge, and resources, to support common goals of poverty alleviation and reconciliation. Robust democratic engagement can also be reflected in a thriving arts and culture sector, as the arts provide a creative means of reflecting upon society's core values and can offer broad opportunities for participation, including groups that may be left out of more formal means of engagement.<Footnote id={addFootnote(fns[11])}/> Accordingly, initiatives that create space for arts organizations and strengthen their capacity are also featured here. 
        </p>
        <p>
            When people see their experiences reflected in decision-making and have access to the knowledge and tools to act, they become active stewards of their communities. Local actions build trust and momentum for inclusive progress, adding up over time to strengthen institutions at every level. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>