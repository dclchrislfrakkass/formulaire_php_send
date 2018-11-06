var x;
var y;
var text;
var modal = document.getElementById('myModal');     
var textarea = document.querySelector("textarea");


////function bonus -> red div alert on bottom ////
function alerted(){
document.getElementById("alert").style.border = "2px solid red";
document.getElementById("alert").innerHTML= "Merci de corriger les erreurs";
}
function allOk(){
    document.getElementById("alert").style.border = "none";
    document.getElementById("alert").innerHTML= "";
    }




////test and validate name and forname ////    
function validateForm() {
    x = document.forms["chrisForm"]["name"].value;
    if (x == "" || !isNaN(x)) {
        document.forms["chrisForm"]["name"].style.border = "2px solid red";
        alerted();

    } else {
        document.forms["chrisForm"]["name"].style.border = "none";
        allOk();
    }
    y = document.forms["chrisForm"]["forName"].value;
    if (y == ""|| !isNaN(y)) {
        document.forms["chrisForm"]["forName"].style.border = "2px solid red";
        alerted();
    }else {
        document.forms["chrisForm"]["forName"].style.border = "none";
        allOk();
    }
    
    isValidDate();
    
}


//// check and verify date of birth ////
function isValidDate() {
    
    var born = document.forms["chrisForm"]["birthday"].value;
    var today = Date.now();
    console.log(born);
    console.log(today);
    var today = new Date();
    var dd = today.getDate();
    
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    todayYear = yyyy;
    bornYear= parseInt(born.substr(0,4));
    console.log(today);
    console.log(todayYear);
    console.log(bornYear);
    age = todayYear - bornYear;
    console.log(age);
    


    ///// test if your under 18 and open a modal if not /////
    if (age <18) {
        // alert("vous êtes mineur !")
        btn();
        
        var span = document.getElementsByClassName("close")[0];
        function btn() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}


//// check mail and verify caracters ////
function checkEmail() {
    
    var email = document.getElementById("mailText");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    document.getElementById("mailText").style.border = "none";
    allOk();
    
    if (!filter.test(email.value)) {
        console.log("problème de mail !");
        document.getElementById("mailText").style.border = "2px solid red";
        email.focus;
        alerted();
        return false;
    }
}


//// verify the message box and count number of caracters ////

textarea.addEventListener("input", function(){
    var maxlength = this.getAttribute("maxlength");
    var currentLength = this.value.length;
    console.log(currentLength);

    if( (currentLength+1) == maxlength ){
        console.log("STOP !!!! MAX");
    }else{
        document.getElementById("count").innerHTML = maxlength - currentLength;
        console.log(maxlength - currentLength + " en stock");
    }
});






//////////////////////////////////////////////////////////////////////////////
////                                                                      ////
////                                                                      ////
////                         SCRAP                                        ////
////                                                                      ////
////                                                                      ////
//////////////////////////////////////////////////////////////////////////////
/*
function checkAll(){
    // validateEmail();
    choixRadio();
}















/*

function choixRadio() {
    document.getElementById("radio").value;
    if (radio.choix[0].checked) {
        console.log("HOMME");
    }
    if (radio.choix[1].checked) {
        console.log("FEMME");
    }
}




function validateEmail()
{
    var emailId = document.getElementById('mail').value;
    atpos = emailId.indexOf("@");
    dotpos = emailId.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) 
    {
        alert("l'E-mail est incorrect")
        document.form.mail.focus() ;
        return false;
    }
    return( true );
}

*/
