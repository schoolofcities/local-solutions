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
        {name: "Kumsa Baker", role: "", part: "Scaling social innovation"},
        {name: "Sylvia Cheuy", role: "", part: "Scaling social innovation"},
        {name: "Gabriel Eidelman", role: "", part: "Scaling social innovation"},
        {name: "Alexandra Flynn", role: "", part: "Scaling social innovation"},
        {name: "Kohbod Khandan-Barani", role: "", part: "Scaling social innovation"},
        {name: "Serena Peruzzo", role: "", part: "Scaling social innovation"},
        {name: "Enid Slack", role: "", part: "Scaling social innovation"},
        {name: "Andre Sorensen", role: "", part: "Scaling social innovation"},
        {name: "Felicity Heyworth", role: "", part: "Shared spaces, Small businesses, Mental health, Housing, Climate change, Civic engagement and Democracy, Community prosperity and Dignity"},
        {name: "Marty Levesque", role: "", part: "Shared spaces"},
        {name: "Mariana Jiménez Ojeda", role: "", part: "Small businesses"},
        {name: "Andre LeBlanc", role: "", part: "Small businesses"},
        {name: "George Alvarez", role: "", part: "Mental health"},
        {name: "Francesca Dobbyn", role: "", part: "Mental health"},
        {name: "Faiz Abhuani", role: "", part: "Housing"},
        {name: "Rionel Comia", role: "", part: "Housing"},
        {name: "Heather Curtis", role: "", part: "Housing"},
        {name: "Alkarim Devani", role: "", part: "Housing"},
        {name: "Sabrina Grover", role: "", part: "Housing"},
        {name: "Darlene Jehn", role: "", part: "Housing"},
        {name: "Hillary King", role: "", part: "Housing"},
        {name: "Christel Kjenner", role: "", part: "Housing"},
        {name: "Wendy Reid Fairhurst", role: "", part: "Housing"},
        {name: "Nicole Thomas", role: "", part: "Housing"},
        {name: "Melinda Zytaruk", role: "", part: "Housing"},
        {name: "Michelle Molnar", role: "", part: "Climate change"},
        {name: "Emily Sharma", role: "", part: "Climate change"},
        {name: "Jennifer Taves", role: "", part: "Climate change"},
        {name: "Lanrick Bennett Jr.", role: "", part: "Civic engagement and Democracy"},
        {name: "Monica Cheema", role: "", part: "Civic engagement and Democracy"},
        {name: "Mike Des Jardins", role: "", part: "Civic engagement and Democracy"},
        {name: "Rowan Gentleman-Sylvester", role: "", part: "Civic engagement and Democracy"},
        {name: "Claire Lewis", role: "", part: "Civic engagement and Democracy"},
        {name: "Eli Neptune", role: "", part: "Civic engagement and Democracy"},
        {name: "Robin Sokoloski", role: "", part: "Civic engagement and Democracy"},
        {name: "Emma Renaerts", role: "", part: "Community prosperity and Dignity"},
    ]

    additionalContributors.sort((a, b) => a.name.split(" ")[1].localeCompare(b.name.split(" ")[1]));
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
                <p>{contributor.name}</p>
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