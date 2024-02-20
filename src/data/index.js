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
    heading: "Insight about Kevin De Bruyne",
    img: "/assets/images/players/kdb.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "Insight about Newcastle leading",
    img: "/assets/images/clubs/newcastle.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "Insight about Kieran Trippier assists",
    img: "/assets/images/players/trippier.jpg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod.",
  },
  {
    heading: "Insight about Man City trailing",
    img: "/assets/images/clubs/city.png",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const goals = [
  { mins: 26, scorer: "B.Silva", homeOrAway: 1 },
  { mins: 35, scorer: "Isak", homeOrAway: 0 },
  { mins: 37, scorer: "Gordon", homeOrAway: 0 },
];

export const tfgInsightsData2 = [
  {
    heading: "Insight about title race",
    img: "/assets/images/clubs/city.png",
    content:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "Insight about Pep Guardiola",
    img: "/assets/images/managers/pep.jpeg",
    content:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    heading: "Insight about Oscar Bobb",
    img: "/assets/images/players/bobb.jpg",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const subInsights = {
  "Kevin De Bruyne": [
    "Returning from a hamstring injury which has kept him out for 3 months.",
    "Scored or assisted in previous 5 games before injury. (todo: not real)",
    "Assisted in all games when coming on as a sub last season. (todo: not real)",
    "Scored in last 3 fixtures against Newcastle. (todo: not real)",
  ],
  "Oscar Bobb": [
    "Highly rated 20yo, already has 1 goal in 4 appearances for Norway.",
    "Scored 3 goals in last 5 games for the U23s. (todo: not real)",
    "Has been training with the first team for just 3 weeks. (todo: not real)",
  ],
};

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
