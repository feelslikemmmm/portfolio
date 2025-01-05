import QuizImage from '@assets/images/experience/quiz.jpg';
import StoreImage from '@assets/images/experience/store.jpg';
import BackofficeImage from '@assets/images/experience/backoffice.jpg';
import BigcStoreImage from '@assets/images/experience/bigc_store.jpg';
import BigcTicketImage from '@assets/images/experience/bigc_ticket.jpg';
import BigcMyPageImage from '@assets/images/experience/bigc_mypage.jpg';
import BigcLoginImage from '@assets/images/experience/bigc_login.jpg';
import BigcWebEtcImage from '@assets/images/experience/bigc_web_etc.jpg';

export type ExperienceType = {
  id: number;
  title: string;
  mark?: string;
  url: string;
  images: string;
  description?: string;
  detail: string[];
}[];

export const bigcEperienceList: ExperienceType = [
  {
    id: 0,
    title: 'E-commerce Platform Development',
    url: 'https://bigc.im/store',
    images: BigcStoreImage,
    detail: [
      `스토어 메인 페이지 구현`,
      ` ∙ 상품 카테고리 구현`,
      ` ∙ 메인 배너 상품 캐러셀 ui 구현`,
      `상품 상세 페이지 구현`,
      ` ∙ 상품 공유하기, 찜하기 기능 구현`,
      ` ∙ 상품 옵션 드롭다운 구현`,
      ` ∙ 상품 회당 구매 제한 유저당 구매 제한 기능 구현`,
      ` ∙ 상품 장바구니 추가 기능 구현`,
      ` ∙ 상품 리뷰 작성, 수정, 신고 기능 구현`,
      ` ∙ 프리오더 기능 구현(예약 구매)`,
    ],
  },
  {
    id: 1,
    title: 'Offline Ticketing System Development',
    url: 'https://bigc.im',
    images: BigcTicketImage,
    detail: [
      `seats.io 라이브러리를 활용해 오프라인 티켓팅 서비스 개발`,
      `티켓팅 ui 구현`,
      `계정당 좌석 구매 제한 기능`,
      `선택한 좌석 초기화 기능`,
      '선택된 좌석 목록 노출 및 구매하기 구현',
      '선착순 티켓팅 구현',
      '추첨형 티켓팅 구현',
    ],
  },
  {
    id: 2,
    title: 'Development of an Integrated My Page',
    url: 'https://bigc.im',
    images: BigcMyPageImage,
    detail: [
      `쿠폰 관리 페이지 구현`,
      ` ∙ 쿠폰 등록 기능 구현`,
      ` ∙ 쿠폰 사용 내역 페이지 구현`,
      `리뷰 관리 페이지 구현`,
      ` ∙ 작성가능한 리뷰 페이지, 작성한 리뷰 페이지 구현`,
      ` ∙ 리뷰 작성, 수정, 삭제, 신고 기능 구현`,
      `내 정보 수정 페이지 구현`,
      ` ∙ 프로필 변경, 비밀번호, 휴대폰 번호, 맞춤형 정보, 서비스 탈퇴 기능 구현`,
      `공지사항 페이지 구현`,
      `마이페이지 공통 페이지네이션 구현`,
    ],
  },
  {
    id: 3,
    title: 'Integrated Login',
    url: 'https://auth.bigc.im',
    images: BigcLoginImage,
    detail: [
      `빅크웹 / 빅크 모먼트 웹, 앱 / 빅크 셀렉트 웹 ,앱 총 5곳에서 개별적으로 존재하던 로그인을 하나의 통합 로그인 시스템으로 통합 개발`,
      `소셜 로그인 및 회원가입 (카카오, 페이스북, 라인, 애플, 구글) 연동`,
      `이메일 로그인 및 회원가입 연동`,
      `비밀번호 찾기 기능 구현`,
    ],
  },
  {
    id: 4,
    title: 'BIGC Web Etc',
    url: 'https://bigc.im',
    images: BigcWebEtcImage,
    detail: [
      `빅크 웹 레이아웃 ui 구현`,
      `팬클럽 인증 기능 구현`,
      `본인 인증 기능 구현`,
      `빅크 라이브 예정 안내 타이머 기능 구현`,
      `i18n을 활용한 다국어 적용`,
    ],
  },
];

export const forcEperienceList: ExperienceType = [
  {
    id: 0,
    title: 'Development of Quiz Service',
    url: 'https://quiz.forc.co.kr/',
    images: QuizImage,
    detail: [
      '오늘의 퀴즈 목록 등록 / 수정을 위한 백오피스 페이지 개발',
      '백 오피스에서 퀴즈 생성 시 작성 된 퀴즈 미리보기 뷰 개발',
      '유저가 퀴즈를 풀고 적립금을 받을 수 있는 콕퀴즈 웹뷰 페이지 개발',
      'Canvas API 를 활용한 복권 스크래치 기능 개발',
      'API 상태관리 및 에러 흐름 처리를 위해 React Query 도입',
      'Light house 웹페이지 분석을 이용해 웹뷰 성능 최적화 진행',
    ],
  },
  {
    id: 1,
    title: 'Development of Fork Shopping App Web View Store',
    url: 'https://quiz.forc.co.kr/',
    images: StoreImage,
    detail: [
      '스토어 내 카테고리 기능 개발',
      '스토어 카테고리 섹션별 캐러셀 제작',
      '기존 레거시 API 호출 및 상태관리를  React Query로 변경 작업',
    ],
  },
  {
    id: 2,
    title: 'Fork Shopping Back Office Maintenance',
    url: 'https://quiz.forc.co.kr/',
    images: BackofficeImage,
    detail: [
      '백 오피스내 리뷰 목록 페이지 리뷰 조회 기능 및 리뷰 수정 기능 개발',
      '포인트 목록 페이지 및 포인트 설정 관리 기능 개발',
      '기존 백오피스 레거시 코드를 개선한 두번째 버전 백오피스 홈페이지 개발',
    ],
  },
];
