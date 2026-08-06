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
        border: 1px solid #888888;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
    }

    .card h3, .card p {
        margin: 0;
        padding: 0;
    }

    .card h3 {
        font-size: 16px;
    }

    .card p {
        font-size: 14px;
        line-height: 16px;
        color: var(--brandGray70);
    }
</style>