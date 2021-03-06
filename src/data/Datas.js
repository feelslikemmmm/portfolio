let Datas = [
  {
    id: 1,
    title: 'Card makers',
    subtitle: '개인 명함 제작 웹 어플리케이션',
    desc: 'Card makers는 개인 명함 제작 토이 프로젝트 입니다',
    desc2: 'React-router를 이용해 사용자가 로그인할 수 있는 페이지와',
    desc3: '로그인 한 사용자가 명함을 만들 수 있는 메인페이지 두가지로 나누어 제작했습니다',
    itemTitle: ['Assignment', 'Objective', 'Project Includes', 'Year'],
    assignment: ['React-router를 이용한 페이지 분기 처리', 'Firebase를 이용한 인증 로그인', 'Firebase RealtimeDatabase를 통한 실시간 데이터 서버에 저장', 'Cloudnaly를 통한 사용자 이미지 서버에 저장', '관련 Section에 대한 UI / UX 관리', 'Netlify를 이용한 배포'],
    objective: ['소셜 로그인을 통한 간편한 로그인', '로그아웃을 해도 제작해둔 명함은 유지됩니다', '명함 수정시 프리뷰에 수정 내용 실시간 적용'],
    includes: ['UI Design', 'Full stack', 'Deploy'],
    year: ['2021 05'],
  },
  {
    id: 2,
    title: '모두의 이력서',
    subtitle: '취준생을 위한 이력서 작성 플랫폼',
    desc: '4인이 팀을 이루어 제작한 프로젝트 입니다',
    desc2: '모두의 이력서는 취준생을 위한 이력서 작성 플랫폼입니다',
    desc3: '저희는 프로젝트를 통해 취준생들이 조금 더 편리한 이력서 작성이 가능하기를 원했습니다',
    desc4: '정형화 된 이력서보다는 개인의 자유도가 높은 이력서가 많이 등장하고 있다고 생각하였고',
    desc5: '완성된 자유도 높은 이력서 폼을 제공함으로써 사용자가 편의성을 느낄 수 있도록 하였습니다',
    desc6: '현재는 제공하는 폼이 한가지밖에 없지만 추후에 추가해나갈 예정입니다',
    itemTitle: ['Assignment', 'Objective', 'Project Includes', 'Year'],
    assignment: ['Redux, Custom Hook을 이용한 상태 관리 및 Reducer 생성', 'Redux-saga, Axios 를 통한 비동기 요청', '웹 서비스의 정체성을 알 수 있는 컨셉과 CSS 구현 및 반응형 디자인', '관련 Section에 대한 UI / UX 관리', 'AWS s3를 이용한 정적 파일 호스팅', 'HTTPS 배포를 위한 AWS Certification 인증서 발급 및 CloudFront 설정', '도메인 발급 후 AWS Route53 를 이용한 도메인 연결'],
    objective: ['취준생을 위한 이력서 작성 플랫폼', '비회원도 체험이 가능하며', '이력서 템플릿을 제공', '미리보기 & PDF로 다운로드 & 인쇄를 지원합니다'],
    includes: ['UI Design', 'Front-end', 'Deploy'],
    year: ['2021'],
  },
  {
    id: 3,
    title: 'Airmug Pro',
    subtitle: 'Apple interaction project',
    desc: 'Airmug Pro는 애플 웹사이트에 적용된 인터랙션들을 공부하면서 만든 클론 토이 프로젝트입니다',
    desc2: '해당 프로젝트를 진행하면서 인터랙션 기법을 위한 스크롤에 대한 이해를 높일 수 있었고',
    desc3: '고해상도 비디오 인터랙션 그리고 고해상도 이미지 처리를 위한 캔버스를 어떻게 다뤄야하는지 좋은 공부가 되었던 프로젝트 입니다',
    itemTitle: ['Assignment', 'Objective', 'Project Includes', 'Year'],
    assignment: ['고해상도 비디오 인터랙션', '스크롤을 이용한 키프레임과 요소 컨트롤', '고해상도 이미지 처리를 위한 캔버스 활용'],
    objective: ['스크롤에 맞춰 나오게 되는 텍스트 애니메이션', '스크롤에 맞춰 재생되는 비디오', '캔버스를 활용한 이미지 애니메이션'],
    includes: ['UI Design', 'Front-end', 'Deploy'],
    year: ['2020', '2021'],
  },
  {
    id: 4,
    title: 'Portfolio Project',
    subtitle: 'Front-end Portfolio',
    desc: '프로젝트를 모아서 소개하는 웹 포트폴리오 프로젝트 입니다',
    itemTitle: ['Assignment', 'Objective', 'Project Includes', 'Year'],
    assignment: ['HTML 마크업', 'Module css 스타일링', 'React-hook', 'React-reveal 라이브러리를 활용한 스크롤 이벤트', 'React-route 를 통한 페이지 분기 처리'],
    objective: ['Navbar Link를 통해 github와, blog로 이동할 수 있습니다', '상단 email 혹은 contact rens 클릭 시 이메일을 발송할 수 있습니다', '각 프로젝트 별 깃허브 주소와 배포 된 웹사이트 그리고 추가 설명을 볼 수 있는 페이지로 이동할 수 있습니다',],
    includes: ['UI Design', 'Front-end', 'Deploy'],
    year: ['2021'],
  },
  {
    id: 5,
    title: 'Find Carrot',
    subtitle: '벌레를 피해 당근 찾아내기',
    desc: 'Find Carrot은 Javascript로 제작한 토이 프로젝트 입니다',
    desc2: '게임이 시작되면 랜덤으로 벌레와 당근이 주어지고 주어진 시간안에 당근만을 찾아내야 하는 게임입니다',
    desc3: '해당 프로젝트를 진행하면서 상황에 따른 각 이벤트들을 어떻게 컨트롤해야하는지',
    desc4: 'DOM 요소를 어떻게 컨트롤 해야하는지에 대한 이해도를 높일 수 있었습니다',
    desc5: '2020년 프로젝트 제작 후 리팩토링을 진행하면서 Class를 통한 모듈화를 진행했습니다',
    itemTitle: ['Assignment', 'Objective', 'Project Includes', 'Year'],
    assignment: ['HTML 마크업', 'CSS 스타일링', 'JS를 통해 DOM요소 컨트롤 및 이벤트 생성'],
    objective: ['게임 시작 후 타이머 작동', '정해진 시간내에 당근만을 찾아내야합니다', '게임 클리어 혹은 실패시 팝업창이 생성됩니다'],
    includes: ['UI Design', 'Front-end', 'Deploy'],
    year: ['2020', '2021'],
  },
];

export default Datas;
