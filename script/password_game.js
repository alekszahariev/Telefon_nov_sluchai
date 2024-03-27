function  PasswordGame(){
    app_body.innerHTML =
    `
    <div class="passwordgame app-common">
                      <div class="info">
                          <i class="fa-solid fa-lock"></i>
                          <h2>Whats MyPass?</h2>
                          <p>Приложение за криптиране на важна парола.</p>
                      </div>
                     
                      <input class="w-100 crypted-pass" type="text" placeholder="Напиши парола:">
                      
  
                      <ul>
                      <li data-step="first">Вашата парола трябва да е минимум 8 знака.</li>
                      <li data-step="second" style="display:none;">Трябва да имате поне 10 букви</li>
                      <li data-step="third" style="display:none;">Сборът на числата ви трябва да е 22</li>
                      <li data-step="four" style="display:none;">Вашата парола трябва да съдържа няколко специални символа.</li>
                      <li data-step="five" style="display:none;">Името на последната песен на Майкъл Джексън (изписана на латинеца)</li>
                      <li data-step="six" style="display:none;">Трябва да съдържа числото Pi</li>
                      <li data-step="seven" style="display:none;">Трябва да съдържа римско число</li>
                      <li data-step="eight" style="display:none;">Кой град е това -> <b>59.9203566,10.760805</b></li>
  
  
                    </ul>
                  </div>
    `
  
  let input = document.querySelector(".crypted-pass");
  input.addEventListener("input", function () {
  let answer = input.value
  
  
  
  step1(answer)
  step2(answer)
  step3(answer)
  step4(answer)
  step5(answer)
  step6(answer)
  step7(answer)
  step8(answer)
  
  })
  
  
  
  var flag2 = true
  var flag3 = true
  var flag4 = true
  var flag5 = true
  var flag6 = true
  var flag7 = true
  var flag8 = true
  
  function step1(pw) {
    if(pw.length >= 8){
      let li_step_one = document.querySelector("li[data-step='first']") 
      li_step_one.style.color = "green"; 
      
      if(flag2){
        document.querySelector("li[data-step=second]").style.display="block";
        flag2 = false
      }
    }
    else{
      let li_step_one = document.querySelector("li[data-step='first']") 
      li_step_one.style.color = "red"; 
    }
  } 
  function step2(pw) {
    let regex = /[a-zA-Zа-яА-Я]/g;
    let letras = pw.match(regex);
  
    if(letras && letras.length >= 10){
      let li_step_one = document.querySelector("li[data-step='second']") 
      li_step_one.style.color = "green"; 
      if(flag3){
        document.querySelector("li[data-step=third]").style.display="block";
        flag3 = false
      }
    }
    else{
      let li_step_one = document.querySelector("li[data-step='second']") 
      li_step_one.style.color = "red"; 
    }
  }                                                                                         
  function step3(pw) {
    let regex = /\d/g;
    let digitos = pw.match(regex);
    let soma = 0;
  
    if(digitos === null){
        return false;
    }
    else{
        for (let index = 0; index < digitos.length; index++) {
            soma += parseInt(digitos[index]);      
        }
  
        if(soma === 22){
          let li_step_one = document.querySelector("li[data-step='third']") 
          li_step_one.style.color = "green"; 
          
          if(flag4){
            document.querySelector("li[data-step=four]").style.display="block";
            flag4 = false
          }
        }
        else{
          let li_step_one = document.querySelector("li[data-step='third']") 
          li_step_one.style.color = "red"; 
        }
    }
  }
  function step4(pw) {
    let regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    let caracteresEspeciais = pw.match(regex);
  
    if(caracteresEspeciais && caracteresEspeciais.length >= 4){
      let li_step_one = document.querySelector("li[data-step='four']") 
      li_step_one.style.color = "green"; 
      if(flag5){
        document.querySelector("li[data-step=five]").style.display="block";
        flag5 = false
      }
    }
    else{
      let li_step_one = document.querySelector("li[data-step='four']") 
      li_step_one.style.color = "red"; 
    }
  }
  function step5(pw) {
    let paises = ["earth","Earth"];
  
  
    for (let index = 0; index < paises.length; index++) {
        if(pw.includes(paises[index])){
          let li_step_one = document.querySelector("li[data-step='five']") 
          li_step_one.style.color = "green"; 
          if(flag6){
            document.querySelector("li[data-step=six]").style.display="block";
            flag6 = false
          }
  
        }else{
          let li_step_one = document.querySelector("li[data-step='five']") 
    li_step_one.style.color = "red"; 
        }
    }
  }
  function step6(pw) {
    let paises = ["3,14"];
  
  
    for (let index = 0; index < paises.length; index++) {
      if(pw.includes(paises[index])){
        let li_step_one = document.querySelector("li[data-step='six']") 
        li_step_one.style.color = "green"; 
        if(flag7){
          document.querySelector("li[data-step=seven]").style.display="block";
          flag7 = false
        }
  
      }else{
        let li_step_one = document.querySelector("li[data-step='six']") 
  li_step_one.style.color = "red"; 
      }
  }
  }
  function step7(pw) {
    function isRomanNumeral(char) {
      const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
      return romanNumerals.includes(char);
    }
    
    function containsRomanNumeral(password) {
      return Array.from(password).some(isRomanNumeral);
    }
  
    const hasRomanNumeral = containsRomanNumeral(pw);
    
    if (hasRomanNumeral) {
      let li_step_one = document.querySelector("li[data-step='seven']") 
        li_step_one.style.color = "green"; 
        if(flag8){
          document.querySelector("li[data-step=eight]").style.display="block";
          flag8 = false
        }
  
    } else {
      let li_step_one = document.querySelector("li[data-step='seven']") 
      li_step_one.style.color = "red"; 
    }
  }
  function step8(pw) {
    pw = pw.toLowerCase()
    let paises = ["осло"];
  
  
    for (let index = 0; index < paises.length; index++) {
      if(pw.includes(paises[index])){
        let li_step_one = document.querySelector("li[data-step='eight']") 
        li_step_one.style.color = "green"; 
        iptracker_islocked = false;
        alert("IP-Tracker e отключено.")
      }else{
        let li_step_one = document.querySelector("li[data-step='eight']") 
        li_step_one.style.color = "red"; 
      }
  }
  }
  
  }