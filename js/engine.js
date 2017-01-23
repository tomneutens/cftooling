var engine = {
  stage: null,
  images: [],
  sprites: [],
  spriteSheets: [],
  monsterSpriteSheet: null,
  sprite: null,
  numberOfSprites: 0,
  screen_width: 550,
  screen_height: 400,
  imagesLoaded: 0,
  init: function(){
    this.stage = new createjs.Stage("gameview");

    // load sprite images
    this.numberOfSprites = 1;
    var imgPaths = ["sprites/bus.png", "sprites/appel.svg", "sprites/lijn.svg", "sprites/meisje.png"];
    for ( i = 0 ; i < this.numberOfSprites ; ++i){
      this.images.push(new Image());
      this.images[i].onload = this.handleImageLoad;
      this.images[i].onerror = this.handleImageError;
      this.images[i].src = imgPaths[i];
    }


  },
  startGame: function(){
    for (i = 0 ; i < engine.numberOfSprites ; ++i){
      engine.spriteSheets.push(new createjs.SpriteSheet({
        // image to use
        images: [engine.images[i]],
        // width, height & registration point of each sprite
        frames: {width: engine.images[i].width, height: engine.images[i].height, regX: 32, regY: 32},
        animations: {
            walk: [0]
        }
      }));
      engine.sprites.push(new createjs.Sprite(engine.spriteSheets[i]));
      engine.sprites[i].gotoAndPlay("walk");     //animate

      // set up a shadow. Note that shadows are ridiculously expensive. You could display hundreds
      // of animated rats if you disabled the shadow.
      engine.sprites[i].shadow = new createjs.Shadow("#454", 0, 5, 4);

      engine.sprites[i].name = "sprite" + i;
      engine.sprites[i].direction = 90;
      engine.sprites[i].vX = 4;
      engine.sprites[i].x = 16;
      engine.sprites[i].y = 32;
      engine.sprites[i].scaleX = 0.5;
      engine.sprites[i].scaleY = 0.5;

      // have each monster start at a specific frame
      engine.sprites[i].currentFrame = 0;
      this.stage.addChild(engine.sprites[i]);
    }

    createjs.Ticker.addEventListener("tick", this.handleTick);
  },
  handleImageLoad: function(){
    engine.imagesLoaded = engine.imagesLoaded + 1;
    if (engine.imagesLoaded == engine.numberOfSprites){
      engine.startGame();
    }
  },
  handleImageError: function(){

  },
  handleTick: function(){
      for (i = 0 ; i < engine.numberOfSprites ; i++){
         eval(editor.getValue());

     }

     // update the stage:
     engine.stage.update();
  }
};

createjs.Sprite.prototype.sayHello = function(){
  console.log("hello" + this.name);
};

$(document).ready(function(){
  engine.init();

});
