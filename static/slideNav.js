/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("menu_heading").style.marginLeft = "0";
  document.getElementById("menu_cog").style.transform = "rotate(180deg)";

  setTimeout(function () {
    document.getElementById("menu_cog").style.marginTop = 0.5*(document.getElementById("menu_heading").offsetHeight)-5%+"px"
    document.getElementById("menu_cog").style.marginLeft = (document.getElementById("menu_heading").offsetWidth)+"px";

  }, 180);
  try{
  document.getElementById("usecase_input").style.transition = "0s";
  }
  catch{}
  return(true)
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("menu_cog").style.marginLeft = "0%";
  document.getElementById("menu_cog").style.transform = "rotate(0deg)";
  setTimeout(function () {
    document.getElementById("menu_heading").style.marginLeft = "-200%";

  }, 50);
  document.body.style.backgroundColor = "white";
  try{
  document.getElementById("budget_input").style.backgroundColor = "white";
  document.getElementById("usecase_input").style.backgroundColor = "white";
  
  }
  catch{}
  return(false)
}
function checkNav(){
  try{chk == false}
  catch{chk = false
    console.log(1)}
  if(chk == false){ console.log(1)
    chk = openNav()}
  else if(chk == true){ console.log(1)
    chk = closeNav()}
}

function detectMob() {
  setTimeout( function(){
  if ((window.innerWidth <= 480) && (window.innerHeight <= 854)){
    document.getElementById("menu_cog").style.marginTop = "-35px"
    openNav()
    setTimeout( function (){
    
      document.getElementById("menu_cog").setAttribute("style","display:none")
      }, 1000);
    destroy_element = document.getElementById("home_label")
    destroy_element.parentNode.removeChild(destroy_element)
    var node1 = document.createElement("img")
    node1.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
    node1.setAttribute("src","https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png")
    node1.setAttribute("onclick",'location.href = "/Homepage"')
    document.getElementById("menu_heading").appendChild(node1)

    destroy_element = document.getElementById("part_label")
    destroy_element.parentNode.removeChild(destroy_element)
    var node2 = document.createElement("img")
    node2.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
    node2.setAttribute("onclick",'location.href = "/partselector"')
    node2.setAttribute("src","https://icon-library.com/images/wrench-icon-transparent/wrench-icon-transparent-14.jpg")
    document.getElementById("menu_heading").appendChild(node2)
    
    destroy_element = document.getElementById("contact_label")
    destroy_element.parentNode.removeChild(destroy_element)
    var node3 = document.createElement("img")
    node3.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
    node3.setAttribute("src","http://assets.stickpng.com/thumbs/5a452570546ddca7e1fcbc7d.png")
    node3.setAttribute("onclick",'location.href = "/Contact"')
    document.getElementById("menu_heading").appendChild(node3)
    return("20%")    
  }
  else{return("30%")}
}
  ), 50}
transfer2 = detectMob()