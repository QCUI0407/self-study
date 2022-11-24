/**
 * Write your solutions here
 */
// 1.When the button with the id of change-bg-color is clicked the background of the page should turn blue.
$('#change-bg-color').click(function (){
    $('body').css('background-color',"blue");
})
// 2.When a button that belongs to the btn class is clicked, change the background color of that button to this color: #93f2e5.
$('.btn').click(function (){
    $(this).css('background-color',"#93f2e5");
})
//3.When the button with the id of reset-btn is clicked make sure it reloads the page and restores everything back to the initial state.
$('#reset-btn').click(function (){
    location.reload();
})

//4.When a star is being hovered by the mouse: get the selected data attribute value from the star being hovered and display it in the element with the id of review-result.
$('.star').hover(function (){
    let val = $(this).data('value');
    // let val = $(this).attr('data-value');
    $('#review-result').html(val)
})

//5. hen the button with the id of go-to-btn is clicked change the window location to the url specified in the URL input with the id of custom-url. Consider adding http:// to your URLS if you want to test external domains.

$('#go-to-btn').click(function (e){
    e.preventDefault();
    window.open($('#custom-url').val());
})

//6.When the button with an id of append-to-ul is clicked, append a li with the content of text to the ul with the id of append-to-me.
$('#append-to-ul').click(function (e){
    e.preventDefault();
    $("#append-to-me").append("<li>" + "TEXT" + "</li>");
})
//7.Two seconds after the page loads, the heading with the id of message should change its text to "Hello, Everyone!

    setInterval(function (){
        $('#message').html("Hello,Everyone!");
    },2000);


//8.When a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked should change to yellow. When a list item that has a yellow background is clicked, the background should toggle back to the original background.
$('#hl-toggle').children().click(function (e){
            $(this).toggleClass('star')
    }
)

//9.When the button with the id of upcase-name is clicked, the element with the id of output should display the text Your name uppercased is: + the value of the input element with the id of input transformed to uppercase.

// $("#list-chars-btn").click(function(e){
//     e.preventDefault();
//     //changing the type "submit" of the button.
//     let input = $("#characters").val();
//     for(let i=0;i<input.length;i++){
//         $("ul").append("<li>" + input[i] + "</li>");
//     }
// });

$('#upcase-name').click(function (e){
    e.preventDefault();
    let name = $("#input").val().toUpperCase();
    $('#output').append("Your name uppercased is: " + name);
})

//10.Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that was clicked should be doubled. Example: If the current font-size is 12px double-clicking would turn it into 24, 48...

size=parseInt($('#font-grow').children().css('font-size'));

$("#font-grow").children().on("click",function(){

    size=size*2;
    $(this).css("font-size",size + "px");
});




































