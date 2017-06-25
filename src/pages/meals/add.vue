<template>
  <v-layout>
    <el-row slot="side">
      <el-col :span="24">
        <v-panel class="floating">
          <h1 class="panel-title" slot="header">
            <h2 class="text-center">{{ $t('meal.progress') }}</h2>
          </h1>
          <div slot="body">
            <el-steps :space="100" direction="vertical" :active="scrollIndex">
              <el-step class="has-link" :title="$t('meal.general_info')"
                       v-scroll-to="{el: '#form-part-1',container: '#scroll-panel .el-card__body', offset: -300}"></el-step>
              <el-step class="has-link" :title="$t('meal.guest_info')"
                       v-scroll-to="{el: '#form-part-2',container: '#scroll-panel .el-card__body', offset: -100}"></el-step>
              <el-step class="has-link" :title="$t('meal.confirm')"
                       v-scroll-to="{el: '#form-part-3',container: '#scroll-panel .el-card__body', offset: -200}"></el-step>
            </el-steps>
          </div>
        </v-panel>
      </el-col>
    </el-row>

    <el-row slot="body">
      <el-col :span="24">
        <v-panel id="scroll-panel">
          <h1 class="panel-title" slot="header">
            <h1 class="text-center big">{{ $t('meal.offer_head') }}</h1>
          </h1>
          <div slot="body">
            <el-form ref="form" :model="meal" :rules="rules" label-width="200px" label-position="top"
                     @submit.prevent="add('form')">
              <div class="form-part" id="form-part-1">
                <h2 class="form-part-title">{{ $t('meal.general_info') }}</h2>
                <el-form-item :label="$t('meal.name_label')" prop="name">
                  <el-input v-model="meal.name"
                            :placeholder="$t('meal.name')"
                            type="text"></el-input>
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
                <v-waypoint @waypoint="(direction, going) => inHandler(direction, going, 1)"></v-waypoint>
              </div>

              <div class="form-part" id="form-part-2">
                <h2 class="form-part-title">{{ $t('meal.guest_info') }}</h2>
                <el-form-item :label="$t('meal.places_label')" prop="places">
                  <el-input-number v-model.number="meal.places"
                                   :placeholder="$t('meal.places')"
                                   :min="1"
                                   type="number"></el-input-number>
                </el-form-item>
                <el-form-item :label="$t('meal.price_label')" prop="price">
                  <el-input v-model.lazy="meal.price" v-money="moneyConfig"
                            :placeholder="$t('meal.price')"
                            min="0"></el-input>
                </el-form-item>
                <el-form-item :label="$t('meal.message_label')" prop="message">
                  <el-input v-model.number="meal.message"
                                   :placeholder="$t('meal.message')"
                                   type="textarea" autosize></el-input>
                </el-form-item>
                <el-form-item :label="$t('meal.tags_label')" prop="tags">
                  <v-tags :editable="true" :tags="meal.tags"></v-tags>
                </el-form-item>
                <v-waypoint @waypoint="(direction, going) => inHandler(direction, going, 2)"></v-waypoint>
              </div>

              <div class="form-part" id="form-part-3">
                <h2 class="form-part-title">{{ $t('meal.confirm') }}</h2>
                <p>{{ $t('meal.confirm_text') }}</p>
                <br>
                <el-form-item>
                  <el-button type="primary" @click="add('form')">{{ $t('meal.create') }}</el-button>
                </el-form-item>
                <v-waypoint @waypoint="(direction, going) => inHandler(direction, going, 3)"></v-waypoint>
              </div>
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

  import mealService from '@/services/meal';
  import MoneyMixin from '@/mixins/money';

  export default {
    components: {
      VLayout: require('@/layouts/backgroundWithLeftRail.vue'),
      VPanel: require('@/components/panel.vue'),
      VTags: require('@/components/tags.vue'),
    },

    mixins: [MoneyMixin],

    data() {
      return {
        meal: {
          name: null,
          places: null,
          price: null,
          date: null,
          time: null,
          message: null,
          tags: [],
        },
        pickerOptionsDate: {
          disabledDate(date) {
            return moment(date).isBefore(moment(), 'day');
          },
        },
        scrollIndex: 1,
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
            { min: 0, message: this.$t('validation.price.min'), trigger: 'blur' },
          ],
          date: [
            { type: 'date', required: true, message: this.$t('validation.date.required'), trigger: 'change' },
          ],
          time: [
            { type: 'date', required: true, message: this.$t('validation.time.required'), trigger: 'change' },
          ],
          message: [],
          tags: [],
        },
      };
    },

    methods: {
      add(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            mealService.add(this.meal);
          } else {
            this.$scrollTo('#form-part-1', 500, {
              container: '#scroll-panel .el-card__body',
              offset: -300,
            });
          }
        });
      },
      inHandler(direction, going, index) {
        let result;
        if (direction.y === 'down' && going === 'out') {
          result = Math.max(index - 1, 0);
        } else if (going === 'in') {
          result = index;
        }
        if (result) {
          this.scrollIndex = result;
        }
      },
    },
  };
</script>
