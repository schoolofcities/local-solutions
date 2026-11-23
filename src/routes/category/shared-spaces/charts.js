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
	'community-spaces_belonging-bar-chart': {
		title: 'Sense of belonging across different groups in Canada',
		source: 'Statistics Canada (2024) Canadian Social Survey',
		note: 'Totals may not equal 100% due to respondents selecting "No opinion on sense of belonging to local community" as an option.',
		alt: 'Bar chart comparing the share of people with a strong or weak sense of belonging to their local community, for all people in Canada and for immigrants, Indigenous people, retired and working people, visible minorities, LGBTQ2+ people, and urban and rural residents.',
		widths: [360, 720],
		image: 'community-spaces_belonging-bar-chart'
	},
	'community-spaces_percapita': {
		title: 'Community spaces across Canada in 2022',
		subtitle: 'Publicly owned culture, recreation and sport facilities per 100,000 people.',
		source: 'Statistics Canada (2022) Canada’s Core Public Infrastructure Survey',
		alt: 'Icon chart of publicly owned facilities per 100,000 people in Canada in 2022: 116.6 parks, 12.1 community centres, 7.2 ice facilities, 7.1 libraries, 3.8 museums and archives, 1.9 indoor pools, 1.6 performing arts theatres, 0.9 art galleries and 0.2 Indigenous culture facilities.',
		widths: [360, 720],
		image: 'community-spaces_percapita'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
