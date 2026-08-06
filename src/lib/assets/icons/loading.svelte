<script>
    import { chapterColours } from "../../chapterColours";

    let circles = [];

    Object.keys(chapterColours).forEach((key) => {
        circles.push({ colour: chapterColours[key] });
    });

    $: angleStep = 360 / circles.length;
</script>

<div class="loader">
    <div class="container">
        {#each circles as circle, i}
            <div
                class="node"
                style="
                    --angle: {(i * angleStep) - 90}deg;
                    --numCircles: {circles.length};
                    background-color: {circle.colour};
                "
            ></div>
        {/each}
    </div>
</div>

<style>
    :root {
        --loading-container: 20px;
        --loading-orbit: 9px;
    }

    .loader {
        width: var(--loading-container);
        height: var(--loading-container);
        position: relative;
    }

    .container {
        width: 100%;
        height: 100%;
        position: absolute;
        animation: rotateLoader 2s linear infinite;
    }

    @keyframes rotateLoader {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .node {
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(2 * var(--loading-container) / var(--numCircles));
        height: calc(2 * var(--loading-container) / var(--numCircles));
        border-radius: 50%;

        transform:
            translate(-50%, -50%)
            rotate(var(--angle))
            translateX(var(--loading-orbit))
            rotate(calc(-1 * var(--angle)));
    }
</style>