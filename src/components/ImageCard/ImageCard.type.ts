import { PostInfo } from '../../redux/storeTypes';

export interface SetWidthProps {
  /** 이미지 카드의 width를 설정할 수 있습니다. */
  imageCardWidth?: string | number;
}

export interface ImageCardProps {
  isAutoPlay: boolean;
  postInfo: PostInfo;
  ImageCardWidth: string | number;
}
