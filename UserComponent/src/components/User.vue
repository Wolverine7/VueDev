<template>
  <div class="component">
    <h1>The user component</h1>
    <p>I'am an awesome User</p>
    <button @click="changeName">Change my name</button>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail v-bind:name="name"></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default{
  data: function () {
    return {
      name: 'Max'
    }
  },
  methods: {
    changeName () {
      this.name = 'Anna'
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUsedEdit: UserEdit
  }
}
</script>
