<script>
    import Password from "$lib/Password.svelte";
    import TitleSection from "$lib/TitleSection.svelte";
	import SofCLogo from '../../assets/sofc-uoft-logo-blue-colour.svg';
	import CUILogo from '../../assets/cui_logo.png';
	import RBCLogo from '../../assets/rbc_logo.png';
    import ContactForm from "$lib/ContactForm.svelte";

    import TextTitle from "$lib/TextTitle.svelte";
    import AboutTeamCard from "$lib/AboutTeamCard.svelte";

    const contributors = [
        {role: "Project director", people: ["Karen Chapple"]},
        {role: "Series editor", people: ["Kathryn J. Exon Smith"]},
        {role: "Research and writing", people: ["Kathryn J. Exon Smith", "Priya Perwani", "An Pham", "Sarah A. Smith", "Anika Reisha Taboy", "Michelle Yong Yi Zhang"]},
        {role: "Data visuals", people: ["Jeff Allen", "Isabeaux Graham", "Mieko Yao"]},
        {role: "Design", people: ["Tony Chang"]},  
        {role: "Web design and development", people: ["Mieko Yao"]},
        {role: "Copy editing", people: ["Elizabeth d’Anjou", "Felicity Heyworth"]},
    ]

    const additionalContributors = [
        "George Alvarez",
        "Kumsa Baker",
        "Lanrick Bennett Jr.",
        "Jay Carter",
        "Melissa Cernigoy",
        "Monica Cheema",
        "Sylvia Cheuy",
        "Steven Collyer",
        "Rionel Comia",
        "Heather Curtis",
        "Mike Des Jardins",
        "Alkarim Devani",
        "Francesca Dobbyn",
        "Luke Dufour",
        "Gabriel Eidelman",
        "Alexandra Flynn",
        "Rowan Gentleman-Sylvester",
        "Karen Gomez",
        "Sabrina Grover",
        "Felicity Heyworth",
        "Darlene Jehn",
        "Mariana Jiménez Ojeda",
        "Kohbod Khandan-Barani",
        "Amina Khote",
        "Hillary King",
        "Christel Kjenner",
        "Nya Lazarus-Munnick",
        "Andre LeBlanc",
        "Marty Levesque",
        "Claire Lewis",
        "Kristy MacLean",
        "Michelle Molnar",
        "Raffaella Morello",
        "Kate Mulligan",
        "Eli Neptune",
        "Serena Peruzzo",
        "Wendy Reid Fairhurst",
        "Emma Renaerts",
        "Emily Sharma",
        "Micheal Shier",
        "Enid Slack",
        "Robin Sokoloski",
        "Andre Sorensen",
        "Jennifer Taves",
        "Franz Thomas",
        "Nicole Thomas",
        "Melinda Zytaruk",
    ]

    additionalContributors.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
</script>

<svelte:head>
    <title>About the Team - Learning from What Works | School of Cities</title>
</svelte:head>


<div>
    <Password/>

    <TitleSection Title="About the project" 
        Chapter=""/>

    <div class="body-text">

        <p style="margin-bottom: 50px;">
            <i>Learning from What Works</i> is led by the University of Toronto’s <a href="https://schoolofcities.utoronto.ca/" target="_blank">School of Cities</a>, with support from the Canadian Urban Institute and RBC.
        </p>

        <TextTitle title="Project team"/>
        <div class="cards project-team">
            {#each contributors as section}
                <div class="section">
                    <h3>{section.role}</h3>
                    {#each section.people as person}
                        <p>{person}</p>
                    {/each}
                </div>
            {/each}
        </div>

        <TextTitle title="Additional Contributors"/>
        <div class="cards additional">
            {#each additionalContributors as contributor, index}
                <p>{contributor}</p>
            {/each}
        </div>
        
        <ContactForm/>

        <div style="display:flex; justify-items: center; align-items: center; justify-content: center; margin-top: 50px;">
            <div class="logo-container">
                <div class="logo-stacked">
                    <img src={SofCLogo} alt="University of Toronto and School of Cities logos" class="logo"/>
                    <img src={CUILogo} alt="Canadian Urban Institute Logo" class="logo"/>
                </div>
                <img src={RBCLogo} alt="Royal Bank of Canada logos" class="rbc-logo"/>
            </div>
        </div>
    </div>
</div>

<style>
   .cards {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, 200px);
        justify-content: center;
        gap: 15px;
        padding-bottom: 50px;
    }

    .cards.group {
        padding-bottom: 0;
    }

    .project-team {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
    }

    .project-team .section {
        width: 400px;
    }

    .project-team .section p {
        margin: 0;
    }

    .project-team .section h3 {
        color: var(--LoSoNavyBlue);
        margin: 20px 0 10px 0;
    }

    .cards.additional {
        display: block;         
        column-count: 3;
        column-gap: 10px;
        justify-content: normal;
        padding-bottom: 50px;
    }

    .cards.additional p {
        margin: 0;
        break-inside: avoid;     /* keeps a name from splitting across columns */
    }

    @media (max-width: 790px) {
        .cards.additional {
            column-count: 2;
        }
    }

    @media (max-width: 400px) {
        .cards.additional {
            column-count: 1;
        }
    }

    .logo-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 20px;
        max-width: 500px;
        width: 70dvw;
        box-sizing: border-box;
    }

    .logo-stacked {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100%;
    }

    .logo {
        width: 100%;
        object-fit: contain;
    }

    .rbc-logo {
        max-width: 27%;
        height: auto;
    }

    @media (max-width: 475px) {
        
    .cards {
            grid-template-columns: repeat(auto-fill, calc((min(var(--grid-width), 90dvw, 900px) - 20px) / 2));
        }
    }
</style>