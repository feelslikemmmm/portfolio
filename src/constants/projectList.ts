import SelectShop from '@assets/images/project/createselectshop.gif';
import PortFolio from '@assets/images/project/portfolio.gif';
import AirMugPro from '@assets/images/project/airmug-pro.gif';
import CardMakers from '@assets/images/project/card-makers.gif';
import FindCarrot from '@assets/images/project/findcarrot.gif';
export const PROJECT_LIST = [
  {
    id: 1,
    title: 'Creative Select Shop',
    description: '리액트 쇼핑몰 앱 프로젝트',
    skills: [
      'React',
      'React-Hooks',
      'React-Query',
      'Tailwindcss',
      'Firebase Authentication',
      'Firebase RealtimeDatabase',
      'Cloudnary',
      'Css Animation',
    ],
    deploy: 'Github-Pages',
    role: 'Full-Stack',
    webSite: 'https://feelslikemmmm.github.io/creative-select-shop/',
    github: 'https://github.com/feelslikemmmm/creative-select-shop',
    detail: {
      title: '리액트 쇼핑몰 앱 프로젝트',
      description: `리액트를 이용해 제작한 웹 쇼핑몰 프로젝트에요
쇼핑몰 프로젝트는 상품 등록, 상품목록리스트, 장바구니 기능과 로그인 등
프론트엔드 개발에서 자주 사용하게되는 기능들이 들어가 있다고 생각해 제작해봤어요
해당 프로젝트 작업을 통해 react-query에 대한 이해와 firebase, cloudnary
반응형 웹에 대한 이해도를 높일 수 있었습니다
"ps.상품 등록은 관리자만 가능하도록 제작되었습니다"`,
      img: SelectShop,
    },
    assignment: [
      'React-query를 활용한 상품 목록 리스트, 상품 등록, 수정, 업데이트, 장바구니 기능',
      'React-hooks를 활용한 이미지 캐러셀',
      'Tailwindcss를 활용한 반응형 웹',
      'Firebase Authentication을 활용한 소셜 로그인',
      'Firebase Realtimedatabase를 활용한 실시간 데이터 업데이트',
      'Cloudnary 실시간 서버 이미지 업데이트',
      '관련 Section에 대한 UI / UX 관리',
    ],
  },
  {
    id: 2,
    title: 'Web Portfolio',
    description: '작업물을 모아서 소개하는 프로젝트 입니다',
    skills: ['React', 'Tailwindcss', 'Css Animation'],
    deploy: 'Github-Pages',
    role: 'Front-end',
    webSite: 'https://feelslikemmmm.github.io/portfolio-site/',
    github: 'https://github.com/feelslikemmmm/portfolio-site',
    detail: {
      title: '그동안의 경험을 담아 소개하는 웹 포트폴리오 프로젝트',
      description: `웹 포트폴리오 프로젝트는 저의 경험을 담은 
작고 소소한 웹사이트가 있었으면 좋겠다는 생각에서 시작되었어요
짜임새 있는 레이아웃과 텍스트 포인트로 과하지 않은 느낌을 전달하고 싶었어요
과하고 복잡한 기능들을 제외하고 제가 전달하고 싶은 내용들을 나열해보았습니다`,
      img: PortFolio,
    },
    assignment: [
      'HTML 마크업',
      'Tailwindcss를 활용한 반응형 웹',
      'ReactHooks, useEffect를 사용해 캐러셀 기능 구현',
      'CSS Animation',
      '관련 Section에 대한 UI / UX 관리',
    ],
  },
  {
    id: 3,
    title: 'Card Makers',
    description: '명함 제작 웹 어플리케이션',
    skills: [
      'React Hooks',
      'Firebase Authentication',
      'Post-css',
      'Firebase RealtimeDatabase',
      'Cloudnary',
    ],
    deploy: 'Netlify',
    role: 'FullStack',
    webSite: 'https://cardmakers.netlify.app/',
    github: 'https://github.com/feelslikemmmm/card_maker',
    detail: {
      title: '명함 제작 웹 어플리케이션',
      description: `해당 프로젝트는 개인 명함 제작 웹 토이 프로젝트에요
프론트 영역뿐 아니라, 데이터베이스에 데이터 저장, 이미지를 외부 서버에 업로드 하는 등
프론트와 백엔드 두가지 모두 경험해보고자 제작하였던 토이 프로젝트입니다`,
      img: CardMakers,
    },
    assignment: [
      'React-router를 이용한 페이지 분기 처리',
      'Firebase 소셜 인증 로그인',
      'Firebase RealtimeDatabase를 통한 실시간 데이터 서버 저장',
      'Cloudnaly를 통한 사용자 이미지 서버에 저장',
      '관련 Section에 대한 UI / UX 관리',
      'Netlify를 이용한 배포',
      '로그아웃을 해도 제작해둔 명함은 유지',
      '명함 수정시 프리뷰에 수정 내용 실시간 적용',
    ],
  },
  {
    id: 4,
    title: 'Airmug Pro',
    description: '인터랙션을 활용한 web site',
    skills: ['Javascript', 'Css Animation'],
    deploy: 'Netlify',
    role: 'Front-end',
    webSite: 'https://airmug-pro.netlify.app/',
    github: 'https://github.com/feelslikemmmm/Apple-InteractiveWebProject',
    detail: {
      title: '인터렉션 효과를 구현해 제작한 웹사이트',
      description: `해당 프로젝트는 애플 웹사이트에 적용된 인터랙션을 공부하면서 만든 토이 프로젝트입니다
프로젝트를 진행하면서 인터랙션 기법을 위한 스크롤에 대한 이해를 높일 수 있었고
고해상도 비디오 인터랙션과 고해상도 이미지 처리를 위한 캔버스를 어떻게 다뤄야하는지
좋은 공부가 되었던 프로젝트입니다`,
      img: AirMugPro,
    },
    assignment: [
      '고해상도 비디오 인터랙션',
      '스크롤을 활용한 키프레임과 요소 컨트롤',
      '고해상도 이미지 처리를 위한 캔버스 활용',
      '스크롤 위치에 기반해 적용되는 텍스트 애니메이션',
      '스크롤 위치에 맞춰 재생되는 비디오 캔버스를 활용한 이미지 애니메이션',
    ],
  },
  {
    id: 5,
    title: 'Find Carrot',
    description: '벌레를 피해 당근을 수확하는 게임',
    skills: ['React', 'React Hooks'],
    deploy: 'Netlify',
    role: 'Front-end',
    webSite: 'https://find-carrot.netlify.app',
    github: 'https://github.com/feelslikemmmm/fun_game',
    detail: {
      title: '벌레를 피해 당근을 수확하는 게임',
      description: `해당 프로젝트는 게임이 시작되면 랜덤한 수의 벌레와 당근이 주어지고
주어진 시간동안 당근만을 선택해야 하는 간단한 웹 게임입니다
해당 프로젝트를 통해 자바스크립트 class를 비롯한
객체지향 프로그래밍에 대해서 배울 수 있었고 
자바스크립트를 통한 DOM요소 컨트롤에 대해 많이 배울 수 있었습니다.`,
      img: FindCarrot,
    },
    assignment: [
      'JS Class를 활용한 객체지향 프로그래밍',
      'JS를 활용해 DOM요소 컨트롤 및 이벤트 생성',
      '관련 Section에 대한 UI / UX 관리',
      'Netlify를 이용한 배포',
    ],
  },
];
