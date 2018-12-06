$(document).ready(function () {

    $('.submit').click(function (event) {

        let email = $('.email').val(),
            subject = $('.subject').val(),
            message = $('.message').val()
            statusElm = $('.status')
            statusElm.empty()
      
     

        if (email.length >= 10 && email.includes('@') && email.includes('.')){
            statusElm.append("Valid Email<br>")
            
        }else{  
            event.preventDefault()      
            statusElm.append("Invalid Email<br>")
        }
        if (subject.length > 5 ){
            statusElm.append("Valid Subject<br>")
        }else{
            event.preventDefault()
            statusElm.append("Invalid Subject <br>")
        }

       



    })

});