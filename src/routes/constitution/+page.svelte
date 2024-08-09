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
        sixteen,
        seventeen;

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
    <h3 class="noUnderscore clickable" on:click={() => goToSection(seventeen)}>
        Appendix
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
    <p><span style="font-weight: bold">Commissioner:</span> David Byas-Smith</p>
    <p>The Commissioner advocates for the entire league and manages league milestones and activities. The Commissioner is responsible for collecting and distributing money but may delegate this specific responsibility. The Commissioner has the authority to veto any ruling from the Rules Committee and can escalate the issue to a league-wide majority vote on a final decision. If the vote fails, the original ruling stands (see appendix for example). If the Commissioner has recused himself, any veto requires a unanimous decision from the remaining Rules Committee members. If at least one Rules Committee member is involved in the decision, the final decision defaults to the unanimous decision of the remaining uninvolved Rules Committee member(s).</p>
    <p>The Commissioner has the authority to dismiss any Rules Committee member for just cause, such as non-responsiveness. This power will be exercised cautiously.</p>

    <p><span style="font-weight: bold">Removal of the Commissioner:</span></p>
    <p>The removal of the Commissioner requires a unanimous decision from the Rules Committee, which must recommend the Commissioner's removal to the league. The final decision is then made by a league-wide vote, in which the Commissioner also gets a vote.</p>

    <p><span style="font-weight: bold">The Rules Committee:</span> Darren Domaracki, Joe Kummer, Anil Nataraj</p>
    <p>The Rules Committee consists of three members elected by a league-wide vote each offseason, with no term limits. This committee ensures that all league rules are adhered to and makes all rule-related decisions. The Commissioner votes only in the case of a tiebreaker due to a recusal.</p>
    <p>At the end of each season, The Rules Committee will address issues, propose improvements, and present these changes as a revised constitution to The League for feedback. They will submit a final revision to the league for the following season before concluding their term. The final draft of the constitution is able to be vetoed at the commissioner’s discretion.</p>
    <p>The Rules Committee will refer to the typical standards of the Sleeper Fantasy Football app for situations not covered in the constitution. Please visit <a href="https://support.sleeper.com/en/collections/410900-fantasy-football" target="_blank">Sleeper Fantasy Football support</a> for reference materials.</p>

    <p><span style="font-weight: bold">Replacement of Rules Committee Members:</span></p>
    <p>If a RC member is removed, a replacement will be selected through a league-wide vote.</p>


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
    <p>All agreed to scoring rules are directly inputted into the Sleeper Fantasy Football app.
    </p>
    <p>Please reference all scoring points breakdown in the Georgia Tech Premier League settings in the Sleeper Fantasy Football app. 
    </p>

    <h2 class="sectionHeading" bind:this={five}>Roster Size</h2>
    <p>
        Each team’s roster will consist of 16 spots. There are 9 starters and a total of 7 bench spots.
    </p>
    <p>
        There is also 1 IR spot available for players designated as IR (Injured Reserve) or PUP (Physically Unable to Perform) in the Sleeper Fantasy Football app. Players with Out, Suspended, Doubtful, NA, or DNR/holdout status designations are not eligible for the IR spot.
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
    <p>Trades are made at the discretion of the two parties involved. It is each owner's responsibility to uphold the integrity of the league during the trade process.</p>
    <p>Trades may involve rostered players only; draft pick trading is not allowed.</p>
    <p>All trades are subject to review by the Commissioner and/or Rules Committee. Trades can be expedited for timing purposes at the Commissioner's discretion.</p>
    <p>All trades must be finalized by the end of the final game of Week 12. After this deadline, no trades can be proposed or accepted until the end of the next draft.</p>


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
        <li>Commissioner and Rules Committee Executive Decision</li>
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
        <li>Collusion, sabotage, or other serious actions deemed punishable by the Rules Committee</li>
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

    <p>Keeper Eligibility:</p>
    <p>Players drafted in the first three rounds of the draft in the previous year are not eligible to be kept. Your prospective keeper must be on your roster at the end of the season. Claiming a keeper is optional.</p>
    <p>Keepers must be announced by the date assigned by the Commissioner. If the deadline passes without Team A announcing a keeper, Team A will not have a keeper. A player's 'keeper rights' travel with them in a trade. They are bound to the player.</p>
    
    <p>Keeper Cost:</p>
    <p>The kept player for a team will count for the team's draft spot in the round preceding where the player was drafted the prior year. Ex. if Team X drafted A. Luck in the 6th round of the 2013 draft and would like to keep him, A. Luck will be Team X's 5th round pick of the 2014 draft.</p>
    <p>Players can be kept for a maximum of 2 years, regardless of owner, or until they are a 3rd round pick. Ex., if A. Luck was kept by Owner X and then traded that year to Owner Y, A. Luck would have only 1 more year of keeper eligibility remaining.</p>
    <p>The years a player is kept do not need to be consecutive. For example, if Cooper Kupp was kept in 2019, not kept in 2020, and then kept again in 2021, it would still count as two years kept.</p>
    <p>Players undrafted in the previous year's draft and players drafted in rounds 10 and later will be counted as a 9th round keeper if kept.</p>
    
    
    
    
    
    

    <h2 class="sectionHeading" bind:this={fifteen}>#194 Award</h2>
    <p>Payout given to the owner with the highest single week scoring total over the course of the season.</p>

    <h2 class="sectionHeading" bind:this={sixteen}>Commissioner's Cup</h2>
    <p>The commissioner's cup is a season long tournament replacing the Team of the Week that rewards the highest scoring teams each week. </p>
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
<h2 class="sectionHeading" bind:this={seventeen}>Appendix</h2>



<p>Commissioner Veto escalated to league vote example: </p>
<ul>
    <li>Owner X sends an open trade to another league member and forgets about it.</li>
    <li>During the pending period, the player Owner X wanted to trade for announces their retirement.</li>
    <li>The receiving owner quickly accepts the trade.</li>
    <li>The Rules Committee (RC) rules that a trade is a trade, and Owner X must abide by it.</li>
    <li>The majority (at least 6/10) of the league believes the trade should be reversed due to the circumstances.</li>
    <li>The Commissioner vetoes the RC's ruling and initiates a league-wide vote to return Owner X’s player to his team.</li>
    <li>The league votes in favor of the reversal.</li>
    <li>The ruling is overturned, and Owner X gets his player back.</li>
</ul>
<h5 style="text-align:center; margin-top:100px">Last updated August 8th, 2024</h5>

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
        color: #212121;
    }
</style>
