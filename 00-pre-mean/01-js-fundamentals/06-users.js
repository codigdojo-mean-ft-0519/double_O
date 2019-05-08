users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ]


function userlanguages(arr){
    var str = ""
    for ( var i=0; i < arr.length; i++){
        str += arr[i].fname+" "+arr[i].lname+" knows ";
        for ( var j =0; j< arr[i].languages.length-1; j++){
            str += arr[i].languages[j]+", ";
        }
        str += " and "+arr[i].languages[arr[i].languages.length-1]+".\n"
            str += arr[i].fname+" "+arr[i].lname+" interests include ";
            for( interest in arr[i].interests){
                str += arr[i].interests
                // console.log("The interest is: "+interest);
            }
    }
    return str

}
console.log(userlanguages(users));