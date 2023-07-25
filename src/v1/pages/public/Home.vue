<script setup>
import Animation from '@/components/animations/Lottie.vue'
import Page from '@/components/Page.vue'
</script>

<template>
  <div class="flex-col flex-full">
    <Page>
      <div class="flex-row justify-space-between hero">
        <div class="align-center flex-col flex-full justify-center">
          <h1 class="green">
            <t tag="home.title" />
          </h1>
          <p>
            <t tag="home.subtitle" />
          </p>
          <div class="align-center flex-row justify-space-around actions">
            <router-link class="btn" to="/login">
              <t tag="login" />
            </router-link>
            <router-link class="btn yellow" to="/register">
              <t tag="register" />
            </router-link>
          </div>
        </div>
        <div class="align-center flex-col justify-space-around image">
          <Animation src="https://assets6.lottiefiles.com/packages/lf20_kUtZCR7Zyk.json" />
        </div>
      </div>
    </Page>
    <div class="align-center bg-blue flex-col justify-space-around white shout">
      <div>
        <h3><t tag="home.point" /></h3>
        <ul>
          <li><t tag="home.point1" /></li>
          <li><t tag="home.point2" /></li>
          <li><t tag="home.point3" /></li>
          <li><t tag="home.point4" /></li>
          <li><t tag="home.point5" /></li>
          <li><t tag="home.point6" /></li>
          <li><t tag="home.point7" /></li>
        </ul>
      </div>
    </div>
    <div class="align-center flex-col flex-full justify-space-around">
      <div><t tag="home.bottom" /></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 2.5em;
}

p {
  font-size: 1.25em;
}

.btn {
  @media (max-width: $sm) {
    margin: 1vh 2vw;
    width: 80vw;
  }
}

.hero {
  @media (max-width: $sm) {
    align-items: start;
    flex-direction: column;
    max-width: 80vw;

    h1 { margin: 1em; }
    p { margin: 1em; }
  }

  .actions {
    @media (max-width: $sm) {
      flex-direction: column;
    }
  }
}

.image {
  max-height: 40vh;
  max-width: 40vw;

  @media (max-width: $sm) {
    max-height: 90vh;
    max-width: 90vw;
  }
}

.shout {
  min-height: 20vh;
}
</style>
