import "./styles.css";
import { ExportToCsv } from "export-to-csv";
import JSAlert from "js-alert";

import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

const supabase = createClient(process.env.URL, aes.decrypt(process.env.ANON, `nUkRD8q(u<[YO7'W{*=_sPeca1G_wmfb*U#nof>QL4H$:@a(cqx"yijy#>I)_9e`).toString(Utf8));
import { createClient } from "@supabase/supabase-js";

import 'js-loading-overlay';

var overlayobj={
  'overlayBackgroundColor': '#FFFFFF',
  'overlayOpacity': 1,
  'spinnerIcon': 'ball-atom',
  'spinnerColor': '#000',
  'spinnerSize': '2x',
  'overlayIDName': 'overlay',
  'spinnerIDName': 'spinner',
}


var adminobj={
  'overlayBackgroundColor': '#FFFFFF',
  'overlayOpacity': 1,
  'spinnerIcon': 'ball-atom',
  'spinnerColor': '#000',
  'spinnerSize': '2x',
  "containerID": "tcont",

  'overlayIDName': 'overlay',
  'spinnerIDName': 'spinner',
}
JsLoadingOverlay.show(overlayobj);

var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var id = queries[0].slice(queries[0].indexOf("=") + 1);
var table = queries[1].slice(queries[1].indexOf("=") + 1);

async function logout() {
  await supabase.auth.signOut();
  window.location.replace("index.html");
}
var admin;
if (supabase.auth.user()) {
  for (var ex in process.env.ADMINS.split(",")) {
    if (supabase.auth.user().email == process.env.ADMINS.split(",")[ex]) {
      document.getElementById("admin").classList.remove("hidden");
      admin = true;
      break;
    } else {
      document.getElementById("admin").classList.add("hidden");
      window.location.replace("main.html");
      admin=false
    }
  }

  document.getElementById("formie").classList.remove("hidden");
  document.getElementById("notlogged").classList.add("hidden");
} else {
  admin=false
  document.getElementById("admin").classList.add("hidden");

  JsLoadingOverlay.hide()
var alert = new JSAlert("You are not logged in as Admin",null, JSAlert.Icons.Success);
alert.addButton("Go Back").then(function() {
  window.location.href='index.html';
});
alert.show()
  document.getElementById("formie").classList.add("hidden");
  document.getElementById("notlogged").classList.remove("hidden");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

if (admin) {
  async function settitle() {
    const { data, error } = await supabase.from("Forms").select();
    JsLoadingOverlay.hide()
    var ar = data;
    document.getElementById("htitle").innerHTML = ar[id - 1].title;
  }
  async function fetchdata() {
    JsLoadingOverlay.show(adminobj);
    const { data, error } = await supabase.from(table).select();
    JsLoadingOverlay.hide()
    var br = data;
    convertJsontoHtmlTable(br);
  }

  function convertJsontoHtmlTable(employess) {
   
    var tablecolumns = [];
    for (var i = 0; i < employess.length; i++) {
      for (var key in employess[i]) {
        if (tablecolumns.indexOf(key) === -1) {
          tablecolumns.push(key);
        }
      }
    }
    var a=tablecolumns.length
    var place = tablecolumns[a-1]
    var latest=tablecolumns
    latest.pop()
    latest.reverse()
    latest.push(place)
    latest.reverse()
    tablecolumns=latest
    var te = document.createElement("table");
    var thead = document.createElement("thead");
    te.appendChild(thead);
    te.classList.add("table");
    te.classList.add("table-striped");
    te.classList.add("table-bordered");
    te.classList.add("table-hover");

   
    var trh = document.createElement("tr");

    for (var i = 0; i < tablecolumns.length; i++) {
      var th = document.createElement("th");
      th.innerHTML = tablecolumns[i];
      trh.appendChild(th);
    }

    thead.appendChild(trh);

    var tbody = document.createElement("tbody");

    var trb = document.createElement("tr");
    for (var i = 0; i < employess.length; i++) {
      trb = te.insertRow(-1);
      for (var j = 0; j < tablecolumns.length; j++) {
        var tabCell = trb.insertCell(-1);
        tabCell.innerHTML = employess[i][tablecolumns[j]];
      }
    }

    tbody.appendChild(trb);
    te.appendChild(tbody);
    var ed = document.getElementById("tcont");
    ed.innerHTML = "";
    ed.appendChild(te);
  }
  settitle();
  fetchdata();
}

async function downloaddata() {
  const { data, error } = await supabase.from(table).select();
  const options = {
    fieldSeparator: ",",
    quoteStrings: '"',
    decimalSeparator: ".",
    showLabels: true,
    showTitle: false,
    filename: document.getElementById("htitle").innerText,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };
  const csvExporter = new ExportToCsv(options);

  csvExporter.generateCsv(data);
}

window.openNav = openNav;
window.closeNav = closeNav;

window.logout = logout;
window.downloaddata = downloaddata;
