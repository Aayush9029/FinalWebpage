   // https://codepen.io/Milleus/pen/YzKOjoO
   let typed = "";
   const element = document.querySelector(".typity");
   
   function startType(pun, index) {
     if (index < pun.length) {
       typed += pun.charAt(index);
       element.innerHTML = typed;
       index++;
       setTimeout(function() {
         startType(pun, index);
       }, 50);
     } else {
       setTimeout(function() {
         element.classList.add("highlight");
       }, 4000);
   
       setTimeout(function() {
         element.classList.remove("highlight");
         typed = "";
         element.innerHTML = typed;
         startType(getRandomPun(), 0);
       }, 5000);
     }
   }
   
   function getRandomPun() {
     const puns = [
       "to program.",
       "to solve problems.",
       "to automate stuff.",
       "to work on projects.",
       "to explore projects.",
       "to build iOS Apps.",
       "to look at designs.",
       "to test new features.",
       "to ship amazing products.",
       "to scrape the web.",
       "to make a difference.",
       "to make random things.",
       "to hack.",
       "to tinker.",
       "memes.",
       "dank memes.",
       "meditating.",
       "vim.",
       "rounded boxes.",
       "git.",
       "learning new things.",
       "Machine Learning.",
       "bio hacking.",
       "biking.",
       "dad jokes.",
       "python.",
       "philosophy",
       "terminal (zsh).",
       "to swim."
     ];
     const index = Math.floor(Math.random() * puns.length);
   
     return puns[index];
   }
   
   startType(getRandomPun(), 0);