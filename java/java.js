let menu = document.querySelector(".bars");
let nav = document.querySelector(".nav");

menu.onclick = function(){
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active')
}

// window.onscroll = function(){
//     menu.classList.remove('fa-times')
//     nav.classList.remove('active')
// }


function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "alkholuig@gmail.com",
        Password : "EDC499170479F4D04A485960CA4667C8014A",
        To : 'georgealkhouli1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact",
        Body : "Name"+ document.getElementById("name").value
                + "<br> Email:" + document.getElementById("email").value
                + "<br> Phone:" + document.getElementById("phone").value
                + "<br> Subject:" + document.getElementById("sub").value
                + "<br> Comment:" + document.getElementById("comment").value
    }).then(
        message => alert("Message Sent Succesfully ")
    );
}



