<template>
  <v-layout>
    <v-panel contextual-style="primary">
      <h1 class="panel-title"
          slot="heading"
      >
        {{ $t('account.my_account') }}
      </h1>
      <div slot="body">
        <table class="table table-striped">
          <thead>
          <tr>
            <th>
              {{ $t('account.first_name') }}
            </th>
            <th>
              {{ $t('account.last_name') }}
            </th>
            <th>
              {{ $t('account.email') }}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              {{$store.state.account.firstName}}
            </td>
            <td>
              {{$store.state.account.lastName}}
            </td>
            <td>
              {{$store.state.account.email}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </v-panel>
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
      VLayout: require('@/layouts/default.vue'),
      VPanel: require('@/components/panel.vue'),
    },
  };
</script>
