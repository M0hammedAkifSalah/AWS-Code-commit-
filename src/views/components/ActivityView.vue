<template>
  <div class="activitymain">
    <h2>Activities</h2>
    <br />
    <v-row style="padding: 20px; width: 100%">
      <v-chip
        color="green"
        outlined
        style="margin-right: 20px"
        @click="getActivities('pending')"
      >
        Assigned
      </v-chip>
      <v-chip
        color="orange"
        outlined
        style="margin-right: 20px"
        @click="getActivities('evalute')"
      >
        Evaluate
      </v-chip>
      <v-chip
        color="blue"
        outlined
        style="margin-right: 20px"
        @click="getActivities('evaluted')"
      >
        Evaluated
      </v-chip>
    </v-row>
    <v-progress-linear
      v-if="loader"
      style="margin-top: 20px"
      indeterminate
      color="teal"
    ></v-progress-linear>
    <span> {{ message }}</span>
    <div v-for="activity in activities" :key="activity._id" class="activity">
      <img
        :src="
          activity.teacher_id.profile_image
            ? activity.teacher_id.profile_image
            : '/src/assets/favicon.ico'
        "
        height="50"
        width="50"
      />
      <span>{{ activity.teacher_id.name }}</span>
      <br />
      <span>{{ activity.title }}</span>
      <br />
      <span v-if="activity.subject">Subject : {{ activity.subject }}</span>
      <br />
      <span>Start Date - {{ activity.sDate }} </span>
      <span>End Date - {{ activity.eDate }}</span>
      <br />
      <span>Status : {{ activity.status }}</span>
      <br />
      <span>Type :{{ activity.activity_type }}</span>
      <br />
      <span><v-icon>mdi-heart</v-icon>{{ activity.like }}</span>
      <span><v-icon>mdi-eye</v-icon>{{ activity.view }}</span>
      <span><v-icon>mdi-circle-multiple</v-icon> {{ activity.coin }}</span>
      <span
        ><v-icon>mdi-comment-multiple</v-icon
        >{{ activity.comment.length }}</span
      >
      <span></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import api from "../../api/api.service";

const type = defineProps(["type"]);
let activities: any = ref([]);
let loader = ref(false);
let message = ref("");

onMounted(() => {
  if (type.type == "user") {
    getActivities("pending");
  }
});

const getActivities = async (status: string) => {
  let id = localStorage.getItem("_id");
  let data = {
    status: status,
    teacher_id: id,
  };
  try {
    await api.getActivities(data).then((res) => {
      if (res.data.result !== 0) {
        loader.value = true;
        activities.value = res.data.data;
        loader.value = false;
        message.value = "";
        activities.value.forEach((element: any) => {
          let sdate = new Date(element.StartTime);
          let edate = new Date(element.EndTime);
          element.sDate = sdate.toLocaleDateString().toString();
          element.eDate = edate.toLocaleDateString().toString();
        });
        console.log("Activities : ", activities.value);
      } else {
        activities.value = [];
        message.value = "No Data";
      }
    });
  } catch (err) {
    console.log("Error", err);
  }
};
</script>

<style>
.activitymain {
  height: 100%;
  width: 100%;
  margin: 20px;
  padding: 20px;
  justify-content: start;
  align-items: flex-start;
  border-radius: 10px;
  background-color: white;
  overflow: scroll;
}
.activity {
  height: 40%;
  margin: 20px 05px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 05px 10px 02px rgba(136, 136, 136, 0.103);
}
.activity img {
  border-radius: 50px;
  object-fit: cover;
}
@media (min-width: 600px) {
  .activitymain {
    height: 95%;
    width: 70%;
    margin: 20px;
    padding: 25px;
  }
}
</style>
