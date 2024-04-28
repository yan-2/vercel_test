
<template>
  <pre>{{info}}</pre>
</template>
<script setup lang="ts">
const client = useSupabaseClient()

const { data: info } = await useAsyncData('info', async () => {
  const { data } = await client.from('personalinfo').select('*')
  return data
})
</script>