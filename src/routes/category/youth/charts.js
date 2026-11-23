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
	'civic_engagement_youths': {
		title: 'More than 14 million children and youth live in Canada in 2025',
		source: 'Statistics Canada (2025) Annual Demographic Estimates',
		alt: 'Bar chart of Canada’s population in 2025 by five-year age group, highlighting the child and youth populations.'
	},
	'civic_engagement_youth-urban': {
		title: 'Where young people live in Canada',
		source: 'Statistics Canada (2025) Annual Demographic Estimates',
		alt: 'Chart comparing the share of the child population (ages 0 to 14), the youth population (ages 15 to 29) and the rest of the population (ages 30+) living in major urban centres (over 100K people), smaller urban centres (10K to 100K people) and outside urban centres.',
		widths: [360, 720],
		image: 'civic_engagement_youth-urban'
	},
	// Inline graphic (one size only, floated beside the text).
	'civic_engagement_metric-purpose': {
		title: '46% of Canadians aged 15–34 had a high sense of meaning and purpose in 2025',
		source: 'Statistics Canada (2025) Canadian Social Survey',
		alt: '46% of Canadians aged 15–34 had a high sense of meaning and purpose in 2025, compared with Canadians of all ages.'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
