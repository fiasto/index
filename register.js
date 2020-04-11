var form=document.querySelector("#form");
var formField=document.querySelectorAll(".formField");



// formField.addEventListener("keyup",function(){
    // check();
// })
form.addEventListener("submit",function(e){
    e.preventDefault();
    
    var allowLocation1 =check();
    if(allowLocation1===true){
    window.location="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf";
    }else{
        alert();
    }
})
function check(){
    var allowLocation=false;
    for(var i=0;i<formField.length;i++){
        if(formField[i].value.length >= 5){
            allowLocation=true;
        }else{
             allowLocation=false;
            break;
        }
        
    }
    return allowLocation;
}
check();
  