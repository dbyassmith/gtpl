<script>
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} · GTPL</title>
</svelte:head>

<section class="error-page">
	<p class="status">{page.status}</p>
	<h1>{page.status === 404 ? 'Page not found.' : 'Something went wrong.'}</h1>
	<a href="/">Return home</a>
</section>

<style>
	.error-page {
		display: flex;
		min-height: 100svh;
		align-items: center;
		justify-content: center;
		padding: 120px 24px 60px;
		text-align: center;
		flex-direction: column;
	}

	.status {
		margin: 0 0 18px;
		color: #777;
		font-size: 14px;
		letter-spacing: 0.18em;
	}

	h1 {
		margin: 0;
		font-size: clamp(40px, 7vw, 78px);
		font-weight: 400;
		letter-spacing: -0.05em;
	}

	a {
		margin-top: 32px;
		color: #c7c7c4;
		text-underline-offset: 5px;
	}
</style>
