// Assignment 1 : a jQuery Bonanza
// Your Instructions: employ the jQuery functions below on a website similar to the wireframe at the bottom of the page.
// Functions to employ:
// .click
// .fadein
// .fadeOut
// .addClass
// .append
// .html
// .text
// .val
// .hide
// .show
// .slideDown

$('#btn1').on('click',()=>{
    $('#img1').toggle()
})
$('#btn2').on('click',()=>{
    $('#img1').show()
})
$('#btn3').on('click',()=>{
    $('.div1').fadeIn();
});
$('#btn4').click(()=>{
    $('.div1').fadeOut()
})
$('#link1').click(()=>{
    $('#link1').text('Welcome to my page')
})
$('#btn5').click(()=>{
    $('h1').html('<i>This is exercise</i>').slideUp(2000).slideDown(2000)

})
$('#btn6').click(()=>{
    $('p').append('<b>Add paragraph</b>')
})
 $('#btn7').click(()=>{
    $('h1,p').addClass('green')
 })
 $('#btn8').click(()=>{
    $('#input1').val('example John Smith')
 })