<script>
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<meta name="theme-color" content="#050505" />
	<meta
		name="description"
		content="Georgia Tech Premier League — countdown and league constitution."
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<a class="wordmark" href="/" aria-label="GTPL home">
			<span class="nav-label">
				<span class="nav-label-primary">GTPL</span>
				<span class="nav-label-alternate" aria-hidden="true">VITA</span>
			</span>
		</a>
		<a class="constitution-link" href="/constitution" aria-label="Constitution">
			<span class="nav-label">
				<span class="nav-label-primary">Constitution</span>
				<span class="nav-label-alternate" aria-hidden="true">MORS</span>
			</span>
		</a>
	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		background: #050505;
		color-scheme: dark;
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		min-width: 320px;
		background: #050505;
		color: #f5f5f2;
		font-family: Helvetica, 'Helvetica Neue', Arial, system-ui, -apple-system, BlinkMacSystemFont,
			sans-serif;
		font-synthesis: none;
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeLegibility;
	}

	:global(a) {
		color: inherit;
	}

	.site-shell {
		min-height: 100svh;
	}

	.site-header {
		position: fixed;
		z-index: 20;
		top: 0;
		left: 0;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		padding: 30px clamp(24px, 3.4vw, 52px);
		pointer-events: none;
	}

	.wordmark,
	.constitution-link {
		position: relative;
		pointer-events: auto;
		font-size: 16px;
		text-decoration: none;
	}

	.wordmark {
		font-weight: 500;
		letter-spacing: -0.035em;
	}

	.constitution-link {
		font-weight: 400;
		letter-spacing: -0.015em;
	}

	.nav-label {
		display: grid;
	}

	.nav-label-primary,
	.nav-label-alternate {
		grid-area: 1 / 1;
		transition: opacity 160ms ease, transform 160ms ease;
	}

	.nav-label-alternate {
		opacity: 0;
		transform: translateY(0.32em);
	}

	.constitution-link .nav-label {
		text-align: right;
	}

	.wordmark:hover .nav-label-primary,
	.wordmark:focus-visible .nav-label-primary,
	.constitution-link:hover .nav-label-primary,
	.constitution-link:focus-visible .nav-label-primary {
		opacity: 0;
		transform: translateY(-0.32em);
	}

	.wordmark:hover .nav-label-alternate,
	.wordmark:focus-visible .nav-label-alternate,
	.constitution-link:hover .nav-label-alternate,
	.constitution-link:focus-visible .nav-label-alternate {
		opacity: 1;
		transform: translateY(0);
	}

	@media (hover: hover) {
		:global(body:has([data-logo-hover-trigger]:hover) .site-header .nav-label-primary) {
			opacity: 0;
			transform: translateY(-0.32em);
		}

		:global(body:has([data-logo-hover-trigger]:hover) .site-header .nav-label-alternate) {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.wordmark::after,
	.constitution-link::after {
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 1px;
		background: currentColor;
		content: '';
		transform: scaleX(0);
		transform-origin: right;
		transition: transform 180ms ease;
	}

	.wordmark:hover::after,
	.wordmark:focus-visible::after,
	.constitution-link:hover::after,
	.constitution-link:focus-visible::after {
		transform: scaleX(1);
		transform-origin: left;
	}

	.wordmark:focus-visible,
	.constitution-link:focus-visible {
		outline: 1px solid #f5f5f2;
		outline-offset: 8px;
	}

	@media (max-width: 640px) {
		.site-header {
			padding: 24px;
		}

		.wordmark,
		.constitution-link {
			font-size: 15px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}

		.wordmark::after,
		.constitution-link::after,
		.nav-label-primary,
		.nav-label-alternate {
			transition: none;
		}
	}
</style>
