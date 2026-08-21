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
        background-color: var(--LoSoNavyBlue);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        transition: transform 0.2s ease;
    }

    .card:hover {
        transform: scale(1.03);
    }

    .card h3, .card p {
        margin: 0;
        padding: 0;
    }

    .card h3 {
        font-family: RobotoBold;
        font-size: 16px;
        color: white;
    }

    .card p {
        font-family: Roboto;
        font-size: 14px;
        line-height: 16px;
        color: white;
    }
</style>