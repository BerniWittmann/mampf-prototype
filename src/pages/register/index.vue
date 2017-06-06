<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <h1 class="panel-title" slot="heading">
        {{ $t('auth.registration') }}
      </h1>
      <div slot="body">
        <form @submit.prevent="register(user)">
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input
                v-model="user.firstName"
                type="text"
                v-bind:placeholder="$t('auth.first_name')"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-user fa-fw"></i>
              </div>
              <input
                v-model="user.lastName"
                type="text"
                v-bind:placeholder="$t('auth.last_name')"
                class="form-control"
              >
            </div>
          </div>
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
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-lock fa-fw"></i>
              </div>
              <input
                v-model="user.passwordConfirm"
                type="password"
                v-bind:placeholder="$t('auth.password_confirm')"
                class="form-control"
              >
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary">
              {{ $t('auth.register') }}
            </button>
          </div>
        </form>
      </div>
      <div slot="footer">
        {{ $t('auth.already_account') }}
        <router-link :to="{ name: 'login.index' }">{{ $t('auth.login') }}</router-link>
      </div>
    </v-panel>
  </v-layout>
</template>

<script>
  /* ============
   * Register Index Page
   * ============
   *
   * Page where the user can register.
   */

  import authService from '@/services/auth';

  export default {

    data() {
      return {
        user: {
          firstName: null,
          lastName: null,
          email: null,
          passwordConfirm: null,
          password: null,
        },
      };
    },

    methods: {
      register(user) {
        authService.register(user);
      },
    },

    components: {
      VLayout: require('@/layouts/minimal.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
