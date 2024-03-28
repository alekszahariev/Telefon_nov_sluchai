/* PhonePassword() */
function PhonePassword(){
    let password = prompt("Парола за телефона:", "");
    if(password === "879"){
                   
   
    }else{
        alert("Грешна парола")
        PhonePassword()
    }
}




let app = document.querySelector(".app")
let app_close = document.querySelector(".app-footer a")
let app_body = document.querySelector(".app-body")
let isAppOpen = false;
app_close.addEventListener("click", function(){
if(isAppOpen){
    app.style.display="none";
    app_body.innerHTML="";
    isAppOpen = false
}
})

// UPDATE CURRENT TIME
function updateCurrentTime() {
    // Get the current time
    var now = new Date();

    // Format the time as HH:MM:SS
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');

    // Display the formatted time in the span
    document.getElementById('currentTime').innerHTML = hours + ':' + minutes;
}
// Update the current time every minute
setInterval(updateCurrentTime, 60000);
// Initial update
updateCurrentTime();



let icons = document.querySelectorAll(".icon")
icons.forEach(icon =>{
    icon.style.cursor = "pointer";
    let app_to_open = icon.getAttribute("data-app")
    icon.addEventListener("click", function(){
        app.style.display="flex"
        isAppOpen = true;
        
        if(app_to_open==="Photos"){
           PhotosApp()
        }
        if(app_to_open==="messenger"){
            MessengerApp()
        }
        if(app_to_open==="Notes"){
            NotesApp()
        }
        if(app_to_open==="safari"){
            SafariApp()
        }
        if(app_to_open==="PhoneApp"){
            PhoneApp()
        }

        if(app_to_open==="Password"){
          PasswordGame()
        }

        if(app_to_open==="Iptracker"){
          IpTracker()

        }

        if(app_to_open==="game"){
            Game()
        }
        if(app_to_open==="mail"){
          Mail()
      }
    })
})

function PhotosApp(){
    app_body.innerHTML = `
    <div class="photos-app">
    </div>
    `

    var folder = "./assets/photos_app/";
    let photos_links = [];
// Add all images from the folder to the array above
$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match(/\.(jpe?g|png|gif|jfif)$/)) {
                photos_links.push({
                    link: val,
                    date: "Снимка"
                });
            }
        });
        appendImages()
    }
});

function  appendImages(){
    let photos_app_body = document.querySelector(".photos-app");
            photos_links.forEach(photo => {   
            var img = document.createElement("img");
            img.src = "./assets/photos_app/"+photo.link;
            img.setAttribute("data-sub-html", photo.date);
        
        
           
            // Append the anchor element to the .photos-app container
            photos_app_body.appendChild(img);
        });

        Galeria()
}
function Galeria(){
    lightGallery(document.querySelector(".photos-app"), {
        speed: 500,
        subHtmlSelectorRelative: true,
        licenseKey: "3BB5B066-2587-4658-A964-5DCAC85A5179",
    });
}



}function PhotosApp(){
  app_body.innerHTML = `
  <div class="photos-app">
  </div>
  `

  var folder = "./assets/photos_app/";
  let photos_links = [];
// Add all images from the folder to the array above
$.ajax({
  url : folder,
  success: function (data) {
      $(data).find("a").attr("href", function (i, val) {
          if (val.match(/\.(jpe?g|png|gif|jfif)$/)) {
              photos_links.push({
                  link: val,
                  date: "Снимка"
              });
          }
      });
      appendImages()
  }
});

function  appendImages(){
  let photos_app_body = document.querySelector(".photos-app");
          photos_links.forEach(photo => {   
          var img = document.createElement("img");
          img.src = "./assets/photos_app/"+photo.link;
          img.setAttribute("data-sub-html", photo.date);
      
      
         
          // Append the anchor element to the .photos-app container
          photos_app_body.appendChild(img);
      });

      Galeria()
}
function Galeria(){
  lightGallery(document.querySelector(".photos-app"), {
      speed: 500,
      subHtmlSelectorRelative: true,
      licenseKey: "3BB5B066-2587-4658-A964-5DCAC85A5179",
  });
}



}
var password_messenger_mail = 0;
isloggedin_messenger = 1
function MessengerApp(){
    app_body.innerHTML = `
    <div class="lock-screen-messenger app-common">
                    <img src="./assets/messenger_icon.png" alt="">

                    <div class="login-details">
                        <div class="form-group">
                          <label for="">Е-майл</label>
                          <input type="text"
                            class="form-control fb-login-mail" aria-describedby="helpId" placeholder="Е-майл">
                        </div>

                        <div class="form-group">
                            <label for="">Парола</label>
                            <input type="text"
                              class="form-control fb-login-pass" aria-describedby="helpId" placeholder="Парола">
                          </div>

                          <button class="btn btn-primary w-100 fb-login-btn">Влез</button>
                          <a class="forgot-pass">Забравена парола</a> 

                    </div>
                </div>
    `

    let forgot_pass = document.querySelector(".forgot-pass")
    forgot_pass.addEventListener("click", function(){
     let email_to_send_pass = prompt("Емайл:")

     if(email_to_send_pass.toLowerCase() === "ardjikov@mail.com"){
      alert("Изпратена е паролата на посочения емайл.")
      ShowNotification("Mail", "Имате нов е-майл", "Вашата парола")
      password_messenger_mail = 1
     }else{
      alert("Няма свързан акаунт с този емайл.")
     }

    })


   
    let loginbtn = document.querySelector(".fb-login-btn")

    loginbtn.addEventListener("click", function(){
      let email = document.querySelector(".fb-login-mail").value.toLowerCase()
      let pass = document.querySelector(".fb-login-pass").value.toLowerCase()
      if(email === "ardjikov@mail.com" && pass === "elenaivan1969"){
        isloggedin_messenger = 1
        ShowChatList()
      }else{

        alert("Грешка")
      }

    })

if(isloggedin_messenger === 1){
  ShowChatList()
}


function ShowChatList(){
  app_body.innerHTML = `
  <div class="messenger-app">
  <div class="messenger-nav">
      <i class="fa-solid fa-bars"></i>
      <span>Chats</span>
      <span class="open-profile-fb" style="background: #ececec;
      padding: 0px 20px;
      text-align: center;
      border-radius: 10px;">Профил -></span>
  </div>
  
  <div class="chats">


  </div>

  </div>
  `
  let open_profile_btn = document.querySelector(".open-profile-fb")
  open_profile_btn.addEventListener("click", function(){
    ShowProfile()
  })

  function ShowProfile(){
    app_body.innerHTML = 
    `
    <div class="facebook-profile app-common">
    <div class="messenger-nav">
        <i class="fa-solid fa-arrow-left"></i>
        <span style="text-align: center;">Георги Арджиков<br>Posts</span>
        <span><i class="fa-solid fa-pen"></i></span>
    </div>

    <div class="posts">
        
        

       



    </div>

</div>
    `
    let goback = document.querySelector(".fa-arrow-left")
    goback.addEventListener("click", function(){
      ShowChatList()
    })

    let postsDiv = document.querySelector(".posts")
    // GET ALL CHATS AND CONVERSATIONS
  fetch('./script/essentials/posts.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    posts = data
    // Loop through the data and log the first name of each conversation
    data.forEach(post => {
     let date = post.date;
     let content = post.content 
     let likecount = post.likecount  

     postsDiv.innerHTML += 
     `
     <div class="post">
     <div class="post-head">
         <img src="./assets/ardjikov.webp" alt="">
         <div class="post-head-info">
             <span style="font-weight: bold;">Георги Арджиков</span>
             <span class="date">${date}</span>
         </div>
         <i class="fa-solid fa-ellipsis"></i>
     </div>

     <div class="post-body">
         ${content}
     </div>

     <div class="post-footer">
         <img src="./assets/like_ico.png" alt="">
         <span class="like-count">${likecount}</span>
     </div>

 </div>
     `


    });
  })
  .catch(error => console.error('Error loading JSON data:', error));







  }


  let chatsDiv = document.querySelector(".chats")   
  let conversations = []
  // GET ALL CHATS AND CONVERSATIONS
  fetch('./script/messenger/conversations.json') 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      conversations = data
      // Loop through the data and log the first name of each conversation
      data.forEach(conversation => {
       let name = conversation.name;
       let lastMsg = conversation.lastMessage
       let id = conversation.id 
       let profilePic = conversation.profilePicture  
  
       chatsDiv.innerHTML += 
       `
       <div class="person" data-id="${id}">
                              <img src="${profilePic}" alt="">
                              <div class="person-info-chat">
                                  <span class="name">${name}</span>
                                  <div class="msg-date">
                                      <span class="msg">${lastMsg}</span>
                                      
                          </div>
                      </div>
              </div>
       `
  
  
      });
  
      CheckChat()
    })
    .catch(error => console.error('Error loading JSON data:', error));
  
    function CheckChat(){
      let people = document.querySelectorAll(".person")
      people.forEach(chat =>{
          chat.addEventListener("click", function(){
              let id = chat.getAttribute("data-id")
              let name = chat.querySelector(".person-info-chat .name").innerHTML
              let profilePic = this.querySelector(".person img").src
        const conversation = conversations.find(conv => conv.id == id);
        if (conversation) {
          app_body.innerHTML=
          `
          <div class="messages">
                      <div class="messages-nav">
                          <div class="messages-nav-left">
                              <i class="fa-solid fa-arrow-left back"></i>
                              <img src="${profilePic}" alt="">
                              <span>${name}</span>
                          </div>
                          <div class="messages-nav-right">
                              <i class="fa-solid fa-phone"></i>
                              <i class="fa-solid fa-camera"></i>
                          </div>
                      </div>
                      
                      <div class="discussion">
    
  
                      </div>
                      
  
                  </div>
  
          `
          let  gobackarrow = document.querySelector(".back")
          gobackarrow.addEventListener("click",  function(){
              MessengerApp()
          })
  
          let discussionDiv = document.querySelector(".discussion")
          let lastDate = "";

conversation.conversation.forEach(message => {
    const bubble = document.createElement("div");
    bubble.setAttribute("data-timestamp", message.timestamp);

    // Extract the date part from the timestamp
    const currentDate = message.timestamp.split(' ')[0];

    // Check if the current message's date is different from the last one
    if (currentDate !== lastDate) {
        const dateSeparator = document.createElement("span");
        dateSeparator.classList.add("date-separator");
        dateSeparator.textContent = currentDate; // Use currentDate to show only the date part
        discussionDiv.appendChild(dateSeparator);
        lastDate = currentDate;
    }

    if (message.type === "msg") {
        bubble.textContent = message.message;
        bubble.innerHTML += `<span class="timestamp">${message.timestamp}</span>`;
    } else if (message.type === "audio") {
        let audio_link = message.message;
        bubble.innerHTML =
            `
            <audio controls>
            <source src="${audio_link}" type="audio/ogg">
            <source src="${audio_link}" type="audio/mpeg">
            Your browser does not support the audio element.
            </audio>
            `;
    } else if (message.type === "img") {
        let imgLink = message.message;
        bubble.innerHTML =
            `
            <img src="${imgLink}" alt="">
            `;
    }

    if (message.sender === "You") {
        bubble.classList.add("bubble", "recipient");
    } else {
        bubble.classList.add("bubble", "sender");
    }
    discussionDiv.appendChild(bubble);
});
         
        } 
       })
      })
  
  
    }
}

 
}

function NotesApp(){
    app_body.innerHTML = `
    <div class="notes-app">

    </div>`
    let notes = []

    let notesApp = document.querySelector(".notes-app")
    fetch('./script/essentials/notes.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    notes = data

    data.forEach(note => {
    let id = note.id
    let date = note.date
    let title = note.title
    let content = note.content.substring(0, 34);

    notesApp.innerHTML += 
    `
    <div class="note" data-id="${id}">
        <span class="date">${date}</span>
        <span class="title">${title}</span>
        <p>${content} ...</p>
    </div>
    `

    });

    CheckNote()

  })
  .catch(error => console.error('Error loading JSON data:', error));

function CheckNote(){
    let AllNotes = document.querySelectorAll(".note")
    AllNotes.forEach(note =>{
        note.addEventListener("click", function(){
          let noteId = note.getAttribute("data-id")
          const noteContent = notes.find(note => note.id == noteId);
          if (noteContent) {
            app_body.innerHTML=
            `
            <div class="read-note">
            <div class="read-note-nav">
                <div class="read-note-nav-left">
                    <i class="fa-solid fa-arrow-left back"></i>
                    <span>All</span>
                </div>
                <div class="read-note-nav-right">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>

            </div>

            <div class="read-note-body">
                <span class="date">${noteContent.date} </span>
                <h3>${noteContent.title}</h3>
                <p>${noteContent.content}</p>
            </div>

        </div>    
    
            `
            let  gobackarrow = document.querySelector(".back")
        gobackarrow.addEventListener("click",  function(){
            NotesApp()
        })
          }
        })
    })
}



}


function SafariApp(){
    app_body.innerHTML = 
    `
    <div class="safari-app">
                    <div class="search-bar">
                        <i class="fa-solid fa-a"></i>
                
                        <span>google.bg</span>
                
                        <i class="fa-solid fa-rotate-right"></i>
                    </div>
                
                    <div class="safari-body">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="">
                
                        <input type="text" class="w-100 p-2 search-google" placeholder="Търси">

                        <button class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i> Търси </button>
        </div>
      </div>
    `

    let search_input = document.querySelector(".search-google")
    document.querySelector(".safari-app .btn").addEventListener("click", function(){
      let search_query = search_input.value.toLowerCase()
      if(search_query != ""){
        if(search_query.includes("ardjikovgrup")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/ardjikov.jpg" style="max-width:100%;">
          </div>
          `
        }
        if(search_query.includes("alo.bg")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/alo.png" style="max-width:100%;">
          </div>
          `
        }
        if(search_query.includes("protectus")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/protectus.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("dunevi")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/dunevi.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("toyota")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/toyota.png" style="max-width:100%;">
          </div>
          `
        }
        if(search_query.includes("dunevi")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/dunevi.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("fantastico")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/dunevi.png" style="max-width:100%;">
          </div>
          `
        }
        if(search_query.includes("chanel")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/chanel.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("aura")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/aura.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("djanti")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/djanti.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("kylie")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/kylie.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("mercedes")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/mercedes.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("skincare")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/chanel.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("bilki")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/bilki.png" style="max-width:100%;">
          </div>
          `
        }

        if(search_query.includes("sofianews")){
          app_body.innerHTML = 
          `
          <div class="app-common">
          <img src="./assets/websites/news.png" style="max-width:100%;">
          </div>
          `
        }




        
      }
    })


}


function PhoneApp(){
    app_body.innerHTML = 
    `
    <div class="phoneapp app-common">
                    
    <input class="phone-call" value="" type="text" readonly>
    
    <div class="keyboard">
        <span data-key="1" class="number-key">
            1
        </span>
        <span data-key="2" class="number-key">
            2
        </span>
        <span data-key="3" class="number-key">
            3
        </span>
        <span data-key="4" class="number-key">
            4
        </span>
        <span data-key="5" class="number-key">
            5
        </span>
        <span data-key="6" class="number-key">
            6
        </span>
        <span data-key="7" class="number-key">
            7
        </span>
        <span data-key="8" class="number-key">
            8
        </span>
        <span data-key="9" class="number-key">
            9
        </span>
        <span data-key="*" class="number-key">
            *
        </span>
        <span data-key="0" class="number-key">
            0
        </span>
        <span data-key="#" class="number-key">
            #
        </span>
        <span class="call">
            <i class="fa-solid fa-phone"></i>
        </span>

    </div>    
 
</div>
    `
   
    let input = document.querySelector(".phone-call")
    let keys = document.querySelectorAll(".number-key")

    let call_btn = document.querySelector(".call")

    keys.forEach(key => {
      key.addEventListener("click", function(){
        let number = this.getAttribute("data-key")
        input.value += number
        var audio = new Audio('../assets/sounds/phone_key.mp3');
          audio.play();
      })
    })
    input.addEventListener("click", function(){
      input.value = ""
    })

    call_btn.addEventListener("click", function(){
      let phone_number = input.value

      if(phone_number === "04222144"){
        input.value = "..."
        call_btn.style.background = "red";
        var audio = new Audio('../assets/sounds/iplog.mp3');
        audio.play();

        call_btn.addEventListener("click", function(){
          audio.pause();
          app.style.display="none";
        })

      }else{
        input.value = "";
        alert("Нямаш ваучер за този номер. Потърси безплатен номер :)")
      }

    })

  
}

function Game(){

    app_body.innerHTML = 
    `
    <div class="game header">
                    <h1>Floppy Bird</h1>
                    <div class="score-container">
                      <div id="bestScore"></div>
                      <div id="currentScore"></div>
                    </div>
                  </div>
                
                  <canvas id="canvas"></canvas>
                
    `







    const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const img = new Image();
img.src = "https://i.ibb.co/Q9yv5Jk/flappy-bird-set.png";

let appHeight = document.querySelector(".app").offsetHeight
console.log(appHeight)
canvas.style.width='100%';
  canvas.style.height=(appHeight-"270")+"px";
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

// general settings
let gamePlaying = false;
const gravity = .5;
const speed = 6.2;
const size = [51, 36];
const jump = -11.5;
const cTenth = (canvas.width / 10);

let index = 0,
    bestScore = 0, 
    flight, 
    flyHeight, 
    currentScore, 
    pipe;

// pipe settings
const pipeWidth = 78;
const pipeGap = 270;
const pipeLoc = () => (Math.random() * ((canvas.height - (pipeGap + pipeWidth)) - pipeWidth)) + pipeWidth;

const setup = () => {
  currentScore = 0;
  flight = jump;

  // set initial flyHeight (middle of screen - size of the bird)
  flyHeight = (canvas.height / 2) - (size[1] / 2);

  // setup first 3 pipes
  pipes = Array(3).fill().map((a, i) => [canvas.width + (i * (pipeGap + pipeWidth)), pipeLoc()]);
}

const render = () => {
  // make the pipe and bird moving 
  index++;

  // ctx.clearRect(0, 0, canvas.width, canvas.height);

  // background first part 
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -((index * (speed / 2)) % canvas.width) + canvas.width, 0, canvas.width, canvas.height);
  // background second part
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height, -(index * (speed / 2)) % canvas.width, 0, canvas.width, canvas.height);
  
  // pipe display
  if (gamePlaying){
    pipes.map(pipe => {
      // pipe moving
      pipe[0] -= speed;

      // top pipe
      ctx.drawImage(img, 432, 588 - pipe[1], pipeWidth, pipe[1], pipe[0], 0, pipeWidth, pipe[1]);
      // bottom pipe
      ctx.drawImage(img, 432 + pipeWidth, 108, pipeWidth, canvas.height - pipe[1] + pipeGap, pipe[0], pipe[1] + pipeGap, pipeWidth, canvas.height - pipe[1] + pipeGap);

      // give 1 point & create new pipe
      if(pipe[0] <= -pipeWidth){
        currentScore++;
        // check if it's the best score
        bestScore = Math.max(bestScore, currentScore);
        
        // remove & create new pipe
        pipes = [...pipes.slice(1), [pipes[pipes.length-1][0] + pipeGap + pipeWidth, pipeLoc()]];
        console.log(pipes);
      }
    
      // if hit the pipe, end
      if ([
        pipe[0] <= cTenth + size[0], 
        pipe[0] + pipeWidth >= cTenth, 
        pipe[1] > flyHeight || pipe[1] + pipeGap < flyHeight + size[1]
      ].every(elem => elem)) {
        gamePlaying = false;
        setup();
      }
    })
  }
  // draw bird
  if (gamePlaying) {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, cTenth, flyHeight, ...size);
    flight += gravity;
    flyHeight = Math.min(flyHeight + flight, canvas.height - size[1]);
  } else {
    ctx.drawImage(img, 432, Math.floor((index % 9) / 3) * size[1], ...size, ((canvas.width / 2) - size[0] / 2), flyHeight, ...size);
    flyHeight = (canvas.height / 2) - (size[1] / 2);
      // text accueil
    ctx.fillText(`Best score : ${bestScore}`, 85, 245);
    ctx.fillText('Click to play', 90, 535);
    ctx.font = "bold 30px courier";
  }

  document.getElementById('bestScore').innerHTML = `Best : ${bestScore}`;
  document.getElementById('currentScore').innerHTML = `Current : ${currentScore}`;

  // tell the browser to perform anim
  window.requestAnimationFrame(render);
}

// launch setup
setup();
img.onload = render;

// start game
document.addEventListener('click', () => gamePlaying = true);
window.onclick = () => flight = jump;


}


var emails = []
let isloggedin_mail = 0; 
function  Mail(){
  app_body.innerHTML = 
  `
  <div class="mail-app app-common">
  <div class="mail-login d-flex flex-column justify-center">
      <span>Влез в Mail</span>
      <div class="form-group">
        <label for="">Е-Майл</label>
        <input type="text"
          class="form-control" id="email-login" aria-describedby="helpId" placeholder="">
        <small id="helpId" class="form-text text-muted">example@gmail.com</small>
      </div>
      <div class="form-group">
          <label for="">Парола</label>
          <input type="password"
            class="form-control" id="password-login" aria-describedby="helpId" placeholder="">
        </div>
     
      <button class="btn btn-primary w-100">Влез</button>
      <a class="forgot-password-email">Забравена парола</a>


  </div>
              
  `

  // LOGIN IN EMAIL

let button_login_email = document.querySelector(".mail-login button")
button_login_email.addEventListener("click", function(){
  let email_input = document.getElementById("email-login").value.toLowerCase()
  let password_input = document.getElementById("password-login").value.toLowerCase()

  if(email_input === "ardjikov@mail.com" & password_input === "ardjikov777"){
    isloggedin_mail = 1;
    ShowMailList()
  }else{
    
    button_login_email.innerHTML = "Грешни данни";
    button_login_email.style.background = "red";
setTimeout(() => {
  button_login_email.innerHTML = "Влез";
  button_login_email.style.background = "#0d6efd";
}, 1000);
  }
})

// Check isloggedin outside the event handler
if (isloggedin_mail === 1) {
  ShowMailList();
}

function ShowMailList(){
  if(password_messenger_mail === 1){
    app_body.innerHTML = 
    `
    <div class="email-list app-common">
    <h2>Inbox</h2>
    <div data-id="854" class="single-mail">
                    <div class="single-mail-head">
                        <span class="from"><i style="color:#5f9eff;" class="fa-solid fa-circle"></i>  Mark Zuckerberg                        </span>
                        <span class="date">Преди минута. <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div class="content">
                        <p class="subject">Вашата парола</p>
                        <p class="preview">Вашата парола е: elenaivan1969</p>
                    </div>

       </div>
      </div> 
    `
  }else[
    app_body.innerHTML = 
    `
                <div class="email-list app-common">
                  <h2>Inbox</h2>
                   
                  
  
  
                 </div>
    `

  ]
  

  let maillist = document.querySelector(".email-list")


  fetch('./script/essentials/emails.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

    emails = data

    emails.forEach(email => {
    let id = email.id
    let date = email.date
    let from = email.from
    let subject = email.subject
    let preview = email.content.substring(0, 100);

    maillist.innerHTML += 
    `
    <div data-id="${id}" class="single-mail">
                    <div class="single-mail-head">
                        <span class="from">${from}</span>
                        <span class="date">${date} <i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                    <div class="content">
                        <p class="subject">${subject}</p>
                        <p class="preview">${preview}</p>
                    </div>

       </div>
    `

    });

    CheckMail()

  })
  .catch(error => console.error('Error loading JSON data:', error));


  function CheckMail(){
    let allMails = document.querySelectorAll(".single-mail")
    allMails.forEach(mail =>{
        mail.addEventListener("click", function(){
          let mail_id = mail.getAttribute("data-id")
          const MailContent = emails.find(email => email.id == mail_id);
          if (MailContent) {
            app_body.innerHTML=
            `
            <div class="read-note">
            <div class="read-note-nav" style="color:blue;">
                <div class="read-note-nav-left">
                    <i class="fa-solid fa-arrow-left back"></i>
                    <span>All</span>
                </div>
                <div class="read-note-nav-right">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <i class="fa-solid fa-ellipsis"></i>
                </div>

            </div>

            <div class="read-note-body">
                <span class="date">${MailContent.date} </span>
                <span class="subject">Тема: ${MailContent.subject} </span>
                <h3>От: ${MailContent.from}</h3>
                <p>${MailContent.content}</p>
            </div>

        </div>    
    
            `
            let  gobackarrow = document.querySelector(".read-note-nav-left")
        gobackarrow.addEventListener("click",  function(){
          ShowMailList()
        })
          }
        })
    })
}



}



  // FORGOT PASSWORD
  let forgot_pass = document.querySelector(".forgot-password-email")
  forgot_pass.addEventListener("click", function(){
    let email = prompt("Email:")
    if(email.toLowerCase() === "ardjikov@mail.com"){
      app_body.innerHTML = 
      `
      <div class="forgot-password app-common">
      <span>Забравена парола</span><br>
      ${email}
      <div class="form-group">
          <label for="">Любима храна:</label>
          <input type="text"
            class="form-control firstanswer" aria-describedby="helpId" placeholder="">
          <small id="helpId" class="form-text text-muted">Изписва се на кирилица</small>
      </div>

      <div class="form-group">
          <label for="">Рождена дата:</label>
          <input type="text"
            class="form-control secondanswer" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">dd.mm.yyyy</small>
      </div>

      <div class="form-group">
          <label for="">Любим град:</label>
          <input type="text"
            class="form-control thirdanswer" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Изписва се на кирилица</small>
      </div>

      <div class="form-group">
          <label for="">Любимият ти актьор от любимият ти филм:</label>
          <input type="text"
            class="form-control fourthanswer" aria-describedby="helpId" placeholder="">
            <small id="helpId" class="form-text text-muted">Изписва се на кирилица</small>
      </div>

      <button class="btn btn-primary w-100">Покажи парола</button>

    </div>
      `

      let btn_check_pass = document.querySelector(".forgot-password .btn")
      btn_check_pass.addEventListener("click", function(){
        let answer1 = document.querySelector(".firstanswer").value.toLowerCase().replace(/\s+/g, '')
        let answer2 = document.querySelector(".secondanswer").value.toLowerCase().replace(/\s+/g, '')
        let answer3 = document.querySelector(".thirdanswer").value.toLowerCase().replace(/\s+/g, '')
        let answer4 = document.querySelector(".fourthanswer").value.toLowerCase().replace(/\s+/g, '')

        var ans_1 = false
        var ans_2 = false
        var ans_3 = false
        var ans_4 = false
        var msg = ""

        if(answer1 === "спагети"){
          ans_1 = true;
        }else{
          msg += "Грешка във въпрос 1"
        }

        if(answer2 === "03.08.1969"){
          ans_2 = true;
        }else{
          msg += "Грешка във въпрос 2"
        }
        
        if(answer3 === "карлово"){
          ans_3 = true;
        }else{
          msg += "Грешка във въпрос 3"
        }
        
        if(answer4 === "маринянев"){
          ans_4 = true;
        }else{
          msg += "Грешка във въпрос 4"
        }

        if(ans_1 & ans_2 & ans_3 & ans_4){
          app_body.innerHTML += `Вашата парола е: <b>ardjikov777</b>`
        }else[
          alert(msg)
        ]

      })

     // FUNCTION TO CHECK THE ANSWERS AND SHOW THE PASSWORD

    }else{
        alert("Няма такъв е-майл в нашата база с данни.")
    }
  })



}





var iptracker_islocked = true;
function IpTracker(){

  if(iptracker_islocked){
    app_body.innerHTML = 
    `<div class="iptracker app-common">
    <i class="fa-solid fa-user-secret"></i>
       <h2>IP:TRACKER</h2>
    
       <div class="info">
       <h2>ЗАКЛЮЧЕНО</h2>
           <p>Проследи браузър историята на всяко IP<br></p>
          <input  type="text" class="ip-tracker-pass" placeholder="Масонски код">
       </div> 
  
    </div>
    `    

    let input_ip_password = document.querySelector(".ip-tracker-pass")
    input_ip_password.addEventListener("change", function(){
      let value = input_ip_password.value.toLowerCase()
      if(value === "еманципация"){
        iptracker_islocked = false
        IpTracker()
        
        
      }else{
        input_ip_password.style.border = "1px solid red";
        input_ip_password.value = "Грешка !!!"
        setTimeout(() => {
          input_ip_password.style.border = "grey";
          input_ip_password.value = ""
        }, 1000);
      }
    })
  }else{
    app_body.innerHTML = 
    `
    <div class="iptracker app-common">
                    <i class="fa-solid fa-user-secret"></i>
                       <h2>IP:TRACKER</h2>
                    
                       <div class="info">
                       <h2>ОТКЛЮЧЕНО</h2>
                           <p>Проследи браузър историята на всяко IP</p>
                           
                           
                        <input class="password-iptracker" type="text" placeholder="ИП:" >
                        <button class="btn btn-success w-50 my-4">Проследни</button>
                       </div>
     </div>    
    `    

    let btn = document.querySelector(".iptracker .btn")
    btn.addEventListener("click", function(){
      let ip = document.querySelector(".password-iptracker").value
      if(ip === "210.67.90.123"){5
        app_body.innerHTML = 
        `
        <div class="iptracker app-common">
        <i class="fa-solid fa-user-secret"></i>
           <h2>${ip}</h2>
        
           <div class="info">
            <p>Проследи браузър историята на всяко IP</p>
           </div>

           <div class="search-history-iptracker">
            <table class="table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Уебсайт</th>
                      
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">22.03.24</td>
                    <td>Dubai rent a house</td>
                  
                </tr>
                <tr>
                    <td scope="row">22.03.24</td>
                    <td>Възможно ли е екстрадиране от Дубай</td>
                </tr>
                <tr>
                    <td scope="row">22.03.24</td>
                    <td>www.googleflights.com</td>
                </tr>
                <tr>
                    <td scope="row">21.03.24</td>
                    <td>От къде се купува фалшив паспорт</td>
                </tr>
                <tr>
                    <td scope="row">18.03.24</td>
                    <td>Как да направим отрова от билки</td>
                </tr>
                <tr>
                    <td scope="row">18.03.24</td>
                    <td>www.bilkous.bg</td>
                    </tr>   
            </tbody>
            </table>

           </div>

     </div>    
        `
      }

      if(ip === "203.128.56.77"){1
        app_body.innerHTML = 
        `
        <div class="iptracker app-common">
        <i class="fa-solid fa-user-secret"></i>
           <h2>${ip}</h2>
        
           <div class="info">
            <p>Проследи браузър историята на всяко IP</p>
           </div>

           <div class="search-history-iptracker">
            <table class="table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Уебсайт</th>
                      
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td scope="row">22.03.24</td>
        <td>Погребална агенция София</td>
      
    </tr>
    <tr>
        <td scope="row">15.03.24</td>
        <td>Онлайн консултация</td>
    </tr>
    <tr>
        <td scope="row">12.03.24</td>
        <td>Адвокат по фирмено дело</td>
    </tr>
    <tr>
        <td scope="row">02.03.24</td>
        <td>Как да си направим билков лек</td>
    </tr>
    <tr>
        <td scope="row">01.03.24</td>
        <td>Съдружници прехвърляне на дялове</td>
    </tr>
    <tr>
        <td scope="row">23.02.24</td>
        <td>Как да затвърдя позицията си на собственик на фирма</td>
        </tr>   
</tbody>

            </table>

           </div>

     </div>    
        `
      }

      if(ip === "172.16.34.56"){4
        app_body.innerHTML = 
        `
        <div class="iptracker app-common">
        <i class="fa-solid fa-user-secret"></i>
           <h2>${ip}</h2>
        
           <div class="info">
            <p>Проследи браузър историята на всяко IP</p>
           </div>

           <div class="search-history-iptracker">
            <table class="table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Уебсайт</th>
                      
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">22.03.24</td>
                    <td>Георги Арджиков</td>
                  
                </tr>
                <tr>
                    <td scope="row">19.03.24</td>
                    <td>Aura by bambo maps</td>
                </tr>
                <tr>
                    <td scope="row">12.03.24</td>
                    <td>Как да се самоубия безболезнено</td>
                </tr>
                <tr>
                    <td scope="row">10.03.24</td>
                    <td>Как да изчезна безследно</td>
                </tr>
                <tr>
                    <td scope="row">23.02.24</td>
                    <td>Вуйчо ми иска да спи с мен</td>
                </tr>
                <tr>
                    <td scope="row">21.02.24</td>
                    <td>Хиалуронова киселина странични ефекти</td>
                  </tr>
            </tbody>

            </table>

           </div>

     </div>    
        `
      }

      if(ip === "124.89.201.34"){2
        app_body.innerHTML = 
        `
        <div class="iptracker app-common">
        <i class="fa-solid fa-user-secret"></i>
           <h2>${ip}</h2>
        
           <div class="info">
            <p>Проследи браузър историята на всяко IP</p>
           </div>

           <div class="search-history-iptracker">
            <table class="table">
                <thead>
                    <tr>
                        <th>Дата</th>
                        <th>Уебсайт</th>
                      
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td scope="row">19.03.24</td>
        <td>www.ferrari.com</td>
      
    </tr>
    <tr>
        <td scope="row">15.03.24</td>
        <td>www.mercedesbenz.com</td>
    </tr>
    <tr>
        <td scope="row">10.03.24</td>
        <td>Георги Арджиков</td>
    </tr>
    <tr>
        <td scope="row">03.03.24</td>
        <td>Протеин след или преди тренировка</td>
    </tr>
    <tr>
        <td scope="row">01.03.24</td>
        <td>www.viagra.com</td>
    </tr>
    <tr>
        <td scope="row">26.02.24</td>
        <td>www.themacallan.com</td>
        <tr>
</tbody>

            </table>

           </div>

     </div>    
        `
      }
      if(ip === "124.89.201.34"){3
        app_body.innerHTML = 
        `
        <div class="iptracker app-common">
        <i class="fa-solid fa-user-secret"></i>
           <h2>${ip}</h2>
        
           <div class="info">
            <p>Проследи браузър историята на всяко IP</p>
        </div>

        <div class="search-history-iptracker">
         <table class="table">
             <thead>
                 <tr>
                     <th>Дата</th>
                     <th>Уебсайт</th>
                   
                 </tr>
             </thead>
             <tbody>
 <tr>
     <td scope="row">16.03.24</td>
     <td>www.rolex.com</td>
   
 </tr>
 <tr>
     <td scope="row">13.03.24</td>
     <td>Иван Арджиков - статии</td>
 </tr>
 <tr>
     <td scope="row">12.03.24</td>
     <td>Иван Арджиков - папараци</td>
 </tr>
 <tr>
     <td scope="row">09.03.24</td>
     <td>Vannesa Hudgens</td>
 </tr>
 <tr>
     <td scope="row">07.03.24</td>
     <td>www.cornhub.com</td>
 </tr>
 <tr>
     <td scope="row">05.03.24</td>
     <td>Best Mercedes GT Brabus 2023 mods</td>
   <tr> 
</tbody>

         </table>

        </div>

  </div>    
     `
   }

   if(ip === "185.76.210.55"){6
     app_body.innerHTML = 
     `
     <div class="iptracker app-common">
     <i class="fa-solid fa-user-secret"></i>
        <h2>${ip}</h2>
     
        <div class="info">
         <p>Проследи браузър историята на всяко IP</p>
        </div>

        <div class="search-history-iptracker">
         <table class="table">
             <thead>
                 <tr>
                     <th>Дата</th>
                     <th>Уебсайт</th>
                   
                 </tr>
             </thead>
             <tbody>
 <tr>
     <td scope="row">22.03.24</td>
     <td>Адвокат отдел убийства</td>
   
 </tr>
 <tr>
     <td scope="row">20.03.24</td>
     <td>Почивка в Париж</td>
 </tr>
 <tr>
     <td scope="row">18.03.24</td>
     <td>Задължителна отпуска</td>
 </tr>
 <tr>
     <td scope="row">15.03.24</td>
     <td>Как да преодолея загубата на любовта на живота ми </td>
 </tr>
 <tr>
     <td scope="row">14.03.24</td>
     <td>Онлайн професионален курс по готвене</td>
 </tr>
 <tr>
     <td scope="row">12.03.24</td>
     <td>Как да осъдя работодателя си</td>
   <tr> 
</tbody>

         </table>

        </div>

  </div>    
     `
   }



 })
}

}


function ShowNotification(app, title, description){
  let notification = document.querySelector(".notification")
  let not_app_name = document.querySelector(".not-app-name")
  let not_title = document.querySelector(".not-data-title")
  let not_desc = document.querySelector(".not-data-info")

  notification.style.display = "flex"
  not_app_name.innerHTML = app
  not_title.innerHTML = title
  not_desc.innerHTML = description
  var audio = new Audio('../assets/sounds/notification.mp3');
  audio.play();


  notification.addEventListener("click", function(){
    notification.style.display = "none";
  })
}