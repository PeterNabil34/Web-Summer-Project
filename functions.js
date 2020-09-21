function registerForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('password').value;

    var alpha = /^[a-zA-Z]+$/;
    var emailform = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    var passform = /^[a-zA-Z0-9]+$/;

    if(alpha.test(fname) == false)
        {
            document.getElementById('fname_message').innerHTML = "  *Your First Name Should Contain Letters ONLY.<br>";
            document.getElementById('fname').focus();
            return false;
        }
    else
        {
            document.getElementById('fname_message').innerHTML = "";
        }

    if(alpha.test(lname) == false)
        {
            document.getElementById('lname_message').innerHTML = "  *Your Last Name Should Contain Letters ONLY.<br>";
            document.getElementById('lname').focus();
            return false;
        }
    else
        {
            document.getElementById('lname_message').innerHTML = "";
        }

    if(emailform.test(email) == false)
        {
            document.getElementById('email_message').innerHTML = "  *Please enter a valid email.<br> Ex: test.numbers@test.com<br>";
            document.getElementById('email').focus();
            return false;
        }
    else
        {
            document.getElementById('email_message').innerHTML = "";
        }

    if(pass.length < 8)
        {
            document.getElementById('password_message').innerHTML = "  *Your password is less than 8 characters.<br>";
            document.getElementById('password').focus();
            return false;
        }
    else
        {
            document.getElementById('password_message').innerHTML = "";
        }
    if(passform.test(pass) == false)
        {
            document.getElementById('password_message').innerHTML = "  *Your password Should ONLY Contain Letters or Numbers.<br>";
            document.getElementById('password').focus();
            return false;
        }
    else
        {
            document.getElementById('password_message').innerHTML = "";
        }
    return true;
}

function loginvalidation(){
    var username = document.getElementById('username').value;
    var lpass = document.getElementById('password').value;

    var usernameform = /^[a-zA-Z_]+$/;
    var lpassform = /^[a-zA-Z0-9]+$/;

    if(usernameform.test(username) == false)
    {
        document.getElementById('username_message').innerHTML = "  *USername Should ONLY Contain Letters or '_'<br>";
        document.getElementById('username').focus();
        return false;
    }
    else
    {
        document.getElementById('username_message').innerHTML = "";
    }
    if(lpass.length < 8)
    {
        document.getElementById('password_message').innerHTML = "  *Your password is less than 8 characters.<br>";
        document.getElementById('password').focus();
        return false;
    }
    else if(lpassform.test(lpass) == false)
    {
        document.getElementById('password_message').innerHTML = "  *Your password Should ONLY Contain Letters or Numbers.<br>";
        document.getElementById('password').focus();
        return false;
    }
    if(username == 'admin' && lpass == 'admin123')
    {
        document.getElementById('login_form').action = "admin.html";
    }

    return true
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++)
    {
       dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function get_fontColor(value){
    localStorage.setItem('fontColor',String(value));
}
function get_fontBg(value){
    localStorage.setItem('fontBg',String(value));
}
function get_fontSize(value){
    localStorage.setItem('fontSize',String(value)+'px');
}
function get_fontType(value){
    localStorage.setItem('fontType',String(value));
}
function showInput() {
        var noteContent = document.getElementById('note_dis');
        var noteTitle   = document.getElementById('title_dis');
        var paragraph   = document.getElementById('note').value;

        noteContent.style.color           = localStorage.getItem('fontColor')
        noteContent.style.backgroundColor = localStorage.getItem('fontBg')
        noteContent.style.fontSize        = localStorage.getItem('fontSize')
        noteContent.style.fontFamily      = localStorage.getItem('fontType')
        
        noteContent.style.border          = "2px" 
        noteContent.style.borderColor     = "black"
        noteContent.style.borderStyle     = "solid" 
        noteContent.style.padding         = "3px" 
 
        noteTitle.style.border          = "2px" 
        noteTitle.style.borderColor     = "black"
        noteTitle.style.borderStyle     = "solid" 
        noteTitle.style.padding         = "5px" 

        document.getElementById('title_dis').innerHTML = document.getElementById("title").value;
        
        var word = 0;
        for ( var i = 0; i < paragraph.length ; i++)
        {
            noteContent.innerHTML += paragraph[i];
            if (paragraph[i] == " ")
            {
                word++;
            }
            if (word == 9)
            {
                word = 0;
                noteContent.innerHTML += "<br>"

            }
        }
    }
