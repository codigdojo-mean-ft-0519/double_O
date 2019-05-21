var tigger = {
    character: 'Tigger',
};


var pooh = {
    character: 'Winnie the Pooh',

};


var piglet = {
    character: 'Piglet',
};


var bees = {
    character: 'bees' ,

};

var rabbit = {
    charcater: 'Rabbit' ,

};


var robin = {
    character: 'Christopher Robin',

};


var gopher = {
    character: 'Gopher',


};


var owl = {
    character: 'Owl',

};


var kanga = {
    cahracter: 'Kanga' ,


};


var eeyore = {
    character: 'Eeyore' ,


};


var heffalumps = {
    charcater: 'Heffalumps',

};

var player = { location: tigger };

function move(direction){
    if (direction == "north"){
        if ( player.location.north != undefined){
            curLocation = player.location.north;
            console.log(" You are now at "+curLocation.character+" 's house. ")
        }
        else{
            console.log("You may not want to go that way")
        }

    }
    else if (  direction == "south"){
        if ( player.location.south != undefined){
            curLocation = player.location.south;
            console.log("You are now at "+curLocation.character+" 's house")
        }
        else {
            console.log("You may not want to go that way")
        }
    }
}