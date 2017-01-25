var les = {
  usedSprites: [{name: "rood", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "groen", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "blauw", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "gemengd", url: "sprites/color_swatch_no_background_100x100.png"} ],
  usedBackground: "sprites/color_swatch_no_background_100x100.png",
  setupCodes: ['game.waardeRood = 128;\ngame.sprites.rood.maakKleurHoeveelheidRood(game.waardeRood);\ngame.sprites.rood.maakX(0);\ngame.sprites.rood.maakY(0);',
  'game.waardeGroen = 128;\ngame.sprites.groen.maakKleurHoeveelheidGroen(game.waardeGroen);\ngame.sprites.groen.maakX(0);\ngame.sprites.groen.maakY(100);',
  'game.waardeBlauw = 128;\ngame.sprites.blauw.maakKleurHoeveelheidBlauw(game.waardeBlauw);\ngame.sprites.blauw.maakX(0);\ngame.sprites.blauw.maakY(200);',
  'game.sprites.gemengd.maakX(200);\ngame.sprites.gemengd.maakY(100);\ngame.sprites.gemengd.scale(2);'],
  loopCodes: ['if (game.isKnopIngedrukt("r")){\n  game.waardeRood = (game.waardeRood + 1) % 256;\n  game.sprites.rood.maakKleurHoeveelheidRood(game.waardeRood);\n  game.schrijfNaarConsole("R: " + game.waardeRood);\n}',
  'if (game.isKnopIngedrukt("g")){\n  game.waardeGroen = (game.waardeGroen + 1) % 256;\n  game.sprites.groen.maakKleurHoeveelheidGroen(game.waardeGroen);\n  game.schrijfNaarConsole("G: " + game.waardeGroen);\n}',
  'if (game.isKnopIngedrukt("b")){\n  game.waardeBlauw = (game.waardeBlauw + 1) % 256;\n  game.sprites.blauw.maakKleurHoeveelheidBlauw(game.waardeBlauw);\n  game.schrijfNaarConsole("B: " + game.waardeBlauw);\n}',
  'game.sprites.gemengd.maakKleur(game.waardeRood, game.waardeGroen, game.waardeBlauw);']
};
