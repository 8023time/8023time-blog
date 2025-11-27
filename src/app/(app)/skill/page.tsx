'use client';

import { skills } from './config';
import { Tag } from '@components/ui/tag';
import { Container, Logo } from './components/index';
import { SectionDivider } from '@components/layout/SectionDivider';

export default function Skill() {
  return (
    <SectionDivider>
      {skills.map((item, index) => (
        <Container key={item.name} speed={50} gap={40} direction={index % 2 === 0 ? 'left' : 'right'}>
          {item.list.map((item) => (
            <div key={item.name} className='rounded- flex flex-col items-center justify-center gap-2'>
              <Logo name={item.name} src={item.src} hoverColor={item.color} />
              <Tag className='dark:bg-gray-500 dark:text-gray-300'>{item.name}</Tag>
            </div>
          ))}
        </Container>
      ))}
    </SectionDivider>
  );
}
