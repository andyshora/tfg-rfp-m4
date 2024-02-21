function createPlayer(
  [name, image = "", x = 0, y = 0, tags = [], recentGames = []],
  impactOnMatch = [0, 0, 0],
  quality = "-"
) {
  const img = image ? image : `${name.toLowerCase()}.jpg`;
  return { name, image: img, x, y, tags, recentGames, impactOnMatch, quality };
}

export const tfgInsightsData = [
  {
    type: "manager",
    typeKey: "Pep Guardiola",
    heading: "Pep's Teams Top World Super League",
    img: "/assets/images/managers/pep.jpeg",
    content:
      "The best two club sides since 2008 according to our World Super League have been Barcelona in 2011 and Man City in 2023. Both teams have been coached by Pep.",
  },
  {
    type: "player",
    typeKey: "Kevin De Bruyne",
    heading: "Playmaking Powerhouse",
    img: "/assets/images/players/kdb.jpg",
    content:
      "KDB has contributed (goals + assists) to 21% of Man City's goals in the Premier League during the Pep Guardiola era, only Haaland, Aguero & Sterling have contributed more during their respective tenures although all 3 are attackers.",
  },
  {
    type: "team",
    typeKey: "Man City",
    heading: "Rarely Underdogs",
    img: "/assets/images/clubs/city.png",
    content:
      "Man City won the Premier League in 22/23 but the lowest title chances they ever had was 45% in January 2023.",
  },
  {
    type: "manager",
    typeKey: "Pep Guardiola",
    heading: "Consistency is King Under Pep",
    img: "/assets/images/managers/pep.jpeg",
    content:
      "Since July 2017 Manchester City have been the most consistent team in Europe under Guardiola.",
  },
];

export const tfgInsightsData2 = [
  {
    type: "player",
    typeKey: "Kevin De Bruyne",
    heading: "Assist Machine",
    img: "/assets/images/players/kdb.jpg",
    content:
      "KDB has the best xA (expected assists) per 90 of any Manchester City player this season in the Premier League.",
  },
  {
    type: "player",
    typeKey: "Oscar Bobb",
    heading: "City's Rising Star",
    img: "/assets/images/players/bobb.jpg",
    content:
      "Only Erling Haaland has a better xG per 90 in the Premier League for Man City this season than Bobb (0.78).",
  },
  {
    type: "team",
    typeKey: "Man City",
    heading: "City's Crown Slips. Title Odds Plummet!",
    img: "/assets/images/clubs/city.png",
    content:
      "Man City started the season with a 61% chance of winning the Premier League. This peaked at 71% in November but has dropped to 37% today.",
  },
  {
    type: "player",
    typeKey: "Oscar Bobb",
    heading: "From Youth Academy to Top Ranks",
    img: "/assets/images/players/bobb.jpg",
    content: "Bobb is the 13th best U21 player to play for City since 2012.",
  },
];

export const goals = [
  { mins: 26, scorer: "B.Silva", homeOrAway: 1 },
  { mins: 35, scorer: "Isak", homeOrAway: 0 },
  { mins: 37, scorer: "Gordon", homeOrAway: 0 },
];

export const homePlayers = [
  createPlayer(["Dubravka", "", 0, 4]),
  createPlayer(["Burn", "", 1, 0]),
  createPlayer(["Botman", "", 1, 2.5]),
  createPlayer(["Schar", "", 1, 5.5]),
  createPlayer(["Trippier", "", 1, 8]),
  createPlayer(["Longstaff", "", 2, 1.5]),
  createPlayer(["Guimaraes", "", 2.5, 4]),
  createPlayer(["Miley", "", 2, 6]),
  createPlayer(["Gordon", "", 3.5, 1]),
  createPlayer(["Isak", "", 4, 4]),
  createPlayer(["Almiron", "", 3.5, 7]),
];

export const awayPlayers = [
  createPlayer(["Ederson", "", 10, 4]),
  createPlayer(["Gvardiol", "", 9, 8]),
  createPlayer(["Ake", "", 9, 5.5]),
  createPlayer(["Dias", "", 9, 2.5]),
  createPlayer(["Walker", "", 9, 0]),
  createPlayer(["Kovacic", "", 8, 6]),
  createPlayer(["Rodri", "", 8, 2]),
  createPlayer(["Doku", "", 7, 7]),
  createPlayer(["Silva", "", 7, 4]),
  createPlayer(["Foden", "", 7, 1]),
  createPlayer(["Alvarez", "", 6, 4]),
];

export const homeSubs = [
  createPlayer(
    [
      "Hall",
      "",
      3.5,
      1,
      ["Winger"],
      [
        ["bench", -1],
        ["bench", -1],
        ["bench", 7.2, ["goal"]],
      ],
    ],
    [0.05, 0.05, -0.1]
  ),
  createPlayer(
    [
      "Ritchie",
      "",
      3.5,
      7,
      ["Winger"],
      [
        ["bench", -1],
        ["bench", -1],
        ["bench", -1],
      ],
    ],
    [0.05, 0.05, -0.1]
  ),
  createPlayer(
    [
      "Lascelles",
      "",
      3.5,
      7,
      ["Leader", "Defensive Rock"],
      [
        ["start", 7.2],
        ["bench", -1],
        ["bench", -1],
      ],
    ],
    [0.05, 0.05, -0.1]
  ),
];

export const awaySubs = [
  createPlayer(
    [
      "Kevin De Bruyne",
      "kdb.jpg",
      7,
      4,
      ["Playmaker"],
      [
        ["injured", -1],
        ["injured", -1],
        ["injured", -1],
      ],
    ],
    [-1, -0.5, 1.5],
    "1st"
  ),
  createPlayer(
    [
      "Oscar Bobb",
      "bobb.jpg",
      7,
      7,
      ["Inverted Winger"],
      [
        ["bench", -1],
        ["bench", -1],
        ["bench", -1],
      ],
    ],
    [0.2, 0.1, -0.3],
    "14th"
  ),
  createPlayer(
    [
      "Matheus Nunes",
      "nunes.jpg",
      7,
      4,
      ["Box-to-Box"],
      [
        ["bench", -1],
        ["sub", 7.2],
        ["sub", 6.8],
      ],
    ],
    [0.2, 0.1, -0.3],
    "33rd"
  ),
  createPlayer(
    [
      "Rico Lewis",
      "lewis.jpg",
      8,
      2,
      ["Inverted Full-back"],
      [
        ["start", 7.2],
        ["bench", -1],
        ["start", 8.9, ["assist", "goal"]],
      ],
    ],
    [0.05, -0.05, 0.1],
    "1st"
  ),
  /*createPlayer(
    [
      "Jack Grealish",
      "grealish.jpg",
      7,
      7,
      ["Winger"],
      [
        ["start", 7.2],
        ["bench", -1],
        ["start", 8.1, ["assist"]],
      ],
    ],
    [-0.5, -1, 1.5],
    '4th'
  ),*/
];
