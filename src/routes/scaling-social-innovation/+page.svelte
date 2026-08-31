<script>
    import TextTitle from '$lib/TextTitle.svelte';
    import TitleSection from '$lib/TitleSection.svelte';
    import GraphicSingle from '$lib/GraphicSingle.svelte';
    import { base } from '$app/paths';
    import Footnote from '$lib/Footnote.svelte';
    import Footnotes from '$lib/Footnotes.svelte';
	import { createFootnoteStore } from '$lib/footnoteUtils';
    import Password from '$lib/Password.svelte';
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
		'Frances Westley and Nino Antadze, “Making a Difference: Strategies for Scaling Social Innovation for Greater Impact,” <i>Innovation Journal</i> 15, no. 2 (2010), <a href="" target="_blank">URL</a>; Jürgen Howaldt and Josef Hochgerner, “Desperately Seeking: A Shared Understanding of Social Innovation,” in <i>Atlas of Social Innovation: New Practices for a Better Future</i>, 1st ed., ed. Jürgen Howaldt et al. (TU Dortmund University, 2018), <a href="" target="_blank">URL</a>.',
        '“Defining Social Innovation,” Stanford Center for Social Innovation, accessed November 5, 2025, <a href="https://www.gsb.stanford.edu/experience/about/centers-institutes/csi/defining-social-innovation" target="_blank">URL</a>.',
        'David Adams and Michael Hess, “Social Innovation and Why It Has Policy Significance,” <i>The Economic and Labour Relations Review</i> 21, no. 2 (2010): 139–55, <a href="https://doi.org/10.1177/103530461002100209" target="_blank">URL</a>.',
        'Adams and Hess, “Social Innovation and Why It Has Policy Significance,” 144',
        'Adams and Hess, “Social Innovation and Why It Has Policy Significance,” 144',
        'Mark Evans, “Policy Transfer in Critical Perspective,” <i>Policy Studies</i> 30, no. 3 (2009): 243–68, <a href="https://doi.org/10.1080/01442870902863828" target="_blank">URL</a>.',
        'Claudio M. Radaelli, "The diffusion of regulatory impact analysis: Best practice or lesson-drawing?" <i>European Journal of Political Research</i>, 43 (2004): 723-747, <a href="https://doi.org/10.1111/j.0304-4130.2004.00172.x" target="_blank">URL</a>.',
        'Artur Steiner et al., “The Role of Governments and Public Policies in Social Innovation Processes,” <i>Social Enterprise Journal</i> 17, no. 2 (2021): 157–64, <a href="https://doi.org/10.1108/SEJ-05-2021-138" target="_blank">URL</a>.',
        'Steiner et al., “The Role of Governments and Public Policies in Social Innovation Processes.”',
        'Laura Temmerman et al., “Collaborative Governance Platform for Social Innovation in Brussels,” <i>Social Enterprise Journal</i> 17, no. 2 (2021): 165–82, <a href="https://doi.org/10.1108/SEJ-12-2019-0101" target="_blank">URL</a>; Adams and Hess, “Social Innovation and Why It Has Policy Significance”; Robin Murray et al., <i>The Open Book of Social Innovation</i>, vol. 24 (Nesta London, 2010), <a href="http://temp.uefiscdi.ro/edigiregion_v2/the_open_book_of_social_innovationNESTA.pdf" target="_blank">URL</a>.',
        'David P. M. Lam et al., “Scaling the Impact of Sustainability Initiatives: A Typology of Amplification Processes,” <i>Urban Transformations</i> 2, no. 1 (2020): 3, <a href="https://doi.org/10.1186/s42854-020-00007-9" target="_blank">URL</a>.',
        'Michele-Lee Moore et al., “Scaling Out, Scaling Up, Scaling Deep: Strategies of Non-Profits in Advancing Systemic Social Innovation,” <i>Journal of Corporate Citizenship</i> 2015, no. 58 (2015): 67–84, <a href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003579380-7/scaling-scaling-scaling-deep-michele-lee-moore-darcy-riddell-dana-vocisano" target="_blank">URL</a>.',
        'Michele-Lee Moore and Frances Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems,” <i>Ecology and Society</i> 16, no. 1 (2011), <a href="https://www.jstor.org/stable/26268826" target="_blank">URL</a>.',
        'This framing is adapted from Geoff Mulgan, <i>Social Innovation: What It Is, Why It Matters, and How It Can Be Accelerated</i> (2007), <a href="https://samhallsentreprenor.glokala.net/2019-2020/wp-content/uploads/2020/01/Social_Innovation_What_It_Is_Why_It_Matters_and_Ho.pdf" target="_blank">URL</a>.',
        'Moore et al., “Scaling Out, Scaling Up, Scaling Deep.”',
        'Moore and Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems.”',
        'Moore et al., “Scaling Out, Scaling Up, Scaling Deep.”',
        'Moore et al., “Scaling Out, Scaling Up, Scaling Deep.”',
        'Al Etmanski, <i>Impact: Six Patterns to Spread Your Social Innovation</i> (Orwell Cove, 2015), 28.',
        'Moore and Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems,” 9.',
        'Moore and Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems.”',
        'Kriss Deiglmeier, “Scaling Social Innovations: Gaps and Opportunities,” in <i>Atlas of Social Innovation: New Practices for a Better Future</i>, 1st ed., ed. Jürgen Howaldt et al. (TU Dortmund University, 2018).',
        'Moore and Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems.”',
        'Federation of Canadian Municipalities, <i>Making Canada’s Growth a Success: The Case for a Municipal Growth Framework</i> (FCM, 2024), <a href="https://fcm.ca/en/resources/making-canadas-growth-a-success" target="_blank">URL</a>.',
        'Ontario Nonprofit Network, “Regulatory Environment,” accessed November 5, 2025, <a href="https://theonn.ca/topics/policy-agenda/regulation/" target="_blank">URL</a>.',
        'Adams and Hess, “Social Innovation and Why It Has Policy Significance.”',
        'Deiglmeier, “Scaling Social Innovations: Gaps and Opportunities.”',
        'David Wilkinson, “Creating a Sustainable Outcomes Movement,” in <i>What Matters: Investing in Results to Build Strong, Vibrant Communities</i> (Federal Reserve Bank of San Francisco and Nonprofit Finance Fund, 2017), <a href="https://investinresults.org/chapter/creating-sustainable-outcomes-movement.html" target="_blank">URL</a>.',
        'Deiglmeier, “Scaling Social Innovations: Gaps and Opportunities,” 198.',
        'Mark Goldenberg et al., <i>Social Innovation in Canada: An Update</i> (Canadian Policy Research Networks, 2009).',
        'Stephanie Cosner Berzin et al., “Role of State-Level Governments in Fostering Social Innovation,” <i>Journal of Policy Practice</i> 13, no. 3 (2014): 135–55, <a href="https://doi.org/10.1080/15588742.2014.901205" target="_blank">URL</a>.',
        'Cosner Berzin et al., “Role of State-Level Governments in Fostering Social Innovation.”',
        '“Find What Works,” The White House Office of Social Innovation and Civic Participation, accessed November 5, 2025, <a href="https://obamawhitehouse.archives.gov/node/360356" target="_blank">URL</a>.',
        'European Commission, <i>The Framework Programme for Research and Innovation</i> (Horizon 2020) (European Commission, 2020), <a href="https://commission.europa.eu/system/files/2020-06/db_2021_programme_statement_horizon_2020.pdf" target="_blank">URL</a>.',
        'Geoff Mulgan, “Social Innovation: The Last and next Decade,” in <i>Atlas of Social Innovation: New Practices for a Better Future</i>, 1st ed., ed. Jürgen Howaldt et al. (TU Dortmund University, 2018). ',
        'Goldenberg et al., <i>Social Innovation in Canada: An Update</i>.',
        'Wilkinson, “Creating a Sustainable Outcomes Movement.”',
        'Leonie Sandercock, “Out of the closet: The importance of stories and storytelling in planning practice,” in <i>Dialogues in Urban and Regional Planning</i>, eds. Bruce Stiftel and Vanessa Watson (Routledge, 2005): 315-337. ',
        'Karen Chapple, "Creating shared ground through storytelling," in <i>Urban Data Analytics, Visualization, & Storytelling</i>, eds. Jeff Allen, Julia Greenberg, Evelyne St-Louis, Michelle Zhang, Aniket Kali, and Karen Chapple (School of Cities, University of Toronto, 2025), <a href="https://schoolofcities.github.io/urban-data-storytelling/urban-data-storytelling/creating-shared-ground-data-storytelling/creating-shared-ground-data-storytelling.html" target="_blank">URL</a>; James A. Throgmorton, "Planning as persuasive storytelling in a global-scale web of relationships," <i>Planning Theory</i> 2, no. 2 (2003): 125-151, <a href="https://journals.sagepub.com/doi/pdf/10.1177/14730952030022003" target="_blank">URL</a>.',
        'Moore and Westley, “Surmountable Chasms: Networks and Social Innovation for Resilient Systems”; indeed, this is one of our goals with this volume.',
        'Goldenberg et al., <i>Social Innovation in Canada: An Update</i>.',
        'Goldenberg et al., <i>Social Innovation in Canada: An Update</i>.',
        'Juan-Luis Klein, “Social Innovation in Québec and the Co-Construction of Knowledge,” in <i>Atlas of Social Innovation: New Practices for a Better Future</i>, 1st ed., ed. Jürgen Howaldt et al. (TU Dortmund University, 2018).',
        'Marie J. Bouchard, “Introduction: The Social Economy in Québec: A Laboratory of Social Innovation,” in <i>Innovation and the Social Economy: The Quebec Experience</i> (University of Toronto Press, 2013), <a href="https://doi.org/10.3138/9781442695092" target="_blank">URL</a>.',
        'Bouchard, “The Social Economy in Québec.”',
        'Goldenberg et al., <i>Social Innovation in Canada: An Update</i>.',
        'In the realm of social policy, the roots of this disconnect may not only be linguistic, but legislative: Quebec’s civil judicial code forms the basis of its provincial laws, whereas the legal foundation of the other provinces and the federal government is found in common law.',
        'Steiner et al., “The Role of Governments and Public Policies in Social Innovation Processes,” 6.',
        'Canadian Council for Aboriginal Business, <i>Indigenous Perspectives on Social Innovation and Social Finance in Canada</i> (2021), <a href="https://www.ccib.ca/wp-content/uploads/2021/07/Indigenous-Perspectives-on-Social-Innovation-and-Social-Finance-in-Canada-WEB-ERG.pdf" target="_blank">URL</a>.',
        'Andrea Nemtin, “Honouring Indigenous-Led Social Innovation and the Work Ahead,” <i>Social Innovation Canada</i>, June 27, 2025, <a href="https://sicanada.org/2025/06/27/honouring-indigenous-led-social-innovation-and-the-work-ahead/" target="_blank">URL</a>.',
        'Adams and Hess, “Social Innovation and Why It Has Policy Significance.”',
        'Tomas Hachard, <i>A Seat at the Table: Municipalities and Intergovernmental Relations in Canada</i>, Urban Project Series, IMFG Papers (Institute on Municipal Finance and Governance, 2022).',
        'Provincial Priorities Act, Bill 18 (Legislative Assembly of Alberta, 2024), <a href="https://www.assembly.ab.ca/assembly-business/bills/bill?billinfoid=12036&from=bills" target="_blank">URL</a>; Act Respecting the Ministère Du Conseil Exécutif, M-30 (National Assembly of Quebec, 1984), sec. 3.11, <a href="https://www.legisquebec.gouv.qc.ca/fr/document/lc/m-30?langCont=en" target="_blank">URL</a>.',
        'With thanks to Etmanski, <i>Impact: Six Patterns to Spread Your Social Innovation</i> for this quotation. It does not appear in Gibson’s writings but can be heard in the interview “The Science in Science Fiction,” <i>Talk of the Nation</i>, NPR, November 30, 1999, <a href="http://www.npr.org/templates/story/story.php?storyId=1067220" target="_blank">URL</a>.'
    ];
</script>

<svelte:head>
    <title>Scaling Social Innovation - Local Solutions | School of Cities</title>
</svelte:head>


<div>

    <Password/>

    <TitleSection Title="Scaling social innovation in Canada:" 
        Subtitle="DOING MORE OF WHAT WORKS" 
        Chapter=""/>
    
    <div class="body-text">
        <TextTitle title="SOCIAL INNOVATION: A LOCAL STRENGTH" chapter="Scaling social innovation"/>
        <p>
            The programs and initiatives explored in this volume are creative, local approaches to solving some of Canada’s most pressing problems. They provide evidence that people across the country can come together and make their communities more vibrant, welcoming, and livable. The purpose of this chapter is to ask two important questions: what made these solutions work? And how can this kind of progress be encouraged in more places? 
        </p>
        <p>
            To answer these questions, a research team at the School of Cities analyzed the common factors that drove success across all the solutions submitted to the competition, and interviewed a select group of 16 finalists. We complemented this primary research with a review of the literature on scaling, replication, and policy transfer in the social sector. We then convened a multidisciplinary group of experts working in fields as diverse as geography, law, social work, and engineering – in both academia and community practice – to understand how these ideas play out in Canadian organizations today.  
        </p>
        <p>
            The local solutions in the chapters that follow are examples of social innovation. Though the term originates from the nineteenth century, social innovation has become an increasingly popular way to describe the collaborative processes that over time challenge the beliefs of the existing social system and change how resources, authority, and information flow.<Footnote id={addFootnote(fns[0])}/>  Social innovation can be practised by government, the private sector, or by advocacy movements and non-profits – often, it is achieved by groups from several of these sectors working together.<Footnote id={addFootnote(fns[1])}/> It is the most recent evolution of the social support structure, one that moves away from both state- and market-driven welfare provision to a model based instead on co-creation and on direct investment in communities.<Footnote id={addFootnote(fns[2])}/>
        </p>
        <p>
            Many social innovations are successful because they are local. Innovation policy thinkers David Adams and Michael Hess note that innovation at the local scale “draws together sets of otherwise contrary influences which can be mediated around place rather than setting up a dynamic of competition for scarce resources.”<Footnote id={addFootnote(fns[3])}/> Collaboration at the local level can produce a range of outsized impacts, from a group of small businesses working together to launch a downtown core revival to rival corporations establishing a network in order to learn from each other about managing waste and energy use. Local communities are a source of core identity and shared values, and encourage pride which can overcome competitive instincts.<Footnote id={addFootnote(fns[4])}/> 
        </p>
        <p>
            It follows, then, that it is often difficult to move beyond the local to scale up social innovations or replicate them elsewhere. Social programs are not widgets. Context is everything, which is why we do not consider the solutions in this volume to be silver bullets. There is no one-size-fits-all solution that can be applied everywhere without modification. It is also important to acknowledge the long history of policy transfer via colonial or other coercive means: the imposition of ideas on unwilling populations without regard to their unique population, circumstances, or preferences. Even where there is not, strictly speaking, coercion, higher-level governments and even international organizations may  strongly encourage processes of policy transfer as a condition of  funding, or to keep regions from “falling behind.”<Footnote id={addFootnote(fns[5])}/> These “best practice” approaches tend to discount the importance of local  institutions and traditions, and rarely inspire genuine enthusiasm from  those assigned to implement them, lowering the odds of success.<Footnote id={addFootnote(fns[6])}/>
        </p>
        <p>
            A decentralized approach often involves residents more closely in addressing the issues that affect their daily lives – a benefit even though it can make standardization challenging.<Footnote id={addFootnote(fns[7])}/> Close co-creation with communities is a feature of the ideas in this volume, from retrofitting homes to designing community centres to building housing for local conditions. Social innovation can therefore be a democratizing force in that it rebalances power, encouraging new ideas and practices to flow from the bottom up.<Footnote id={addFootnote(fns[8])}/>
        </p>
        <p>
            In addition to the context of place, social innovations must also consider the context of time: problems evolve, and may need to be solved more than once. Social innovations addressing them must evolve in tandem. The process aspect of social innovation is significant: the act of working through the problem with others is part of the solution. It builds capacity and forms relationships, which can be leveraged again and again.<Footnote id={addFootnote(fns[9])}/>
        </p>
        <TextTitle title="SCALING UP: INSTITUTIONALIZING CHANGE WITH GOVERNMENT SUPPORT" background="Blue"/>
        <p>
            The desire to learn from and copy what works is not new. In recent years, this process has been called “applied dissemination,” “social diffusion,” “amplification,” and “replication.”<Footnote id={addFootnote(fns[10])}/> Here we use the term “scaling” to describe the process of achieving widespread and holistic change with an innovation beyond its original place or institution.<Footnote id={addFootnote(fns[11])}/>  
        </p>
        <p>
            Scaling can be conceptualized in different ways. One is replicating a solution in different geographies or sectors – “scaling out.” Akin to the kind of growth experienced by a new product or invention, scaling out involves diffusion via networks, funding support to grow further, and then, eventually, saturation.<Footnote id={addFootnote(fns[12])}/> It occurs through different types of organizational structures: 
        </p>    
            <ul>
                <li>
                    <b>Direct scaling:</b> adding more people to an organization to expand its capability and reach 
                </li>
                <li>
                    <b>Franchising:</b> replicating the model with different local leadership but the same overarching infrastructure 
                </li>
                <li>
                    <b>Adaptation:</b> Inspiring change through storytelling so others can learn from and apply the model in their local context.<Footnote id={addFootnote(fns[13])}/>
                </li>
            </ul>
        <p>
            There can be profound potential for change in linking different communities or implementing similar solutions across sectors, such as health care and education – but this type of scaling can be ad hoc and slow, and requires sustained effort from the initial implementing organization(s). Because the ideas explored in this volume are place-based and most often  employed at the municipal level – or at an even smaller scale – direct  scaling or franchising may not be the goal of the organizations behind them. It also may not be productive, and would require organizational changes and new capabilities.<Footnote id={addFootnote(fns[14])}/> For most social innovations, adaptation is the most likely method of dissemination. 
        </p>
        <p>
            Repeated instances of adaptation are the best way for an innovation that is spreading beyond its origins to incorporate local context, but a more efficient method for making systemic change is often the institutionalization of social policy. This is referred to as “scaling up”: codifying the innovation into rules, law or policy, whether at the local level or via another order of government. Scaling up can bring more resources to a problem and can make adoption of a solution more widespread.<Footnote id={addFootnote(fns[15])}/> This type of change requires a different skill set from the original innovating institution, one which may include advocacy and policy development.<Footnote id={addFootnote(fns[16])}/>
        </p>
        <p style:margin-bottom="50px;">
            More recent scholarship has added “scaling deep” to the list of possibilities: changing mindsets, relationships, and values over time.<Footnote id={addFootnote(fns[17])}/> Scaling deep involves going beyond creating a solution to redefining the problem. An example is the recent evolution of the way that Canadians think about housing and homelessness, which has largely shifted from a focus on reducing the stigma around homelessness to considering housing a human right. Scaling deep often involves an element of education, as it involves a fundamental, often generational, change in not just what is done, but how it is done. 
        </p>
        <TextTitle title="HOW TO SCALE: A FRAMEWORK FOR GROWTH"/>
        <p>
            Following the framework of scaling out, up, and deep, this section brings together theory and practice to identify four key themes that emerged from our research as key to starting and growing social initiatives in Canada: 
        </p>
        <ul>
            <li>
                <b>Beginnings:</b> The role of champions in getting ideas off the ground
            </li>
            <li>
                <b>Scaling out:</b> Replication through networks and funding
            </li>
            <li>
                <b>Scaling up:</b> Active government support for institutionalization 
            </li>
            <li>
                <b>Scaling deep:</b> Changing mindsets through co-creation and storytelling
            </li>
        </ul>
        <p>
            Because different initiatives may take different approaches to dissemination, these should not be considered hierarchical or linear stages, nor mutually exclusive paths, but interconnected strategies that enable programs to grow however is most appropriate. 
        </p>
        
        <GraphicSingle
            svg720={`${base}/web-assets/scaling-social-innovation/Scaling Policy.svg`}
            svg360={`${base}/web-assets/scaling-social-innovation/Scaling Policy_360.svg`}
        />

        <p style:margin-bottom="50px;"></p>
        <TextTitle title="BEGINNINGS: FINDING AND NURTURING CHAMPIONS" background="Blue"/>
        <p>
            Social innovations are often initiated by entrepreneurial types who in traditional innovation discourse might be known as “disrupters.”<Footnote id={addFootnote(fns[18])}/> These early advocates – champions – may be individuals working alone or within non-profits large or small, anchor institutions like universities and churches, government departments, or the private sector. A common catalyst for change in the initiatives included in this report was the realization that an existing system was not working, and that community actors not only had the best opportunity, but the responsibility, to generate solutions. Early-stage innovators are rarely experts, but they gain traction by their ability to clearly articulate the problem and their willingness to experiment with a solution.
        </p>

        <p>
            Different champions emerge at different times. Innovators and entrepreneurs push an idea forward at its early stages, providing energy and conviction. They are also often powerful representatives who can retell the origin story to sustain momentum and “recharge” a movement in difficult times.<Footnote id={addFootnote(fns[19])}/> Mentors can also be champions, connecting the initiative to funders or other experts to help it grow. Institutional brokers, in turn, understand the specifics of an initiative and how to frame the cause to attract broader support. As champions, they may identify policy windows of opportunity that help to build a wider movement, and are often key actors in scaling up.<Footnote id={addFootnote(fns[20])}/>
        </p>

        <p style:margin-bottom="50px;">
            Communities of practice help to nurture initiatives and build capacity in organizations, and several of the innovations in the chapters that follow built these intentionally as their programs grew. Funders routinely play this role, including the Tamarack Institute, the McConnell Foundation, and the Ontario Trillium Foundation. These organizations scale by mentoring local champions across the country (sometimes youth or those without formal leadership experience) to build their skills, creating a virtuous cycle of change, which can also aid in succession planning.<Footnote id={addFootnote(fns[21])}/> Another example is in the growing social procurement movement, a core aspect of which is the iterative process of bringing purchasers and suppliers together via career days or information sessions to understand how local vendors can work with social impact suppliers.
        </p>

        <TextTitle title="SCALING OUT: THE ROLE OF NETWORKS AND FUNDING" background="Blue"/>

        <p>
        Moving from local innovation to broader diffusion and systemic change requires networks. Extensive social networks of acquaintances or colleagues bring novelty and diversity of approaches, which can spur innovation, while close networks built on trust and mutual support will help to overcome competitive interests and support long-term change.<Footnote id={addFootnote(fns[22])}/> Networks bridge gaps in knowledge, resources, and geography – essential for transformative impact.
        </p>

        <p>
            There are many examples of networks in Canada that spread social innovation. Under the auspices of Code for Canada, the growing civic tech movement has been a proving ground that brings residents and local governments from Edmonton to Fredericton together for open data problem-solving for the public good. Business Improvement Areas (BIAs), a Canadian invention, are playing an ever-larger role in city-building and sharing innovations with each other through joint initiatives and annual conferences. The Canadian Network of Community Land Trusts now counts over 40 organizations as members, and is sharing resources and knowledge across urban and rural environments to build up the sector.
        </p>

        <p>
            In addition to convening and educating, member networks can use their collective influence to raise issues for the attention of governments, potentially sparking policy changes. The Federation of Canadian Municipalities, which represents the interests of over 2,000 municipalities across Canada, has secured significant federal funding for infrastructure, housing, and climate adaptation, and continues to lobby for a fiscal structure that is more equitable for municipalities.<Footnote id={addFootnote(fns[23])}/> To give a provincial example, the Ontario Nonprofit Network represents nearly 60,000 non-profits in every sector across the province, advocating with a united voice for dedicated ministerial support in government, as well as for legislation that recognizes non-profits as a unique model of work.<Footnote id={addFootnote(fns[24])}/>
        </p>

        <p>
            It is in scaling out that initiatives generally require the most financial support. Many social innovations are the result of short-term start-up grants and lack sustained funding.<Footnote id={addFootnote(fns[25])}/> In the tech world, this stage is called the “valley of death” – the time when an initiative often has more need for capital or resources but is not yet self-sustaining (or revenue-generating, in the for-profit sector). This is where most innovations, social or not, tend to fail. After this point, success tends to breed success in the private sector as a product or initiative becomes sufficiently known.<Footnote id={addFootnote(fns[26])}/>
        </p>

        <p>
            With new businesses, this gap is filled by angel investors, who provide capital in exchange for debt or ownership equity. With social programs, longer funding runways play a similar role: it is not surprising that many of the solutions featured here that had the most impact had three or even five years of guaranteed funding, allowing them to build trust in their relationships and to seed lasting change. Both government and philanthropic support for overhead costs can help to build organizational capacity in this way, strengthening the social innovation sector as a whole.<Footnote id={addFootnote(fns[27])}/>
        </p>
        <p style:margin-bottom="50px;">
            Still, even this approach does not guarantee long-term success, since funding for growth can be difficult to find even when a program is successful, and social programs by their nature may not ever achieve the market efficiencies common with private-sector products or technology.<Footnote id={addFootnote(fns[28])}/> Canada’s philanthropic sector is relatively small, with only a few large foundations; government can play a role in providing additional funding where ideas have been proven to work.<Footnote id={addFootnote(fns[29])}/> But funding social innovation should not be the responsibility of government alone. New financial models, such as community and social impact bonds, can engage individual or corporate investors and create partnerships while funding larger-scale solutions.<Footnote id={addFootnote(fns[30])}/> Co-operative models of various kinds – from banks to housing – should be strengthened with legal supports. And recognizing new types of entities, such as benefit corporations (B corps), can encourage private sector actors to work toward positive social change in addition to profit.<Footnote id={addFootnote(fns[31])}/>
        </p>

        <TextTitle title="SCALING UP: INSTITUTIONALIZING CHANGE WITH GOVERNMENT SUPPORT" background="Blue"/>

        <p>
            Most social innovations originate with community partners, but governments can and should play a significant role in sustaining them once they have been shown to be effective. Although examples of government incubators or accelerators that help diffuse and scale social programs are rare, a few high-profile exceptions show that they can be beneficial. During his first term, Barack Obama established the Office of Social Innovation and Civic Participation to draw attention to the role of social innovation in solving societal challenges with a formal bureaucratic infrastructure to facilitate learning at scale. In addition to shining a powerful spotlight on local solutions across the country in areas as diverse as mental health, education, and housing, it facilitated formal channels for policy learning across sectors that are usually disconnected from each other.<Footnote id={addFootnote(fns[32])}/> The office also established funding channels in partnership with the private sector and created a framework to help organizations understand and measure their impact. Housing this kind of mentoring, financial support, and measurement under a single department is a powerful way to make use of government infrastructure to elevate local social innovations. The Horizon 2020 innovation initiative of the European Union/European Commission featured a Societal Challenges pillar that played a similar role on that continent.<Footnote id={addFootnote(fns[33])}/>
        </p>

        <p>
            Closer to home, some institutions are providing this kind of space at the municipal and provincial level. The Centre for Social Innovation in Toronto has brought together 5,500 social innovation non-profits, providing a dedicated space for co-working and events and encouraging reciprocal learning and cross-pollination among its members.<Footnote id={addFootnote(fns[34])}/> The Institute for Social Innovation and Resilience at the University of Waterloo and the MaRS Solutions Lab at the University of Toronto are internationally recognized centres that bring together academic, government, non-profit, and industry partners to spur ideas and entrepreneurship in the social sector. Together, these initiatives have expanded the reach of Canadian innovation beyond our borders to create international learning networks and establish Canada as a leader in disseminating great ideas.
        </p>
        <p style:margin-bottom="50px;">
            Policy change often lags well behind societal change and merely reinforces it, but governments can perform another role in spurring social innovation through legislation and regulation frameworks that incentivize non-profit activity. Reducing reporting requirements in social sectors, for example, ensures more staff time and money is spent on effecting change: red tape stifles innovation in the social sector just as it does elsewhere.<Footnote id={addFootnote(fns[35])}/> Some non-profit funders (like the Tamarack Institute) take on the burden of reporting on behalf of partners, but a higher-level rethinking of the purpose that reporting requirements serve can take this a step further. David Wilkinson, director of the Office of Social Innovation and Civic Participation, instituted a focus on outcomes, noting that finding “what works” can in fact be quite difficult, because most government funding rewards proposals rather than results, and reporting requirements often focus on aspects of the initiative unrelated to actual outcomes. The process of collecting, tracking, and analyzing the data required by funders takes time away from the core work of social service agencies, and may require an entirely separate skill set from staff members. The result is that the reporting process is often seen as not only “time-consuming, costly, and redundant” but potentially actively distracting.<Footnote id={addFootnote(fns[36])}/> Perhaps the most effective approach from governments to spur innovation would be to provide guidance – and then step aside.
        </p>

        <TextTitle title="SCALING DEEP: CO-CREATING AND SHARING KNOWLEDGE" background="Blue"/>

        <p>
            There is growing recognition of storytelling as a tool for sharing success, but its role goes beyond promotion. Storytelling helps to sharpen an organization’s sense of purpose and build internal coherence.<Footnote id={addFootnote(fns[37])}/> At its best, it creates shared ground by meeting audiences where they are, acknowledging different perspectives, and spurring empathy – thus prompting action.<Footnote id={addFootnote(fns[38])}/> Stories can help organizations develop and connect with new followers who may help them move their work forward, including policy-makers who can institutionalize their work. Data literacy is important here, not only for measuring the impact of social innovations but for understanding what should be measured in the first place.
        </p>
        <p>
            Outside of innovators themselves, foundations, the media, and academic institutions can help contextualize social change. Public awards from these kinds of institutions draw attention to good work and can provide validation and a renewed sense of purpose that recharges momentum to overcome periods of difficulty.<Footnote id={addFootnote(fns[39])}/> Awards and media coverage also play a role in broadening the range of individuals and organizations that are recognized for the work of social change, opening doors for new people to get involved in social innovation leadership. Focusing on outcomes emphasizes results over name recognition, potentially attracting wider financial support beyond the handful of organizations who tend to receive the majority of philanthropic funding, and increasing the capacity of the sector overall.<Footnote id={addFootnote(fns[40])}/>
        </p>
        <p style:margin-bottom="50px;">
            Knowledge mobilization is now routinely considered a formal part of Canadian academic work, following efforts by the Social Sciences and Humanities Research Council of Canada (SSHRC) to build capacity for it in the 2000s.<Footnote id={addFootnote(fns[41])}/> Academic institutions working in concert with governments and communities can take this a step further: the government of Quebec explicitly endorsed co-creating research and social policy with local actors in the 1980s with the creation of its Centre de recherche sur les innovations sociales (CRISES). This multidisciplinary, multi-university research centre has played a central role in the dissemination of Quebec’s innovations in micro-finance, solidarity finance, and co-operative governance models.<Footnote id={addFootnote(fns[42])}/> This structure, known loosely as the “social economy,” includes a wider range of sectors and organizations in the province than in other parts of Canada – such as non-profits like trade unions, and even parts of the private sector when they are doing work for public benefit.<Footnote id={addFootnote(fns[43])}/> CRISES is effectively the institutionalization of Quebec’s social economy framework, which has explicit goals of democratizing the economy and challenging social norms.<Footnote id={addFootnote(fns[44])}/>
        </p>
        
        <TextTitle title="CONCLUSION: BREAKING DOWN BARRIERS TO SCALE SOCIAL INNOVATION IN CANADA"/>
        <p>
            In the last two decades, Canada has made great progress in scaling social innovations – up, out, and deep – but major gaps still exist, both real and imagined. Quebec’s social economy structure is a long-standing, global example of innovation, and well integrated in European networks, but little known in the rest of Canada.<Footnote id={addFootnote(fns[45])}/> The two solitudes persist in this realm as in so many others.<Footnote id={addFootnote(fns[46])}/>
        </p>
        <p>
            With many knowledge-sharing networks and funding programs structured by city size, urban and rural areas have comparatively few mechanisms to learn from each other. Innovation can also look different in rural places, where it often takes the form of communities filling in gaps in local service provision. This kind of innovation may not always capture the attention of funding programs, which are frequently “geared towards innovative (read ‘shiny and new’) approaches to creating new infrastructure, often without a contextual understanding of the needs of citizens.”<Footnote id={addFootnote(fns[47])}/> The same is true for remote and Northern contexts, with their small populations and large infrastructure deficits. 
        </p>
        <p>
            The barriers to scaling rural, remote, and Northern social innovation are echoed in the way Indigenous knowledge and practice have been largely overlooked in the broader social innovation movement. Many Indigenous communities are far from financial centres where funding capital is located, and cultural and legal barriers can impede knowledge transfer as much as geography.<Footnote id={addFootnote(fns[48])}/> Yet many of the most successful strategies for scaling social innovation are already core aspects of Indigenous teachings, including deep consensus building, holistic problem-solving, and a close connection with place.<Footnote id={addFootnote(fns[49])}/> Indeed, some Canadian social innovations (including some featured in this volume) explicitly incorporate Indigenous ways of knowing into their practices as a way of furthering reconciliation.
        </p>
        <p>
            Canadian organizations still reflect the perceived cultural chasms between east and west, rich and poor, coast and interior, small town and large city – despite social progress occurring in every part of the country. This matters because we do not expect to learn from those we see as fundamentally different. Information-sharing networks have broken down these silos to an extent for larger municipalities, but other kinds of jurisdictions – for example, suburbs in different areas of the country – rarely have opportunities for mutual learning. Often, the missing link is elected officials giving the public service license to work beyond municipal boundaries. Cultural cringe also plays a role, with many cities seeking to learn from their international “peers” – in some cases more of an aspirational framing than a realistic one – rather than looking elsewhere within Canada, or even within their own metropolitan regions, for great ideas.
        </p>
        <p>
            Barriers exist to the transfer of knowledge not just across horizontal gaps but vertical ones: successful innovations are not often shared between orders of government. Provincial and territorial governments are well positioned to facilitate and institutionalize change by spreading innovations across sectors and regions,<Footnote id={addFootnote(fns[50])}/> but knowledge rarely flows in the other direction. There are even fewer formal mechanisms for collaboration between the municipal and federal levels,<Footnote id={addFootnote(fns[51])}/> and in some cases (including in both Quebec and Alberta), laws prevent such partnerships without prior provincial authorization.<Footnote id={addFootnote(fns[52])}/> Such legislation has the effect of smothering innovation before it can even get going. Many of the problems Canadian municipalities face are complicated, long-standing, and deeply entrenched, but the ideas that follow in this volume are evidence that we can make progress toward solving them. As Canadian-American author William Gibson has said, “The future is already here – it's just not very evenly distributed.”<Footnote id={addFootnote(fns[53])}/> May the chapters that follow be a call to distribute our shared success more evenly and creatively, and find ways to nurture the ideas and organizations that are implementing them.
        </p>
    </div>
    
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>