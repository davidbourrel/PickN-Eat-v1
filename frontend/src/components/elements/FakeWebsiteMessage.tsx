import { FC, memo, useCallback, useState } from 'react';

const FakeWebsiteMessage: FC = () => {
  const [removeMessage, setRemoveMessage] = useState(false);

  const handleRemoveMessage = useCallback(() => setRemoveMessage(true), []);

  return (
    <div
      className={`fixed bottom-0 w-full bg-red-900 text-white  ${
        removeMessage && 'hidden'
      }`}
    >
      <div className='flex p-4 sm:px-8 xl:mx-auto xl:max-w-6xl items-center justify-center'>
        <p className='font-light'>
          Attention! Ce site web est factice. Il a été créé dans le but d'une
          présentation à un examen. Vous ne pourrez rien commander et aucune
          information bancaire ne sera sauvegardée.
        </p>
        <span className='w-1/6 flex-shrink-0 text-right'>
          <button
            onClick={handleRemoveMessage}
            className='cursor-pointer transition hover:text-gray-900 text-lg font-semibold'
            aria-label='warning message'
          >
            OK
          </button>
        </span>
      </div>
    </div>
  );
};

export default memo(FakeWebsiteMessage);
