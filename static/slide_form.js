function load_form() {
  document.getElementById("budget").style.marginLeft = "5%"
  document.getElementById("budget_input").style.marginLeft = "5%"
  document.getElementById("usecase").style.marginLeft = "5%"
  document.getElementById("usecase_input").style.marginLeft = "5%"
}
function check_input() {
  if (document.getElementById("usecase_input").value == "Gaming") {
    var legend_node = document.createElement("legend")
    legend_node.setAttribute("style", "padding-top: 1%;border: 1px solid white;width: 70%;padding-bottom: 1%;")
    legend_node.setAttribute("id", "partsgen")
    temp = document.getElementById("submit_new")
    document.getElementById("main_form").insertBefore(legend_node, temp)

    var node = document.createElement("input")
    node.setAttribute("type", "checkbox")
    node.setAttribute("name", "Overwatch")
    node.setAttribute("id", "Overwatch")
    node.setAttribute("value", "Overwatch")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(node, temp);

    var space1 = document.createElement("br")
    temp = document.getElementById("submit")
    space1.setAttribute("id", "space1")
    document.getElementById("partsgen").insertBefore(space1, temp);

    var node2 = document.createElement("input")
    node2.setAttribute("type", "checkbox")
    node2.setAttribute("name", "CSGO")
    node2.setAttribute("id", "CSGO")
    // node2.setAttribute("value", "CSGO")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(node2, temp);

    var space2 = document.createElement("br")
    space2.setAttribute("id", "space2")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(space2, temp);

    var node3 = document.createElement("input")
    node3.setAttribute("type", "checkbox")
    node3.setAttribute("name", "Witcher3")
    node3.setAttribute("id", "Witcher3")
    node3.setAttribute("value", "Witcher3")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(node3, temp);

    var space3 = document.createElement("br")
    space3.setAttribute("id", "space3")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(space3, temp);

    var node4 = document.createElement("input")
    node4.setAttribute("type", "checkbox")
    node4.setAttribute("name", "Minecraft")
    node4.setAttribute("id", "Minecraft")
    node4.setAttribute("value", "Minecraft")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(node4, temp);

    var space4 = document.createElement("br")
    space4.setAttribute("id", "space4")
    temp = document.getElementById("submit")
    document.getElementById("partsgen").insertBefore(space4, temp);

    var newlabel = document.createElement("label")
    newlabel.setAttribute("for", "Minecraft");
    newlabel.setAttribute("id", "Minecraft-label");
    newlabel.innerHTML = "Minecraft"
    document.getElementById("partsgen").insertBefore(newlabel, document.getElementById("Minecraft"));

    var newlabel2 = document.createElement("label")
    newlabel2.setAttribute("for", "CSGO");
    newlabel2.setAttribute("id", "CSGO-label");
    newlabel2.innerHTML = "CSGO"
    document.getElementById("partsgen").insertBefore(newlabel2, document.getElementById("CSGO"));

    var newlabel3 = document.createElement("label")
    newlabel3.setAttribute("for", "Overwatch");
    newlabel3.setAttribute("id", "Overwatch-label");
    newlabel3.innerHTML = "Overwatch"
    newlabel3.setAttribute("style", "text-align: left;display: inline-block")
    document.getElementById("partsgen").insertBefore(newlabel3, document.getElementById("Overwatch"));

    var newlabel4 = document.createElement("label")
    newlabel4.setAttribute("for", "Witcher3");
    newlabel4.setAttribute("id", "Witcher3-label");
    newlabel4.innerHTML = "Witcher 3"
    document.getElementById("partsgen").insertBefore(newlabel4, document.getElementById("Witcher3"));

    var heading = document.createElement("h4")
    heading.innerHTML = "What games do you play"
    heading.setAttribute("style", "margin-top: 10px;margin-bottom: 5px")
    heading.setAttribute("id", "heading")
    document.getElementById("partsgen").insertBefore(heading, document.getElementById("Overwatch-label"));


    var newimg1 = document.createElement("img")
    newimg1.setAttribute("src", "https://www.pngitem.com/pimgs/m/29-298167_overwatch-logo-overwatch-logo-png-transparent-png.png");
    newimg1.setAttribute("id", "Overwatch-logo");
    newimg1.setAttribute("style", "width:40px;height;40px")
    document.getElementById("partsgen").insertBefore(newimg1, document.getElementById("Overwatch-label"));

    var newimg2 = document.createElement("img")
    newimg2.setAttribute("src", "https://seeklogo.com/images/C/csgo-logo-CAA0A4D48A-seeklogo.com.png");
    newimg2.setAttribute("id", "CSGO-logo");
    newimg2.setAttribute("style", "width:40px;height;40px")
    document.getElementById("partsgen").insertBefore(newimg2, document.getElementById("CSGO-label"));

    var newimg3 = document.createElement("img")
    newimg3.setAttribute("src", "https://preview.redd.it/avjal33hpqo61.png?width=512&format=png&auto=webp&s=b652d83347448df74c8ba61c17b322e686ee32a4");
    newimg3.setAttribute("id", "Minecraft-logo");
    newimg3.setAttribute("style", "width:40px;height;40px")
    document.getElementById("partsgen").insertBefore(newimg3, document.getElementById("Minecraft-label"));

    var newimg4 = document.createElement("img")
    newimg4.setAttribute("src", "https://cdn.wccftech.com/wp-content/uploads/2015/05/The-Witcher-33.png");
    newimg4.setAttribute("id", "Witcher3-logo");
    newimg4.setAttribute("style", "width:40px;height;40px")
    document.getElementById("partsgen").insertBefore(newimg4, document.getElementById("Witcher3-label"));

    setTimeout(function () {
      document.getElementById("Overwatch-label").style.marginLeft = "5%"
      document.getElementById("Minecraft-label").style.marginLeft = "5%"
      document.getElementById("CSGO-label").style.marginLeft = "5%"
      document.getElementById("Witcher3-label").style.marginLeft = "5%"
      document.getElementById("Overwatch-logo").style.marginLeft = "5%"
      document.getElementById("CSGO-logo").style.marginLeft = "5%"
      document.getElementById("Minecraft-logo").style.marginLeft = "5%"
      document.getElementById("Witcher3-logo").style.marginLeft = "5%"
    }, 200);
  }
  else if (document.querySelector("#usecase").value != "Gaming") {
    try {
      var destroyElement = document.getElementById("Minecraft")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Minecraft-label")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Minecraft-logo")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Overwatch")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Overwatch-label")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Overwatch-logo")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Witcher3")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Witcher3-label")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("Witcher3-logo")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("CSGO")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("CSGO-label")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("CSGO-logo")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("heading")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("space1")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("space2")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("space3")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("space4")
      destroyElement.parentNode.removeChild(destroyElement)

      var destroyElement = document.getElementById("partsgen")
      destroyElement.parentNode.removeChild(destroyElement)


    }
    catch{}
    }
    if (document.querySelector("#usecase_input").value == "Productivity") {
      var temp = document.getElementById("submit")

      var legend_node = document.createElement("legend")
      legend_node.setAttribute("style", "padding-top: 1%;border: 1px solid white;width: 70%;padding-bottom: 1%;")
      legend_node.setAttribute("id", "partsgen2")
      temp = document.getElementById("submit_new")
      document.getElementById("main_form").insertBefore(legend_node, temp)


      var info2 = document.createElement("h4")
      info2.setAttribute("id", "infotext")
      info2.innerHTML = "What kind of production software do you use?"
      document.getElementById("partsgen2").appendChild(info2)

      var selector = document.createElement("select")
      selector.setAttribute("id", "selector")
      document.getElementById("partsgen2").appendChild(selector)

      var option1 = document.createElement("option")
      option1.innerHTML = "3D rendering"
      option1.setAttribute("value", "Rendering")
      document.getElementById("selector").appendChild(option1)

      var option2 = document.createElement("option")
      option2.innerHTML = "Editing"
      option2.setAttribute("value", "Video-editing")
      document.getElementById("selector").appendChild(option2)

      var space5 = document.createElement("br")
      space5.setAttribute("id", "space5")
      temp = document.getElementById("submit")
      document.getElementById("partsgen2").appendChild(space5)


    }
    else if(document.querySelector("#usecase_input").value != "Productivity")
    {
      try{
      var destroyElement = document.getElementById("partsgen2")
      destroyElement.parentNode.removeChild(destroyElement) 
      var destroyElement = document.getElementById("selector")
      destroyElement.parentNode.removeChild(destroyElement)
  
      var destroyElement = document.getElementById("infotext")
      destroyElement.parentNode.removeChild(destroyElement)
    }
    catch{}
  }
  }
function getvalue() {
  localStorage.setItem("usecase", document.getElementById("usecase_input").value);
  localStorage.setItem("budget", document.getElementById("budget_input").value);
  if (document.querySelector("#usecase_input").value == "Gaming") {
    try {
      localStorage.setItem("CSGO", document.getElementById("CSGO").checked);
      localStorage.setItem("minecraft", document.getElementById("Minecraft").checked);
      localStorage.setItem("witcher3", document.getElementById("Witcher3").checked);
      localStorage.setItem("overwatch", document.getElementById("Overwatch").checked);
      localStorage.setItem("games_played", true);
    }
    catch {
      localStorage.setItem("games_played", false);
    }
  }
}