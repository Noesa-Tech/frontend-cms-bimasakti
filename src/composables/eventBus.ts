import { reactive } from 'vue';

interface Toast {
  type: string;
  message: any;
}

const eventBus = reactive({
  showToast: null as Toast | null, 
});

export default eventBus;
