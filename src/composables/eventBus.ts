import { reactive } from 'vue';

interface Toast {
  type: string;
  message: any;
}

const eventBus = reactive({
  showToast: null as Toast | null, 
  redirectTo: null as string | null, 
  triggerRedirect(path:any) {
    this.redirectTo = path;
  }
});

export default eventBus;
