<template>
  <v-layout>
    <el-row>
      <el-col :lg="{span: 12, offset: 6}" :md="{span: 12, offset: 6}" :sm="{span: 12, offset: 6}"
              :xs="{span: 22, offset: 1}">
        <v-panel>
          <h1 class="panel-title" slot="header">
            <h2 class="text-center">Ein Essen anbieten</h2>
          </h1>
          <div slot="body">
            <el-form ref="form" :model="meal" :rules="rules" label-width="200px" label-position="top"
                     @submit.prevent="add('form')">
              <el-form-item :label="$t('meal.name_label')" prop="name">
                <el-input v-model="meal.name"
                          :placeholder="$t('meal.name')"
                          type="text"></el-input>
              </el-form-item>
              <el-form-item :label="$t('meal.places_label')" prop="places">
                <el-input-number v-model.number="meal.places"
                                 :placeholder="$t('meal.places')"
                                 :min="1"
                                 type="number"></el-input-number>
              </el-form-item>
              <el-form-item :label="$t('meal.price_label')" prop="price">
                <el-input v-model="meal.price"
                          :placeholder="$t('meal.price')"
                          step="any"
                          min="0"
                          type="number"></el-input>
              </el-form-item>
              <el-form-item :label="$t('meal.date_label')" prop="date">
                <el-date-picker type="date" :placeholder="$t('meal.date')" v-model="meal.date"
                                format="dd.MM.yyyy" :picker-options="pickerOptionsDate"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
              <el-form-item :label="$t('meal.time_label')" prop="time">
                <el-time-picker type="fixed-time" :placeholder="$t('meal.time')" v-model="meal.time"
                                format="HH:mm"
                                style="width: 100%;"></el-time-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="add('form')">{{ $t('meal.create') }}</el-button>
              </el-form-item>
            </el-form>
          </div>
        </v-panel>
      </el-col>
    </el-row>
  </v-layout>
</template>

<script>
  /* ============
   * Meal Add Page
   * ============
   *
   * Page where the user can add a new meal.
   */

  import moment from 'moment';

  import mealService from '../../services/meal';

  export default {
    components: {
      VLayout: require('@/layouts/background.vue'),
      VPanel: require('@/components/panel.vue'),
    },

    data() {
      return {
        meal: {
          name: null,
          places: null,
          price: null,
          date: null,
          time: null,
        },
        pickerOptionsDate: {
          disabledDate(date) {
            return moment(date).isBefore(moment(), 'day');
          },
        },
        rules: {
          name: [
            { required: true, message: this.$t('validation.name.required'), trigger: 'blur' },
            { min: 3, message: this.$t('validation.name.minlength'), trigger: 'blur' },
          ],
          places: [
            { type: 'number', required: true, message: this.$t('validation.places.required'), trigger: 'change' },
            { type: 'number', min: 1, message: this.$t('validation.places.min'), trigger: 'change' },
          ],
          price: [
            { required: true, message: this.$t('validation.price.required'), trigger: 'blur' },
            { min: 0, message: this.$t('validation.blur.min'), trigger: 'blur' },
          ],
          date: [
            { type: 'date', required: true, message: this.$t('validation.date.required'), trigger: 'change' },
          ],
          time: [
            { type: 'date', required: true, message: this.$t('validation.time.required'), trigger: 'change' },
          ],
        },
      };
    },

    methods: {
      add(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            mealService.add(this.meal);
          }
        });
      },
    },
  };
</script>
