<template>
  <label for="dropzone-file"
    class="mx-5 flex flex-col items-center justify-center w-100 h-48 border-2 border-sky-500 border-dashed rounded-xl bg-sky-950 mt-5">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <img src="/icons/cloud.svg" className="dark:invert" width="50">
      <p class="mb-2 text-sm text-white">Drag and Drop file here or choose file</p>
    </div>
    <input id="dropzone-file" type="file" class="hidden" @change="onFileChange" />
  </label>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const file = ref(null);

const router = useRouter()

function onFileChange(event) {
  file.value = event.target.files[0];
  uploadFile()
}

async function uploadFile() {
  if (!file.value) {
    alert('ファイルを選択してください');
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const response = await axios.post('http://localhost:3000/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.data.message == "success") {
      console.log(response.data.file)
      router.push({ name: 'edit', query: { data: response.data.file } })
    }
  } catch (error) {
    console.error('アップロード失敗:', error);
  }
}
</script>