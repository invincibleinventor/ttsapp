import JSAlert from "js-alert";
import "./styles.css";
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
JsLoadingOverlay.show(overlayobj);

import { createClient } from "@supabase/supabase-js";
import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
const supabase = createClient(process.env.URL, aes.decrypt(process.env.ANON, `nUkRD8q(u<[YO7'W{*=_sPeca1G_wmfb*U#nof>QL4H$:@a(cqx"yijy#>I)_9e`).toString(Utf8));

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




if (supabase.auth.user()) {
  async function fetchdata() {
    const { data, error } = await supabase.from("Forms").select();
    JsLoadingOverlay.hide();
    var br = data;

    for (var sh = 0; sh <= br.length - 1; sh++) {
      console.log(br[sh].Table)
      document
        .getElementById("formlist")
        .insertAdjacentHTML(
          "beforeend",
          `<a href="form.html?id=${br[sh].id}&table=${br[sh].Table}" class="px-6 py-2   w-full rounded-t-lg font-inter text-sm md:text-md flex flex-row content-center items-center "><span class="iconify mr-2 inline-flex my-auto items-center content-center" data-icon="ep:document"></span><span class="my-auto items-center content-center inline-flex">${br[sh].title}</span><span class="iconify ml-auto  inline-flex my-auto items-center content-center lg:hidden" data-icon="ep:arrow-right"></span></a>`
        );
    }
  }

  fetchdata();
}

function accessAdmin() {
  if (document.getElementById("admin").classList.contains("hidden")) {
    JSAlert.alert(
      "<code>Error:- You have not been granted Admin access</code>",
      null,
      JSAlert.Icons.Failed
    );
  } else {
    window.location.href = "admin.html";
  }
}

function logout() {
  supabase.auth.signOut();

  window.location.href = "index.html";
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
