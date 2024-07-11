<template>
  <label for="dropzone-file" class="mx-5 flex flex-col w-100 h-30 rounded-xl bg-zinc-800 mt-5">
    <div class="flex flex-col items-center justify-center pt-5 pb-6">
      <img src="/icons/camera.svg" className="dark:invert" width="50">
      <p class="mb-2 text-sm text-white">Take Photo</p>
    </div>
    <input id="dropzone-file" type="file" class="hidden" name="image" accept="image/*" capture="camera" @change="onFileChange" />
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
  saveFileToSession(); // ファイルをセッションストレージに保存する関数を呼び出す
}

async function uploadFile() {
  if (!file.value) {
    alert('ファイルを選択してください');
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    //const response = await axios.post('http://34.130.222.182:8000/classify_image/', formData, {
    await axios.post('http://34.130.222.182:8000/classify_image/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    console.error('アップロード失敗:', error);
  }
}

function saveFileToSession() {
  const reader = new FileReader();
  console.log("he;;o")
  reader.onload = function(event) {
    sessionStorage.setItem('uploadedImage', event.target.result); // ファイルデータをBase64形式でsessionStorageに保存
    router.push({ name: 'edit' }); // 成功した場合、次のページに移動
  };
  reader.readAsDataURL(file.value); // ファイルをData URLに変換
}
</script>