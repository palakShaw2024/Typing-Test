const typingText = document.querySelector('.typing-text');
const input = document.querySelector('#input-box');  
const time = document.querySelector('.time span b');
const mistakes = document.querySelector('.mistakes span b');
const wpm = document.querySelector('.wpm span');
const cpm = document.querySelector('.cpm span');
const btn = document.querySelector('button');


// setting values
let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = 0;
let mistakeCount = 0;
let isTyping = false;




// to load random paragraphs when the page loads
function loadParagraph() {
    const paragraph = [ "Avoid using the word 'very' because it is low-level and does not add much to your writing.",
         "you are the most important person in your life.", 
         "Always be true to who you are, and ignore what other people have to say about you",
          "Learn with your work and mistakes" , 
          "mistakes are the best lesson.", 
          "Improving your skills is in your hands" , 
          "you are responsibe for the life you live", 
          "Please communicate if you have recomendation "];

const randomIndex =  Math.floor(Math.random()*paragraph.length);
typingText.innerHTML='';

// for-of loop to iterate through the characeters of the random paragraph
for(const char of paragraph [randomIndex]){
    typingText.innerHTML +=`<span>${char}</span>`; 
    //  to connect the paragraphs with the UI
}
// to make it interactive and attractive
typingText.querySelectorAll('span')[0].classList.add('active'); 
// this will convert the active alphabet into black.
}


// let user input
function initTyping() {
    const char = typingText.querySelectorAll('span');

    const typedChar = input.value.charAt(charIndex); 

    if(charIndex < char.length && timeLeft > 0) {
        if (char[charIndex].innerText === typedChar) {
            char[charIndex].classList.add('correct'); 
            console.log("correct");
            // to check the correct character
        }
        else {
           char[charIndex].classList.add('incorrect');
           console.log("incorrect");
        }
        charIndex++;
    }
}

input.addEventListener("input", initTyping); 
loadParagraph();