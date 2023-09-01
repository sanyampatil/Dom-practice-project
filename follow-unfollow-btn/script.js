var text=document.querySelector("h3")
var btnFollow =document.querySelector('.follow') 
var request=document.querySelector('#request')
// var btnUnfollow =document.querySelector('.unfollow')
var check=0
btnFollow.addEventListener('click',function(){
    if( check==0){
        text.innerHTML='Your Friend'
        text.style.color="green"
        btnFollow.innerHTML="unfollow"
        check=1
    }
    else{

        text.innerHTML="you not friend"
        text.style.color="red";
        btnFollow.innerHTML="follow"

        check=0
    }


})
// btnUnFollow.addEventListener('click',function(){
//     text.innerHTML="please follow me"
//     text.style.color="red";


// })