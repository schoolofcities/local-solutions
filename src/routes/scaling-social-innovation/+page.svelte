<script>
    import TextTitle from '$lib/TextTitle.svelte';
    import TitleSection from '$lib/TitleSection.svelte';
    import ImageSingle from '$lib/ImageSingle.svelte';
    import { base } from '$app/paths';
    import Footnote from '$lib/Footnote.svelte';
    import Footnotes from '$lib/Footnotes.svelte';
	import { createFootnoteStore } from '$lib/footnoteUtils';
    
	const footnoteStore = createFootnoteStore();
	const { footnotes, addFootnote } = footnoteStore;

	const fns = [
		'Frances Westley and Nino Antadze, “Making a Difference: Strategies for Scaling Social Innovation for Greater Impact,” <i>Innovation Journal</i> 15, no. 2 (2010), <a href="" target="_blank">URL</a>; Jürgen Howaldt and Josef Hochgerner, “Desperately Seeking: A Shared Understanding of Social Innovation,” in <i>Atlas of Social Innovation: New Practices for a Better Future</i>, 1st ed., ed. Jürgen Howaldt et al. (TU Dortmund University, 2018), <a href="" target="_blank">URL</a>.'
    ];
</script>

<div>
    <TitleSection Title="Scaling social innovation IN CANADA:" 
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
            The local solutions in the chapters that follow are examples of social innovation. Though the term originates from the nineteenth century, social innovation has become an increasingly popular way to describe the collaborative processes that over time challenge the beliefs of the existing social system and change how resources, authority, and information flow.<Footnote id={addFootnote(fns[0])}/>  Social innovation can be practised by government, the private sector, or by advocacy movements and non-profits – often, it is achieved by groups from several of these sectors working together.2 It is the most recent evolution of the social support structure, one that moves away from both state- and market-driven welfare provision to a model based instead on co-creation and on direct investment in communities.3 
        </p>
        <p>
            Many social innovations are successful because they are local. Innovation policy thinkers David Adams and Michael Hess note that innovation at the local scale “draws together sets of otherwise contrary influences which can be mediated around place rather than setting up a dynamic of competition for scarce resources.”4 Collaboration at the local level can produce a range of outsized impacts, from a group of small businesses working together to launch a downtown core revival to rival corporations establishing a network in order to learn from each other about managing waste and energy use. Local communities are a source of core identity and shared values, and encourage pride which can overcome competitive instincts.5 
        </p>
        <p>
            It follows, then, that it is often difficult to move beyond the local to scale up social innovations or replicate them elsewhere. Social programs are not widgets. Context is everything, which is why we do not consider the solutions in this volume to be silver bullets. There is no one-size-fits-all solution that can be applied everywhere without modification. It is also important to acknowledge the long history of policy transfer via colonial or other coercive means: the imposition of ideas on unwilling populations without regard to their unique population, circumstances, or preferences. Even where there is not, strictly speaking, coercion, higher-level governments and even international organizations may  strongly encourage processes of policy transfer as a condition of  funding, or to keep regions from “falling behind.”6 These “best practice” approaches tend to discount the importance of local  institutions and traditions, and rarely inspire genuine enthusiasm from  those assigned to implement them, lowering the odds of success.7 
        </p>
        <p>
            A decentralized approach often involves residents more closely in addressing the issues that affect their daily lives – a benefit even though it can make standardization challenging.8 Close co-creation with communities is a feature of the ideas in this volume, from retrofitting homes to designing community centres to building housing for local conditions. Social innovation can therefore be a democratizing force in that it rebalances power, encouraging new ideas and practices to flow from the bottom up.9
        </p>
        <p>
            In addition to the context of place, social innovations must also consider the context of time: problems evolve, and may need to be solved more than once. Social innovations addressing them must evolve in tandem. The process aspect of social innovation is significant: the act of working through the problem with others is part of the solution. It builds capacity and forms relationships, which can be leveraged again and again.10
        </p>
        <TextTitle title="SCALING UP: INSTITUTIONALIZING CHANGE WITH GOVERNMENT SUPPORT" background="Blue"/>
        <p>
            The desire to learn from and copy what works is not new. In recent years, this process has been called “applied dissemination,” “social diffusion,” “amplification,” and “replication.”11 Here we use the term “scaling” to describe the process of achieving widespread and holistic change with an innovation beyond its original place or institution.12  
        </p>
        <p>
            Scaling can be conceptualized in different ways. One is replicating a solution in different geographies or sectors – “scaling out.” Akin to the kind of growth experienced by a new product or invention, scaling out involves diffusion via networks, funding support to grow further, and then, eventually, saturation.13 It occurs through different types of organizational structures: 
        </p>    
            <ul>
                <li>
                    <b>Direct scaling:</b> adding more people to an organization to expand its capability and reach 
                </li>
                <li>
                    <b>Franchising:</b> replicating the model with different local leadership but the same overarching infrastructure 
                </li>
                <li>
                    <b>Adaptation:</b> Inspiring change through storytelling so others can learn from and apply the model in their local context.14 
                </li>
            </ul>
        <p>
            There can be profound potential for change in linking different communities or implementing similar solutions across sectors, such as health care and education – but this type of scaling can be ad hoc and slow, and requires sustained effort from the initial implementing organization(s). Because the ideas explored in this volume are place-based and most often  employed at the municipal level – or at an even smaller scale – direct  scaling or franchising may not be the goal of the organizations behind them. It also may not be productive, and would require organizational changes and new capabilities.15 For most social innovations, adaptation is the most likely method of dissemination. 
        </p>
        <p>
            Repeated instances of adaptation are the best way for an innovation that is spreading beyond its origins to incorporate local context, but a more efficient method for making systemic change is often the institutionalization of social policy. This is referred to as “scaling up”: codifying the innovation into rules, law or policy, whether at the local level or via another order of government. Scaling up can bring more resources to a problem and can make adoption of a solution more widespread.16 This type of change requires a different skill set from the original innovating institution, one which may include advocacy and policy development.17 
        </p>
        <p>
            More recent scholarship has added “scaling deep” to the list of possibilities: changing mindsets, relationships, and values over time.18 Scaling deep involves going beyond creating a solution to redefining the problem. An example is the recent evolution of the way that Canadians think about housing and homelessness, which has largely shifted from a focus on reducing the stigma around homelessness to considering housing a human right. Scaling deep often involves an element of education, as it involves a fundamental, often generational, change in not just what is done, but how it is done. 
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
        
        <ImageSingle
            imageURL={`${base}/web-assets/scaling-social-innovation/Scaling Policy.png`}
            source={""}
            caption={""}
            maxWidth="950px"
            link='No'
        />
    </div>
    
    
	<Footnotes footnotes={footnotes} />
</div>

<style>

</style>