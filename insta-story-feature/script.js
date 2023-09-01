var arr=[
    {dp:"https://wallpapercave.com/wp/wp9002375.jpg",story:"https://static.toiimg.com/img/78047430/Master.jpg?imgsize=31170"},
    {dp:"https://i2.cinestaan.com/image-bank/1500-1500/123001-124000/123994.jpg",story:"https://yt3.ggpht.com/a/AGF-l7-bbUrs8Tvh0k-0XKqnLECPQsEIANx0qliK0Q=s900-c-k-c0xffffffff-no-rj-mo"},
    {dp:"https://static.toiimg.com/thumb/msid-79458599,width-800,height-600,resizemode-75,imgsize-99438,pt-32,y_pad-40/79458599.jpg",story:"https://wallpapercave.com/wp/wp9002375.jpg"},
    {dp:"https://wallpapercave.com/wp/wp9002375.jpg",story:"https://wallpapercave.com/wp/wp9002375.jpg"},
   




]

var cluter="";
arr.forEach(function(elem,idx){
    // console.log(idx)
    cluter +=` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">

</div>`
})
document.querySelector(".storyian").innerHTML=cluter;
document.querySelector(".storyian").addEventListener("click",function(dets){
 document.querySelector(".full-screen").style.display="block"

document.querySelector(".full-screen").style.backgroundImage =`url(${arr[dets.target.id].story})`

setTimeout(function(){
 document.querySelector(".full-screen").style.display="none"

},2000)

});

