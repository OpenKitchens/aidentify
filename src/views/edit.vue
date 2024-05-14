<script setup>
import logo from "../components/logo.vue"
import uploadimage from "../components/uploadimage.vue"
import uploadcamera from "../components/uploadcamera.vue"

</script>

<template>
  <div>
    <div class="position fixed" style="transform: translateY(-50%); top: 45%;">
      <img src="https://www.nishinippon.co.jp/uploads/image/1646311/large_IP240322JIJ000001000.jpg" class="w-screen">
    </div>

    <div class="h-dvh position">
      <div class="bg-gradient-to-b from-black via-black/70 h-64 fixed w-screen">
        <div class="flex">
          <logo class="m-5 mr-auto" />
          <button className="m-5 dark:invert">
            <img src="/icons/settings.svg" width="25">
          </button>
        </div>
      </div>

      <div class="bg-gradient-to-t from-black via-black/70 h-80 fixed w-screen bottom-0">

        <div class="mt-8">
          <h1 class="text-white text-lg ml-5 font-bold">編集</h1>
          <h1 class="text-white text-sm ml-5 mt-5">匿名レベル ・ Low</h1>
          <div class="mx-5 mt-3 flex">
            <input type="range" id="level" name="level" min="0" max="100" value="0" class="slider mr-5">

            <button class="flex bg-white/40 rounded-full px-3 py-3 border-r-2 border-black hover:bg-white/50" width="48"
              height="48">
              <img src="/icons/hamburger.svg" class="dark:invert" width="22" height="22">
            </button>
          </div>

          <div class="flex mt-5">
            <div class="flex ml-5">
              <button class="flex bg-violet-600 hover:bg-violet-500 rounded-l-full px-4 py-3 border-r-2 border-black">
                <img src="/icons/magic.svg" class="dark:invert" width="20">
                <p class="text-sm text-white ml-2 font-bold">Magicで変換</p>
              </button>

              <button class="flex bg-violet-600 hover:bg-violet-500 rounded-r-full pl-3 pr-4 py-3">
                <img src="/icons/share.svg" class="dark:invert" width="20">
              </button>
            </div>

            <div class="flex ml-10">
              <button class="flex bg-white/30 rounded-full px-4 py-3 border-r-2 border-black hover:bg-white/50"
                width="48" height="48">
                <img src="/icons/camera.svg" class="dark:invert mx-auto my-auto" widht="30">
                <p class="text-sm text-white ml-2 font-bold">Retake</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: calc(100vw - 2.5rem);
  height: 40px;
  background: #ffffff5d;
  outline: none;
  opacity: 0.9;
  -webkit-transition: .2s;
  transition: opacity .2s;
  border-radius: 50px;
  padding-right: 10px;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  background: #ffffff5d;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
}

.slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  background: #888;
  cursor: pointer;
  border-radius: 50%;
  margin-left: 5px;
  margin-right: 5px;
}

.max-label {
  color: red;
  font-weight: bold;
}
</style>