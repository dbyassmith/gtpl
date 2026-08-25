<script>
	const target = new Date('2026-08-27T13:00:00-04:00').getTime();
	const units = [
		{ key: 'days', label: 'Days' },
		{ key: 'hours', label: 'Hours' },
		{ key: 'minutes', label: 'Minutes' },
		{ key: 'seconds', label: 'Seconds' }
	];

	let remaining = $state(target - Date.now());

	const countdown = $derived.by(() => {
		const distance = Math.max(0, remaining);

		return {
			days: Math.floor(distance / 86_400_000),
			hours: Math.floor((distance / 3_600_000) % 24),
			minutes: Math.floor((distance / 60_000) % 60),
			seconds: Math.floor((distance / 1_000) % 60)
		};
	});

	$effect(() => {
		const update = () => {
			remaining = target - Date.now();
		};

		update();
		const timer = window.setInterval(() => {
			update();
		}, 1_000);

		return () => window.clearInterval(timer);
	});
</script>

<svelte:head>
	<title>GTPL</title>
</svelte:head>

<section class="countdown-page" aria-labelledby="countdown-title">
	<h1 id="countdown-title" class="sr-only">Countdown to August 27, 2026 at 1:00 PM Eastern</h1>

	<div class="countdown-lockup">
		<img
			class="league-logo"
			data-logo-hover-trigger
			src="/gtpl-logo.png"
			alt="Georgia Tech Premier League"
		/>

		<div class="countdown" role="timer" aria-label="Countdown to August 27, 2026 at 1:00 PM Eastern">
			{#each units as unit, index}
				<span class="countdown-value">
					<span class="sr-only">{unit.label}: </span>{String(countdown[unit.key]).padStart(2, '0')}
				</span>
				{#if index < units.length - 1}
					<span class="separator" aria-hidden="true">:</span>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
	.countdown-page {
		display: grid;
		min-height: 100svh;
		place-items: center;
		padding: 118px clamp(18px, 5vw, 80px) 70px;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	.countdown-lockup {
		display: flex;
		width: min(1120px, 100%);
		align-items: center;
		flex-direction: column;
	}

	.league-logo {
		display: block;
		width: clamp(88px, 8vw, 118px);
		height: auto;
		margin-bottom: clamp(30px, 5vh, 54px);
	}

	.countdown {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		white-space: nowrap;
	}

	.countdown-value {
		font-size: clamp(54px, 10vw, 148px);
		font-weight: 300;
		font-variant-numeric: tabular-nums;
		letter-spacing: -0.075em;
		line-height: 0.92;
	}

	.separator {
		margin: 0 clamp(5px, 1.5vw, 22px);
		color: #777;
		font-size: clamp(48px, 8.5vw, 126px);
		font-weight: 200;
		line-height: 0.8;
		transform: translateY(-0.08em);
	}

	@media (max-width: 640px) {
		.countdown-page {
			padding: 104px 16px 48px;
		}

		.league-logo {
			width: clamp(76px, 24vw, 96px);
			margin-bottom: 38px;
		}

		.countdown-value {
			font-size: clamp(40px, 12.7vw, 65px);
		}

		.separator {
			margin: 0 3px;
			font-size: clamp(34px, 10vw, 52px);
		}
	}

	@media (max-height: 700px) and (min-width: 641px) {
		.countdown-page {
			padding-top: 94px;
		}

		.league-logo {
			width: 86px;
			margin-bottom: 28px;
		}
	}
</style>
