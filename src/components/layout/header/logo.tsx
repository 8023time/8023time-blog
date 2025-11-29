import * as Avatar from '@radix-ui/react-avatar';

export const AvatarComponent = () => {
  return (
    <div className='flex items-center gap-3'>
      <Avatar.Root className='relative h-8 w-8 overflow-hidden rounded md:h-10 md:w-10'>
        <Avatar.Image className='h-full w-full object-cover' src='/avatar.png' alt='Avatar' />
        <Avatar.Fallback
          delayMs={600}
          className='flex h-full w-full items-center justify-center text-sm font-bold text-white'
        >
          🤯
        </Avatar.Fallback>
      </Avatar.Root>
      <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-center font-sans text-lg font-bold tracking-wide text-transparent dark:from-gray-100 dark:to-gray-300'>
        寻觅~流光
      </span>
    </div>
  );
};
