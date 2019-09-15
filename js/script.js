
//   document.getElementById("opencamera").addEventListener("click", function(e){
//       localStorage.setItem("messageitem", )
//       window.location.href="../camerapage.html"
//   });

// window.onload = function() {
//     var getInput = prompt("Hey type something here: ");
//     localStorage.setItem("",);
//  }

function changepage(){
    if(this.value.length > 1)
{localStorage.setItem(this.name, this.value); 
    window.location.href='./camerapage.html'}
else{alert('please enter value in textbox')}

}
