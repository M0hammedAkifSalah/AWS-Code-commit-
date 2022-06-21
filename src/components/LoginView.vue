<template>
  <div class="main">
    <n-card title="Login" style="width: 50%;">
      <n-input class="nInputs" size="large" v-model:value="data.username" round placeholder="Username" />
      <n-input class="nInputs" size="large" v-model:value="data.password" round placeholder="Password" />
      <n-button class="nButtons" :loading="loading" @click="login" icon-placement="left">
        Login
      </n-button>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue-demi";
import { useRouter } from "vue-router";
import { ref } from 'vue'
import { globalState } from "@/store";
import api from "../api/api.service";

const state = globalState();
const router = useRouter();
let loading = ref(false);
const data = reactive({
  username: "",
  password: "",
});

const login = () => {
  loading.value = true;
  try {
    let loginData = { mobile: data.username, pin: data.password };
    api.login(loginData).then((res) => {
      if (res.status == 200) {
        loading.value = false;
        state.role = res.data?.data?.user?.profile_type?.role_name;
        console.log(state.role);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("role", res.data.data.user.profile_type.role_name);
        localStorage.setItem("_id", res.data.data.user._id);
        router.push("/");
      }
    }, (err: any) => {
      loading.value = false;
      console.log('Err', err);
    });
  } catch (e) {
    loading.value = false;
    console.log(e)
  }
};
</script>

<style>
.main {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center !important;
  padding: 50px;
}

.nInputs {
  margin-top: 20px;
}

.nButtons {
  margin-top: 20px;
}

.container {
  display: flex;
  width: 450px !important;
  height: 380px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 5px 10px 10px 5px rgba(0, 0, 0, 0.082);
}
</style>
