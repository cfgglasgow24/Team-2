let deafBlindInfo = {
    "A": {
        "description": "touch the end of their thumb with your right forefinger.",
        "type": "A"
    },
    "B": {
        "description": "place all your right hand finger tips in the middle of their left palm.",
        "type": "B"
    },
    "C": {
        "description": "draw your right forefinger down their thumb and along the top of the outstretched forefinger.",
        "type": "C"
    },
    "D": {
        "description": "place the thumb and forefinger of your right hand (other fingers tucked away) on the forefinger of their left hand.",
        "type": "D"
    },
    "E": {
        "description": "touch the end of their forefinger with your right forefinger.",
        "type": "E"
    },
    "F": {
        "description": "place your forefinger and middle finger at right angles to their forefinger and middle finger.",
        "type": "F"
    },
    "G": {
        "description": "put a fist onto their left hand, small finger down.",
        "type": "G"
    },
    "H": {
        "description": "smooth your right hand, fingers together, across their left hand.",
        "type": "H"
    },
    "I": {
        "description": "touch the middle finger of their left hand.",
        "type": "I"
    },
    "J": {
        "description": "draw the letter 'J' down the middle of their left hand.",
        "type": "J"
    },
    "K": {
        "description": "bend your right forefinger at right angles against their forefinger.",
        "type": "K"
    },
    "L": {
        "description": "place your right forefinger flat on the palm of their hand.",
        "type": "L"
    },
    "M": {
        "description": "place your three middle fingers flat on their hand.",
        "type": "M"
    },
    "N": {
        "description": "place two fingers flat on their hand.",
        "type": "N"
    },
    "O": {
        "description": "touch the ring finger of their left hand.",
        "type": "O"
    },
    "P": {
        "description": "pinch their left forefinger using your right forefinger and thumb.",
        "type": "P"
    },
    "Q": {
        "description": "put your forefinger around the base of their thumb.",
        "type": "Q"
    },
    "R": {
        "description": "place your bent forefinger flat on the palm of their hand.",
        "type": "R"
    },
    "S": {
        "description": "place your right forefinger between their small finger and ring finger.",
        "type": "S"
    },
    "T": {
        "description": "place forefinger on their hand at right angles.",
        "type": "T"
    },
    "U": {
        "description": "your forefinger touches their small finger.",
        "type": "U"
    },
    "V": {
        "description": "your forefinger and middle finger in a 'V' shape on their palm.",
        "type": "V"
    },
    "W": {
        "description": "place your right hand on their palm then fold fingers over.",
        "type": "W"
    },
    "X": {
        "description": "place forefinger on top of their forefinger.",
        "type": "X"
    },
    "Y": {
        "description": "place your forefinger at the bottom of their thumb.",
        "type": "Y"
    },
    "Z": {
        "description": "place the side of your hand into their left palm.",
        "type": "Z"
    }
};

let form = document.getElementById('search-input');
let imagelocation = document.getElementById('imageContainer');
let arrayOfChildren = [];


//Pair Programmed by Ryan B and Robbie
async function Submit(event) {
    event.preventDefault();
    arrayOfChildren.forEach((element)=>{
        element.remove();
    });
    arrayOfChildren = [];//empty array
    let input = document.getElementById('lname').value;

    input.toUpperCase();
    console.log(input);
    const words = input.split(' ');

    words.map((word, index)=>{
        word.split('').forEach((letter)=>{
            let newImage = document.createElement("img");
            newImage.setAttribute("src",`${letter}.png`);
            let letterInfo = deafBlindInfo[letter.toUpperCase()]["description"];
            newImage.setAttribute("alt", letterInfo);
            imagelocation.appendChild(newImage);
            arrayOfChildren.push(newImage);
        });
        //add in space
        if(index < (words.length-1)){
            let newSpace = document.createElement("br");
            let titleNewWord = document.createElement("h2");
            titleNewWord.textContent = "New Word:";


            imagelocation.appendChild(newSpace);
            imagelocation.appendChild(titleNewWord);

            arrayOfChildren.push(newSpace);
            arrayOfChildren.push(titleNewWord);
        }
    });
    // showWord(input);
}

form.addEventListener('submit', Submit);