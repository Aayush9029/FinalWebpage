
// // (C) Aayush Caesear Chipher







function encrypt(){  
   
    var str = document.getElementById("raw").value;

    
    var enc = btoa(str);

    var enc2= enc.toUpperCase(2);

    console.log(enc2);
         
            document.getElementById("raw").value = enc;
}   


function decrypt(){  
   
    var str = document.getElementById("dec").value;
    var enc = atob(str);
    
    
         
            document.getElementById("dec").value = enc;


}   