<template>
  <div class="main">
    <div class="topCards">
      <n-card elevation="2" class="statsCard" style="background-color: #cc3d2c; color: white">
        Assigned<br />
        <span style="font-size: 50px; width: 100%; text-align: center">30</span>
      </n-card>
      <n-card elevation="2" class="statsCard" align style="background-color: #cecfd0; color: black">
        Evaluated<br />
        <span style="font-size: 50px; width: 100%; text-align: center">30</span>
      </n-card>
      <n-card elevation="2" class="statsCard" align style="background-color: #20a361; color: white">
        Evaluate<br />
        <span style="font-size: 50px; width: 100%; text-align: center">30</span>
      </n-card>
    </div>
    <div class="middleCards">
      <n-card elevation="2" class="performingCard">
        <n-table :bordered="true" :single-line="false">
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Perfomance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class 1</td>
              <td>Class 2</td>
            </tr>
            <tr>
              <td>90%</td>
              <td>88%</td>
            </tr>
          </tbody>
        </n-table>
      </n-card>
      <n-card elevation="2" class="performingCard">
        <n-table :bordered="true" :single-line="false">
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Perfomance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class 1</td>
              <td>Class 2</td>
            </tr>
            <tr>
              <td>90%</td>
              <td>88%</td>
            </tr>
          </tbody>
        </n-table>
      </n-card>
    </div>
    <div class="bottomCards">
      <n-card elevation="2" class="bottomCard">
        <n-progress type="circle" :percentage="80"  />
      </n-card>
      <n-card elevation="2" class="bottomCard">
        <n-progress type="circle" :percentage="60" />
      </n-card>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
</script>

<style>
* {
  font-family: Poppins;
  margin: 0px;
  padding: 0px;
}

.main {
  background-color: #ebe8e8;
  height: 100%;
  width: 100%;
  justify-content: start;
  align-items: start !important;
  flex-direction: column;
}

.topCards {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.statsCard {
  height: 80%;
  width: 30%;
  font-size: 30px;
  font-weight: 700;
  margin: 20px 10px;
}

.middleCards {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.performingCard {
  margin: 20px 10px;
  height: 80%;
  width: 45%;
}

.bottomCards {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.bottomCard {
  padding-bottom: 20px;
  margin: 10px;
  height: 80%;
  width: 45%;
}

@media (max-width: 600px) {
  .main {
    background-color: aqua;
    height: 100%;
    width: 100%;
    padding: 5px;
  }

  .topCards {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .middleCards {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .bottomCards {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .bottomCard {
    width: 80%;
  }

  .performingCard {
    width: 80%;
  }

  .statsCard {
    height: 70%;
    width: 80%;
    font-size: 30px;
    font-weight: 800;
  }
}
</style>
