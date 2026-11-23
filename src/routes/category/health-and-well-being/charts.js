import { resolveDownloads } from '$lib/ChartFrame/downloads.js';

const dataUrls = import.meta.glob('./data/*', { eager: true, query: '?url', import: 'default' });
const pngUrls = import.meta.glob('./published/*/*.png', {
	eager: true,
	query: '?url',
	import: 'default'
});
const embedMeta = import.meta.glob('./published/*/embed.json', {
	eager: true,
	import: 'default'
});

const charts = {
	// Inline graphic (one size only, floated beside the text).
	'mental-health_unmet-health-stat': {
		title: '2,340,000 Canadians who needed mental health care in 2023 had their needs either unmet or only partially met',
		source: 'Canadian Mental Health Association (2024)',
		alt: '2,340,000 Canadians who needed mental health care in 2023 had their needs either unmet or only partially met.'
	},
	'mental-health_travel-burden-bars': {
		title: 'Hospital travel burden for urban and rural residents',
		source: 'Hospital Morbidity Database (CIHI, 2018-2023), Statistics Canada (2024)',
		note: 'Factors that impact travel burden include patient living in a different census subdivision than the hospital, greater travel distance required, no road available, patient is a senior or child, and hospitalization is urgent or unscheduled.',
		alt: 'Stacked bar chart comparing the share of urban and rural hospital patients with very low, low, moderate, high and very high travel burden.',
		widths: [360, 720],
		image: 'mental-health_travel-burden-bars'
	},
	'mental-health_opioid-charts': {
		title: 'Opioid hospitalizations and deaths in Canada',
		source: 'Public Health Agency of Canada (2025)',
		alt: 'Two step charts of opioid hospitalizations and deaths per 100,000 people in Canada from 2016 to 2024. Both rose after the start of the COVID-19 pandemic in 2020; total deaths went from 3,750 in 2019 to 6,456 in 2020 and 7,993 in 2021.',
		widths: [360, 720],
		image: 'mental-health_opioid-charts'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
