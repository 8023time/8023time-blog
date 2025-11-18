import { Tag } from '@components/index';
import { skills } from '@data/skill.data';
import { Container, Logo } from './components';

export default function Skill() {
  return (
    <>
      {skills.map((item, index) => (
        <Container key={item.name} speed={50} gap={40} direction={index % 2 === 0 ? 'left' : 'right'}>
          {item.list.map((item) => (
            <div className='rounded- flex flex-col items-center justify-center gap-2'>
              <Logo key={item.name} name={item.name} src={item.src} hoverColor={item.color} />
              <Tag className='dark:bg-gray-500 dark:text-gray-300'>{item.name}</Tag>
            </div>
          ))}
        </Container>
      ))}
    </>
  );
}
