$(document).ready(function () {

    $('.submit').click(function (event) {

        let email = $('.email').val(),
            statusElm = $('.status')
            statusElm.empty()
    

        if (email == '9029'){
            statusElm.append("Valid Code<br>")
            
        }else{  
            event.preventDefault()      
            statusElm.append("Invalid Code <a href = 'writecode.me'>Not Aayush ?</a><br>")
        }

    })

});