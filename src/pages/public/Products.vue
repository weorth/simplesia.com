<script setup>
import Page from '../../components/Page.vue'
</script>

<template>
  <Page>
    <div class="flex-col flex-full">
      <h1>Products</h1>
      <p>
        Nunc tincidunt malesuada leo, eu porta magna. Sed sodales condimentum semper.
        Fusce hendrerit vitae purus quis posuere. Sed dictum in metus id dictum. Mauris
        luctus, ipsum at pharetra rhoncus, risus erat fringilla urna, ac porttitor orci
        quam laoreet sapien.
      </p>

      <!--Classification-->
      <h2>Classification</h2>
      <p>
        Quisque convallis bibendum viverra. Aliquam volutpat faucibus rhoncus. Nunc
        lacinia massa ante, ac accumsan sapien elementum quis.
      </p>
      <ul>
        <li>Hair type</li>
        <li>Human emotion</li>
        <li>Human age</li>
        <li>Time of day</li>
        <li>Clothes</li>
        <li>Yoga position</li>
      </ul>

      <!--Object Detection-->
      <h2>Object Detection</h2>
      <p>
        Quisque convallis bibendum viverra. Aliquam volutpat faucibus rhoncus. Nunc
        lacinia massa ante, ac accumsan sapien elementum quis.
      </p>
      <ul>
        <li>License plat (BR)</li>
        <li>License plate OCR (BR)</li>
        <li>Vehicle type (BR)</li>
        <li>Vehicle damage</li>
        <li>Traffic signs (BR)</li>
        <li>Currency (BR)</li>
        <li>Road damage</li>
        <li>Face</li>
        <li>Face mask</li>
        <li>Person</li>
        <li>Fruit (BR)</li>
        <li>Animal (BR)</li>
        <li>Safety</li>
        <li>Corrosion</li>
        <li>Players</li>
        <li>Hair</li>
        <li>Insect</li>
        <li>Furniture</li>
        <li>Fire and smoke</li>
      </ul>

      <!--Pose Estimation-->
      <h2>Pose Estimation</h2>
      <p>
        Quisque convallis bibendum viverra. Aliquam volutpat faucibus rhoncus. Nunc
        lacinia massa ante, ac accumsan sapien elementum quis.
      </p>
      <ul>
        <li>Human body</li>
        <li>Human hand</li>
      </ul>

      <!--Segmentation-->
      <h2>Segmentation</h2>
      <p>
        Quisque convallis bibendum viverra. Aliquam volutpat faucibus rhoncus. Nunc
        lacinia massa ante, ac accumsan sapien elementum quis.
      </p>
      <ul>
        <li>Hair</li>
        <li>Players</li>
      </ul>

      <div class="align-center flex-row justify-space-around">
        <router-link class="btn" to="/register">Sign Up</router-link>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.page {
  margin: 0 auto;
  max-width: 80vw;

  .btn {
    @media (max-width: $sm) {
      margin: 2em 0;
    }
  }
}
</style>
