var signupName = document.getElementById('signup-Name')
var signupEmail = document.getElementById('signup-Email')
var signupPassword = document.getElementById('signup-Password')
var buttonSignup =document.getElementById('sign-up')
var signinemail=document.getElementById('signin-Email')
var signinpassword=document.getElementById('signin-Password')
var login =document.getElementById('login')
var containerLogin=document.getElementById('containerlogin')
var welcomePage=document.getElementById('welcomepage')
var userslist;
var user;
var username;












///local storage//
if(localStorage.getItem("userlist")==null){
    userslist=[]
}
else{
    userslist=JSON.parse(localStorage.getItem("userlist"))
}
/////SIGN UP///////
 //add user///
function signup (){
    if(empty()==true){
        document.getElementById('empty-exist').innerHTML='<span class="text-danger my-3">All inputs is required</span>'
    }else if(validationsite()==false){
      document.getElementById('empty-exist').innerHTML='<span class="text-danger my-3">put valid email</span>'
    }else {
    var user = {
        name: signupName.value,
        email:signupEmail.value,
        password:signupPassword.value
    }
    if(isExist () == true){
        document.getElementById('empty-exist').innerHTML='<span class="text-danger my-3">email already exists</span>'
    }else{
    userslist.push(user)
    localStorage.setItem("userlist",JSON.stringify( userslist))
    document.getElementById('empty-exist').innerHTML='<span class="text-success my-3">Success</span>'
    console.log(userslist)}
}}
//check input is empty//
function empty(){
    if( signupName.value==''||signupEmail.value==''||signupPassword.value==''){
       return true;
    }
    else{
        return false;
    }
}



//check if the account is exist
function isExist (){
  for(var i=0;i<userslist.length;i++){
    if(userslist[i].email == signupEmail.value){
        return true ;
    }
  }
}







//validation email//
function validationsite(){
    var regrex=/@gmail/;
    return regrex.test(signupEmail.value)==true;
}






/////LOGIN///////////
////check input login is empty/////
function isempty(){
    if(signinemail.value==''||signinpassword.value==''){
      return true
    }
}
login.addEventListener('click',function(){
    if(isempty()==true){
     document.getElementById('right').innerHTML='<span class="text-danger my-3">All inputs is required</span>'
    }else{
    for(var i=0;i<userslist.length;i++){
     if(userslist[i].email==signinemail.value && userslist[i].password==signinpassword.value){
            document.getElementById('right').innerHTML='<span class="text-success my-3">Success</span>'
            containerLogin.classList.add('d-none')
            welcomePage.classList.replace('d-none','d-block')
            /////to say welcome in home page//////
            var username=userslist[i].name;
            if (username) {
                document.getElementById('username').innerHTML= 'Welcome   '  +   username
            }
        }
        else{
            document.getElementById('right').innerHTML='<span class="text-danger my-3">incorrect email or password</span>'
        }
     }}
    
})



//logout the welcome page
function logout(){
    1
    welcomePage.classList.replace('d-block','d-none')

}