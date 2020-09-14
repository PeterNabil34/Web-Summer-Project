function validateForm() {
    var email = document.getElementById('email').value;
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var pass = document.getElementById('password').value;
    var numbers = /[0-9]/g;

    if (numbers.test(fname))
    {
        document.getElementById('fname_message').innerHTML = "  *Your First Name shouldn't contain any numbers.<br>";
        document.getElementById('fname').focus();
        return false;
    }
    else if (numbers.test(lname))
    {
        document.getElementById('lname_message').innerHTML = "  *Your Last Name shouldn't contain any numbers.<br>";
        document.getElementById('lname').focus();
        return false;
    }    
    else if(email.indexOf('.') == -1)
    {
        document.getElementById('email_message').innerHTML = "  *Please enter a valid email.<br>";
        document.getElementById('email').focus();
        return false;
    }
    else if(pass.length < 5)
    {
        document.getElementById('password_message').innerHTML = "  *Your password is less than 5 characters.<br>";
        document.getElementById('password').focus();
        return false;
    }
    return true;
}
