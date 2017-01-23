var les = {
  usedSprites: [{name: "appel", url: "sprites/appel.svg"}, {name: "lijn", url: "sprites/lijn.png"}, {name:"rodeLijn", url: 'sprites/rode_lijn.png'}  ],
  usedBackground: "img/achtergrond_les1.png",
  setupCodes: ['game.sprites.appel.richtNaar(-45);\ngame.sprites.appel.maakX(100);\ngame.sprites.appel.maakY(100);\ngame.sprites.appel.maakXSnelheid(1);\ngame.sprites.appel.maakYSnelheid(1.2);\ngame.gameOver = false;\ngame.score = 0;',
  'game.sprites.lijn.maakX(100);\ngame.sprites.lijn.maakY(290);',
  'game.sprites.rodeLijn.maakX(0);\ngame.sprites.rodeLijn.maakY(340);'],
  loopCodes: ['if (!game.gameOver){\n  game.sprites.appel.neemStap();\n  game.sprites.appel.keerOmAanRand();\n  if (game.sprites.appel.raakIk(game.sprites.lijn)){\n    game.score++;\n    game.schrijfNaarConsole("Je hebt: " + game.score + " punten!");\n    game.sprites.appel.maakYSnelheid(game.sprites.appel.geefYSnelheid()*-1);\n    game.sprites.appel.neemStap();\n }\n if (game.sprites.appel.raakIk(game.sprites.rodeLijn)){\n     game.gameOver = true;\n }\n}',
  'if (game.pijltjeRechtsIngedrukt()){\n    game.sprites.lijn.maakX(game.sprites.lijn.x + 1);\n}\nif (game.pijltjeLinksIngedrukt()){\n    game.sprites.lijn.maakX(game.sprites.lijn.x - 1);}',
  '']
};
