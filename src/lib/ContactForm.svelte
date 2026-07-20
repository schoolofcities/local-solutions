<script>
    import ContactFormInput from "./ContactFormInput.svelte";


</script>

<div id="contact-form">
    <h2>Do you have a local solution you’d like us to know about?</h2>
    <p>Fill out this form to be notified when our next call for ideas opens.</p>

    <form>
        <div id="name">
            <ContactFormInput id="fname" label="First name" type="text" required={true}/>
            <ContactFormInput id="lname" label="Last name" type="text" required={true}/>
        </div>


        <ContactFormInput id="email" label="Email" type="email" required={true}/>
        <ContactFormInput id="org" label="Organization" type="text" required={true}/>
        <ContactFormInput id="loc" label="Location" type="text" required={true}/>
        <ContactFormInput id="desc" label="Brief description of the solution" type="textarea" required={true}/>

        <button class="submit-button">Submit</button>
    </form>
</div>

<style>
    h2 {
        color: var(--LoSoNavyBlue);
    }

    #contact-form {
        margin-top: 50px;
        max-width: 750px;
        margin-left: calc((100dvw - min(750px, 90dvw))/2);
        width: 90vw;
    }

    #name {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin: 0;
        width: 100%;
    }

    p {
        color: var(--brandBlack);
    }
    
    .submit-button {
        border: none;
        font-family: Roboto;
        width: fit-content;
        padding: 10px 15px 10px 15px;
        border-radius: 10px;
        font-size: 16px;
        background-color: var(--brandGray70);
        color: white;
    }

    .submit-button:hover {
        cursor: pointer;
    }

    @media (max-width: 600px) {
        #name {
            display: flex;
            flex-direction: column;
            gap: 0;
        }
    }
</style>