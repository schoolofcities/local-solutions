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
    const Chapter = "Mental health";

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
            Mental health is an essential part of well-being. It encompasses mood disorders, substance use and addictions, and everyday stress management and coping strategies, issues that are interconnected but that face a fragmented policy response. Municipalities are often the first level of government to respond to mental health crises, a challenging situation since levels of municipal program funding tend to vary greatly from place to place and year to year. The Canada Health Act does not explicitly require mental health or substance use services to be covered by provincial public health insurance; mental health spending makes up just 6.3% of provincial and territorial budgets on average.1 The unpredictability of government mental health funding affects local providers, which in turn affects service stability and thus patient health outcomes. Access to consistent care – meeting their needs long before a crisis – is the most effective way to help people recover and thrive. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/mental-health/mental-health_unmet-health-stat.svg`}
        />
        <p>
            Socioeconomic stressors can worsen mental health and create barriers to treatment for marginalized groups, since poor mental health and economic insecurity can reinforce one another.2 The COVID-19 pandemic intensified these stressors, pushing individuals and entire health-care systems into precarity. Compared to pre-pandemic rates, three times as many Canadians reported having “poor or fair” mental health in 2021.3 Opioid deaths and hospitalizations remain high today.4 Indigenous communities on- and off-reserve face disproportionately high rates of poor mental health, substance use disorders, and economic stressors,5 as well as high turnover among non-Indigenous providers.6 In rural and remote areas, the long distances to a highly limited number of hospitals and primary care providers can pose additional barriers to treatment.  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/mental-health/mental-health_travel-burden-bars.svg`}
        />
        <p>
            COVID-19 also had profound effects on the health-care workforce (which is composed predominantly of women7), exacerbating existing issues such as burnout, understaffing, long hours, and workplace safety concerns.8 Immigrants play a key role in Canadian health care amid an aging workforce and the growing needs of the aging population.9 One challenge of mental health policy is ensuring that providers and health-care workers themselves feel supported, even as patients’ complex needs outstrip what their services alone can address. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/mental-health/mental-health_opioid-charts.svg`}
        />
        <p>
            Mental health needs are often deeply intertwined with issues that go beyond the scope of one provider’s services, making collaboration across a continuum of care essential. Some initiatives covered in this chapter demonstrate how sharing information and working in partnership can make better use of existing resources, improve the quality of care, and reach more patients. Others offer a range of dispatch models to bring services directly to community members, such as mobile health teams and non-police emergency lines. These can help (re)build trust with vulnerable populations, delivering trauma-informed and culturally appropriate care through community health providers. Many of these providers work alongside local government agencies and community members, providing education and demonstrating the positive impacts of their services. 
        </p>
        <p>
            The initiatives in this chapter represent just a slice of the evidence-based approaches that are working across Canada. COVID-19 encouraged the adoption of virtual care, such as long-distance sessions with patients, app-based delivery, and online resources.10 Many jurisdictions are prioritizing reducing the harms of substance use, without judgement or the expectation that substance use will immediately cease. Policies like safe consumption sites, needle exchange programs, referral to housing-first programs that don’t require abstinence, and educational outreach all address substance use through the lens of public health rather than criminalization.11 
        </p>
        <p>
            The overlapping economic and public health disruptions of the past decade have raised the profile of mental health challenges in Canada, sometimes making them seem insurmountable. These solutions demonstrate what some communities are already doing successfully – and hint at what a healthier Canada can look like if we expand and continue their work. 
        </p>
    </div>
    <SolutionsGrid {Chapter} {solutionsList} {provinceCounts}/>
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>