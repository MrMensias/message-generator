//Linking button and P tag
let button = document.getElementById('generate-button')
let messageContainer = document.getElementById('message')

button.addEventListener('click',()=>{
    messageContainer.innerText = generateRandomSentence()
})



// Arrays of words for different parts of a sentence
const subjects = ["I", "You", "He", "She", "They"];
const verbs = [
    "run",
    "jump",
    "swim",
    "write",
    "read",
    "sing",
    "dance",
    "paint",
    "cook",
    "play",
    "sleep",
    "talk",
    "listen",
    "work",
    "study",
    "drive",
    "climb",
    "bake",
    "fly"
  ];
  
  // You can use this array of verbs in your JavaScript code as needed.
  
  const objects = [
    "apple",
    "banana",
    "book",
    "car",
    "computer",
    "dog",
    "cat",
    "house",
    "pen",
    "phone",
    "guitar",
    "cup",
    "chair",
    "table",
    "shoes",
    "hat",
    "bike",
    "camera",
    "globe",
    "plant",
    "ball",
    "cookie",
    "watch",
    "glasses",
    "key",
    "wallet",
    "umbrella",
    "piano",
    "clock",
    "television",
    "mirror",
    "door",
    "lamp",
    "bag",
    "shovel",
    "guitar",
    "basketball",
    "jacket",
    "bracelet"
  ];
  

  const possessivePronouns = [
    "my",
    "your",
    "his",
    "her",
    "its",
    "our",
    "their",
    "my"
];

  // You can use this array of objects in your JavaScript code as needed.
  
  
// Function to generate a random sentence
function generateRandomSentence() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  const subject2 = subjects[Math.floor(Math.random() * subjects.length)];
  const verb2 = verbs[Math.floor(Math.random() * verbs.length)];
  const object2 = objects[Math.floor(Math.random() * objects.length)]
  const pronoun = possessivePronouns[Math.floor(Math.random() * possessivePronouns.length)]
  const pronoun2 = possessivePronouns[Math.floor(Math.random() * possessivePronouns.length)]


  
  return `'${subject} ${verb} ${pronoun} ${object}. ${subject2} ${verb2} ${pronoun2} ${object2}.'`;
}





