<template>
  <label for="dropzone-file" class="mx-5 flex flex-col items-center justify-center w-100 h-48 border-2 border-sky-500 border-dashed rounded-xl bg-sky-950 mt-5">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <img src="/icons/cloud.svg" className="dark:invert" width="50">
      <p class="mb-2 text-sm text-white">Drag and Drop file here or choose file</p>
    </div>
    <input id="dropzone-file" type="file" class="hidden" />
  </label>
</template>