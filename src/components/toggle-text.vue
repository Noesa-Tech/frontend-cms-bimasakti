<template>
    <div class="flex items-center gap-2">
        <div :class="[textClass, 'flex-1']">
            {{ isPasswordVisible ? password : maskPassword(password) }}
        </div>
        <Button icon="pi pi-eye" severity="contrast" variant="text" rounded aria-label="Star"
            @click="togglePasswordVisibility" />
    </div>
</template>

<script>
export default {
    props: {
        password: {
            type: String,
            required: true
        },
        textClass: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            isPasswordVisible: false,
        };
    },
    methods: {
        /**
         * Toggle password visibility between masked and unmasked.
         */
        togglePasswordVisibility() {
            this.isPasswordVisible = !this.isPasswordVisible;
        }
    }
};
</script>
