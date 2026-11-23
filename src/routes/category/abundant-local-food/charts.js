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
	'abundant_food_CPI_comparison': {
		title: 'Change in Consumer Price Index, 2016-2025',
		subtitle: 'Percent change relative to 2016',
		source: 'Statistics Canada (2017, 2025) Consumer Price Index, monthly, not seasonally adjusted',
		alt: 'Line chart of the percent change in the Consumer Price Index relative to 2016, from 2016 to 2025.',
		widths: [360, 720],
		image: 'abundant_food_CPI_comparison'
	},
	'wealth_dignity_food-insecurity': {
		title: 'Food insecurity among types of families in Canada (2021)',
		source: 'Data source: Statistics Canada (2021) Canadian Income Survey.',
		note: '“Major income earner” is defined as the person with the highest income within a household or family unit before taxes',
		alt: 'Bar chart comparing the prices of various abundant local food items across different regions.',
		widths: [360, 720],
		image: 'wealth_dignity_food-insecurity'
	},
	'abundant_food_item_prices': {
		title: 'Change in price of selected food items, 2017-2026',
		subtitle: 'Percentages calculated using the monthly Consumer Price Index to account for inflation',
		source: 'Statistics Canada (2017, 2026) Monthly average retail prices for selected products, Consumer Price Index, monthly, not seasonally adjusted',
		alt: 'Chart comparing the change in price of selected food items from 2017 to 2026, with percentages calculated using the monthly Consumer Price Index to account for inflation.',
		widths: [360, 720],
		image: 'abundant_food_item_prices_colour'
	},
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
