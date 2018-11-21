
// // (C) Aayush Caesear Chipher







function encrypt(){  
    var chars = {'a':'b','b':'c','c':'d','d':'e', 'e':'f', 'f':'g', 'g':'h', 'h':'i', 'i':'j', 'j':'k', 'k':'l', 'l':'m', 'm':'n', 'n':'o', 'o':'p', 'p':'q','q':'r','r':'s','s':'t','t':'u', 'u':'v', 'v':'w', 'w':'x', 'x':'y', 'y':'z', 'z':'a', '0':'1', '1':'2', '2':'3', '3':'4'};
    var enc;
    var str = document.getElementById("raw").value;

            enc = str.replace(/[abcdefghijklmnopqrstuvwxyz123]/g, m => chars[m]);
            document.getElementById("raw").value = enc;
}   