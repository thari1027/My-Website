function scrollToSection(id){
    const section =document.getElementById(id);
}
function setActive(evt,tabId){
  var i;
  var tabcontent =document.getElementsByClassName('btn-content');
  for(i=0; i<tabcontent.length;i++){
     tabcontent[i].style.display ="none";
    }
  var tabbtn=document.getElementsByClassName("btn");
 for(i=0; i<tabbtn.length; i++){
     tabbtn[i].className=tabbtn[i].className.replace("active"," ");
    }
document.getElementById(tabId).style.display = "block";
evt.currentTarget.className += " active";
     }
  window.onload = function() {
    document.querySelector('.btn.default').click();
  };
