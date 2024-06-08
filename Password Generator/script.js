const rangeSlider = document.getElementById("RangeLarge");
const display = document.getElementById("password")
const copyClipboard = document.getElementById("btn")

const words = ['seat', 'pen', 'broad', 'vapor', 'ocean',
    'red', 'plate', 'late', 'that', 'ring', 'swim', 'shown',
    'path', 'law', 'list', 'hard', 'plate', 'block', 'two',
    'pupil', 'were', 'lot', 'pay', 'would', 'tired', 'dull',
    'mud', 'sky', 'grew', 'hard', 'ill', 'frame',
    'sport', 'did', 'many', 'been', 'page', 'year', 'trail',
    'earth', 'are', 'while', 'off', 'town', 'doing', 'size',
    'steel', 'sale', 'swam', 'put', 'zero', 'week', 'mill',
    'past', 'aside', 'her', 'cent', 'box', 'fuel', 'block',
    'those', 'late', 'sun', 'map', 'silk', 'lady', 'meant',
    'still', 'shine', 'range', 'loud', 'fox', 'gate', 'slide',
    'each', 'nails', 'flag', 'exist', 'door', 'luck', 'down',
    'poem', 'depth', 'press', 'crowd', 'herd', 'drink', 'worry',
    'dried', 'dig', 'new', 'rest', 'play', 'win', 'strong'];

const values = "abcd78756546ef&&^&%-ghi$$%%$^&*jklmn&*&^^&^%%%&*698op8989768%^%^545676qurstuwxyz";



function generateGibberish(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let gibberish = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        gibberish += characters.charAt(randomIndex);
    }
    return gibberish;
}

// Transforming each word in the array to random gibberish
for (let i = 0; i < words.length; i++) {
    // Get a random length between 4 and 5 characters
    const randomLength = Math.floor(Math.random() * 2) + 4;
    // Generate random gibberish with the same length as the original word
    words[i] = generateGibberish(randomLength);
}

// Output the transformed array



rangeSlider.addEventListener("input", generatePassword);
generatePassword();

function generatePassword(){
    
        const length = rangeSlider.value;
        let password = "";
    
        for (let i = 0; i < length; i++) {
            
            const randomIndex = Math.floor(Math.random() * words.length);
            const index2 = Math.floor(Math.random() * (values[0].length - 1));
            const randomValue = values.slice(0,index2);          
            password += words[randomIndex] +  randomValue;
            display.value = password;
            
        }
        
        // passwordInput.value = password.trim();   
    }

   
    copyClipboard.addEventListener("click" , ()=>  {
        const password = display.value
        navigator.clipboard.writeText(password)
            .then(() => {
                console.log('Text copied to clipboard:', password);
                alert('Text copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy text to clipboard!');
            });
    })

  
    
    // Example usage:
   
   
    

   
