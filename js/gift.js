// let homeSearch = new Vue({
//     el: '#login-title',
//     data: {
//       isHidden: true
//     }
//   });
//------------------------------------------- below is a refactor of above -----------------------------------------
const app1 = Vue.createApp({
  data() {
    return {
        isHidden: true
    }
  }
})  
app1.mount('#login-title');
  // ---------------------------------  below and above is vue 2 syntax -----------------------------
// let login = new Vue({
//   el: '#signUpForm',
//   data: {
//     isHidden: false,
//     visible: false
//   },
//   methods: {
//     handleClick: () => {
//       // homeSearch.data.isHidden ? true : false
//       if(data.visible === true) {
//         data.visible === false;
//       }
//     }
//   }
// }) 

// -------------------------------------- vue 3 syntax ------------------------------------------------

const app = Vue.createApp({
  data() {
    return {
      label1: 'First name',
      passwordLabel: 'Choose A Password',
      appLink: 'https://www.bbc.co.uk',
      visibility: true,
      forgotPassword: false,
      signInBtn: "Already have an account?"
    };
  },
  methods: {
    areVisible() {
      this.passwordLabel = 'Enter Password';
      if(this.visibility) {
        this.visibility = false;
        this.signInBtn = "Make a new Account";
      } else {
        this.visibility = true;
        this.signInBtn = "Already have an account";
      }
      if(this.visibility === false) {this.forgotPassword = true}
      else {this.forgotPassword = false}
      // let passwdText = this.passwordLabel === 'Choose A Password' ? 'Enter Your Password' : 'Choose A Password';
    }
  }
});

app.mount('#formContainer');
// app.mount('#eatFarm');

  
//Already have an account?

let myFunction = () => {
let int = 0;
const phrases = ['Perks are here! Three days of special deals, suprises (and maybe some prizes!!)','50% Off All Lorem Ipsums!! See all offer items now! Dont\'t miss out!','Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium!!'];
let interval = setInterval(()=> {
  document.querySelector(".joined-text").textContent = phrases[int];
  int++;
  if(int > 2) {
    int = 0;
  }
},3000);
}

let clickableSelector = document.querySelectorAll(".clickable-small");;
let clickableLinks = ["window.location.href='giftAI.html'","window.location.href='instant-gift.html'","closePopup()"];
let control = 0; // for addRemoveAttr()
let closePopup = () => {
  const el = document.getElementById("notSignedInBirthday");
  if(el.style.visibility == "hidden" || el.style.visibility == "") {
    el.style.visibility = "visible";
    document.querySelector("#tester").classList.add("smoke-background-cover");    
    //remove onclick from clickableSmall's 
    for(i = 0;i < clickableSelector.length; i++) {
      clickableSelector[i].onclick = null; 
    }
    addRemoveAttr(true);
  } else {  // restore functionality to clickable-small buttons 
    el.style.visibility = "hidden";
    document.querySelector("#tester").classList.remove("smoke-background-cover");
    for(y = 0;y < clickableSelector.length; y++) {
      clickableSelector[y].setAttribute("onclick", clickableLinks[y]); 
    }
    addRemoveAttr(false);
  }  
}
// function to add remove disabled boolean attribute
let addRemoveAttr = (bool) => {
  const btnSelector = document.querySelectorAll(".signIn_search");
  for(z = 0;z < btnSelector.length;z++) {
    btnSelector[z].disabled = bool;
  }
}
