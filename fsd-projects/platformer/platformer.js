$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms

createPlatform(150, 650, 100, 10, "red")
createPlatform(200, 462, 100, 10, "red")
createPlatform(400, 600, 100, 10, "red")
createPlatform(0, 350, 100, 10, "red")
createPlatform(300, 350, 100, 10, "red")
createPlatform(650, 350, 100, 10, "red")
createPlatform(1000, 350, 100, 10, "red")
createPlatform(1300, 350, 100, 10, "gold")
createPlatform(1300, 625, 100, 10, "red")
    // TODO 3 - Create Collectables


createCollectable("max", 440, 550)
createCollectable("diamond", 0, 300)
createCollectable("database", 680, 310)
createCollectable("database", 1330, 310)
createCollectable("database", 1330, 665)
    
    // TODO 4 - Create Cannons
createCannon("top", 625, 2500);
createCannon("top", 950, 2500);
createCannon("top", 300, 2500);    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
