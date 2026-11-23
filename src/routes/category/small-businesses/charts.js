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
	'small-businesses_size-stat': {
		title: 'There are 1.37 million businesses in Canada',
		source: 'Statistics Canada (2025) Business Register, Business Counts in Rural and Small Town Canada',
		alt: 'Chart breaking down Canada’s 1.37 million businesses by number of employees, showing that 98% are small businesses.'
	},
	'small-businesses_rural-urban-map': {
		title: 'Small businesses across urban and rural Canada',
		source: 'Statistics Canada (2024) Business Counts in Rural and Small Town Canada',
		alt: 'Map of Canada showing the total number of small businesses and the percentage located in rural areas for each province and territory. Of the 1.34 million small businesses across Canada, 16% are located in rural areas.',
		widths: [360, 720],
		image: 'small-businesses_rural-urban-map'
	},
	'small-businesses_births-chart': {
		title: 'Net change in small employer businesses in the private sector across Canada',
		source: 'Statistics Canada (2024) Longitudinal Employment Analysis Program',
		alt: 'Chart of the yearly net change in small employer businesses in Canada’s private sector from the early 2000s to the early 2020s, annotated where more small businesses closed than opened.',
		widths: [360, 720],
		image: 'small-businesses_births-chart'
	},
	// Inline graphic (one size only, floated beside the text).
	'small-businesses_BIAs-map': {
		title: 'There are 343+ Business Improvement Areas (BIAs) across Canada',
		source: 'Canada Business Grants website (October 2026)',
		note: 'Based on data from the Canada Business Grants website as of October 2026; may not be a comprehensive count of all BIAs.',
		alt: 'Map of Canada showing the number of Business Improvement Areas in each province and territory, more than 343 in total.'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
