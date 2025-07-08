const firebaseConfig = {
    apiKey: "AIzaSyCmkYXZbCsA3KoUmSgrcUqS4A18Wn8jtMg",
    authDomain: "contact-form-918e8.firebaseapp.com",
    databaseURL: "https://contact-form-918e8-default-rtdb.firebaseio.com",
    projectId: "contact-form-918e8",
    storageBucket: "contact-form-918e8.firebasestorage.app",
    messagingSenderId: "737741585321",
    appId: "1:737741585321:web:cb91adf89b00e88d11e2b8",
    measurementId: "G-MNS37FKQ3B"
  }; 

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};