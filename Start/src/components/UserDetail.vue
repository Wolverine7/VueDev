<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{name}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<!-- Script part -->
<script>
    export default {
        props: {
            name: String
        },
        methods: {
            resetName() {
                this.name = 'Bobodzhon'
            }
        }
    }
</script>

<!-- style scope -->
<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
