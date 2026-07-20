<script>
    import "../assets/global-styles.css"
    import { page } from '$app/stores';
	import { goto } from '$app/navigation';
    export let label = "";
    export let tagClicked;

    function filterTag(value) {
        tagClicked(value);
    } 
</script>

<div>
    <button 
        class="label" class:spotlighted={label=="Featured"}
        on:click|preventDefault={() => {
            filterTag(label);
        }} 
        on:keydown|preventDefault={(key) => {
            if (key.keyCode == 13 || key.keyCode == 32){
                filterTag(label);   
            }
        }}>
        {label}
    </button>
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
        border: none;
    }

    .label:hover {
        cursor: pointer;
    }

    .spotlighted {
        color: var(--brandBlack);
        background-color: var(--brandYellow);
    }
</style>