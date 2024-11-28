import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ],
      dirs: ['src/components'],
      extensions: ['vue'],
      deep: true,
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'vue-toastification': ['useToast'], 
          axios: [['default', 'axios']],
          vuex: ['createStore', 'mapState', 'mapMutations', 'mapGetters', 'mapActions','useStore'],
        },
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],
  
});
