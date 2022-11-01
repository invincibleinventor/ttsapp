// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
// @ts-ignore
import { serve } from "https://deno.land/std@0.131.0/http/server.ts"
import { supabaseClient } from "https://deno.land/x/supabase_deno/mod.ts";



console.log("Hello from Functions!")

serve(async (req) => {
  const params = req.url.split("?");

  const { name } = await req.json()
  const data = {
    message: `Hello ${name}!`,
  }
  const url = params[0];
  const search_params = new URLSearchParams(params[1]);


  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})

// To invoke:
// curl -i --location --request POST 'http://localhost:54321/functions/v1/' \
//   --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24ifQ.625_WdcF3KHqz5amU0x2X5WWHP-OEs_4qj0ssLNHzTs' \
//   --header 'Content-Type: application/json' \
//   --data '{"name":"Functions"}'
