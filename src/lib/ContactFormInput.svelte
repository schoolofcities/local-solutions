<script>
    let {
        id,
        label,
        required = false,
        type = "text",
        error,
        value = $bindable()
    } = $props();

    import Warning from "./assets/icons/warning.svelte";
</script>


<div class="form-input">
    <label for={id}>{label}{#if required}<span class="required"> (Required)</span>{/if}</label><br>
    {#if type==="textarea"}
        <textarea id={id} name={label} required={required} bind:value ></textarea><br>
    {:else}
        <input type={type} id={id} name={label} required={required} bind:value ><br>
    {/if}
    {#if error} 
        <span class="input-error"><Warning/>{error}</span>
    {/if}
</div>

<style>
    .form-input {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        width: 100%;
    }

    input {
        font-family: Roboto;
        border-radius: 20px;
        border-width: 1px;
        border-color: var(--brandGray70);
        padding: 10px 15px;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
    }
    
    label {
        font-family: RobotoBold;
        padding-bottom: 5px;
    }

    .required {
        font-family: RobotoItalic;
        color: var(--brandRed);
        padding-left: 5px;
        font-size: 13px;
    }
    
    textarea {
        font-family: Roboto;
        border-radius: 20px;
        border-width: 1px;
        resize: none;
        padding: 10px 15px;
        box-sizing: border-box;
        width: 100%;
        height: 250px;
        font-size: 13px;
        border-color: var(--brandGray70);
    }

    .input-error {
        color: var(--brandRed);
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        padding: 5px;
    }


</style>