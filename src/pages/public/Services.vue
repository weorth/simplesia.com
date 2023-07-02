<script setup>
import Page from '../../components/Page.vue'
</script>

<template>
  <Page>
    <div class="flex-col flex-full">
      <h1>Services</h1>

      <!--1-->
      <div class="align-start flex-row service">
        <div class="card flex-full">
          <p>
            Mauris consectetur diam at ante lobortis, vitae imperdiet quam maximus.
            Quisque pretium, nunc eu ornare condimentum, tellus nisl euismod massa,
            sed aliquet leo velit vitae lectus.
          </p>
          <p>
            Cras non tincidunt odio, scelerisque viverra nisi. Nam nisl lorem,
            vulputate eu nisl at, interdum commodo ante.
          </p>
          <div class="align-center flex-row justify-space-around">
            <router-link to="/register">Aenean magna erat</router-link>
          </div>
        </div>
        <div class="flex-full">
          <ul>
            <li>Nullam accumsan elit lectus, ut mattis mauris posuere sed.</li>
            <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
            <li>Etiam laoreet egestas nibh, eu tempor ipsum vestibulum dapibus.</li>
            <li>Fusce tristique nulla at ultrices malesuada.</li>
            <li>Praesent non nisi ut lectus tincidunt porta id quis nibh.</li>
            <li>Vivamus vulputate imperdiet ligula quis commodo.</li>
            <li>Quisque sit amet imperdiet est.</li>
          </ul>
        </div>
      </div>

      <!--2-->
      <div class="align-start flex-row service">
        <div class="card flex-full">
          <p>
            Mauris consectetur diam at ante lobortis, vitae imperdiet quam maximus.
            Quisque pretium, nunc eu ornare condimentum, tellus nisl euismod massa,
            sed aliquet leo velit vitae lectus.
          </p>
          <p>
            Cras non tincidunt odio, scelerisque viverra nisi. Nam nisl lorem,
            vulputate eu nisl at, interdum commodo ante.
          </p>
          <div class="align-center flex-row justify-space-around">
            <router-link to="/register">Aenean magna erat</router-link>
          </div>
        </div>
        <div class="flex-full">
          <ul>
            <li>Nullam accumsan elit lectus, ut mattis mauris posuere sed.</li>
            <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
            <li>Etiam laoreet egestas nibh, eu tempor ipsum vestibulum dapibus.</li>
            <li>Fusce tristique nulla at ultrices malesuada.</li>
            <li>Praesent non nisi ut lectus tincidunt porta id quis nibh.</li>
            <li>Vivamus vulputate imperdiet ligula quis commodo.</li>
            <li>Quisque sit amet imperdiet est.</li>
          </ul>
        </div>
      </div>

      <!--3-->
      <div class="align-start flex-row service">
        <div class="card flex-full">
          <p>
            Mauris consectetur diam at ante lobortis, vitae imperdiet quam maximus.
            Quisque pretium, nunc eu ornare condimentum, tellus nisl euismod massa,
            sed aliquet leo velit vitae lectus.
          </p>
          <p>
            Cras non tincidunt odio, scelerisque viverra nisi. Nam nisl lorem,
            vulputate eu nisl at, interdum commodo ante.
          </p>
          <div class="align-center flex-row justify-space-around">
            <router-link to="/register">Aenean magna erat</router-link>
          </div>
        </div>
        <div class="flex-full">
          <ul>
            <li>Nullam accumsan elit lectus, ut mattis mauris posuere sed.</li>
            <li>Interdum et malesuada fames ac ante ipsum primis in faucibus.</li>
            <li>Etiam laoreet egestas nibh, eu tempor ipsum vestibulum dapibus.</li>
            <li>Fusce tristique nulla at ultrices malesuada.</li>
            <li>Praesent non nisi ut lectus tincidunt porta id quis nibh.</li>
            <li>Vivamus vulputate imperdiet ligula quis commodo.</li>
            <li>Quisque sit amet imperdiet est.</li>
          </ul>
        </div>
      </div>

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

  .card {
    margin-bottom: 5em;
    margin-right: 2em;

    @media (max-width: $sm) {
      margin-bottom: 1em;
      margin-top: 2em;
    }
  }

  .service {
    @media (max-width: $sm) {
      flex-direction: column;
    }
  }
}
</style>
