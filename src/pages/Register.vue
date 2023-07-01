<script setup>
</script>

<template>
  <div class="page">
    <div class="align-center flex-col flex-full justify-center centered">
      <div class="card">
        <form>
          <fieldset>
            <legend>Register</legend>
            <div class="input">
              <label>Email Address:</label>
              <input id="email" name="email" type="email" />
            </div>
            <div class="input">
              <label>Username:</label>
              <input id="username" name="username" type="text" />
            </div>
            <div class="input">
              <label>Password:</label>
              <input id="password" name="password" type="password" />
            </div>
            <div class="input">
              <label>Confirm Password:</label>
              <input id="confirm" name="confirm" type="password" />
            </div>
          </fieldset>
          <button>Submit</button>
          <div class="align-center flex-row justify-center">
            <router-link to="/login">Already have an account? Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sm: 960px;

.page {
  height: 90vh;
  margin: 0 auto;
  max-width: 80vw;

  .card {
    width: 33vw;

    @media (max-width: $sm) {
      width: 90vw;
    }
  }

  .centered {
    height: 90vh;
  }
}

form {
  a {
    margin-top: 1em;
  }

  .input {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;

    input {
      font-size: 1.25em;
      line-height: 2em;
    }
  }

  button, .btn {
    margin: 1em 0 0 0;
    width: 100%;
  }
}
</style>
