import "./styles.css";

import { createClient } from "@supabase/supabase-js";
import aes from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8'
const supabase = createClient(process.env.URL, aes.decrypt(process.env.ANON, `nUkRD8q(u<[YO7'W{*=_sPeca1G_wmfb*U#nof>QL4H$:@a(cqx"yijy#>I)_9e`).toString(Utf8));

async function logout() {
  const { error } = await supabase.auth.signOut();
}

if (supabase.auth.user()) {
  window.location.replace("main.html");
} else {
}

async function signin() {
  const { user, response, error } = await supabase.auth.signIn({
    email: document.getElementById("id").value,
    password: document.getElementById("pass").value,
  });
  if (user) {
    window.location.replace("main.html");
    window.localStorage.setItem("email", document.getElementById("id").value);
  } else {
    console.log(error);
  }
}

window.signin = signin;
