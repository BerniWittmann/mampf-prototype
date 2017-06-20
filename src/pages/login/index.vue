<template>
  <v-layout>
    <el-row>
      <el-col :span="8" :offset="8">
        <v-panel contextual-style="primary">
          <h1 class="panel-title" slot="header">
            {{ $t('auth.login') }}
          </h1>
          <div slot="body">
            <form @submit.prevent="login(user)">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-input v-model="user.email"
                            type="email"
                            v-bind:placeholder="$t('auth.email')"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-input v-model="user.password"
                            type="password"
                            v-bind:placeholder="$t('auth.password')"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-button type="primary" native-type="submit">
                    {{ $t('auth.login') }}
                  </el-button>
                </el-col>
              </el-row>
            </form>
          </div>
          <div slot="footer">
            <el-row :gutter="20">
              <el-col :span="24">
                {{ $t('auth.no_account') }}
                <router-link :to="{ name: 'register.index' }">{{ $t('auth.register') }}</router-link>
              </el-col>
            </el-row>
          </div>
        </v-panel>
      </el-col>
    </el-row>
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
      VLayout: require('@/layouts/background.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
