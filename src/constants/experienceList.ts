import QuizImage from '@assets/images/experience/quiz.jpg';
import StoreImage from '@assets/images/experience/store.jpg';
import BackofficeImage from '@assets/images/experience/backoffice.jpg';

export type ExperienceType = {
  id: number;
  title: string;
  mark?: string;
  url: string;
  images: string;
  description?: string;
  detail: string[];
}[];

export const ExperienceList: ExperienceType = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
