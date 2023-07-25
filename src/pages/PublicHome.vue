
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogin() {
  router.push('/login')
}

function handleRegister() {
  router.push('/register')
}
</script>

<template>
  <full-page maximize>
    <hero-area>
      <div class="slogan">
        <language-panel code="en_us">
          <h1>Vivamus ac ornare ligula.</h1>
          <h2>Proin ut mauris maximus, accumsan est et, tempus dolor.</h2>
          <h3>Ut eu sem ac nulla finibus accumsan eget vel nulla.</h3>
        </language-panel>
        <language-panel code="pt_br">
          <h1>Proin ut mauris maximus, accumsan est et, tempus dolor.</h1>
          <h2>Proin ut mauris maximus, accumsan est et, tempus dolor.</h2>
          <h3>Proin ut mauris maximus, accumsan est et, tempus dolor.</h3>
        </language-panel>
        <div class="actions">
          <flat-button :onClick="handleRegister" label="register" yellow />
          <flat-button :onClick="handleLogin" label="login" green />
        </div>
      </div>
      <div class="graphic">
        <lottie-animation src="/animations/home.json" />
      </div>
    </hero-area>
    <div class="features">
      <language-panel code="en_us">
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
      </language-panel>
      <language-panel code="pt_br">
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
        <div class="feature">
          <h3>Aliquam bibendum lectus</h3>
          <p>Maecenas quam risus, posuere ullamcorper mi vel, semper luctus odio. Curabitur nec iaculis odio.</p>
        </div>
      </language-panel>
    </div>
    <div class="testimonials">
      <language-panel code="en_us">
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Proin tincidunt ut lectus sit amet gravida. Integer maximus turpis eget purus posuere finibus.</blockquote>
          <h5>By John Doe</h5>
        </div>
      </language-panel>
      <language-panel code="pt_br">
        <div class="testimonial">
          <blockquote>Donec feugiat aliquet leo euismod auctor. Duis facilisis vehicula sodales.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Donec feugiat aliquet leo euismod auctor. Duis facilisis vehicula sodales.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Donec feugiat aliquet leo euismod auctor. Duis facilisis vehicula sodales.</blockquote>
          <h5>By John Doe</h5>
        </div>
        <div class="testimonial">
          <blockquote>Donec feugiat aliquet leo euismod auctor. Duis facilisis vehicula sodales.</blockquote>
          <h5>By John Doe</h5>
        </div>
      </language-panel>
    </div>
    <div class="shout">
      <language-panel code="en_us">
        <p>Let's build something together!</p>
      </language-panel>
      <language-panel code="pt_br">
        <p>liquam erat volutpat. Ut pretium sodales dui, in tempus elit tristique ac.</p>
      </language-panel>
      <link-button href="/register" label="start-now" />
    </div>
  </full-page>
</template>

<style lang="scss" scoped>
.features {
  @include flex(row);
  @include flex-evenly;

  flex-wrap: wrap;
  padding: 1em;

  @media (max-width: $sm) {
    align-items: center;
    justify-content: space-around;
  }

  .feature {
    max-width: 30vw;
    text-align: center;

    @media (max-width: $sm) {
      max-width: 80vw;
    }

    h3 {
      font-size: 1.5em;
      font-weight: 400;
    }

    p {
      font-size: 1.25em;
      font-weight: 200;
    }
  }
}

.graphic {
  height: auto;
  width: 40vw;

  @media (max-width: $sm) {
    width: 80vw;
  }
}

.shout {
  @include flex(column);
  @include flex-center;

  flex: 1;
  font-size: 4em;
  padding: 0 5em;
  text-align: center;

  @media (max-width: $sm) {
    padding: 0 1em;
  }
}

.slogan {
  @include flex(column);
  @include flex-center;

  @media (max-width: $sm) {
    max-width: 80vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }
}

.testimonials {
  @include flex(row);
  @include flex-center;

  background-color: $gray;
  padding: 3em 0;

  .testimonial {
    @include box;

    background-color: $white;
    padding: 1em;
    max-width: 20vw;

    @media (max-width: $sm) {
      max-width: 80vw;
    }

    h5 {
      padding-right: 2em;
      text-align: right;
    }
  }
}
</style>
