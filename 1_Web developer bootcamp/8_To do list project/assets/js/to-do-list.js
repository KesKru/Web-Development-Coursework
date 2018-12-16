// Variables

let ul = $("ul");
let newItem = $("input.add-item");
let firstLi = $("li.add-item");
let item = $(".item");
let del = $(".delete");


// console.log(newItem);
// console.log(item);


/* ---------------------- Add Text decorators ------------------------ */


// item.click(function () {
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({
//             color: "rgb(34, 34, 34)",
//             textDecoration: "none"
//         });
//     } else {
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//         });
//     }
// });

// item.click(function (e) {
//     $(this).toggleClass("completedItem");
//     e.stopPropagation();
// });

ul.on("click", ".item", function (e) {
    $(this).toggleClass("completedItem");
    e.stopPropagation();
});


/* ---------------------- Delete button ------------------------ */


// del.click(function (e) {
//     $(this).parent().remove();
//     e.stopPropagation();
// });

ul.on("click", ".delete", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});



// del.click(function (e) {
//     $(this).parent().fadeOut(500, function () {
//         $(this).remove();
//     });
//     e.stopPropagation();
// });


/* del.click(function (event) {
    $(this).parent().fadeOut();
    event.stopPropagation();
});
 */

/* ----------------------  Hide/unhide delete button ------------------------ */


// del.css({
//     visibility: "visible",
// });

// item.on("hover", function (e) {
//     console.log("!!")
//     del.css({
//         visibility: "visible",
//     });
//     e.stopPropagation();
// });


/* ---------------------- New to do ------------------------ */


newItem.keypress(function (e) {
    if (e.which === 13) {
        let x = $(this).val();
        $(this).val("");
        // console.log(y);
        firstLi.after('<li class="list-group-item item"><p class="li-text">' + x + '</p> <span class="delete"><img src="assets/icons/trash-alt.svg" alt=""> </span> </li>');
    }

    e.stopPropagation();
});


// newItem.keypress(function (e) {
//     if (e.which === 13) {
//         let x = $(this).val();
//         let y = item.first().clone(true);
//         // y.text(x)
//         console.log(x);

//         firstLi.after(y);
//     }
//     e.stopPropagation();
// });







// addItem.after($('<p/>'))

// addItem.on( "keypress", function() {
//     ;
//   });