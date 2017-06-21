<template>
  <v-layout>
    <el-row>
      <el-col :lg="{span: 12, offset: 6}" :md="{span: 12, offset: 6}" :sm="{span: 12, offset: 6}" :xs="{span: 22, offset: 1}">
        <v-panel contextual-style="primary">
          <h1 class="panel-title"
              slot="header"
          >
            {{ $t('account.my_account') }}
          </h1>
          <div slot="body">
            <el-table :data="[account]" class="table table-striped">
              <el-table-column
                prop="firstName"
                :label="$t('account.first_name')">
              </el-table-column>
              <el-table-column
                prop="lastName"
                :label="$t('account.last_name')">
              </el-table-column>
              <el-table-column
                prop="email"
                :label="$t('account.email')">
              </el-table-column>
            </el-table>
          </div>
        </v-panel>
      </el-col>
    </el-row>
  </v-layout>
</template>

<script>
  /* ============
   * Account Index Page
   * ============
   *
   * Page where the user can view the account information.
   */

  export default {
    components: {
      VLayout: require('@/layouts/background.vue'),
      VPanel: require('@/components/panel.vue'),
    },

    computed: {
      account() {
        return this.$store.state.account;
      },
    },
  };
</script>
