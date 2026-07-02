<script>
    import Footer from '$lib/Footer.svelte';
    import HeaderBar from '$lib/HeaderBar.svelte';
    import '../assets/global-styles.css';
    let { children } = $props();
</script>

<HeaderBar/>
{@render children()}

<Footer/>