<script setup>
import logo from "../components/logo.vue"
import uploadimage from "../components/uploadimage.vue"
import uploadcamera from "../components/uploadcamera.vue"

</script>

<template>
  <div class="h-dvh mx-auto">
    <div class="flex">
      <logo class="m-5 mr-auto" />
      <button className="m-5 dark:invert">
        <img src="/icons/settings.svg" width="25">
      </button>
    </div>

    <section class="mt-12">
      <h1 class="text-white text-lg ml-5">画像をアップロード</h1>
      <uploadimage />
    </section>

    <section class="mt-10">
      <h1 class="text-white text-lg ml-5">または写真を撮る</h1>
      <uploadcamera />
    </section>

  </div>
</template>