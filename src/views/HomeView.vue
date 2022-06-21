<template>
  <div style="display: flex;flex-direction:row;">
    <n-layout class="sideBar" v-if="active">
      <div class="header">
        <img src="../assets/logo.png" height="70">
        <h3 style="padding-left:10px">growOn</h3>
      </div>
      <div class="sidebarBody">
        <n-menu :options="menuOptions" />
      </div>
      <div class="footer">
        <n-button type="error" style="margin-left:20px">
          Logout
        </n-button>
      </div>
    </n-layout>
    <n-layout style="width: 80%;">
      <n-button  @click="drawer">Close</n-button>
      <TeacherView />
    </n-layout>
  </div>

</template>

<script setup lang="ts">
import { MenuOption } from "naive-ui";
import { h, onMounted, reactive, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import TeacherView from "./Teacher/TeacherView.vue";

const router = useRouter();
let data: any = reactive({
  role: "",
});
let active = ref(true)

const menuOptions: MenuOption[] = [

  // Dashboard
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          }
        },
        { default: () => 'Dashboard' }
      ),
    key: 'go-back-home',

  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },

  // Assignment
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          }
        },
        { default: () => 'Assignment' }
      ),
    key: 'go-back-home',

  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },

  // Attendance
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home',
          }
        },
        { default: () => 'Attendance' }
      ),
    key: 'go-back-home',

  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },

]

onMounted(() => {
  data.role = localStorage.getItem("role");
  console.log("Role :", data.role);
});

const logOut = () => {
  localStorage.clear();
  router.push("/login");
};

const drawer = () => {
  active.value = !active.value
}
</script>

<style>
.sideBar {
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  width: 15%;
  background-color: white;
}

.header {
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.sidebarBody {
  width: 100%;
  height: 65%;
}
</style>
