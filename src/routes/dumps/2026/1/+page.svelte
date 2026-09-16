<script>
	import { onMount } from 'svelte';
	import '$lib/dumps/dump.css';

	let mountNode;

	onMount(() => {
		let cancelled = false;
		let reactRoot;
		const previousSurface = document.documentElement.dataset.appSurface;

		document.documentElement.dataset.appSurface = 'dump';

		Promise.all([
			import('react'),
			import('react-dom/client'),
			import('$lib/dumps/DumpPage.jsx')
		]).then(([React, { createRoot }, { default: DumpPage }]) => {
			if (cancelled) return;
			reactRoot = createRoot(mountNode);
			reactRoot.render(React.createElement(DumpPage, { dumpId: 'belt-to-ass' }));
		});

		return () => {
			cancelled = true;
			reactRoot?.unmount();
			if (previousSurface) document.documentElement.dataset.appSurface = previousSurface;
			else delete document.documentElement.dataset.appSurface;
		};
	});
</script>

<svelte:head>
	<title>The Natty Dump · GTPL</title>
	<meta name="description" content="The Natty Dump, a GTPL weekly drop." />
	<meta name="theme-color" content="#050505" />
</svelte:head>

<div class="dump-route-root" bind:this={mountNode} aria-label="The Natty Dump"></div>

<style>
	.dump-route-root {
		position: fixed;
		z-index: 100;
		inset: 0;
		width: 100%;
		height: 100vh;
		height: 100svh;
		overflow: hidden;
		background: #e5e7ee;
	}

	:global(body:has(.dump-route-root)) {
		overflow: hidden;
	}
</style>
