var game = {}
function initGame(reinit){
  let setupEditors = null;
  let loopEditors = null;
  if (reinit){
    setupEditors = game.setupEditors;
    loopEditors = game.loopEditors;
    game.dispose();
  }
  game = {};
  game = {
    usedSprites: les.usedSprites,
    usedBackground: les.usedBackground,
    startSetupCodes: les.setupCodes,
    startLoopCodes: les.loopCodes,
    scene: null,
    spritecode: [],
    sprites: {},
    background: null,
    ticker: null,
    setupCodeBuffer: [],
    loopCodeBuffer: [],
    setupEditors: [],
    loopEditors: [],
    keyMemory: {},
    background: null,
    foreground: null,
   setKeyMemory: function(key, pressed){
     this.keyMemory[key] = pressed;
   },
   pijltjeOmhoogIngedrukt: function(){
     return this.keyMemory["38"] || false;
   },
   pijltjeRechtsIngedrukt: function(){
     return this.keyMemory["39"] || false;
   },
   pijltjeOmlaagIngedrukt: function(){
     return this.keyMemory["40"] || false;
   },
   pijltjeLinksIngedrukt: function(){
     return this.keyMemory["37"] || false;
   },
   isKnopIngedrukt: function(letter){
     console.log(letter.charCodeAt(0));
     return this.keyMemory[letter.charCodeAt(0)];
   },
    dispose: function(){
      game.scene.reset();
      //game.ticker.pause();
    },
    startGame: function(){
      var background = game.scene.Layer('background', {useCanvas:true, autoClear:false});
      game.background = background.Sprite(game.usedBackground);
      game.background.update();
      // create the Sprite objects;
      var foreground = game.scene.Layer('foreground', {useCanvas:true});
      game.foreground = foreground;
      game.usedSprites.forEach(function(item, index){

        game.sprites[item.name] = game.foreground.Sprite(item.url);
      });

      // Here we eval the setup code for each sprite
      try{
        game.setupEditors.forEach(function(element, index){
          eval(element.getValue());
        });
      }catch(error){
        console.log("invalid code");
      }

      // Update the sprites
      for (key in game.sprites){
        game.sprites[key].update();
      };

      // Create the game Ticker
      game.ticker = game.scene.Ticker(game.paint);
      // Start ghe game Ticker
      game.ticker.run();
    },
    paint: function(){
      // Eval the loop code for each sprite
      try{
        game.loopEditors.forEach(function(element, index){
          eval(element.getValue());
        });
      }catch(err){
        console.log("invalid code");
      }

      // Update the sprites
      for (key in game.sprites){
        game.sprites[key].update();
      };
    },
    initBase: function(){
      //Create the game display
      game.scene = sjs.Scene({w:480, h:360, parent: document.getElementById("gameViewContainer")});

      // load the images in parallel. When all the images are
      // ready, the callback function is called.
      game.scene.loadImages(['sprites/appel.svg', 'sprites/lijn.png', 'img/achtergrond_les1.png'], function() {
        game.startGame();
      });
    },
    init: function(){
        // Create key event handlers
        $(window).keydown(function(e) {
           var key = e.which;
           game.setKeyMemory(key, true);
           console.log("key down " + e.which);
       });
       $(window).keyup(function(e) {
          var key = e.which;
          game.setKeyMemory(key, false);
          console.log("key up " + e.which);
      });
      // Create editors
      let tabs = $("#sprite_code_tabs");
      var selIndex = $( "#sprite_code_tabs" ).tabs( "option", "selected" );
      tabs.tabs("destroy");
      tabs.empty();
      let tabButtons = $("<ul id='sprite_code_tabs_buttons'>");
      tabs.append(tabButtons);
      this.usedSprites.forEach(function(item, index){
        let tabnr = index + 1;
        let newTabButton = $("<li>").append($("<a href='#tab-" + tabnr + "'>").html(item.name));
        tabButtons.append(newTabButton);
        let newTabId = "tab-" + tabnr;
        let newTab = $("<div id='" + newTabId + "'>");
        tabs.append(newTab);
        let newSetupEditor = $("<div id='setupEditor" + tabnr + "' class='setupEditor'>");
        let newLoopEditor = $("<div id='loopEditor" + tabnr + "' class='loopEditor'>");
        newSetupEditor.html(game.startSetupCodes[index]);
        newLoopEditor.html(game.startLoopCodes[index]);
        newTab.append(newSetupEditor);
        newTab.append(newLoopEditor);
        tabs.append(newTab);
        let editor1 = ace.edit("setupEditor" + tabnr);
        editor1.getSession().setMode("ace/mode/javascript");
        let editor2 = ace.edit("loopEditor" + tabnr);
        editor2.getSession().setMode("ace/mode/javascript");
        //Make sure editors loose focus after clicking on the game window
        $("#gameViewContainer").click(function(){
          editor1.blur();
          editor2.blur();
          $("#gameViewContainer").focus();
        });
        game.setupEditors.push(editor1);
        game.loopEditors.push(editor2);
      });
      $("#sprite_code_tabs").ready(function(){
        $("#sprite_code_tabs").tabs({selected: selIndex});
      });



      this.initBase();
    },
    refresh: function(setupEditors, loopEditors){
      // Use editors from previous run.
      this.setupEditors = setupEditors;
      this.loopEditors = loopEditors;
      this.initBase();
    },
    willeKeurigGetalTussen: function(minWaarde, maxWaarde){
      return Math.floor((Math.random() * maxWaarde) + minWaarde);
    },
    schrijfNaarConsole: function(tekst){
      let currentContent = $("#consoleOutput").html();
      $("#consoleOutput").html(tekst + "<br/>" + currentContent);
    }
  };
  if (reinit){
    game.refresh(setupEditors, loopEditors);
  }else{
    game.init();
  }
};
