function createPlayer(
  name,
  image = "",
  x = 0,
  y = 0,
  tags = [],
  recentGames = []
) {
  const img = image ? image : `${name.toLowerCase()}.jpg`;
  return { name, image: img, x, y, tags, recentGames };
}

export const subInsights = {
  "Kevin De Bruyne": [
    "Returning from a hamstring injury which has kept him out for 3 months.",
    "Scored or assisted in previous 5 games before injury.",
    "Assisted in all games when coming on as a sub last season.",
    "Scored in last 3 fixtures against Newcastle.",
  ],
  "Oscar Bobb": [
    "Highly rated 20yo, already has 1 goal in 4 appearances for Norway.",
    "Scored 3 goals in last 5 games for the U23s.",
    "Has been training with the first team for just 3 weeks.",
  ],
};

export const homePlayers = [
  createPlayer("Dubravka", "", 0, 4),
  createPlayer("Burn", "", 1, 0),
  createPlayer("Botman", "", 1, 2.5),
  createPlayer("Schar", "", 1, 5.5),
  createPlayer("Trippier", "", 1, 8),
  createPlayer("Longstaff", "", 2, 1.5),
  createPlayer("Guimaraes", "", 2.5, 4),
  createPlayer("Miley", "", 2, 6),
  createPlayer("Gordon", "", 3.5, 1),
  createPlayer("Isak", "", 4, 4),
  createPlayer("Almiron", "", 3.5, 7),
];

export const awayPlayers = [
  createPlayer("Ederson", "", 10, 4),
  createPlayer("Gvardiol", "", 9, 8),
  createPlayer("Ake", "", 9, 5.5),
  createPlayer("Dias", "", 9, 2.5),
  createPlayer("Walker", "", 9, 0),
  createPlayer("Kovacic", "", 8, 6),
  createPlayer("Rodri", "", 8, 2),
  createPlayer("Doku", "", 7, 7),
  createPlayer("Silva", "", 7, 4),
  createPlayer("Foden", "", 7, 1),
  createPlayer("Alvarez", "", 6, 4),
];

export const homeSubs = [
  createPlayer(
    "Hall",
    "",
    3.5,
    1,
    ["winger"],
    [
      ["bench", -1],
      ["bench", -1],
      ["bench", 7.2, ["goal"]],
    ]
  ),
  createPlayer(
    "Ritchie",
    "",
    3.5,
    7,
    ["winger"],
    [
      ["bench", -1],
      ["bench", -1],
      ["bench", -1],
    ]
  ),
  createPlayer(
    "Lascelles",
    "",
    3.5,
    7,
    ["leader", "defensive rock"],
    [
      ["start", 7.2],
      ["bench", -1],
      ["bench", -1],
    ]
  ),
];

export const awaySubs = [
  createPlayer(
    "Kevin De Bruyne",
    "kdb.jpg",
    7,
    4,
    ["playmaker"],
    [
      ["injured", -1],
      ["injured", -1],
      ["injured", -1],
    ]
  ),
  createPlayer(
    "Oscar Bobb",
    "bobb.jpg",
    7,
    7,
    ["inverted winger"],
    [
      ["bench", -1],
      ["bench", -1],
      ["bench", -1],
    ]
  ),
  createPlayer(
    "Matheus Nunes",
    "nunes.jpg",
    7,
    4,
    ["box-to-box"],
    [
      ["bench", -1],
      ["sub", 7.2],
      ["sub", 6.8],
    ]
  ),
  createPlayer(
    "Rico Lewis",
    "lewis.jpg",
    8,
    2,
    ["inverted full-back"],
    [
      ["start", 7.2],
      ["bench", -1],
      ["start", 8.9, ["assist", "goal"]],
    ]
  ),
  createPlayer(
    "Jack Grealish",
    "grealish.jpg",
    7,
    7,
    ["playmaker", "winger"],
    [
      ["start", 7.2],
      ["bench", -1],
      ["start", 8.1, ["assist"]],
    ]
  ),
];
