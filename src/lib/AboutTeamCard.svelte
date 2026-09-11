<script>
    let {
        name,
        role
    } = $props();
</script>

<div class="card">
    <h3>{name}</h3>
    <p>{role}</p>
</div>

<style>
    .card {
        height: 100px;
        width: 200px;
        border-radius: 10px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        transition: transform 0.2s ease;
        border: 1px solid #001D4E48;
    }
    
    .card h3, .card p {
        margin: 0;
        padding: 0;
    }

    .card h3 {
        font-family: RobotoBold;
        font-size: 16px;
        color: var(--LoSoNavyBlue);
    }

    .card p {
        font-family: Roboto;
        font-size: 14px;
        line-height: 16px;
        color: var(--LoSoNavyBlue);
    }

    @media (max-width: 475px) {
        .card {
            width: calc((min(var(--grid-width), 90dvw, 900px) - 20px) / 2);
        }
    }
</style>