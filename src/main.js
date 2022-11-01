import "./styles.css";
import JSAlert from "js-alert";
import { createClient } from "@supabase/supabase-js";

import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

const supabase = createClient(process.env.URL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzZmNxb2RtdWNhZ3J4b2hta2d4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MDkyNjk0OSwiZXhwIjoxOTc2NTAyOTQ5fQ.8PZmvfHrTPVNheNjYHyJJS2jZC5EjCIlOkQK3t2Tvwc');import 'js-loading-overlay';

var overlayobj={
  'overlayBackgroundColor': '#FFFFFF',
  'overlayOpacity': 1,
  'spinnerIcon': 'ball-atom',
  'spinnerColor': '#000',
  'spinnerSize': '2x',
  'overlayIDName': 'overlay',
  'spinnerIDName': 'spinner',
}
JsLoadingOverlay.show(overlayobj);
setTimeout(function(){
 JsLoadingOverlay.hide();
}, 2000)

async function logout() {
  await supabase.auth.signOut();
  window.location.replace("index.html");
}

if (supabase.auth.user()) {
  for (var ex in process.env.ADMINS.split(",")) {
    if (supabase.auth.user().email == process.env.ADMINS.split(",")[ex]) {
      document.getElementById("admin").classList.remove("hidden");
      break;
    } else {
      document.getElementById("admin").classList.add("hidden");
      JsLoadingOverlay.hide()

    }
  }
  document.getElementById("formie").classList.remove("hidden");
  document.getElementById("notlogged").classList.add("hidden");
} else {
  JsLoadingOverlay.hide()

  document.getElementById("formie").classList.add("hidden");
  document.getElementById("notlogged").classList.remove("hidden");
}

function accessAdmin() {
  if (document.getElementById("admin").classList.contains("hidden")) {
    JSAlert.alert(
      "You have not been granted admin access",
      null,
      JSAlert.Icons.Failed
    );
  } else {
    window.location.href = "admin.html";
  }
}




function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

window.openNav = openNav;
window.closeNav = closeNav;

window.logout = logout;
window.accessAdmin = accessAdmin;
