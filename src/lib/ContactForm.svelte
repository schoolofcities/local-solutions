<script>
    import ContactFormInput from "./ContactFormInput.svelte";
    import Success from "./assets/icons/success.svelte";
    import Loading from "./assets/icons/loading.svelte";
    import Warning from "./assets/icons/warning.svelte";
    import {onMount} from "svelte";

    let form;
    let formFirstName, formLastName, formEmail, formOrg, formLocation, formDescription;
    let errors = {
        firstName: "",
        lastName: "",
        email: "",
        org: "",
        location: "",
        description: ""
    };
    let loading = false;
    let succeeded = false;
    let failed = false;

    const SITE_KEY = "0x4AAAAAAGJApO3t0dCyDLWA"; // production key
    // const SITE_KEY = "1x00000000000000000000AA"; // test key
    let turnstileEl;
    let turnstileWidgetId;
    let turnstileToken = "";
    let captchaError = "";

    const url = "https://script.google.com/macros/s/AKfycbz-TYH5-STeVcrHH5QQ9uJu0Q1KkFazoGMJRjBMLcyFLFPjizLhfyZNtqQn8BsLVqqWJQ/exec";
    
    function validate() {
        errors = {
            firstName: !formFirstName?.trim() ? "First name is required." : "",
            lastName: !formLastName?.trim() ? "Last name is required." : "",
            email: !formEmail?.trim()
                ? "Email is required."
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formEmail)
                    ? "Enter a valid email."
                    : "",
            org: !formOrg?.trim() ? "Organization is required." : "",
            location: !formLocation?.trim() ? "Location is required." : "",
            description: !formDescription?.trim() ? "Please enter a description." : ""
        };

        return Object.values(errors).every(error => error === "");
    }

    
        async function submitForm(event) {
        event.preventDefault();
        loading = true;
        succeeded = false;
        failed = false;

        if (!validate()) {
            loading = false;
            return;
        }

        if (!turnstileToken) {
            captchaError = "Please complete the captcha.";
            loading = false;
            return;
        }

        const formData = new FormData();
        formData.append("First Name", formFirstName);
        formData.append("Last Name", formLastName);
        formData.append("Email", formEmail);
        formData.append("Organization", formOrg);
        formData.append("Location", formLocation);
        formData.append("Brief description of the solution", formDescription);
        formData.append("cf-turnstile-response", turnstileToken);

        try {
            const response = await fetch(url, { method: "POST", body: formData });
            const result = await response.json();
            if (response.ok && result.result === "success") {
                formFirstName = undefined;
                formLastName = undefined;
                formEmail = undefined;
                formOrg = undefined;
                formLocation = undefined;
                formDescription = undefined;
                succeeded = true;
            } else {
                failed = true;
            }
        } catch {
            failed = true;
        } finally {
            loading = false;
            // tokens are single-use, so get a fresh one for the next attempt
            turnstileToken = "";
            window.turnstile?.reset(turnstileWidgetId);
        }
    }

    onMount(() => {
        const renderWidget = () => {
            turnstileWidgetId = window.turnstile.render(turnstileEl, {
                sitekey: SITE_KEY,
                callback: (token) => { turnstileToken = token; captchaError = ""; },
                "expired-callback": () => { turnstileToken = ""; },
                "error-callback": () => { turnstileToken = ""; }
            });
        };

        if (window.turnstile) {
            renderWidget();
        } else {
            const s = document.createElement("script");
            s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
            s.async = true;
            s.onload = renderWidget;
            document.head.appendChild(s);
        }

        return () => {
            if (turnstileWidgetId !== undefined) window.turnstile?.remove(turnstileWidgetId);
        };
    });

</script>

<div id="contact-form">
    <h2>Do you have a local solution you’d like us to know about?</h2>
    <p>Fill out this form to be notified when our next call for ideas opens.</p>

    <form novalidate
        bind:this={form}
        onsubmit={submitForm}>
        <div id="name">
            <ContactFormInput id="fname" label="First name" type="text" required={true} bind:value={formFirstName} error={errors.firstName}/>
            <ContactFormInput id="lname" label="Last name" type="text" required={true} bind:value={formLastName} error={errors.lastName}/>
        </div>


        <ContactFormInput id="email" label="Email" type="email" required={true} bind:value={formEmail} error={errors.email}/>
        <ContactFormInput id="org" label="Organization" type="text" required={true} bind:value={formOrg} error={errors.org}/>
        <ContactFormInput id="loc" label="Location" type="text" required={true} bind:value={formLocation} error={errors.location}/>
        <ContactFormInput id="desc" label="Brief description of the solution" type="textarea" required={true} bind:value={formDescription} error={errors.description}/>
        <div bind:this={turnstileEl}></div>
        {#if captchaError}
            <span class="submission-status" style:color="var(--brandRed)"><Warning/> {captchaError}</span>
        {/if}

        <div class="submit-area">
            <button type="submit" class="submit-button">
                Submit
            </button>
            {#if loading}
                <Loading/>
            {/if}
            {#if succeeded}
                <span class="submission-status" style:color="var(--brandDarkGreen)"><Success/> Your submission has been received!</span>
            {/if}
            {#if failed}
                <span class="submission-status" style:color="var(--brandRed)"><Warning/> An unexpected error occurred and your submission was not received. Please try again later.</span>
            {/if}
        </div>
    </form>
</div>

<style>
    h2 {
        color: var(--LoSoNavyBlue);
    }

    #contact-form {
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

    .submit-area {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    .submission-status {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        font-family: Roboto;
    }

    @media (max-width: 600px) {
        #name {
            display: flex;
            flex-direction: column;
            gap: 0;
        }
    }
</style>