$( document ).ready(function() {
    $( ".pass-input ul li" ).css("list-style-type", "none");
    $('#cnfpasswordSignUp').bind("cut copy paste", function(e) {
        e.preventDefault();
       
        });

 $('[data-toggle="tooltip"]').tooltip(); 
 

    $("input").focus(function() {
        $(".mailErr").html("");
        $(".pswdErr").html("");
        $(".invalidEmailErr").html("");
        $(".invalidPassErr").html("");
        $(".cnfPswdErr").html("");

        $(".pwdStrengthSignUp").html("");

        var email = $("#mailSignUp").val();
      
  // check for email and mobile number text field
if(!validatePhone(email)&&(!validateEmail(email)))
{
  
        $(".invalidEmailErr").html("Invalid Email/Phone number ");
}

});



// function to show password

  $('#showPassSignUp').click(function() {
    passtoTextSignUp();
  
  });

 $("#mailSignUp").keyup(function(e){

  $(".mailErr").html(" ");
  $(".invalidEmailErr").html(" ");
});


$("#passwordSignUp").keyup(function(e){

    var passWord=$("#passwordSignUp").val();

     changeTooltipColor(passWord,e);
     checkPasswordStrength(passWord);
});

$("#passwordSignUp").on('input',function(e){
    var passWordChk=$("#passwordSignUp").val();
    if(!validatePassword(passWordChk)){
        $(".invalidPassErr").html("Invalid Password ");
    }else{
        $(".invalidPassErr").html(" ");
    }
 });


// Empty Fields Validation

$( "#signUpForm" ).on('submit',function( event ) {
    
    event.preventDefault();
        //getting values from the form
        var emailMob = $("#mailSignUp").val();
        var password = $("#passwordSignUp").val();
        var cnfpassword = $("#cnfpasswordSignUp").val();
        
        var isEmailMobValid;  
        var isPasswordValid;
        if(!comparePassword(password,cnfpassword)){
            console.log("not equal");
            $(".equalCheck").html("Passwords do not match");
        }
        //Checking if email/mob is not empty
        if(emailMob == "") {
            $(".mailErr").html("Email/MobileNumber Cannot Be Empty!");
            $('#mailSignUp').val('');
            isEmailMobValid = false;
        } else  {
            isEmailMobValid = true;
        }

        //Checking if password is not empty
        if(password == "") {
            $(".pswdErr").html("Password Cannot Be Empty!");
            isPasswordValid = false;
        } else {
            isPasswordValid = true;
        }

        if(!validatePhone(emailMob)&&(!validateEmail(emailMob)))
        {
          
                $(".invalidEmailErr").html("Invalid Email/Phone number ");
        }
        
        if(!validatePassword(password)){
  
            $(".invalidPassErr").html("Invalid Password ");
    }

    if(!validatePassword(cnfpassword)){
  
        $(".cnfPswdErr").html("Invalid Password ");
     }

       
        $('#passwordSignUp').val('');
        $('#cnfpasswordSignUp').val('');
       
    });
    

});


