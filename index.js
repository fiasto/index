var btn1=document.querySelector("#btn1");
var check=document.querySelector("#check");
function load(){
    if(check.checked){
        btn1.disabled=false;
    }else{
        btn1.disabled=true;
    }
}


check.addEventListener("click",function(){
   load();
})

btn1.addEventListener("click",function(){
    window.location="https://www.mohfw.gov.in/";
})


setTimeout(load,1000);




