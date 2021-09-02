let i = 0; // for typeWriter function
let x = 0; // for questions array
let y = 0; // for typeWriter2
let z = 0;// for typeMachine typewriter
let txt1 = 'Hello I am the Awesome Gifts Head Robot, I\'d like to help you look for a gift for a friend or someone special'; /* The text */
const txt2 = "I would like to ask you 10 questions so I can get an idea of what gifts would be suitable";
const speed = 30; /* The speed/duration of the effect in milliseconds for typewriter functions */
const confirmBtnSelector = document.getElementById("confirm");
const userInputSelector = document.querySelector(".userInputWrapper");
const textInputFieldSelect = document.getElementById("userInput");
let answers = [];
const questions = ["Do they have a favorite charity or cause you could support?","What topics excite them?","What have they talked about buying for themselves?","Do they have a favorite snack or indulgence?","How do they like to relax?","Can you do something together?","Is there something they want to learn more about?","Lorem Ipsum sum ip sum sum ipsum?","Bacon Ipsum soreil bit part soil Ipsum", "Thank you for helping me with your answers" ];

//Do they have a favorite charity or cause you could support?
//What topics excite them?
//What have they talked about buying for themselves?
// Do they have a favorite snack or indulgence?
// How do they like to relax?
// Can you do something together?
// Is there something they want to learn more about?



let typeWriter = () => {
    if (i < txt1.length) {
        document.getElementById("demo").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      } else {
          setTimeout(clearText, 800);
          setTimeout(typeWriter2, 1000);
      }  
}
//function which clears #demo
let clearText = () => {
    document.getElementById("demo").innerHTML = "";
    textInputFieldSelect.value = "";
}

let typeWriter2 = () => {
      if (y < txt2.length) {
        document.getElementById("demo").innerHTML += txt2.charAt(y);
        y++;
        setTimeout(typeWriter2, speed);
      } else {
          btnController();
      }
}
let roboRotate = () => {
    console.log("Cheers Buddy twoshoes");
    const roboSelector = document.querySelector(".fa-robot");
    //increase font-size
    roboSelector.style.fontSize = "113px";
    //onload rotate left
    roboSelector.classList.add("leftRotate");
    function rotateRight() {
        //remove class then..
        roboSelector.classList.remove("leftRotate");
        //rotate right
        roboSelector.classList.add("rightRotate");
    }
    //then move back to centre 
    function rotateNormalise() {
        roboSelector.classList.remove("rightRotate");
        roboSelector.style.fontSize = "83px";
    }
    setTimeout(rotateRight, 300);
    setTimeout(rotateNormalise, 700); 
}

let btnController = () => {
    //make button visible
    confirmBtnSelector.style.display = "inline-block";
    //change colors randomly every half a second 
     function rainbowGun () {
         let n = Math.floor(Math.random() * 5)
         const colors = ["#2271b78f","#0c3f6c8f","#10b0318f","#7991098f","#110bce8f"]
         confirmBtnSelector.style.background = colors[n];
         console.log("spursy");
     }
     let gun = setInterval(rainbowGun, 700);
     if(x > 9) {
         clearInterval(gun); //failed test
     }
}

// function intervalStop() {
//     return let 
// }   


//on proceed button click
let proceedClick = () => {
    questionSelector(questions[x]);
    x +=1;
    //if x is greater than 9 we need to make text input not visible and change text for submit button
    if(x > 9) {
        document.getElementById("userInput").style.visibility = "hidden";
        document.getElementById("answerSubmit").textContent = "Show me my results";
    }
    answers.push(textInputFieldSelect.value);
}
function questionSelector(str) { //selected question property can be passed in when function is called 
    //turn #confirm display to none
    confirmBtnSelector.style.display = "none";
    //remove text from paragarph
    clearText();
    //select first question from array
    let arySelection = str;// this will be a question from ary
    console.log(arySelection);//working 3/8/2021
    console.log(x);//test working 3/8/2021
    console.log(z);//test working 3/8/2021
    let typeMachine = () => {
        if(z < arySelection.length) {
            document.getElementById("demo").innerHTML += arySelection.charAt(z);
            z++;
            setTimeout(typeMachine, speed);
        }
        //when this completes await response from question
        //call typewriter function
        //setTimeout(typeMachine, speed);
    }
    //make sure typeMachine counter set to 0 before calling
    z = 0;
    typeMachine();
    userInputSelector.style.visibility = "visible";
        
}
 

//once question is finished
//reset x variable
//call btnController function


//function to take text from user input
// function returnText(){
//     let input = document.getElementById("userInput").value;
//     alert(input)
// }

//userInput - id for userInput 
//answerSubmit - id for submit button