// ----------------Movie database-------------------

let arr = [
    {
        hasWatched : "seen",
        title : "In Bruges",
        rating : "5 stars"
    },
    {
        hasWatched : "not seen",
        title : "Frozen",
        rating : "4.5 stars"
    },
    {
        hasWatched : "seen",
        title : "Mad Max",
        rating : "5 stars"
    },
    {
        hasWatched : "not seen",
        title : "Les Miserables",
        rating : "3.5 stars"
    }
]


arr.forEach(function(item) {
    console.log("you have " + item.hasWatched +" \""+ item.title +"\" - " + item.rating);
});


// arr.forEach(function(item, index) {
//     console.log("you have " + arr[index].hasWatched + " "+ arr[index].title +" "+ arr[index].rating);
// });


// ----------------toDoList-------------------
