import { ComponentCustomProperties } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $isQueryInvalid: (query: Record<string, any>) => boolean;
    formatPrice: (value: number) => string;
  }
}
