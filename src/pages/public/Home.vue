<script setup>
import Animation from '../../components/Animation.vue'
import Page from '../../components/Page.vue'
</script>

<template>
  <div>
    <Page>
      <div class="flex-row justify-space-between hero">
        <div class="align-center flex-col flex-full justify-center">
          <h1 class="green">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p>
            Nunc tincidunt malesuada leo, eu porta magna. Sed sodales condimentum semper.
            Fusce hendrerit vitae purus quis posuere. Sed dictum in metus id dictum. Mauris
            luctus, ipsum at pharetra rhoncus, risus erat fringilla urna, ac porttitor orci
            quam laoreet sapien.
          </p>
          <div class="align-center flex-row justify-space-around actions">
            <router-link class="btn" to="/login">Fermentum</router-link>
            <router-link class="btn yellow" to="/register">Aliquam nec</router-link>
          </div>
        </div>
        <div class="align-center flex-col justify-space-around image">
          <Animation src="https://assets6.lottiefiles.com/packages/lf20_kUtZCR7Zyk.json" />
        </div>
      </div>
    </Page>
    <div class="align-center bg-blue flex-row justify-space-around white shout">
      <div>Something great goes here!</div>
    </div>
    <div class="align-center flex-row justify-space-around">
      <div>They are the best!!!</div>
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
