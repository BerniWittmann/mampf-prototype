<template>
  <v-layout>
    <el-row>
      <el-col :lg="{span: 8, offset: 8}" :md="{span: 8, offset: 8}" :sm="{span: 8, offset: 8}" :xs="{span: 22, offset: 1}">
        <v-panel contextual-style="primary">
          <h1 class="panel-title" slot="header">
            {{ $t('auth.registration') }}
          </h1>
          <div slot="body">
            <form @submit.prevent="register(user)">
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-input v-model="user.firstName"
                            type="text"
                            v-bind:placeholder="$t('auth.first_name')"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-input v-model="user.lastName"
                            type="text"
                            v-bind:placeholder="$t('auth.last_name')"></el-input>
                </el-col>
              </el-row>
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
                  <el-input v-model="user.passwordConfirm"
                            type="password"
                            v-bind:placeholder="$t('auth.password_confirm')"></el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-button type="primary"
                             native-type="submit">{{ $t('auth.register') }}
                  </el-button>
                </el-col>
              </el-row>
            </form>
          </div>
          <div slot="footer">
            <el-row :gutter="20">
              <el-col :span="24">
                {{ $t('auth.already_account') }}
                <router-link :to="{ name: 'login.index' }">{{ $t('auth.login') }}</router-link>
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
      VLayout: require('@/layouts/background.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
