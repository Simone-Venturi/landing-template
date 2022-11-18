<template>
    <div class="vh-100">
        Height 100vh
        <slot></slot>
    </div>
</template>
<script>

export default {
    name: "LandingSectionLayout",
    props: {
        sectionName: {
            type: String,
            required: true
        }
    }
}

</script>
<style scoped>
</style>