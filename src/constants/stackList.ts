import JS from '@assets/images/stack/js-gif.gif';
import TS from '@assets/images/stack/ts-png.png';
import REACT from '@assets/images/stack/react-gif.gif';
import NEXT from '@assets/images/stack/next-png.png';
import CSS from '@assets/images/stack/css.gif.gif';

export type StackListType = {
  id: number;
  title: string;
  mark: string;
  url?: string;
  images: string;
  description: string;
  detail?: string[];
}[];

export const STACK_LIST: StackListType = [
  {
    id: 1,
    images: JS,
    mark: 'Javascript',
    title: 'Javascript for Web Development',
    description: '웹 개발을 위해 자바스크립트를 사용하고 있어요',
  },
  {
    id: 2,
    images: TS,
    mark: 'Typescript',
    title: 'Typescript for code readability and safety',
    description:
      '코드의 가독성과 안정성을 높여주는 타입스크립를 사용하고 있어요',
  },
  {
    id: 3,
    images: REACT,
    mark: 'React',
    // title: 'Web UI Library React for SPA',
    title: 'Web UI Library',
    description: '웹 UI 라이브러리, 리액트를 사용하고 있어요',
  },
  {
    id: 4,
    images: NEXT,
    mark: 'NextJs',
    title: 'Next js for server side rendering',
    description: '서버사이드 렌더링을 위해, 넥스트 JS를 사용하고 있어요',
  },
  {
    id: 5,
    images: CSS,
    mark: 'CSS',
    title: 'Web Layout and Animation',
    description:
      '레이아웃 구성 및 각종 애니메이션을 CSS를 통해 구현하고 있어요',
  },
];
