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
	'wealth_dignity_wages-map': {
		title: 'Comparing provincial and territorial minimum wages to local living wages',
		source: 'Government of Canada Minimum Wage Database (2025); Living Wage Canada (2025); Alternatives North (2022); Institut de recherche et d’informations socioéconomiques (2025); “Higher-than-ever minimum wage needed to make ends meet in Whitehorse: report”, Yukon News (2025).',
		subtitle: 'Living wage represents the hourly wage each parent must earn in a two-parent, two-children household. Montreal reflects a household with one adult only. No local living wage available in Nunavut. Largest cities/regions in each province and territory were chosen for local living wage data where data were available. Toronto represents data for the Greater Toronto Area. St. John’s represents data for Eastern Newfoundland.',
		alt: 'Map of Canada comparing each province and territory’s minimum wage with the local living wage in one of its cities. Minimum wages range from $15.00 to $19.75 per hour.',
		widths: [360, 720],
		image: 'wealth_dignity_wages-map'
	},
	// Inline graphic (one size only, floated beside the text).
	'wealth_dignity_income': {
		title: 'Income inequality in Canada',
		subtitle: 'Comparing median after-tax incomes of individuals across demographic groups',
		source: 'Statistics Canada (2023) Canadian Income Survey',
		alt: 'Bar chart comparing the median after-tax income of men, women, visible minorities, Indigenous people, immigrants, recent immigrants and people born in Canada with the median for all persons, $39,900.'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
