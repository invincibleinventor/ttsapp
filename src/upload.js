import { createClient } from "@supabase/supabase-js";
import "./styles.css";
import JSAlert from "js-alert";

import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'

const supabase = createClient(process.env.URL, aes.decrypt(process.env.ANON, `nUkRD8q(u<[YO7'W{*=_sPeca1G_wmfb*U#nof>QL4H$:@a(cqx"yijy#>I)_9e`).toString(Utf8));
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

JsLoadingOverlay.show(overlayobj);


async function fetchdata(){
  const { data, error } = await supabase.from("Forms").select();
  JsLoadingOverlay.hide();

  var br = data;

  for (var sh = 0; sh <= br.length - 1; sh++) {
    var a=document.createElement('option');

    a.value=br[sh].Table;
    a.innerHTML=br[sh].Table;
    document.getElementById('folder').appendChild(a)
  }
}

fetchdata()



async function logout() {
  await supabase.auth.signOut();
  window.location.replace("index.html");
}
console.log(supabase.auth.user());

if (supabase.auth.user()) {
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
      "Error:- You have not been granted Admin access",
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

var files = [];
document.getElementById("files").addEventListener("change", function (e) {
  files = e.target.files;
});

document.getElementById("send").addEventListener("click", async function () {
  JsLoadingOverlay.show(overlayobj);

  if (files.length>0) {
    for (let i = 0; i < files.length; i++) {
      const { data, error } = await supabase.storage
        .from("forms")
        .upload(
          document.getElementById("level").value +
            "/" +
            document.getElementById("folder").value +
            "/" +
            files[i].name,
          files[i],
          {
            cacheControl: "3600",
            upsert: true,
          }
        );
async function todata(){
        const { publicURL, error } = supabase.storage
          .from('forms')
          .getPublicUrl(document.getElementById("level").value +
          "/" +
          document.getElementById("folder").value +
          "/" +
          files[i].name)

          var obj={
            url: publicURL,
            caption: document.getElementById('caption').value,
            path:document.getElementById("level").value +"/" +document.getElementById("folder").value +"/" +files[i].name,
            filename:files[i].name
          }
          supabase
      .from("Uploads")
      .insert(obj)
      .then(() => {
        JsLoadingOverlay.hide();
        JSAlert.alert(
          "File Uploaded Successfully",
          null,
          JSAlert.Icons.Success
        );
      })

.catch((error)=>{
  JsLoadingOverlay.hide();

  JSAlert.alert(
    error,
    "Upload Failed",
    JSAlert.Icons.Failed
  );
  })


}
todata()

}
  }
  else{
    JsLoadingOverlay.hide();

    JSAlert.alert(
      "Choose a File First",
      null,
      JSAlert.Icons.Failed
    );
  }
});

window.openNav = openNav;
window.closeNav = closeNav;

window.logout = logout;
window.accessAdmin = accessAdmin;
