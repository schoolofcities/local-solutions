<script>
    import "../assets/global-styles.css"
    import { page } from '$app/stores';
	import { goto } from '$app/navigation';
    export let label = "";

    function filterTag(value) {
        const existing = $page.url.searchParams.get('tags')?.split('|').filter(Boolean) ?? [];
        const updated = existing.includes(value)
            ? existing
            : [...existing, value];              

        const searchParams = new URLSearchParams($page.url.searchParams);
        if (updated.length) {
            searchParams.set('tags', updated.join('|'));
        } else {
            searchParams.delete('tags');
        }
        goto($page.url.pathname + '?' + searchParams.toString(), { noScroll: true }).then(() => {
                document.getElementById('solutions-map').scrollIntoView({ behavior: 'smooth' })
            });
    } 
</script>

<div>
    <button 
        class="label" class:spotlighted={label=="Finalist"}
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