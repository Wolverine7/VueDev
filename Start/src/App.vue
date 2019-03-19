<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>
<script>
    import User from './components/User.vue'

    export default{
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component{
        border: 1px solid black;
        padding: 30px;
    }
</style>
