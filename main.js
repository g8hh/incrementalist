//vars
var user = setUser();
var brokenUser = setUser();
/*var obj = setUser();*/
var setting = false;
var freeze = false;
var focused = false;
var clickrate = 0;
const settingids = ["sdisplay", "spb"];
const currencyids = ["ip", "pp", "ap", "tp", "dp", "gp"];
const currencynames = ["Increment", "Prestige", "Ascension", "Transcension", "Divinity", "WIP"];
const tabs = ["auto", "scale", "sac", "ach", "ip", "pp", "ap", "tp", "dp", "gp"];
const goals = {
  ip: [100, 2000, 2000, 2000, 10000, 25000, 100000, 100000, 500000, 2e6, 1e7, 1e8, 1e9, 2e10, 1e12, 1e13, 1e15, 1e19, 1e23, 1e27, 1e29],
}
const unlocks = {
  /*: [100    , 2000      , 2000            , 2000   , 10000  , 25000           , 100000     , 100000,    , 500000 , 2e6    , 1e7    , 1e8    , 1e9                  , 2e10   , 1e12            , 1e13       , 1e15   , 1e19   , 1e23     , 1e27*/
  ip: ["incp2", "btabauto", "automationincx", "ipsec", "incp3", "automationincp", "btabscale", "scaleincp", "incp4", "incp5", "incm1", "incm2", "automationscaleincp", "incm3", "automationincm", "scaleincm", "incm4", "incm5", "btabsac", "automationscaleincm"],
}
const unlocknames = {
  ip: ["Increment", "Automation", "Automation", "Automation", "Increment", "Automation", "Scaling", "Scaling", "Increment", "Increment", "Increment", "Increment", "Automation", "Increment", "Automation", "Scaling", "Increment", "Increment", "Sacrifice", "Automation", "SoftLimit"],
}

//do not change
var updaterate = 24; //Display updates per second
const tickrate = 24; //Calculated ticks per second
if (updaterate > tickrate) {updaterate = tickrate}

//global functions
function automation(tab, con, type) {
  if (tab == 'scale') {
    if (con == 'inc') {
      if (type == 'p' && user.ip.x.gte(1e9) && !user.automation.scale.inc.p) {
        user.ip.x = user.ip.x.minus(1e9);
        user.automation.scale.inc.p = true;
        updateip();
        updateautomation();
        unlockautomate("ip");
        return;
      }
      if (type == 'm' && user.ip.x.gte(1e26) && !user.automation.scale.inc.m) {
        user.ip.x = user.ip.x.minus(1e26);
        user.automation.scale.inc.m = true;
        updateip();
        updateautomation();
        unlockautomate("ip");
        return;
      }
      if (type == 'e' && user.ip.x.gte(1e100) && !user.automation.scale.inc.e) {
        user.ip.x = user.ip.x.minus(1e100);
        user.automation.scale.inc.e = true;
        updateip();
        updateautomation();
        unlockautomate("ip");
        return;
      }
    }
  }
  if (tab == 'inc') {
    if (type == 'x' && user.ip.x.gte(2000) && !user.automation.inc.x) {
      user.ip.x = user.ip.x.minus(2000);
      user.automation.inc.x = true;
      updateip();
      updateautomation();
      unlockautomate("ip");
      return;
    }
    if (type == 'p' && user.ip.x.gte(25000) && !user.automation.inc.p) {
      user.ip.x = user.ip.x.minus(25000);
      user.automation.inc.p = true;
      updateip();
      updateautomation();
      unlockautomate("ip");
      return;
    }
    if (type == 'm' && user.ip.x.gte(1e12) && !user.automation.inc.m) {
      user.ip.x = user.ip.x.minus(1e12);
      user.automation.inc.m = true;
      updateip();
      updateautomation();
      unlockautomate("ip");
      return;
    }
    if (type == 'e' && user.ip.x.gte(1e100) && !user.automation.inc.e) {
      uesr.ip.x = user.ip.x.minus(1e100);
      user.automation.inc.e = true;
      updateip();
      updateautomation();
      unlockautomate("ip");
      return;
    }
  }
}

//unlocks
function unlocking() {
  unlockip();
}
function unlockip() {
  let sac = user.ip.sac;
  let kpp = user.ip.pp;
  let tot = user.ip.total;
  if (sac.gte(100)) {s("incp2")} else {h("incp2")}
  if (sac.gte(2000)) {s("automationincx"); s("ipsec")} else {h("automationincx"); h("ipsec")}
  if (tot.gte(2000)) {s("btabauto")} else {h("btabauto")}
  if (sac.gte(10000)) {s("incp3")} else {h("incp3")}
  if (sac.gte(25000)) {s("automationincp")} else {h("automationincp")}
  if (sac.gte(100000)) {s("scaleincp")} else {h("scaleincp")}
  if (tot.gte(100000)) {s("btabscale")} else {h("btabscale")}
  if (sac.gte(500000)) {s("incp4")} else {h("incp4")}
  if (sac.gte(2e6)) {s("incp5")} else {h("incp5")}
  if (sac.gte(1e7)) {s("incm1")} else {h("incm1")}
  if (sac.gte(1e8)) {s("incm2")} else {h("incm2")}
  if (sac.gte(1e9)) {s("automationscaleincp")} else {h("automationscaleincp")}
  if (sac.gte(2e10)) {s("incm3")} else {h("incm3")}
  if (sac.gte(1e12)) {s("automationincm")} else {h("automationincm")}
  if (sac.gte(1e13)) {s("scaleincm")} else {h("scaleincm")}
  if (sac.gte(1e15)) {s("incm4")} else {h("incm4")}
  if (sac.gte(1e19)) {s("incm5")} else {h("incm5")}
  if (kpp.gte(1e23)) {s("sacip")} else {h("sacip")}
  if (tot.gte(1e23)) {s("btabsac")} else {h("btabsac")}
  if (sac.gte(1e27)) {s("automationscaleincm")} else {h("automationscaleincm")}
  h("automationscaleince");
  unlockautomate("ip");
}
function unlockautomate(layer) {
  if (layer == "ip") {
    let sac = user.ip.sac;
    if (user.automation.inc.x) {s("automateincx")}
    else {h("automateincx")}
    if (user.automation.inc.p) {
      s("automateincp1");
      if (sac.gte(100)) {s("automateincp2")} else {h("automateincp2")}
      if (sac.gte(10000)) {s("automateincp3")} else {h("automateincp3")}
      if (sac.gte(500000)) {s("automateincp4")} else {h("automateincp4")}
      if (sac.gte(2e6)) {s("automateincp5")} else {h("automateincp5")}
    }
    else {for (let i = 1; i <= 5; i++) {h("automateincp" + i)}}
    if (user.automation.inc.m) {
      if (sac.gte(1e7)) {s("automateincm1")} else {h("automateincm1")}
      if (sac.gte(1e8)) {s("automateincm2")} else {h("automateincm2")}
      if (sac.gte(2e10)) {s("automateincm3")} else {h("automateincm3")}
      if (sac.gte(1e15)) {s("automateincm4")} else {h("automateincm4")}
      if (sac.gte(1e19)) {s("automateincm5")} else {h("automateincm5")}
    }
    else {for (let i = 1; i <= 5; i++) {h("automateincm" + i)}} 
    if (user.automation.inc.e) {}
    else {for (let i = 1; i <= 5; i++) {h("automateince" + i)}} 
    if (user.automation.scale.inc.p) {s("automationscaleincp"); if (sac.gte(1e9)) {s("automatescaleincp")} else {h("automatescaleincp")}} else {h("automatescaleincp")}
    if (user.automation.scale.inc.m) {s("automationscaleincm"); if (sac.gte(1e27)) {s("automatescaleincm")} else {h("automatescaleincm")}} else {h("automatescaleincm")}
    if (user.automation.scale.inc.e) {s("automationscaleince"); s("automatescaleince")} else {h("automatescaleince")}
  }
}

//settings / debug
function settings() {
  setting = !setting;
  if (setting) {h("screen"); s("settings"); d("bsettings").textContent = "X"}
  else {s("screen"); h("settings"); d("bsettings").innerHTML = "&#9881"}
}
function exporty() {
  if (brokenCheck()) {cb(btoa(JSON.stringify(brokenUser)))}
  else {cb(btoa(JSON.stringify(user)))}
}
function importy() {let data = JSON.parse(atob(prompt("Paste your save code here"))); if (data != null) {loadData(data)}}
function confirmReset() {
  if (true) {
    let confirmed = confirm("Are you sure you want to reset? You will lose all of your progress!");
    if (confirmed) {reset()}
  }
  else {reset()}
}
function reset() {
  console.log("Game reset");
  localStorage.clear();
  user = setUser();
  brokenUser = setUser();
  user.time = Date.now();
  tab("ip");
  updates();
  unlocking();
  save();
  brokenCheck();
  if (setting) {settings()}
  d("loading").style.opacity = 0;
  d("game").style.opacity = 1;
  setTimeout(() => {h("loading")}, 750);
}
function shortendisplay() {
  user.active.shortendisplay = !user.active.shortendisplay;
  updatesetting("sdisplay");
}
function progressbar() {
  user.active.progressbar = !user.active.progressbar;
  updatesetting("spb");
}

function progress() {
  /*user.ip.x = user.ip.x.plus(1e30);
  user.ip.sac = user.ip.sac.plus(1e30);
  user.ip.pp = user.ip.pp.plus(1e30);
  user.ip.total = user.ip.total.plus(1e30);
  updates();
  unlocking();*/
}

//event listeners
var hidden, visibilitychange;
if (typeof document.hidden !== "undefined") {hidden = "hidden"; visibilitychange = "visibilitychange"}
else if (typeof document.msHidden !== "undefined") {hidden = "msHidden"; visibilitychange = "msvisibilitychange"}
else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden"; visibilitychange = "webkitvisibilitychange"}
del(document[hidden], () => {if (document[hidden]) {focused = false; s("display")} else {focused = true; h("display"); loadOffline()}});
wel("blur", () => {focused = false; s("display")});
wel("focus", () => {focused = true; h("display"); loadOffline()});

//run on page load
brokenCheck();
load();
updater();
tab("ip");
h("settings");
d("loading").style.opacity = 0;
d("game").style.opacity = 1;
setTimeout(() => {h("loading")}, 750);
