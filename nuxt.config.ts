// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr:true,
  modules: [],
  supabase: {
    url:process.env.SUPABASE_URL,
    key:process.env.SUPABASE_KEY,
    redirect:false
    // Options
  }
})