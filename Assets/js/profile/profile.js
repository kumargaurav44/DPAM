$(document).ready(function () {

    var isContactMobileChange = false;
    var isContactEmailChange = false;

    $('.profile-edit-btn').click(function (e) {
        e.preventDefault();
        alert("here");
        // $('.bbb').css("display","inline");
        $(".profile-contact-cancel").css("display","inline-block");
        $('.profile-contact-save').css("display","inline-block");
        
        $('.profile-contact-edit').hide();
        $(".profile-contact-details-form input").removeAttr("readonly");
        $(".profile-contact-details-form input").css("border-bottom", "1px solid black");
    });

    $("input[name='profile-contact-mobile']").keyup(function () {
        alert("mobile changed.");
        $("input[name='profile-contact-email']").attr('readonly', true);
        $("input[name='profile-contact-email']").css("border-bottom", "none");
        $("input[name='profile-contact-other']").attr('readonly', true);
        $("input[name='profile-contact-other']").css("border-bottom", "none");
        isContactMobileChange = true;
    });

    $("input[name='profile-contact-email']").keyup(function () {
        alert("emil changed.");
        $("input[name='profile-contact-mobile']").attr('readonly', true);
        $("input[name='profile-contact-mobile']").css("border-bottom", "none");
        $("input[name='profile-contact-other']").attr('readonly', true);
        $("input[name='profile-contact-other']").css("border-bottom", "none");
        isContactEmailChange = true;
    });

    $("input[name='profile-contact-other']").keyup(function () {
        alert("other changed.");
        $("input[name='profile-contact-mobile']").attr('readonly', true);
        $("input[name='profile-contact-mobile']").css("border-bottom", "none");
        $("input[name='profile-contact-email']").attr('readonly', true);
        $("input[name='profile-contact-email']").css("border-bottom", "none");
    });

    $('.profile-save-btn').click(function (e) {
        e.preventDefault();
        alert("here save");
        var profileContactMobile = $(".profile-contact-mobile").val();
        var profileContactEmail = $(".profile-contact-email").val();

        isMobileValid = validatePhone(profileContactMobile);
        isEmailValid = validateEmail(profileContactEmail);

        if (isContactEmailChange) {
            alert("here email change");
            if (isEmailValid) {
                alert("saved mobile");
            }else {
                $(".profile-contact-mail-err").html("Invalid Email");
            }
        } else if (isContactMobileChange) {
            alert("here mobile change");
            if (isMobileValid) {
               alert("saved mobile");
            }else {
                $(".profile-contact-mob-err").html("Invalid Mobile Number");
            }
        }


    });



    $('.profile-dpndnt-family-add-btn').click(function (e) {
        alert("family add");
        var profileFamilyDynamicTxt = '<form class="profileFamilyForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Relationship</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Email Id</label> ' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '   <input type="text" class="" name="" required>  ' +
            '   <label class="">Mobile</label>  ' +
            ' </div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-family"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-family" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-family-dynamic-div").append(profileFamilyDynamicTxt);


    });

    $('.profile-family-dynamic-div').on('click', '.remove-profile-family', function () {
        $(this).parent().remove();
    });


    $('.profile-dpndnt-houseHelp-add-btn').click(function (e) {
        alert("house help add");
        var houseHelpDynamicTxt = '<form class="houseHelpForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +

            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Contact Number</label>' +
            ' </div> ' +
            ' <div class="col-lg-5"></div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-houseHelp"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-house-help-dynamic-div").append(houseHelpDynamicTxt);


    });

    $('.profile-house-help-dynamic-div').on('click', '.remove-profile-houseHelp', function () {
        $(this).parent().remove();
    });


    $('.profile-dpndnt-pet-add-btn').click(function (e) {
        alert("pet add");
        var addPetDynamicTxt = '<form class="profilePetForm" action="" novalidate> ' +
            '  <div class="row dynamic-profile-div"> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            ' <input type="text" class="" name="" required>' +
            ' <label class="">Name</label>' +
            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Type</label>' +
            ' </div> ' +
            ' <div class="col-lg-2"></div> ' +
            ' <div class="col-lg-2 profile-input"> ' +
            '  <input type="text" class="" name="" required> ' +
            '  <label class="">Breed</label>' +
            ' </div> ' +
            ' <div class="col-lg-1"></div> ' +
            ' <div class="col-lg-1 profile-delete remove-profile-pet"><img  src="Assets/images/deleteIcon.svg" alt=""></div> ' +
            // '<span class="remove-profile-houseHelp" ><img  src="Assets/images/deleteIcon.svg" alt=""></span>'
        '</div> '
        '</form> ';


        $(".profile-pet-dynamic-div").append(addPetDynamicTxt);


    });

    $('.profile-pet-dynamic-div').on('click', '.remove-profile-pet', function () {
        $(this).parent().remove();
    });



});

