<template>
  <div class="title-header d-flex justify-content-between bord p-3">
    <div class="">
      <h1 class="fw-bold">
        عمل تقيم للطالب : <span class="fw-normal"> محمد الوكيل </span>
      </h1>
    </div>

    <router-link :to="{ name: 'BranchesView' }">
      <div class="home-icon d-flex align-items-center">
        <i class="fa-solid fa-house"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
.title-header {
  background-color: beige;
  box-shadow: 3px 3px #888888;
  border: 0.5px solid black;
  border-radius: 5px 5px;
}

.home-icon i {
  font-size: 40px;
  color: black;
}

a {
  text-decoration: none !important;
}
</style>