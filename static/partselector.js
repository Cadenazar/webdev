var counter = -1
var budget = localStorage.getItem("budget")
var usecase = localStorage.getItem("usecase")
var game_d_list = {"cpu":4,"gpu":6,"storage": 1};

if(Number.isInteger(budget) == true || (budget > 600 && budget < 6000)){
csgo = localStorage.getItem("CSGO")
overwatch = localStorage.getItem("overwatch")
witcher3 = localStorage.getItem("witcher3")
minecraft = localStorage.getItem("minecraft")
lst = [csgo,overwatch,witcher3,minecraft]
lst2 = ["CSGO","Overwatch","Witcher 3","Minecraft"]
cpu_games = []
gpu_games = []
storage_games = []
var game_count = 0
var games_lst = []
var gamelst2 = []
for(var i = 0;i < 4;i ++){
  if(lst[i] == "true"){
    game_count ++;
    games_lst.push(lst2[i]);
  }
}
if(game_count > 1){
  for(var i = 0;i <  games_lst.length;i ++){
    if (games_lst[i] == "Minecraft") {
      gamelst2.push.apply(gamelst2,minecraft_lst);
    }
    else if (games_lst[i] == "Overwatch") {
      gamelst2.push.apply(gamelst2,overwatch_lst)
    }
    else if (games_lst[i] == "Witcher 3") {
      gamelst2.push.apply(gamelst2,witcher3_lst)
    }
    else if (games_lst[i] == "CSGO") {
      gamelst2.push.apply(gamelst2,csgo_lst)
    }
  }
  for(var i in gamelst2){
    cpu_games.push(gamelst2[i]["cpu"])
    gpu_games.push(gamelst2[i]["gpu"])
    storage_games.push(gamelst2[i]["storage"])

  }
  cpu_score = Math.max(cpu_games)
  gpu_score = Math.max(gpu_games)
  storage_score = Math.max(storage_games)
  games = ""
  gamelst = {"cpu":cpu_score,"gpu":gpu_score,"storage":storage_lst}
} 
else{
  for(var i in lst){
    if(lst[i] == "true"){
      single_game = i
      games = gamelst2[single_game]
    }
  }
  try{single_game == 100}
  catch{games = ""}
}

var psu_lst = { 500: ["EVGA 500 W1", 40], 700: ["SuperFlower Leadex III 550W", 100], 1000: ["Corsair RM750x", 153], 1500: ["Corsair AX1000", 280] }
var gpu_lst = [[0, "integrated"], [377, "GTX 1650 Super"], [590, "GTX 1660 Super"], [762, "RTX 3060ti"], [970, "RX 6700 XT"], [1142, "RTX 3070ti"], [1366, "RX 6800 xt"], [1931, "RTX 3080ti"]]
var cpu_lst = [{ 160: "Intel core i3-10100" }, { 179: "Intel core i5-10400f" }, { 213: "Intel core i5-10400" }, { 228: "Intel core i5 10600k" }, { 290: "Ryzen 5 5600X" }, { 398: "Ryzen 7 5800X" }, { 570: "Ryzen 9 5900x" }, { 819: "Ryzen 9 5950x" }]
var mobo_lst = { 160: { 100: "GIGABYTE B560M DS3H LGA 1200 Intel B560 Intel Motherboard" }, 179: { 135: "ASRock B560M STEEL LEGEND" }, 213: { 135: "ASRock B560M STEEL LEGEND" }, 228: { 180: "GIGABYTE B560M AORUS PRO AX" }, 290: { 150: "ASUS TUF GAMING B550M-PLUS (Wi-Fi) AMD AM4 " }, 398: { 195: "ASRock X570 STEEL LEGEND AM4 AMD X570" }, 570: { 195: "ASRock X570 STEEL LEGEND AM4 AMD X570" }, 819: { 410: "Asus X570 ROG Crosshair VIII Hero Wi-Fi" } }
var storage_lst = [[27, "Silicon power A55 M.2 128gb ssd"], [32, "Silicon power A55 2.5 256 gb ssd"], [62, "Silicon Power 512GB NVMe M.2 2280"], [90, "Silicon Power A55 1tb SATA ssd"], [110, "Samsung 980 m.2 2280 1tb ssd"]]
var ram_lst = { 500: ["G.SKILL Ripjaws V Series 8GB (2 x 4GB) 288-Pin DDR4 SDRAM DDR4 3200 (PC4 25600) Desktop", 50], 800: ["XPG GAMMIX D20 Desktop Memory: 16GB (2x8GB) DDR4 3200MHz CL16 Black", 70], 1600: ["CORSAIR Vengeance LPX 32GB (2 x 16GB) 288-Pin DDR4 SDRAM DDR4 3600 ", 170], 2000: ["CORSAIR Vengeance LPX 64GB (2 x 32GB) 288-Pin DDR4 SDRAM DDR4 3200", 340] }
var minecraft_lst = { "cpu": 4, "gpu": 6, "storage": 1 };
var witcher3_lst = { "cpu": 4, "gpu": 8, "storage": 1 };
var csgo_lst = { "cpu": 4, "gpu": 4, "storage": 1 };
var overwatch_lst = { "cpu": 4, "gpu": 5, "storage": 1 };
var redering_lst = { "cpu": 6, "gpu": 4, "storage": 1 };
var editing_lst = { "cpu": 5, "gpu": 4, "storage": 1.5 }
var office_lst = {"cpu":6, "gpu":4,"storage": 2};
var game_d_list = {"cpu":4,"gpu":6,"storage": 1};
var count = 0
if (games == "Minecraft") {
  gamelst = minecraft_lst;
}
else if (games == "Overwatch") {
  gamelst = overwatch_lst
}
else if (games == "Witcher 3") {
  gamelst = witcher3_lst
}
else if (games == "CSGO") {
  gamelst = csgo_lst
}
else if (usecase == "Productivity") {
  gamelst = redering_lst
}
else if (usecase == "Gaming"){
  gamelst = game_d_list
}
else if (usecase == "Office-work"){
  gamelst = office_lst
}
var count = 0
for (var i in gamelst) {
  count = count + gamelst[i]
}

var extra = 0
psu_price = budget
for (i in psu_lst) {
  if ((parseInt(psu_price) > i)) {
    psu_budget = psu_lst[i][1]
    psu_budget2 = psu_lst[i][0]
  }
}

ram_price = budget
for (i in ram_lst) {
  if ((parseInt(ram_price) > i)) {
    ram_budget = ram_lst[i][1]
    ram_budget2 = ram_lst[i][0]
  }
}

var point = parseInt(budget - psu_budget - ram_budget) / count //psu price

storage_price = gamelst["storage"] * point
for (i in storage_lst) {
  if ((storage_price > storage_lst[parseInt(i)][0])) {
    storage_budget = storage_lst[i][0]
    storage_budget2 = storage_lst[i][1]
  }
}
extra = parseInt(storage_price) - storage_budget

cpu_price = (gamelst["cpu"] * point) + extra
console.log(cpu_price)
for (i in cpu_lst) {
    console.log((parseInt(Object.keys(cpu_lst[i]))+parseInt(Object.keys(mobo_lst[Object.keys(cpu_lst[i])]))))
  if ((cpu_price > (parseInt(Object.keys(cpu_lst[i]))+parseInt(Object.keys(mobo_lst[Object.keys(cpu_lst[i])]))))) {
    cpu_budget = Object.keys(cpu_lst[i])
    cpu_budget2 = Object.values(cpu_lst[i])
    console.log(cpu_budget2)
    temp = i
  }
}
extra = parseInt(cpu_price) - cpu_budget - Object.keys(mobo_lst[cpu_budget])
console.log(cpu_budget2)
gpu_price = (gamelst["gpu"] * point) + extra
console.log(gpu_price)
for (i in gpu_lst) {
  if ((gpu_price > gpu_lst[parseInt(i)][0])) {
    gpu_budget = gpu_lst[i][0]
    gpu_budget2 = gpu_lst[i][1]
  }
}
extra =parseInt(gpu_price) - gpu_budget
console.log(extra)
if (parseInt(Object.keys(cpu_lst[temp])) < 160) {
  cpu_price = (gamelst["cpu"] * point) + extra
  for (i in cpu_lst) {

    if ((cpu_price > Object.keys(cpu_lst[i]))) {
      cpu_budget = Object.keys(cpu_lst[i])
      cpu_budget2 = Object.values(cpu_lst[i])
    }
  }
}
temp2 = Object.values(cpu_lst[temp]).toString()
if ((temp2[(temp2.length) - 1] == "f" || temp2[0] == "R") && gpu_budget == 0) {
  cpu_price = (gamelst["cpu"] * point) + extra
  for (i in cpu_lst) {

    if ((cpu_price > Object.keys(cpu_lst[i]))) {
      cpu_budget = Object.keys(cpu_lst[i])
      cpu_budget2 = Object.values(cpu_lst[i])
      temp = i
    }
  }
  var count2 = 1
  while ((temp2[(temp2.length) - 1] == "f" || temp2[0] == "R") && gpu_budget == 0) {
    cpu_budget = Object.keys(cpu_lst[temp - count2])
    cpu_budget2 = Object.values(cpu_lst[temp - count2])
    temp2 = Object.values(cpu_lst[temp - count2]).toString()
    count2++
  }
}
var remainder = (budget-cpu_budget-gpu_budget-storage_budget-ram_budget-psu_budget-parseInt(Object.keys(mobo_lst[cpu_budget])))

base_table = document.createElement("table")
base_table.setAttribute("id","parent-li")
document.getElementById("parent-body").appendChild(base_table)

base_row = document.createElement("tr")
base_row.setAttribute("id","parent-row")
document.getElementById("parent-li").appendChild(base_row)

parent_row = document.getElementById("parent-row")
cpu_ta = document.createElement("th")
cpu_ta.innerText = "Processor"
parent_row.appendChild(cpu_ta) 

cpul_ta = document.createElement("td")
cpul_ta.innerText = cpu_budget2
parent_row.appendChild(cpul_ta) 

cpup_ta = document.createElement("td")
cpup_ta.innerText = "$"+cpu_budget
parent_row.appendChild(cpup_ta) 

base_row2 = document.createElement("tr")
base_row2.setAttribute("id","parent-row2")
document.getElementById("parent-li").appendChild(base_row2)

parent_row2 = document.getElementById("parent-row2")
gpul_ta2 = document.createElement("th")
gpul_ta2.innerText = "Graphics card"
parent_row2.appendChild(gpul_ta2) 

gpu_ta2 = document.createElement("td")
gpu_ta2.innerText = gpu_budget2
parent_row2.appendChild(gpu_ta2) 

gpup_ta2 = document.createElement("td")
gpup_ta2.innerText = "$"+gpu_budget
parent_row2.appendChild(gpup_ta2) 

base_row3 = document.createElement("tr")
base_row3.setAttribute("id","parent-row3")
document.getElementById("parent-li").appendChild(base_row3)

parent_row3 = document.getElementById("parent-row3")
storagel_ta3 = document.createElement("th")
storagel_ta3.innerText = "Storage"
parent_row3.appendChild(storagel_ta3) 

storage_ta3 = document.createElement("td")
storage_ta3.innerText = storage_budget2
parent_row3.appendChild(storage_ta3) 

storagep_ta3 = document.createElement("td")
storagep_ta3.innerText = "$"+storage_budget
parent_row3.appendChild(storagep_ta3) 

base_row4 = document.createElement("tr")
base_row4.setAttribute("id","parent-row4")
document.getElementById("parent-li").appendChild(base_row4)

parent_row4 = document.getElementById("parent-row4")
psul_ta4 = document.createElement("th")
psul_ta4.innerText = "Power Supply"
parent_row4.appendChild(psul_ta4) 

psu_ta4 = document.createElement("td")
psu_ta4.innerText = psu_budget2
parent_row4.appendChild(psu_ta4) 

psup_ta4 = document.createElement("td")
psup_ta4.innerText = "$"+psu_budget
parent_row4.appendChild(psup_ta4) 

base_row5 = document.createElement("tr")
base_row5.setAttribute("id","parent-row5")

document.getElementById("parent-li").appendChild(base_row5)

parent_row5 = document.getElementById("parent-row5")
mobol_ta5 = document.createElement("th")
mobol_ta5.setAttribute("id","mobo_label")
mobol_ta5.innerText = "Motherboard"
parent_row5.appendChild(mobol_ta5) 

mobo_ta5 = document.createElement("td")

mobo_ta5.innerText = Object.values(mobo_lst[cpu_budget])
parent_row5.appendChild(mobo_ta5) 

mobop_ta5 = document.createElement("td")
mobop_ta5.innerText = "$"+Object.keys(mobo_lst[cpu_budget])
parent_row5.appendChild(mobop_ta5) 

base_row6 = document.createElement("tr")
base_row6.setAttribute("id","parent-row6")
document.getElementById("parent-li").appendChild(base_row6)

parent_row6 = document.getElementById("parent-row6")
raml_ta6 = document.createElement("th")
raml_ta6.innerText = "Ram"
parent_row6.appendChild(raml_ta6) 

ram_ta6 = document.createElement("td")
ram_ta6.innerText = ram_budget2
parent_row6.appendChild(ram_ta6) 

ramp_ta6 = document.createElement("td")
ramp_ta6.innerText = "$"+ram_budget
parent_row6.appendChild(ramp_ta6) 

base_row7 = document.createElement("tr")
base_row7.setAttribute("id","parent-row7")
document.getElementById("parent-li").appendChild(base_row7)

parent_row7 = document.getElementById("parent-row7")
remainl_ta7 = document.createElement("th")
remainl_ta7.innerText = "Remainder"
parent_row7.appendChild(remainl_ta7) 

remain_ta7 = document.createElement("td")
remain_ta7.innerText = "Total cost: " + "$" + (budget - remainder)
parent_row7.appendChild(remain_ta7) 

remainp_ta7 = document.createElement("td")
remainp_ta7.innerText = "$"+remainder
parent_row7.appendChild(remainp_ta7) 
}
else{
   error =  document.createElement("h1")
   error.setAttribute("style","text-align: center;margin-right: auto;margin-left:;display:block;margin-top: 13%;color: white")
   error.innerText = "Pls enter your budget"
   button = document.createElement("button")
   button.setAttribute("onclick","location.href='partselector.html'")
   button.setAttribute("style","text-align: center;margin-right: auto;margin-left: auto;display:block;width: 10%;height: 30px")
   error.innerHTML = "Pls enter your budget <br> budget should be lower than 6000 <br> and higher than 600"
   document.getElementById("parent-body").appendChild(error)
   document.getElementById("parent-body").appendChild(button)
}