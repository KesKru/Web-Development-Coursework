// Variables

let ul = $("ul");
let newItem = $("input.add-item");
let item = $(".item");
let del = $(".delete");


console.log(newItem);
console.log(item);


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

ul.on("click","li", function (e) {
    $(this).toggleClass("completedItem");
    e.stopPropagation();
});


/* ---------------------- Delete button ------------------------ */


// del.click(function (e) {
//     $(this).parent().remove();
//     e.stopPropagation();
// });

del.click(function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});


/* del.click(function (event) {
    $(this).parent().fadeOut();
    event.stopPropagation();
});
 */


/* ---------------------- New to do ------------------------ */


newItem.keypress(function (e) {
    if (e.which === 13) {
        let x = $(this).val();
        $(this).val("");
        ul.append("<li>" + x + "</li>");
        console.log("OK!");
    }
    e.stopPropagation();
});







// addItem.after($('<p/>'))

// addItem.on( "keypress", function() {
//     ;
//   });