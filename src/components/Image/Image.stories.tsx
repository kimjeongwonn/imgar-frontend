import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from './Image';

export default {
  title: 'Components/Image',
  component: Image,
  args: {
    id: 'AD3MbBi',
  },
  parameters: {
    docs: {
      description: {
        component: `**이미지** 컴포넌트는 src 또는 id(hash)를 입력받아 이미지 태그를 생성합니다.
        id를 입력받은 경우 webp 확장자를 우선적으로 요청하는 컴포넌트 입니다.
        단, src가 입력 되었다면 id를 무시하고 src를 attribute로 가지는 img 태그를 최우선으로 반환합니다.
        `,
      },
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} />;

export const IdImage = Template.bind({});

export const SrcImage = Template.bind({});
SrcImage.args = {
  src: 'https://i.imgur.com/AD3MbBi.jpg?&fidelity=grand',
};

export const CircleImage = Template.bind({});
CircleImage.args = {
  isCircle: true,
  width: '100px',
  src: 'https://imgur.com/user/yeongjong/avatar',
};