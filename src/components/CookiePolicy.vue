<template>
    <vue-cookie-comply
        :preferences="preferences"
        target="body"
        @on-accept-all-cookies="onAcceptAll"
        @on-save-cookie-preferences="onSavePreferences"
    >
        <template v-slot:header>
        <header>{{$t("policy.header")}}</header>
        </template>

        <template v-slot:modal-header>
        <h3 style="text-align:center;">{{$t("policy.modal.header")}}</h3>
        </template>
    </vue-cookie-comply>
</template>

<script>
export default {
    data(){
        return {
            preferences: [
                {
                    title: this.$t("policy.modal.performance.title"),
                    description: this.$t("policy.modal.performance.description"),
                    items: [{ label: this.$t("policy.modal.performance.title"), value: 'performance', isEnable: true, isRequired: true }],
                },
                {
                    title: this.$t("policy.modal.analytics.title"),
                    description: this.$t("policy.modal.analytics.description"),
                    items: [{ label: this.$t("policy.modal.analytics.title"), value: 'ga', isEnable: true }],
                },
            ]
        }
    },
    methods: {
        onAcceptAll() {
        },
        onSavePreferences(preferences) {
        }
    }
  }
</script>

<style scoped>
</style>