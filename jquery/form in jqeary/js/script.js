

$("#login-button").click(function(){

    var password01 = $("#pass01").val();
    var password02 = $("#pass02").val();


    if(password01 != "" && password02 != ""){

        if(password01 == password02){
            alert("Successfully Login")
        }else{
            alert("Invalid Password")
        }


    }else{
        alert("Place Enter Password");
    }

})

