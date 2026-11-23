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
	'sustainability_wildfire-bars': {
		title: 'Total area burned by wildfires in Canada',
		source: 'Canadian Interagency Forest Fire Centre (2023), Canadian National Fire Database (1999-2026), Wikipedia',
		alt: 'Bar chart of the total area burned by wildfires in Canada each year from 1999 to 2025. The 2023 bar, at 17,203,625 hectares, is far taller than any other year.',
		widths: [360, 720],
		image: 'sustainability_wildfire-bars'
	},
	'sustainability_climate-risk-maps': {
		title: 'Impacts of climate change across Canada',
		source: 'The Climate Conflict Vulnerability Index (2025)',
		alt: 'Six maps of Canada showing where sea-level rise, drought, deforestation, wildfires, biodiversity loss and flooding pose risks, each with a short note on its impacts.',
		widths: [360, 720],
		image: 'sustainability_climate-risk-maps'
	},
	'sustainability_watersheds-map': {
		title: 'Canada’s watersheds',
		source: 'HydroSHEDS (2013), Environment and Climate Change Canada (2020)',
		alt: 'Map of Canada’s watersheds, coloured by whether they drain to the Arctic Ocean, Pacific Ocean, Hudson Bay, Atlantic Ocean or Gulf of Mexico. 60% of Canada’s fresh water drains north.',
		widths: [360, 720],
		image: 'sustainability_watersheds-map'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
