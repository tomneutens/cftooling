var les = {
  usedSprites: [{name: "rood", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "groen", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "blauw", url: "sprites/color_swatch_no_background_100x100.png"},
              {name: "gemengd", url: "sprites/color_swatch_no_background_100x100.png"} ],
  usedBackground: "sprites/color_swatch_no_background_100x100.png",
  setupCodes: ['game.waardeRood = 128;\ngame.sprites.rood.maakKleur("rgb(" + game.waardeRood + ", 0, 0)");\ngame.sprites.rood.maakX(0);\ngame.sprites.rood.maakY(0);',
  'game.sprites.groen.color = "#0F0";\ngame.sprites.groen.maakX(100);\ngame.sprites.groen.maakY(0);',
  'game.sprites.blauw.color = "#00F";\ngame.sprites.blauw.maakX(200);\ngame.sprites.blauw.maakY(0);',
  ''],
  loopCodes: ['if (game.isKnopIngedrukt("a")){\n  game.waardeRood = (game.waardeRood + 1) % 256;\n  game.sprites.rood.maakKleur("rgb(" + game.waardeRood + ", 0, 0)");\n}',
  '',
  '',
  '']
};
