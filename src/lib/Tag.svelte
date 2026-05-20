<script>
    import "../assets/global-styles.css"
    export let label = "";
</script>

<div>
    <a href="./" class="label" class:spotlighted={label=="Finalist"}>
        {label}
    </a>
</div>

<style>
    .label {
        font-family: TradeGothicBold;
        color: var(--brandWhite);
        background-color: var(--brandBlack);
        width: fit-content;
        font-size: 12px;
        padding: 2px 5px 3px 5px;
        border-radius: 5px;
        text-transform: uppercase;
        text-decoration: none;
    }

    .spotlighted {
        color: var(--brandBlack);
        background-color: var(--brandYellow);
    }
</style>