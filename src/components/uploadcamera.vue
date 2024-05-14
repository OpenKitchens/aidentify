<template>
  <label for="dropzone-file" class="mx-5 flex flex-col w-100 h-30 rounded-xl bg-zinc-800 mt-5">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <img src="/icons/camera.svg" className="dark:invert" width="50">
      <p class="mb-2 text-sm text-white">Take Photo</p>
    </div>
    <input id="dropzone-file" type="file" name="image" accept="image/*" capture="camera" class="hidden">
  </label>
</template>