import { useDrawer } from '@xynotes/components';
import { defineAsyncComponent } from 'vue';
import './index.scss';

export function showMobileDetailSettingDrawer() {
  const { show } = useDrawer(
    defineAsyncComponent(() => import('./drawer')),
    { id: 'mobile-detail-setting-drawer', drawerOptions: { height: '110px' } }
  );
  show();
}
