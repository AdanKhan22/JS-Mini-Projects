const submit = document.getElementById("jokeBtn");
const pickupLines = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");


const btnLines = ["More", "I want More", "Ahh yeah", "Go On", "So gooddd", "Keep it coming", "Can't get enough", "Yes, please", "Give me more", "Keep 'em coming", "One more time", "Just one more", "Yes, I'm addicted", "Keep 'em rolling", "Don't stop now", "Hit me with another", "I'm loving it", "Yes, that's the stuff", "Got any more?", "More, please!"];




let index = 0;
let btnIndex = 0;

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    
    submit.addEventListener("click" , () => {
           
           pickupLines.innerText = data.pickupLines[index];
           btn.innerText = btnLines[btnIndex]
           if(index < data.pickupLines.length){
            index++ 
            if(btnIndex < btnLines.length){
              btnIndex++
            } else{
                btnIndex = 0;
            }
           }else {
            pickupLines.innerText = "I am out of pickup lines 😔"
            btn.innerText = "Fuck"
           }
              
    })  
    console.log(data) 
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });


