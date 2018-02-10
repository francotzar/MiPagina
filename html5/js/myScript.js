/*
    author: José Ricardo Pérez Pérez
    The code bellow will send an email
    using the Goolge SMTP server. 
    We get the data from the the form 
    of the page
*/ 
function emailMessage() {
    //Array of elementos of our form
    var x = document.getElementById("myForm").elements
    var name = x[0]["value"];
    var message = x[1]["value"]
    var email = x[2]["value"]
    //We send or message
    Email.send(
        "noreplyescomweb@gmail.com",
        email,
        "Mensaje de "+name,
        message,
        "smtp.gmail.com",
        "noreplyescomweb@gmail.com",
        "Contra$enia"
    );
}