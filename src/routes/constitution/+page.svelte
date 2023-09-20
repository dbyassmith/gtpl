<script>
    import { dues } from "$lib/utils/helper";
    let one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ left: 0, top, behavior: "smooth" });
    };
</script>

<div class="constitution">
    <h1 class="noUnderscore">GEORGIA TECH PREMIER LEAGUE CONSTITUTION</h1>

    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>
        Purpose
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>
        Governing Body
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>
        Draft
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>
        Scoring
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>
        Roster Size
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>
        Starting Lineups
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>
        Trades
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eight)}>
        Waiver Wire
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(nine)}>
        Conference Format & Seeding Tiebreakers
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(ten)}>
        Playoff Format
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(eleven)}>
        Buy-In & Escrow
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(twelve)}>
        Fines & Penalties
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(thirteen)}>
        Payout
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(fourteen)}>
        Keepers
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(fifteen)}>
        #194 Award
    </h3>
    <h3 class="noUnderscore clickable" on:click={() => goToSection(sixteen)}>
        Comissioner's Cup
    </h3>

    <hr />

    <h2 class="sectionHeading" bind:this={one}>Purpose</h2>
    <p>
        This League was founded on the Hefner 3rd floor to play Fantasy Football
        at a competitive level, but mostly to have FUN and lots of ACTION. Every
        Team Owner is a vital part of that process and is essential to the
        success of the league. Members of the league are expected to follow the
        rules of the league and police themselves from participating in any
        illegal activity.
    </p>

    <h2 class="sectionHeading" bind:this={two}>Governing Body</h2>
    <p>Comissioner: David Byas-Smith</p>
    <p>Counsel: Keller Tomassi, JP Shivanandan, Anil Nataraj</p>
    <p>
        The role of the Commissioner is to maintain the integrity of the league
        and manage league milestones & activities. The Commissioner reserves the
        right to challenge any unfair or collusive actions in addition to
        enforcing all rules included or implied in this document. The
        Commissioner and Counsel will make joint rulings on any issues that
        arise during the season. The Commissioner will have final say in all
        decisions except in cases where he needs to recuse himself. The
        Commissioner will be responsible for collecting and distributing money
        but is allowed to delegate this specific responsibility.
    </p>

    <h2 class="sectionHeading" bind:this={three}>Draft</h2>

    <p>
        The draft will be for 16 rounds held on Sleeper fantasy football or
        liver in person
    </p>
    <p>
        Each team is required to draft a full starting lineup. At minimum, the
        following is required to be drafted: 1 QB | 2 RB | 2 WR | 1 FLEX | 1 TE
        | 1 D/ST | 1 K
    </p>
    <p>
        During a sleeper draft each team will be allotted 75 seconds per draft
        pick in rounds 1-3; 60 seconds rounds 4-6. Subsequent rounds will be
        capped at 45 seconds. Failure to pick in a timely manner will result in
        a fine
    </p>
    <p>
        Live drafts may be planned and agreed upon with Commissioner & owner
        approvals
    </p>

    <h2 class="sectionHeading" bind:this={four}>Scoring</h2>
    <p>Scoring will follow 0.5 PPR scoring on Sleeper Fantasy Football.</p>

    <h2 class="sectionHeading" bind:this={five}>Roster Size</h2>
    <p>
        Each team’s roster will consist of 16 spots. There are 9 starters and a
        total of 7 bench spots.
    </p>
    <p>
        1 (One) IR spot is included to support any player who has an IR
        designation
    </p>

    <h2 class="sectionHeading" bind:this={six}>Starting Lineups</h2>
    <p>
        The breakdown for starting lineup is as follows: 1 QB | 2 RB | 2 WR | 1
        FLEX | 1 TE | 1 D/ST | 1 K
    </p>
    <p>
        Each week you must have nine ACTIVE players in your starting lineup.
        Failure to do so will result in a fine.
    </p>

    <h2 class="sectionHeading" bind:this={seven}>Trades</h2>
    <p>
        Every trade is made at the two parties' discretion. It is every owner’s
        responsibility to uphold the integrity of the league during the trade
        process.
    </p>
    <p>A trade may involve rostered players only</p>
    <p>All Trades are subject to review by the Commissioner</p>
    <p>
        Trades can be realistically pushed through for timing purposes based on
        the Commissioner discretion
    </p>
    <p>
        A team that has been eliminated from playoff contention cannot
        participate in a trade.
    </p>

    <h2 class="sectionHeading" bind:this={eight}>Waiver Wire</h2>
    <p>
        Waiver claims are decided between teams with bids using Free-Agent
        Acquisition Budget (FAAB)
    </p>
    <p>Every team will start with a total of $200 FAAB.</p>
    <p>Teams that advance to playoffs will have $100 added to FAAB</p>
    <p>
        Teams eliminated from the playoffs may continue to add and drop players
        using the waiver bid w/ FAAB process.
    </p>

    <h2 class="sectionHeading" bind:this={nine}>
        Conference Format & Seeding Tiebreakers
    </h2>
    <p>The league is one super conference single table</p>
    <p>
        The league schedule is chosen randomly, but each team will face all
        other teams at least once
    </p>
    <p>
        The teams with the top 6 regular season records make the playoffs. In
        the case of a tie, the following tiebreakers will be used:
    </p>
    <ol>
        <li>Most points scored during the regular season</li>
        <li>Head to head</li>
        <li>Points scored during head to head matches</li>
        <li>Commissioner and Counsel Executive Decision</li>
    </ol>

    <h2 class="sectionHeading" bind:this={ten}>Playoff Format</h2>
    <p>Playoffs will consist of 3 rounds to decide the season Championship</p>
    <p>
        The top two seeds automatically receive a Wildcard round bye and advance
        to Semi-Finals
    </p>
    <p>
        Ties in the playoffs will be broken by removing the kicker from the
        point totals. If teams are still tied, the higher seed advances (Seed
        one would advance over seed two).
    </p>

    <h3>Wildcard Round (Week 15)</h3>
    <p>Seed 3 plays Seed 6</p>
    <p>Seed 4 plays Seed 5</p>
    <p>This round lasts one week</p>

    <h3>Semi-Finals Round (Week 16):</h3>
    <p>Seed 1 plays the lowest seed to advance out of the Wildcard round</p>
    <p>Seed 2 plays the remaining seed to advance out of the Wildcard round</p>
    <p>This round lasts one week</p>

    <h3>Finals Round (Week 17)</h3>
    <p>The two Semi-final winners play in a one week final round for the Championship</p>

    <h2 class="sectionHeading" bind:this={eleven}>Buy-In & Escrow</h2>
    <p>Each owner will pay an entry fee of $200.00 that is due on Draft Day.</p>
    <p>$20 from each player is held in escrow to cover any fines that an owner may receive during a season</p>

    <h2 class="sectionHeading" bind:this={twelve}>Fines & Penalties</h2>
    <h3>$10.00 Fines</h3>
    <ol>
        <li>Attempting/succeeding to trade money/otherwise for players. All games in which the players traded for will be forfeited by each team involved in the trade </li>
        <li>Collusion, sabotage, or other serious actions deemed punishable by the Commissioner & Counsel</li>
    </ol>
    <h3>$5.00 Fines</h3>
    <ol>
        <li>An owner does not pick his draft choices in a timely manner</li>
       <li>An owner starts a player who is on bye or inactive for the week</li>
    </ol>
    <h2 class="sectionHeading" bind:this={thirteen}>Payout</h2>
    <li>Winner: $1200</li>
    <li>Runner Up: $250 + all collected fines</li>
    <li>Commissioner's Cup Allocation: $500</li>

    <table>
        <tr>
            <th colspan="2">Commissioner's Cup Payout</th>
        </tr>
        <tr>
            <td>1st</td>
            <td>$200</td>
        </tr>
        <tr>
            <td>2nd</td>
            <td>$125</td>
        </tr>
        <tr>
            <td>3rd</td>
            <td>$90</td>
        </tr>
        <tr>
            <td>4th</td>
            <td>$60</td>
        </tr>
        <tr>
            <td>5th</td>
            <td>$25</td>
        </tr>
    </table>

    <p>#194 Award: $50</p>

    <h2 class="sectionHeading" bind:this={fourteen}>Keepers</h2>

    <p>Players drafted in the first three rounds of the draft in the previous year are not eligible to be kept.</p>
    <p>The kept player for a team will count for the team’s draft spot in the round preceding where the player was drafted the prior year. Ex.  if Team X drafted A. Luck in the 6th round of the 2013 draft and would like to keep him,  A. Luck will be Team X’s 5th round pick of the 2014 draft.</p>
    <p>Players can be kept for 2 years (regardless of owner) or until they are a 3rd round pick. Ex., if A. Luck was kept by Owner X and then traded that year to Owner Y, A. Luck would have only 1 more year of keeper eligibility remaining. </p>
    <p>Players undrafted in the previous year’s draft and players drafted in rounds 10 and later will be counted as a 9th round keeper if kept</p>
    <p>Your prospective keeper must be on your roster at the end of the season.</p>
    <p>Claiming a keeper is optional.</p>
    <p>Keepers must be announced by the date assigned by the Commissioner. If the deadline passes without Team A announcing a keeper, Team A will not have a keeper.</p>
    <p>A players ‘keeper rights’ travel with them in a trade. They are bound to the player.</p>

    <h2 class="sectionHeading" bind:this={fifteen}>#194 Award</h2>
    <p>Payout given to the owner with the highest single week scoring total over the course of the season.</p>

    <h2 class="sectionHeading" bind:this={sixteen}>Comissioner's Cup</h2>
    <p>The commissioner’s cup is a season long tournament replacing the Team of the Week that rewards the highest scoring teams each week. </p>
<p>The top 5 highest scoring teams each week receive points towards the cup. At the end of the regular season the teams with the highest number of points get paid out.</p>
<p>Ties are broken by the most Points scored.</p>
<h3>Weekly Scoring</h3>
<table>
    <tr>
        <th>Rank</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>1st</td>
        <td>12</td>
    </tr>
    <tr>
        <td>2nd</td>
        <td>9</td>
    </tr>
    <tr>
        <td>2nd</td>
        <td>7</td>
    </tr>
    <tr>
        <td>4th</td>
        <td>6</td>
    </tr>
    <tr>
        <td>5th</td>
        <td>5</td>
    </tr>
</table>

</div>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>
