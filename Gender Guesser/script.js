const quesiton = document.querySelector("h2")
const explain = document.getElementById("para")
const displayinfo = document.getElementById("displayinfo")

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

const audio = new Audio('zapsplat_technology_studio_speaker_active_power_switch_click_002_68874.mp3');

explain.style.visibility = `hidden`;

const questionsList = [
    {
        question: "Are you male?",
        options: ["Yes", "No" , "There is no third"]
    },
    {
        question: "What reproductive organ do you have?",
        options: ["Penis", "Vag" , "Both"]
    },
    {
        question: "What is your typical facial hair situation?",
        options: ["Beard", "Babyface" , ""]
    },
    {
        question: "Do u like Pans?",
        options: ["Yes", "No" , "Occusionally Turns Me On"]
    },
    {
        question: "What is your typical voice pitch?",
        options: ["Baritone", "Soprano"]
    },
    {
        question: "What do you prefer to be called?",
        options: ["Dude", "Gal"]
    },
    {
        question: "How do you usually address a group of friends?",
        options: ["Guys", "Gals"]
    },
    {
        question: "What's your go-to term for 'cool'?",
        options: ["Rad", "Lit"]
    },
    {
        question: "When someone says something funny, how do you laugh?",
        options: ["LOL", "HAHA"]
    }
  
];


const sexualOrientations = [
    "Heterosexuality",
    "Homosexuality",
    "Bisexuality",
    "Pansexuality",
    "Asexuality",
    "Demisexuality",
    "Queer",
    "Polysexuality",
    "Androgyny",
    "Skoliosexuality",
    "Graysexuality",
    "Autosexuality",
    "Lithsexuality",
    "Reciprosexual",
    "Pomosexuality",
    "Abrosexuality",
    "Gynesexual",
    "Androsexual",
    "Omnisexuality",
    "Trisexuality",
    "Ambisexuality",
    "Multisexuality",
    "Monosexuality",
    "Polyamory",
    "Monogamy",
    "Non-monogamy",
    "Sapiosexuality",
    "Queerplatonic",
    "Bi-curious",
    "Homoflexible",
    "Heteroflexible",
    "Questioning",
    "Two-Spirit",
    "Omnimono",
    "Fluid sexuality",
    "Panaesthetic",
    "Quoisexual",
    "Reciprosexuality",
    "Reciprocal",
    "Confused"
];


//Event Lisneters

let choices = [];
let quesitionIndex = 0;
let gender;
option1.addEventListener("click", nextPage);
option2.addEventListener("click", nextPage);
option3.addEventListener("click", nextPage);

start();

function start(){
    displayQuesitons();
    displayOptions();
}


function displayQuesitons () {
    
    quesiton.innerHTML =   questionsList[quesitionIndex].question;
    displayOptions();
}

function displayOptions() {
    const options = questionsList[quesitionIndex].options;
    option1.textContent = options[0];
    option2.textContent = options[1];
    option3.textContent = options[2];
}


function nextPage (event){
    audio.play();
    choices.push(event.target.textContent);
    quesitionIndex++;
    
    if (quesitionIndex < 9) {
        displayQuesitons();
        displayOptions();
    } else {
        answer();
        console.log("bye");
    }
}


function answer () {
    let rand = Math.floor(Math.random() * 41);
    gender= sexualOrientations[rand];
    option1.parentNode.removeChild(option1);
    option2.parentNode.removeChild(option2);
    option3.parentNode.removeChild(option3); 
    explain.style.visibility = `visible`;   
    quesiton.innerHTML = `Your Sexuality is ${gender}`;

}


