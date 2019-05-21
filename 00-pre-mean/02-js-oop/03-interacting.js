
    var tigger = {
        character: 'Tigger',
        north: pooh,
        greet: function(){
            console.log('The woderful thing about tigger is tigger is grreatt!');
        }
    };
    tigger.greet();   // call tigger's greet method

    var pooh = {
        character: 'Winnie the Pooh',
        south : tigger,
        greet: function(){
            console.log('The wonderful thing about winnie is a relationship with madiba');
        }
    };
    pooh.greet();

    var piglet = {
        character: 'Piglet',
        north : 'owl',
        east: 'pooh',
        greet: function(){
            console.log('Oinklet, Oinklet where is the mud?');
        }
    };
    piglet.greet();

    var bees = {
        character: 'bees' ,
        north : 'rabbit',
        west : 'pooh',
        greet: function(){
            console.log('Buzz, come get you some honey, if you dare...');
        }
    };
    bees.greet();

    var rabbit = {
        charcater: 'Rabbit' ,
        west : 'robin',
        east : 'gopher',
        greet: function(){
            console.log('Looking for a rabbits foot, go for it..');
        }
    };
    rabbit.greet();

    var robin = {
        character: 'Christopher Robin',
        west: 'owl',
        east : 'rabbit',
        north : 'kanga',
        greet: function(){
            console.log('Rocking Robin Tweet, Tweet');
        }
    };
    robin.greet();

    var gopher = {
        character: 'Gopher',
        west : 'rabbit',
        greet: function(){
            console.log('Gopher it!!');
        }

    };
    gopher.greet();

    var owl = {
        character: 'Owl',
        east : 'robin',
        greet: function(){
            console.log('Hoot, Hoot... welcome says the wise old owl');
        }
    };
    owl.greet();

    var kanga = {
        cahracter: 'Kanga' ,
        north: 'eeyore',
        greet: function(){
            console.log('Does kanga start for kangaroo?');
        }

    };
    kanga.greet();

    var eeyore = {
        character: 'Eeyore' ,
        east : 'heffalumps',
        greet: function(){
            console.log('Welcome to the Eeyore hempstead');
        }

    };
    eeyore.greet();

    var heffalumps = {
        charcater: 'Heffalumps',
        west: 'eeyore',
        greet: function(){
            console.log('What to know what a Heffalump is ? .... come inside an have a seat')
        }

    };
    heffalumps.greet();

    tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
    pooh.south = tigger;
    pooh.east = bees;
    pooh.north = robin;
    pigglet.north = owl;
    pigglet.east = tigger.north;
    tigger.north.west = piglet;
    tigger.north.east = bees;
    bees.north = rabbit;
    bees.west = pooh;
    rabbit.south = bees;
    rabbit.east = gopher;
    rabbit.west = robbin;
    gopher.west = rabbit
    robin.east = owl;
    robin.west = rabbit;
    robin.north = kanga;
    bees.north.west = robin;
    kanga.north = eeyore;
    kanga.north.east = heffalumps;
    heffalumps.east.south = kanga;
