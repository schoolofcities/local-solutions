<script>
	export let id;
	let footnoteId = `footnote-${id[0]}`;
	let refId = `footnote-ref-${id[0]}`;
	let footnoteText = id[1];
	let isHovered = false;
	
</script>

<span class="footnote-ref-wrapper">
	<a 
		id={refId}
		href={`#${footnoteId}`}
		class="footnote-ref" on:click|preventDefault={() => {
			const element = document.getElementById(footnoteId);
			if (element) element.scrollIntoView({ behavior: 'auto', block: 'start' });
		}}
		on:mouseenter={() => isHovered = true}
		on:mouseleave={() => isHovered = false}
	>
		<span style="margin-left: -4px;">&nbsp;[{id[0]}]</span>
	</a>

	{#if isHovered}
		<div class="footnoteTooltip"
			on:mouseenter={() => isHovered = true} on:mouseleave={() => isHovered = false}>
			<p>
				[{id[0]}] {@html footnoteText}
			</p>
		</div>
	{/if}

</span>

<style>
	.footnote-ref-wrapper {
		position: relative;
		font-size: 1em;
		line-height: 1;
		display: inline;
		white-space: nowrap; 
	}
	.footnote-ref {
		vertical-align: super;
		font-size: 0.8em;
		font-family: RobotoBold;
		font-weight: normal;
		margin-left: 1px;
		margin-right: 1px;
		text-decoration: none;
		color: var(--brandMedBlue);
		white-space: nowrap;
	}

	.footnote-ref:hover {
		color: var(--brandDarkBlue);
		font-family: RobotoBold;
	}

	.footnoteTooltip {
		position: absolute;
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		background: white;
		color: black;
		padding: 10px;
		border-radius: 0px;
		width: 340px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.38);
		border: 1px solid var(--brandGray);
		z-index: 1000;
		pointer-events: auto;
		user-select: text;
		-webkit-user-select: text;
		-moz-user-select: text;
		-ms-user-select: text;
	}

	.footnoteTooltip p {
		padding: 0px;
		margin: 0px;
		font-family: Roboto;
		color: var(--brandGray80);
		font-weight: normal;
		font-size: 15px !important;
		line-height: 22px;
		white-space: normal;
    	word-wrap: break-word;
    	overflow-wrap: break-word;
	}
	
	:global(.footnoteTooltip a) {
		color: var(--brandGray80) !important;
	}

	:global(.footnoteTooltip i) {
		font-family: RobotoItalic;
	}

	@media (max-width: 980px) {
		.footnoteTooltip {
			display: none !important;
		}
	}
</style>
