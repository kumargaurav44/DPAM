$(document).ready(function () {



    $("input").focus(function () {
        $(".emailMobForgtPswrdErr").html("");
    });

    $('#confirmNewPswrd').bind("cut copy paste", function (e) {
        e.preventDefault();
    });

    $("#sendFrgtPswrdBtn").click(function () {
        var emailMob = $("#emailMobForgotPswrd").val();


        var isEmailMobValid = validatePhone(emailMob) || validateEmail(emailMob);


        //Checking if email/mob is not empty
        if (emailMob == "" || !isEmailMobValid) {
            $(".emailMobForgtPswrdErr").html("Invalid Email / Mobile Number");
            isEmailMobValid = false;
        } else {
            isEmailMobValid = true;
        }

        if (isEmailMobValid) {
            alert(emailMob);
        }

    });

});