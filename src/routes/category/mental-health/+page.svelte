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
        'Leyna Lowe et al., <i>The State of Mental Health in Canada 2024: Mapping the Landscape of Mental Health, Addictions and Substance Use Health</i> (Canadian Mental Health Association [CMHA], 2024), <a href="https://cmha.ca/wp-content/uploads/2024/11/CMHA-State-of-Mental-Health-2024-report.pdf" target="_blank">URL</a>.',
        'Public Health Agency of Canada (PHAC), <i>Inequalities in Mental Health, Well-being and Wellness in Canada: Social Determinants and Changes over Time</i> (2024), <a href="https://publications.gc.ca/collections/collection_2024/aspc-phac/HP55-13-2024-eng.pdf" target="_blank">URL</a>.',
        'Lowe et al., <i>The State of Mental Health in Canada 2024</i>. ',
        'PHAC, “Opioid-and-Stimulant-Related Harms in Canada,” 2025, <a href="https://health-infobase.canada.ca/substance-related-harms/opioids-stimulants/#a1" target="_blank">URL</a>.',
        'Statistics Canada, “Health Care Access and Experiences Among Indigenous People,” <i>The Daily</i>, November 4, 2024, <a href="https://www150.statcan.gc.ca/n1/daily-quotidien/241104/dq241104a-eng.htm" target="_blank">URL</a>.',
        'Patricia Boksa et al., “Mental wellness in Canada’s Aboriginal communities: Striving Toward Reconciliation,” <i>Journal of Psychiatry and Neuroscience</i> 40, no. 6 (2015): 363–365, <a href="https://doi.org/10.1503/jpn.150309" target="_blank">DOI</a>; Kelsang Yangzom et. al, <i>Primary Health Care Access Among First Nations People Living Off Reserve, Métis and Inuit, 2017 to 2020</i> (Statistics Canada, 2023), <a href="https://www150.statcan.gc.ca/n1/pub/41-20-0002/412000022023005-eng.htm" target="_blank">URL</a>.',
        'Canadian Institutes of Health Information (CIHI), “A Profile of Selected Mental Health and Substance Use Health Care Providers in Canada, 2021,” infographic, accessed November 20, 2025, <a href="https://www.cihi.ca/en/a-profile-of-selected-mental-health-and-substance-use-health-care-providers-in-canada-2021" target="_blank">URL</a>.',
        'Canadian Academy of Health Sciences, <i>Canada’s Health Workforce: Pathways Forward</i> (CAHS, 2023), <a href="https://cahs-acss.ca/wp-content/uploads/2023/04/CAHS-Health-Workforce-Pathways-Forward-EN_Final_Apr-4.pdf" target="_blank">URL</a>.',
        'André Bernard & Yasmina Seddiki, <i>Workforce Renewal in Health Occupations</i> (Statistics Canada, 2025), <a href="https://www150.statcan.gc.ca/n1/pub/75-006-x/2025001/article/00006-eng.htm" target="_blank">URL</a>.',
        'Mental Health Commission of Canada (MHCC), <i>An E-Mental Health Strategy for Canada</i>, (2024), <a href="https://mentalhealthcommission.ca/wp-content/uploads/2024/09/An-E-Mental-Health-Strategy-for-Canada-FINAL.pdf" target="_blank">URL</a>; Katherine Fierlbeck & Gregory P. Marchildon, <i>The Boundaries of Medicare: Public Health Care beyond the Canada Health Act</i> 120-132 (McGill-Queen\'s University Press, 2023). ',
        'British Columbia Ministry of Health, <i>Harm Reduction: A British Columbia Community Guide</i> (2005), <a href="https://www.health.gov.bc.ca/library/publications/year/2005/hrcommunityguide.pdf" target="_blank">URL</a>; Laura MacKinnon and M Eugenia Socias, <i>Housing First</i> (2021), <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC8279675/" target="_blank">URL</a>.',
    ];
</script>

<div>
    <Password/>
    <TitleSection Title={Chapter} {Chapter}/>
    <div class="body-text">
        <TextTitle title="The Challenge" chapter={Chapter}/>
        <div class="inline-images">
            <GraphicSingle standalone={false}
                svg720={`${base}/web-assets/mental-health/mental-health_unmet-health-stat.svg`}
            />
            <p>
                Mental health is an essential part of well-being. It encompasses mood disorders, substance use and addictions, and everyday stress management and coping strategies, issues that are interconnected but that face a fragmented policy response. Municipalities are often the first level of government to respond to mental health crises, a challenging situation since levels of municipal program funding tend to vary greatly from place to place and year to year. The Canada Health Act does not explicitly require mental health or substance use services to be covered by provincial public health insurance; mental health spending makes up just 6.3% of provincial and territorial budgets on average.<Footnote id={addFootnote(fns[0])}/> The unpredictability of government mental health funding affects local providers, which in turn affects service stability and thus patient health outcomes. Access to consistent care – meeting their needs long before a crisis – is the most effective way to help people recover and thrive. 
            </p>
        </div>
        <p>
            Socioeconomic stressors can worsen mental health and create barriers to treatment for marginalized groups, since poor mental health and economic insecurity can reinforce one another.<Footnote id={addFootnote(fns[1])}/> The COVID-19 pandemic intensified these stressors, pushing individuals and entire health-care systems into precarity. Compared to pre-pandemic rates, three times as many Canadians reported having “poor or fair” mental health in 2021.<Footnote id={addFootnote(fns[2])}/> Opioid deaths and hospitalizations remain high today.<Footnote id={addFootnote(fns[3])}/> Indigenous communities on- and off-reserve face disproportionately high rates of poor mental health, substance use disorders, and economic stressors,<Footnote id={addFootnote(fns[4])}/> as well as high turnover among non-Indigenous providers.<Footnote id={addFootnote(fns[5])}/> In rural and remote areas, the long distances to a highly limited number of hospitals and primary care providers can pose additional barriers to treatment.  
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/mental-health/mental-health_travel-burden-bars.svg`}
            svg360={`${base}/web-assets/mental-health/mental-health_travel-burden-bars_360.svg`}
        />
        <p>
            COVID-19 also had profound effects on the health-care workforce (which is composed predominantly of women<Footnote id={addFootnote(fns[6])}/>), exacerbating existing issues such as burnout, understaffing, long hours, and workplace safety concerns.<Footnote id={addFootnote(fns[7])}/> Immigrants play a key role in Canadian health care amid an aging workforce and the growing needs of the aging population.<Footnote id={addFootnote(fns[8])}/> One challenge of mental health policy is ensuring that providers and health-care workers themselves feel supported, even as patients’ complex needs outstrip what their services alone can address. 
        </p>
        <GraphicSingle
            svg720={`${base}/web-assets/mental-health/mental-health_opioid-charts.svg`}
            svg360={`${base}/web-assets/mental-health/mental-health_opioid-charts_360.svg`}
        />
        <p>
            Mental health needs are often deeply intertwined with issues that go beyond the scope of one provider’s services, making collaboration across a continuum of care essential. Some initiatives covered in this chapter demonstrate how sharing information and working in partnership can make better use of existing resources, improve the quality of care, and reach more patients. Others offer a range of dispatch models to bring services directly to community members, such as mobile health teams and non-police emergency lines. These can help (re)build trust with vulnerable populations, delivering trauma-informed and culturally appropriate care through community health providers. Many of these providers work alongside local government agencies and community members, providing education and demonstrating the positive impacts of their services. 
        </p>
        <p>
            The initiatives in this chapter represent just a slice of the evidence-based approaches that are working across Canada. COVID-19 encouraged the adoption of virtual care, such as long-distance sessions with patients, app-based delivery, and online resources.<Footnote id={addFootnote(fns[9])}/> Many jurisdictions are prioritizing reducing the harms of substance use, without judgement or the expectation that substance use will immediately cease. Policies like safe consumption sites, needle exchange programs, referral to housing-first programs that don’t require abstinence, and educational outreach all address substance use through the lens of public health rather than criminalization.<Footnote id={addFootnote(fns[10])}/> 
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