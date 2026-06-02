<script>
	import Logo from '../assets/sofc-uoft-logo-blue-colour.svg';
    import "../assets/global-styles.css";

</script>

<div class="container">
    <a href="https://schoolofcities.utoronto.ca/" target="_blank" class="logo-link">
        <img src={Logo} alt="School of Cities logo" class="logo-top"/>
    </a>
</div>

<style>
    .container {
        padding-left: calc(min(40px, 3dvw));
        padding-top: 5px;
        padding-bottom: 3px;
        height: fit-content;
        border-bottom: 1px solid;
        border-color: var(--brandGray60);
    }

    @media (max-width: 1080px) {
        .container {
            padding-top: 4px;
            padding-bottom: 2px;
        }

        .logo-top {
            height: 45px;
        }
    }

    @media (max-width: 800px) {
        .container {
            padding-top: 3px;
            padding-bottom: 1px;
        }

        .logo-top {
            height: 40px;
        }
    }

    @media (max-width: 650px) {
        .container {
            padding-top: 2px;
            padding-bottom: 0;
        }

        .logo-top {
            height: 35px;
        }
    }

</style>