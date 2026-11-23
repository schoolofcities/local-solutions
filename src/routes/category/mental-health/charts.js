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
	'civic_engagement_municipal_comparison_2026': {
		title: 'Selected federal versus municipal election voter turnout rates',
		subtitle: 'Results from the 2025 federal election and 2026 municipal elections',
		source: 'Elections Canada (2025); Association of Municipalities of Ontario, 2026 Ontario Municipal Elections (unofficial); City of Vancouver (2026); City of Winnipeg (2026); City of Yellowknife (2026). *Federal election voter turnout was calculated as the weighted average voter turnout for all federal electoral districts within the municipality.',
		alt: 'Bar chart comparing voter turnout in the 2025 federal election with turnout in the 2026 municipal elections for Ottawa, Toronto, Vancouver, Winnipeg and Yellowknife. Federal turnout ranged from 54.9% to 76.3%, while municipal turnout ranged from 36.2% to 45.8%.',
		widths: [360, 720],
		image: 'civic_engagement_municipal_comparison_2026'
	},
	'civic_engagement_informal_volunteering': {
		title: 'Rate of informal volunteering in Canada',
		subtitle: 'Percentage of individuals who gave direct help to someone living outside of their household or improved their community, on their own and not as part of a group or organization, in the past 12 months.',
		source: 'Statistics Canada General Social Survey (2004, 2007, 2010, 2013, 2018, 2023).',
		alt: 'Line chart of the rate of informal volunteering in Canada from 2004 to 2023, showing a 17% decrease from 2004.',
		widths: [360, 720],
		image: 'civic_engagement_informal_volunteering'
	},
	'civic_engagement_misinformation': {
		title: 'Level of trust in news or information sources',
		source: 'Statistics Canada (2023) Survey Series on People and their Communities. Percents rounded to nearest integer.',
		alt: 'Stacked bar chart showing the share of people in Canada who find each news or information source trusted, neutral or not trusted: social media posts by other users, other Internet sources, news organizations, provincial/territorial or municipal government communications, federal government communications, close contacts, and scientific experts or peer-reviewed journals.',
		widths: [360, 720],
		image: 'civic_engagement_misinformation'
	}
};

export default resolveDownloads(charts, { dataUrls, pngUrls, embedMeta });
