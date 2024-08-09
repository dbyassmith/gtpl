/*   STEP 1   */
export const leagueID = "968968619327561728"; // your league ID
export const leagueName = "Georgia Tech Premier League"; // your league name
export const dues = 200; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Glory lasts forever.</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      managerID: "207553591878094848",
      name: "David",
      location: "Atlanta",
      rival: {
        name: "Anil",
        link: 1,
      },
      bio: "David, a masterful architect of fantasy football intrigue, takes his rightful place as the league's venerable Commissioner. His illustrious tenure has many triumphs but is most recently highlighted by the creation and triumphant launch of the \"Commissioner's Cup,\" a symbol of prestige and excellence from the regular season. With an unwavering hand, he has expertly navigated the turbulent waters of legislative crises, ensuring the league's continued vitality and fairness. A virtuoso in the realm of creativity, David's guiding influence has spawned a multitude of innovative endeavors that enrich the league's tapestry. As a team owner, his accolades include two finals appearances, a triumphant victory in the inaugural Commissioner's Cup, and a pioneering mastery of the strategic art of tanking, solidifying his legacy as a true luminary in the annals of fantasy football lore.",
      valuePosition:"RB",
      philosophy: "For those who exalt themselves will be humbled, and those who humble themselves will be exalted.",
      preferredContact:"Sleeper",
      favoritePlayer: 9509
    },
    {
      managerID: "346451454619291648",
      name: "Anil",
      location: "Atlanta",
      bio: "Founder, Champion and Multi-Finalist. Anil has proved to be the integral components to the life force and success for 15 years of the GTPL. Equipped with impressive vision and award winning silvertongue, Anil continues to perform at a high level through negotiation and deception.",
      rival: {
        name: "David",
        link: 0,
      },
      valuePosition:"EDGE",
      philosophy: "Negotiate for success",
      preferredContact:"Text",
      favoritePlayer: 9509
    }, 
    {
      managerID: "481853441270870016",
      name: "Big Joe",
      location: "Atlanta",
      tookOver: "2011",
      bio: "2xChamp. Defender of the Constitution and Justice. Warrior. Jackhammer.",
      valuePosition:"TE",
      rival: {
        name: "DRC",
        link: 0,
      },
      philosphy:"Try not to get injured",
      preferredContact:"Sleeper",
    },
    {
      managerID: "481855303978053632",
      name: "Lil Joe",
      location: "In the shadows of the house Brady built",
      bio: "Masshole through and through who learned at a young age if you’re not cheating, you’re not trying.",
      valuePosition:"QB",
      tookOver: "2010",
      rival: {
        name: "Miller Fantasy Academy",
        link: 6,
      },
      favoritePlayer: 9509,
      philosphy:"Proven commodities and dumb luck",
      preferredContact:"Text",
    },
    {
      managerID: "482672023122735104",
      name: "Keller",
      location: "Houston",
      bio: "2x champ and the only owner to ever complete the winless season. You might call him the OG sacko. He forged the blade that killed Matt Fields.",
      valuePosition:"QB",
      philosophy: "Boom or bust. No in between. In fantasy and in participation.",
      preferredContact:"Text",
    },
    {
      managerID: "483318407916154880",
      name: "Michael",
      location: "Tampa",
      bio: "The GOAT 194 sums up all you need to know about my fantasy football career. Setting the bar took 11 TDs from 3 RBs which is why they call me the RB guru. If I drafted an RB the year prior don’t draft him the next year, just ask David and Anil. That being said, I have won 1 championship, many more if JP wasn’t in the league. Outside of fantasy football I spend my time chasing kids or making kids. With 3 kids and 1 on the way, life is great. A lot of backyard football that brings me back to my glory days. I also am true to my mascot as I have 2 goats, Buc and Bolt. I am cohost on one of the greatest fantasy football podcast available, the Porta Potty. We like to stir the pot and speak the truth! Faith, Family, Fantasy Football! God Bless!",
      valuePosition: "CB",
      rival: {
        name: "Everyone",
        link: 0,
      },
      philosophy: "Score as many points as I possibly can. I can’t give details until I retire.",
      preferredContact:"Text",

    },
    {
      managerID: "559481911498711040",
      name: "JP",
      location: "LA",
      tookOVer: "2012",
      bio:"Building a dynasty quietly and by my own rules. Squeezed every drop out of the horsehoe until there was nothing left",
      valuePosition:"PK",
      rival: {
        name: "No one",
        link: 0,
      },
      philosophy: "Zig when everyone else zags",
      preferredContact:"Starlink",
    },
    {
      managerID: "604399579483430912",
      name: "Larry",
      location: "Charleston",
      bio: "My team is a consistent contender with excellent drafts, well crafted balance, and smart keeper picks. As a two time finalist, my teams have made many playoff runs and fallen short. One of these years the unlucky curse will be broken and Barefoot Bandits will rise again!",
      valuePosition: "QB",
      rival: {
        name: "Darren",
        link: 8,
      },
      philosophy: "Balance and Consistency",
      preferredContact:"Text",
      
    },
    {
      managerID: "604545938056351744",
      name: "Darren",
      location: "Decatur",
      bio: "Tampa Sports Fan, GT Grad",
      valuePosition: "K",
      rival: {
        name: "Larry",
        link: 7,
      },
      philosophy: "Try to have Fun and Not be Sacko"
    },
    {
      managerID: "720732794371776512",
      name: "Austin",
      location: "Denver",
      tookOVer: "2021",
      bio: "The most recent addition to the league, Austin immediately brought value cementing himself as the 4th highest sleeper chat contributor. The same success has not been seen in his fantasy performance after dealing with 2 seasons of horrible luck - being a top 2 finisher in Points Against both seasons. Nevertheless, Austin's competitive nature, ability to overcome adversity, capacity to show immense courage, and the strength to never back down from a challenge will quickly translate to league success. Go Dirty Birds.",
      valuePosition: "QB",
      rival: {
        name: "Everyone",
        link: 0,
      },
      favoritePlayer: 9509,
      philosophy: "If you look good, you feel good. If you feel good, you play good. If you play good, they pay good.",
      preferredContact: "Text",
    }
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    