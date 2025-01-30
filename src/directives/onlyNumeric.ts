import { Directive } from "vue";

const onlyNumeric: Directive = {
    beforeMount(el: HTMLElement) {
        el.addEventListener("input", (event: Event) => {
            const target = event.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, ""); // Remove non-numeric characters
            target.dispatchEvent(new Event("input")); // Ensure v-model updates
        });
    },
};

export default onlyNumeric;
