var tigger = { character: 'Tigger' }; // start with just the character attribute
var pooh = { character: 'Winnie the Pooh' };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
pooh.east = bees;
var piglet = { character: 'Piglet' };
pigglet.east = tigger.north;
tigger.north.west = piglet;
var bees = { character: 'Bees' };
var rabbit = { charcater: 'Rabbit' };
bees.north = rabbit;
rabbit.south = bees;
var robin = { character: 'Christopher Robin' };
var owl = { character: 'Owl' };
robin.east = owl;
bees.north.west = robin;
rabbit.west = robbin;
var kanga = { cahracter: 'Kanga' };
var eeyore = { character: 'Eeyore' };
robin.north = kanga;
kanga.north = eeyore;
var heffalumps = { charcater: 'Heffalumps' };
kanga.north.east = heffalumps;
heffalumps.east.south = kanga;
