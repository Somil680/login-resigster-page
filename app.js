var x = document.getElementById('login');
var y = document.getElementById('resigster');
var z = document.getElementById('btn');

function resigster(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }
  function login(){
      x.style.left = "50px";
      y.style.left = "450px";    
    ;  z.style.left = "0px";
      
  }
  const resigsterbutton = document.querySelector(".submit-btnr");
  const resiuserid = document.querySelector('#resi-userid');
  const resipass = document.querySelector('#resi-pass');
  const resiemailid = document.querySelector('#resi-emailid');
  // login page
  const loginbutton = document.querySelector(".submit-btn");
  const loginUserid = document.querySelector('#login-userid');
  const loginPass = document.querySelector('#login-pass');
  let p = document.querySelector('.p');
  let p1 = document.querySelector('.p1');
  let userid = []
  let password = []

  resigsterbutton.addEventListener('click' , resigsterpage );
   function resigsterpage(){
      if((resiuserid.value.length == 5)&&(resipass.value.length > 8 && resipass.value.length < 16 )&&(resiuserid.value.length != 0 && resipass.value.length !=0)){
      userid.push(resiuserid.value);
      password.push(resipass.value);
      alert('you are successfully resgister')
      p.style.color = `black`;
      p1.style.color = `black`;
      resiuserid.value = '';
      resipass.value  = '';
      resiemailid = '';
      }else{
      p.style.color = `red`;
      p1.style.color = `red`;
      resiuserid.value = '';
      resipass.value  = '';
      resiemailid = '';
}
              
}
  loginbutton.addEventListener('click' , logincheck);
  function logincheck(){
      if((loginUserid.value == userid && loginPass.value == password)&&(loginUserid.value != 0 && loginPass.value !=0 )){
      alert('Successfully login')
      loginUserid.value = ''
      loginPass.value = ''
      }else{
      alert("Resigster not done ! Go and resigster ") 
      loginUserid.value = ''
      loginPass.value = '' }
}