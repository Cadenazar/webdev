function openNav() {
    document.getElementById("menu_heading").style.marginLeft = "0";
    document.getElementById("menu_cog").style.transform = "rotate(180deg)";
  
    setTimeout(function () {
      document.getElementById("menu_cog").style.marginTop = 0.5*(document.getElementById("menu_heading").offsetHeight)-5%+"px"
      document.getElementById("menu_cog").style.marginLeft = (document.getElementById("menu_heading").offsetWidth)+"px";
  
    }, 180);
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    try{
    document.getElementById("budget_input").style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("usecase_input").style.transition = "0s";
    document.getElementById("usecase_input").style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    catch{}
    return(true)
  }
  

  function closeNav() {
    document.getElementById("menu_cog").style.marginLeft = "0%";
    document.getElementById("menu_cog").style.transform = "rotate(0deg)";
    setTimeout(function () {
      document.getElementById("menu_heading").style.marginLeft = "-200%";
  
    }, 50);
    document.body.style.backgroundColor = "#111";
    try{
    document.getElementById("budget_input").style.backgroundColor = "#111";
    document.getElementById("usecase_input").style.backgroundColor = "#111";
    
    }
    catch{}
    return(false)
  }
  function checkNav(){
    try{chk == false}
    catch{chk = false}
    if(chk == false){chk = openNav()}
    else if(chk == true){chk = closeNav()}
  }
  
  function detectMob() {
    if ((window.innerWidth <= 480) && (window.innerHeight <= 854)){
      document.getElementById("menu_cog").style.marginTop = "-35px"
      destroy_element = document.getElementById("home_label")
      destroy_element.parentNode.removeChild(destroy_element)
      var node1 = document.createElement("img")
      node1.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
      node1.setAttribute("src","https://www.pngkit.com/png/full/31-316559_white-home-icon-no-background.png")
      node1.setAttribute("onclick",'location.href = "../Webdev assignment/Homepage.html"')
      document.getElementById("menu_heading").appendChild(node1)
  
      destroy_element = document.getElementById("part_label")
      destroy_element.parentNode.removeChild(destroy_element)
      var node2 = document.createElement("img")
      node2.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
      node2.setAttribute("onclick",'location.href = "../Webdev assignment/partselector.html"')
      node2.setAttribute("src","https://icon-library.com/images/wrench-icon-transparent/wrench-icon-transparent-14.jpg")
      document.getElementById("menu_heading").appendChild(node2)
      
      destroy_element = document.getElementById("contact_label")
      destroy_element.parentNode.removeChild(destroy_element)
      var node3 = document.createElement("img")
      node3.setAttribute("style","height: 40px;width: 40px;margin-left: 10px")
      node3.setAttribute("src","http://assets.stickpng.com/thumbs/5a452570546ddca7e1fcbc7d.png")
      node3.setAttribute("onclick",'location.href = "../Webdev assignment/Contact.html"')
      document.getElementById("menu_heading").appendChild(node3)
      return("20%")    
    }
    else{return("30%")}
  }
  transfer2 = detectMob()