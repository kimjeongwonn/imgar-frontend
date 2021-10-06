export interface Size {
  size: 'small' | 'large';
}

export interface VoteProps extends Size {
  count: number;
  direction: 'row' | 'column';
}

export interface ContainterProps extends Size {
  direction: VoteProps['direction'];
}
