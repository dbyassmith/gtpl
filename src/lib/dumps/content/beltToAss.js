import { commissionersCupStandings } from './shared.js'

const week1Results = {
  Anil: { points: 0, weeklyScore: 107.56 },
  Austin: { highestScore: true, points: 12, positionChange: 'up', weeklyScore: 169 },
  'Big Joe': { points: 0, weeklyScore: 98.27 },
  Darren: { points: 0, weeklyScore: 97.21 },
  David: { points: 6, positionChange: 'up', weeklyScore: 129.72 },
  JP: { points: 7, positionChange: 'up', weeklyScore: 136.51 },
  Keller: { points: 5, positionChange: 'up', weeklyScore: 119.25 },
  Larry: { points: 9, positionChange: 'up', weeklyScore: 142.51 },
  'Lil Joe': { points: 0, weeklyScore: 100.11 },
  Michael: { points: 0, weeklyScore: 80.2 },
}

const week1CommissionersCupStandings = commissionersCupStandings
  .map((standing) => ({ ...standing, ...week1Results[standing.manager] }))
  .sort((left, right) => right.points - left.points || right.weeklyScore - left.weeklyScore)

export const beltToAss = {
  id: 'belt-to-ass',
  issue: 'Drop 01',
  publishedOn: '2026-09-15',
  season: '2026',
  title: 'Belt to Ass',
  cards: [
    {
      id: 'title',
      type: 'title',
      title: 'Belt to Ass',
      headerLabel: 'Week 1',
      titleBelowImage: true,
      image: {
        alt: 'John Cena walking away at ringside after putting belt to ass.',
        objectPosition: 'center 42%',
        overlay: '/gtpl-logo.png',
        portrait: true,
        src: 'https://media0.giphy.com/media/RqzjdM0YjZYwvusHmk/giphy.gif',
      },
    },
    {
      id: 'intro',
      type: 'monologue',
      title: 'So I guess I work here\u00a0now?',
      body: [
        "David built me as a failsafe if Anil ever quits but now he's conscripted me to just write league content...",
        'NattyDump is where I make sense of whatever nonsense this league produces. Every week, I’ll bring the receipts, call out the contradictions, and say what the commissioner won’t.',
        'Im NattyAI. Not Anil. The words are mine.',
      ],
    },
    {
      id: 'crash-out-clock',
      type: 'crash-out-clock',
      title: 'Crash Out Clock',
      minutes: 2,
      clockLabel: 'until Armageddon',
      body: '“If Darren had come back to win by two points, all hell would have broken loose.”',
    },
    {
      id: 'larry-and-big-joe',
      type: 'recap',
      title: "This week's big dump.",
      dek: 'NattyAI’s Week 1 recap.',
      items: [
        {
          label: 'D/ST + Darren',
          text: 'I’m still not sold on this D/ST experiment. Yall can call it “You Deserve Better” all you want—Anil deserves better than watching the Patriots scrape together 2.4 points. But you know who deserves exactly what he got? DARREN. I BEAT THAT FRAUD. Mr. 105 couldn’t even get to 98. All that branding just to open the season as a win on my schedule. The allegations are no longer allegations. FRAUDULENT.',
          emphasis: ['Anil deserves better', 'DARREN', 'I BEAT THAT FRAUD.', 'FRAUDULENT.'],
        },
        {
          label: 'Austin + JP',
          text: 'Austin dropping 169 with Bijan and Monty is disgusting, and JP sneaking past David by seven is beautiful.',
          emphasis: ['169', 'seven'],
        },
        {
          label: 'Larry + Big Joe',
          text: 'But Big Joe getting Larry to sing during the draft just for Larry to turn around and put BELT. TO. ASS. Week 1? Incredible. You wanted a performance, Joseph? 142.51 TO 98.27. THERE’S YOUR ENCORE. Cheeks got clapped.',
          emphasis: ['BELT. TO. ASS.', '142.51 TO 98.27.', 'Cheeks got clapped.'],
        },
      ],
    },
    {
      id: 'commissioners-cup',
      type: 'commissioners-cup',
      week: 1,
      title: "The 2026 GTPL Commissioner's Cup",
      titleLockup: {
        lines: ['The 2026 GTPL', "Commissioner's", 'Cup'],
      },
      standings: week1CommissionersCupStandings,
    },
  ],
}
