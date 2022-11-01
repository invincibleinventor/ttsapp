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


if(admin){
    
}