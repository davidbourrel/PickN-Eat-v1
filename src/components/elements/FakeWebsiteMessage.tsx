import { FC, memo, useCallback, useState } from 'react';

const FakeWebsiteMessage: FC = () => {
  const [removeMessage, setRemoveMessage] = useState(false);

  const handleRemoveMessage = useCallback(() => setRemoveMessage(true), []);

  return (
    <div
      className={`fixed bottom-0 w-full bg-red-900 text-white flex items-center justify-center p-4 ${
        removeMessage && 'hidden'
      }`}
    >
      <p className='font-light'>
        Ce site web est uniquement créé dans le but d'une présentation à un
        examen. Vous ne pourrez rien commander et aucune information bancaire ne
        sera sauvegardée.
      </p>
      <span
        onClick={handleRemoveMessage}
        className='w-1/6 flex-shrink-0 text-center text-lg font-semibold cursor-pointer transition hover:text-gray-900'
      >
        OK
      </span>
    </div>
  );
};

export default memo(FakeWebsiteMessage);
