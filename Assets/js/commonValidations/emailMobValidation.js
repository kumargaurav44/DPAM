function  validatePhone(txtPhone) {
//   alert(txtPhone+"txtPhone");
    var  filter  =  /^(?:\+971|971|00971|0)?(-)?(?:50|51|52|55|56|54|57)\d{7}$/;
    if  (filter.test(txtPhone)) {
        // alert("if");
        // if (txtPhone.length == 10) {
            return  true;
        // }
        // return  false;
    }else {
        // alert("else");
        return false;
    }
    
}

function  validateEmail(email) {
    var emailReg=/^[^<>()[\]\\,;:\%#^\s@\"$&!@]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
   // var  emailReg  =  /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return  emailReg.test( email );
} 