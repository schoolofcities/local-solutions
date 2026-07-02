<svelte:head>
    <title>Page not found</title> 
</svelte:head>

<div id="error-container">
    <h1>404</h1>
    <h2>Oops! Page not found</h2>
    <p>The page you are looking for might have been removed, had its name changed, or be temporarily unavailable. </p>
</div>

<style>
    #error-container {
        width: 100dvw;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    }

    h1, h2, p {
        color: var(--LoSoNavyBlue)
    }

    h1 {
        font-size: 50dvh;
        margin: 0;
        text-shadow: 1dvh 1dvh var(--brandYellow);
    }

    h2 {
        font-family: SourceSerifBold;
        margin: 0;
    }

    #error-container p {
        text-align: center;
    }

</style>