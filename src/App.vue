<script setup lang="ts">
import { useLayout } from "@/components/base/admin/composables/layout";
import eventBus from '@/composables/eventBus';
import * as toast from '@/composables/toast'

const { layoutConfig, layoutState, isSidebarActive, resetMenu } = useLayout();

const outsideClickListener = ref<((event: MouseEvent) => void) | null>(null);

watch(isSidebarActive, (newVal) => {
  if (newVal) {
    bindOutsideClickListener();
  } else {
    unbindOutsideClickListener();
  }
});

const containerClass = computed(() => {
  return {
    "layout-overlay": layoutConfig.menuMode === "overlay",
    "layout-static": layoutConfig.menuMode === "static",
    "layout-static-inactive": layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === "static",
    "layout-overlay-active": layoutState.overlayMenuActive,
    "layout-mobile-active": layoutState.staticMenuMobileActive,
  };
});

function bindOutsideClickListener() {
  if (!outsideClickListener.value) {
    outsideClickListener.value = (event: MouseEvent) => {
      if (isOutsideClicked(event)) {
        resetMenu();
      }
    };
    document.addEventListener("click", outsideClickListener.value);
  }
}

function unbindOutsideClickListener() {
  if (outsideClickListener.value) {
    document.removeEventListener("click", outsideClickListener.value);
    outsideClickListener.value = null;
  }
}

function isOutsideClicked(event: MouseEvent): boolean {
  const sidebarEl = document.querySelector(".layout-sidebar");
  const topbarEl = document.querySelector(".layout-menu-button");

  if (!sidebarEl || !topbarEl) {
    return true;
  }

  const target = event.target as Node | null;

  return !(
    (sidebarEl.isSameNode(target) || sidebarEl.contains(target)) ||
    (topbarEl.isSameNode(target) || topbarEl.contains(target))
  );
}

// LISTEN TOAST UNTUK HANDLE API ERROR
watch(() => eventBus.showToast, (newToast) => {
  if (newToast) {
    if (newToast.type === "error") {
      toast.error('error', newToast.message)
    }
  }
});
</script>

<template>
   <Toast />
  <div v-if="$route.meta.requiresAuth" class="layout-wrapper" :class="containerClass">
    <app-topbar></app-topbar>
    <app-sidebar></app-sidebar>
    <div class="layout-main-container">
      <div class="layout-main">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <app-footer></app-footer>
    </div>
    <div class="layout-mask animate-fadein"></div>
  </div>

  <div v-else>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
.p-toast.p-component.p-toast-top-right {
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
  max-width: 100%;
  margin-top: 0;
}

@media (max-width: 768px) {
  .p-toast.p-component.p-toast-top-right {
    top: 5%;
    right: 5%;
  }
}

@media (max-width: 480px) {
  .p-toast.p-component.p-toast-top-right {
    top: 3%;
    right: 3%;
  }
}
</style>
