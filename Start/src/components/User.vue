<!-- html template-->
<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I am an awesome user</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="name"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>
<!-- Javascript templates -->
<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return {
                name: "Bobo"
            };
        },
        methods: {
          changeName(){
              if(this.name === 'Bobo') {
                  this.name = 'Solekh'
              }else{
                  this.name = 'Bobo'
              }
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
<!-- CSS templates -->
<style scoped>
    div{
        background-color: lightblue;
    }
</style>
