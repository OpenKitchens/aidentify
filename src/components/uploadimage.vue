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
  saveFileToSession(event)
}

async function uploadFile() {
  if (!file.value) {
    alert('ファイルを選択してください');
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    //const response = await axios.post('http://34.83.236.85:8000/classify_image/', formData, {//ここにエンドポイントをかく
    const response = await axios.post('http://34.170.246.161:8000/classify_image/', formData, {//ここにエンドポイントをかく
      //await axios.post('http://34.83.236.85:8000/classify_image/', formData, {//ここにエンドポイントをかく
      headers: {
        'Content-Type': 'multipart/form-data',
        "Access-Control-Allow-Origin": "*",
      },
    });

    sessionStorage.setItem('risk_level', response.data.risk_level);
    router.push({ name: 'edit' }); // 成功した場合、次のページに移動
  } catch (error) {
    console.error('アップロード失敗:', error);
  }
}

function saveFileToSession() {
  const reader = new FileReader();
  reader.onload = function (event) {
    sessionStorage.setItem('uploadedImage', event.currentTarget.result); // ファイルデータをBase64形式でsessionStorageに保存
  };
  reader.readAsDataURL(file.value); // ファイルをData URLに変換
}
</script>