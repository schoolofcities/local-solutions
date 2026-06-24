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
        '<a href="" target="_blank">URL</a>.',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title="Civic engagement and democracy" {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <p>
            Participation in civic life is the strongest driver of trust in government and democratic resilience, and is essential for creating strong, inclusive communities.1 Yet in Canada, many of the core markers of democratic participation are in decline. Voter turnout in federal elections has been below 70% for decades, and at the municipal level – where government policies often have significant impacts on people’s day-to-day lives – turnout plunges to below 40% in cities across the country.2 Between 2018 and 2023, rates of informal volunteering fell from 74% to 66%, driven largely by a drop in community improvement activities such as maintaining public spaces, participating in public meetings, and organizing events.3 The trend goes beyond Canada; in some other democracies as well, membership in community groups from bowling leagues to churches to volunteer associations is declining, decreasing opportunities to build trust and strong social ties with others from different backgrounds.4 The weakening of these traditional forms of social and democratic engagement can, in turn, erode people’s sense of civic agency and individual fulfilment. In a 2025 survey, less than 56% of the population reported a high sense of meaning and purpose, and 13% of people over 15 reported feeling lonely “often” or “always.”5 At a time when Canadian cities and towns are changing quickly, it seems that residents are becoming more detached from the important decisions and actions that shape their communities – putting the legitimacy and quality of our democracy at risk. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_metric-purpose.svg`}
        />
        <p>
            The figures are even more stark among young people, who have lower levels of social engagement and experience higher rates of loneliness than adults.6 With fewer opportunities to participate in forms of civic activity that cut across divisions such as class, race, income, and age, youth today are missing out on opportunities to build a sense of belonging, explore their identities, and better understand their rights, obligations, and responsibilities as citizens.7 In particular, young people living in economically marginalized communities and youth of colour are even less likely to be engaged in civic processes, a phenomenon that some scholars have referred to as a “civic engagement gap” or “empowerment gap.”8 In part, these demographic disparities are structural: youth below the age of 18 are often excluded from formal decision-making due to legal voting ages, and few public engagement processes have formal channels for youth participation. However, many young people are eager to play a more active role in solving problems in their schools and communities.9 Youth bring a new perspective and a sense of urgency: the consequences of delaying housing construction, adopting more inclusive policies, or taking climate action can seem much more pressing when their own lives are still taking shape. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_youths.svg`}
        />
        <p>
            This chapter features ideas that fill gaps in existing adult-centred public engagement models, offering new pathways for participation through collaboration, civic dialogue, cultural activity, and youth-led initiatives. Together, they advance community empowerment by expanding who participates, how they participate, and the tools available to shape change.10 Young people are at the heart of several, with initiatives in schools and communities that give youth a place to provide input on local matters, lead projects, and shape their environments. They are notable for their incorporation of care and spontaneous joy, from getting on a bike to nurturing a garden. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/civic-engagement/civic_engagement_youth-urban.svg`}
        />
        <p>
            Collective action can make challenges less daunting, and reasoning together is an essential part of thinking through matters of public concern, as it enables us to listen to other perspectives, expand our opinions, and check biases.11 Several programs in this chapter specifically address loneliness, bringing people together to foster a greater sense of belonging, encourage deeper dialogue, and fight discrimination. Others aim to advance individual, collective, or sectoral capacity by sharing power, knowledge, and resources, to support common goals of poverty alleviation and reconciliation. Robust democratic engagement can also be reflected in a thriving arts and culture sector, as the arts provide a creative means of reflecting upon society's core values and can offer broad opportunities for participation, including groups that may be left out of more formal means of engagement.12 Accordingly, initiatives that create space for arts organizations and strengthen their capacity are also featured here. 
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