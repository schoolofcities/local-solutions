<script>
    import SolutionCard from "./SolutionCard.svelte";

    export let solutionsList;
</script>

<div class="body">
    <div class="solutions">
        {#each solutionsList as solution}
            <SolutionCard
                {...solution}
            />
        {/each}
    </div>
</div>

<style>
    .body {
        background-color: #D9D9D9;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .solutions {
        width: 95dvw;
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fill, 500px);
        gap: 15px;
        align-items: start;
        justify-content: center;
        margin: 0 auto;
    }

    @media (min-width: 800px) and (max-width: 1100px) {
        .solutions {
            grid-template-columns: repeat(auto-fill, 45dvw);
        }
    }

    @media (max-width: 550px) {
        .solutions {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>