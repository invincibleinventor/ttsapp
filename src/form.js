import 'js-loading-overlay'
var overlayobj={
  'overlayBackgroundColor': '#FFFFFF',
  'overlayOpacity': 1,
  'spinnerIcon': 'ball-atom',
  'spinnerColor': '#000',
  'spinnerSize': '2x',
  'overlayIDName': 'overlay',
  'spinnerIDName': 'spinner',
}
JsLoadingOverlay.show(overlayobj)
import { Account, Query, Databases, Client } from "appwrite";
const client = new Client();
import "./styles.css";
import JSAlert from "js-alert";

import { createClient } from "@supabase/supabase-js";



window.onload=JsLoadingOverlay.hide();

import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
const supabase = createClient(process.env.URL, aes.decrypt(process.env.ANON, `nUkRD8q(u<[YO7'W{*=_sPeca1G_wmfb*U#nof>QL4H$:@a(cqx"yijy#>I)_9e`).toString(Utf8));
if (supabase.auth.user()) {
  document.getElementById("formie").classList.remove("hidden");
  document.getElementById("notlogged").classList.add("hidden");
} else {
  document.getElementById("formie").classList.add("hidden");
  document.getElementById("notlogged").classList.remove("hidden");
  JsLoadingOverlay.hide()

  document.getElementById("lex").innerHTML = "Not Logged In";
  document.getElementById("leximage").classList.add('hidden');
  
}

var arr = [];

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var id = queries[0].slice(queries[0].indexOf("=") + 1);
var table = queries[1].slice(queries[1].indexOf("=") + 1);
console.log(table)

function addDate(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <input type="date" id="${c}" autocomplete="given-name" class=" focus:ring-blue-500  focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-neutral-200 py-2 px-3 outline-none">
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function toUpper(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

function addVal(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <input type="text" id="${c}" autocomplete="given-name" class=" focus:ring-blue-500  focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-neutral-200 py-2 px-3 outline-none">
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function addLvl(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <select for="${c}" id=${c}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  </select>
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function addCom(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <select for="${c}" id=${c}>
  <option value="invitation">Invitation</option>
  <option value="reg">Registration</option>
  <option value="Recep">Reception</option>
  <option value="Finance">Finance</option>
  <option value="Programme">Programme</option>
  <option value="Day of Event">Day of the event</option>
  <option value="Display">Display</option>
  <option value="Ad">Advertisement</option>
  <option value="Articles">Articles</option>
  <option value="Public Relations">Public Relations</option>
  <option value="Security">Security</option>
  <option value="Accomodation">Accomodation</option>
  <option value="Volunteers">Volunteers</option>
  <option value="Seating">Seating Arrangement</option>
  <option value="Catering">Catering</option>
  <option value="AV">AV</option>
  <option value="Maintanance">Maintanance</option>
  <option value="Compering">Compering</option>




  </select>
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function addClass(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <select for="${c}" id=${c}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  </select>
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function addSec(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <select for="${c}" id=${c}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
  <option value="D">D</option>
  <option value="E">E</option>
  <option value="F">F</option>
  <option value="G">G</option>
  <option value="H">H</option>
  <option value="I">I</option>
  </select>
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

function addMonth(c) {
  var cb = toUpper(c.replaceAll("_", " "));
  var a = `<div class="col-span-6 sm:col-span-3 w-auto py-2 ">
  <label for="${c}" class="block text-sm font-medium text-gray-700 pt-4 mb-1">${cb}</label>
  <select for="${c}" id=${c}>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
  </select>
</div>`;
  document.getElementById("elelist").insertAdjacentHTML("afterbegin", a);
  arr.push(c);
}

async function sr() {
  JsLoadingOverlay.show(overlayobj);

  const { data, error } = await supabase.from("Forms").select();
  JsLoadingOverlay.hide();

  
if(typeof data[id-1] !== 'undefined' && data[id-1].hasOwnProperty('title')){
  document.getElementById("title").innerHTML = data[id-1].title;
  document.getElementById("description").innerHTML = data[id-1].description;
}
else{
  document.getElementById('formie').classList.add('hidden')
  document.getElementById('notlogged').classList.add('hidden')
  var alert = new JSAlert("The form you tried to access does not exist",null, JSAlert.Icons.Failed);

  alert.addButton("Go Back").then(function() {
    window.location.href='forms.html';
});
alert.show()
}
   
}
sr();

function onsubmitted() {
  document.getElementById("formie").classList.add("hidden");
  document.getElementById("notlogged").classList.remove("hidden");
  document.getElementById("lex").innerHTML = "Already Submitted";
  document.getElementById("leximage").classList.remove('hidden')
}
async function getfields(){
  var brr=[];
  

  let { data, error } = await supabase
  .rpc('xdesc', {t:table})
  JsLoadingOverlay.hide();

  
  if(error) console.log(error)
  
  
  for (let noice in data){
    brr.push(data[noice].column_name)
  }
  
  
  brr.reverse();
  console.log(brr)
  console.log('above')
  return brr;

}


async function fetchdata() {
  JsLoadingOverlay.show(overlayobj);

  const { data, error } = await supabase.from(table).select();

  for (let i in data) {
    if (data[i].uid == window.localStorage.getItem("email")) {
      onsubmitted();
    }
  }

var brr=await getfields()



// console.log(brr)
  
  for (let i in brr) {
    let c = brr[i];
    switch (c) {
      case "uid":
        break;
      case "level":
        addLvl(c);
        break;
      case "month":
        addMonth(c);
        break;
      case "class":
        addClass(c);
        break;
      case "section":
        addSec(c);
        break;
      case "date":
        addDate(c)
        break;
      case "commitee":
        addCom(c)
        break;
      default:
        addVal(c);
    }
  }

  async function pushdata() {
    const { data, error } = await supabase.from(table).select();
    var obj = {
      uid: window.localStorage.getItem("email"),
    };

    var brr=await getfields()
    
    brr.reverse();
    console.log(brr)
    var failed;
    for (let i in brr) {
      if(brr[i]!='uid'){
      if(document.getElementById(brr[i]).value!=''){
      obj[brr[i]] = document.getElementById(brr[i]).value
      console.log(      obj[brr[i]]     )
      failed=0
      }
      else{
        JSAlert.alert('All Fields are required',null, JSAlert.Icons.Failed)
        failed=1
        break;
      }}
    }

if(failed==0){
  JsLoadingOverlay.show(overlayobj);
console.log(obj);
    supabase
      .from(table)
      .insert(obj)
      .then((d) => {
        JsLoadingOverlay.hide();
        document.getElementById("formie").classList.add("hidden");
      document.getElementById("notlogged").classList.remove("hidden");
      document.getElementById("lex").innerHTML = "Submitted Successfully";
      document.getElementById("leximage").classList.remove('hidden');
      var alert = new JSAlert("Your data has been submitted to our server. Only those with admin access can view it",null, JSAlert.Icons.Success);

      alert.addButton("Go Back").then(function() {
        window.location.href='forms.html';
    });
    alert.show()
      })
      .catch((e)=>{
        JSAlert.alert(e,null,JSAlert.Icons.Failed)
      })
    }
  }
  document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();
    pushdata();

    return false;
  });

  return false;
}

fetchdata();

window.addDate = addDate;
window.addVal = addVal;
