<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <h1 class="panel-title" slot="heading">
        {{ $t('auth.login') }}
      </h1>
      <div slot="body">
        <form @submit.prevent="login(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope fa-fw"></i>
              </div>
              <input
                v-model="user.email"
                type="email"
                v-bind:placeholder="$t('auth.email')"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.password"
                type="password"
                v-bind:placeholder="$t('auth.password')"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">
              {{ $t('auth.login') }}
            </button>
          </div>
        </form>
      </div>
      <div slot="footer">
        {{ $t('auth.no_account') }}
        <router-link :to="{ name: 'register.index' }">{{ $t('auth.register') }}</router-link>
      </div>
    </v-panel>
  </v-layout>
</template>

<script>
  /* ============
   * Login Index Page
   * ============
   *
   * Page where the user can login.
   */
  import authService from '@/services/auth';

  export default {
    data() {
      return {
        user: {
          email: null,
          password: null,
        },
      };
    },

    methods: {
      login(user) {
        authService.login(user);
      },
    },

    components: {
      VLayout: require('@/layouts/minimal.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
