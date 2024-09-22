import { Menu } from '@repo/ui';

type MenuType = 'SYSTEM_MENU' | 'CLUSTER_MENU';

export const MENUS: Record<MenuType, Menu[]> = {
  SYSTEM_MENU: [
    {
      name: '글로벌 대시보드',
      href: '/global-dashboard',
    },
    {
      name: '클러스터',
      href: '/cluster',
    },
    {
      name: '프로젝트',
      href: '/project',
    },
    {
      name: '사용자',
      href: '/user',
    },
    {
      name: '그룹',
      href: '/group',
    },
    {
      name: '헬름 저장소',
      href: '/helm-repo',
    },
    {
      name: '감사 로그',
      href: '/audit-log',
    },
  ],
  CLUSTER_MENU: [
    {
      name: '대시보드',
      href: '/dashboard',
    },
    {
      name: '시스템',
      href: '/system',
      children: [
        {
          name: '노드',
          href: '/node',
        },
        {
          name: '네임스페이스',
          href: '/namespace',
        },
        {
          name: '리소스 쿼터',
          href: '/resource-quota',
        },
        {
          name: '리밋 레인지',
          href: '/limit-range',
        },
      ],
    },
    {
      name: '모니터링',
      href: '/monitoring',
      children: [
        {
          name: '모니터링 대시보드',
          href: '/monitoring-dashboard',
        },
        {
          name: '그래프',
          href: '/graph',
        },
      ],
    },
    {
      name: '로깅',
      href: '/logging',
    },
    {
      name: '카탈로그',
      href: '/catalog',
      children: [
        {
          name: '노트북 이미지 목록',
          href: '/notebook-image',
        },
        {
          name: '헬름 차트',
          href: '/helm-chart',
        },
        {
          name: '헬름 릴리즈',
          href: '/helm-release',
        },
      ],
    },
    {
      name: '스토리지',
      href: '/storage',
      children: [
        {
          name: '볼륨',
          href: '/volume',
        },
        {
          name: '볼륨 클레임',
          href: '/volume-claim',
        },
        {
          name: '스토리지 클래스',
          href: '/storage-class',
        },
      ],
    },
    {
      name: 'Yaml',
      href: '/yaml',
    },
    {
      name: '프로필',
      href: '/profile',
    },
    {
      name: 'AI 개발환경',
      href: '/ai-enviorment',
    },
    {
      name: 'tensorboard',
      href: '/tensorboard',
    },
    {
      name: 'AutoML',
      href: '/automl',
    },
    {
      name: 'pipeline',
      href: '/pipeline',
    },
    {
      name: '모델 카탈로그',
      href: '/model-catalog',
      children: [
        {
          name: '모델 카탈로그',
          href: '/model-catalog',
        },
        {
          name: '서드파티 모델 마켓',
          href: '/thirdparty-modelmarket',
        },
      ],
    },
    {
      name: '데이터레이크',
      href: '/datalake',
    },
  ],
};
