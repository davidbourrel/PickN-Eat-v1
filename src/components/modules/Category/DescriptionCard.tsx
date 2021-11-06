import { FC, useMemo, useState } from 'react';

interface MenuCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const DescriptionCard: FC<MenuCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const descriptionClassName = useMemo(
    () =>
      `bg-white transition-height max-h-0 overflow-hidden opacity-0 duration-300 ${
        isActive
          ? 'max-h-screen  overflow-visible opacity-100 duration-700'
          : ''
      }`,
    [isActive]
  );

  return (
    <div className='card flex flex-col shadow-md rounded transition sm:hover:shadow-lg overflow-hidden'>
      <div className='overflow-hidden'>
        <img
          src={imageUrl}
          alt={title}
          className='h-44 w-full object-cover transition duration-300 transform-gpu hover:scale-125 filter contrast-75 hover:contrast-100 '
        />
      </div>
      <div className='p-3'>
        <div
          className='relative flex justify-between items-center w-100 text-left pb-4 font-semibold outline-none select-none transition hover:text-red-700'
          onClick={handleToggle}
          role='button'
          tabIndex={0}
          aria-hidden='true'
        >
          <h3>{title}</h3>
          <span
            className={`inline-block transform transition-transform w-4 h-4 border-b-2 border-l-2 border-t-0 border-r-0 border-gray-800 ${
              isActive
                ? 'transform rotate-135 translate-y-1'
                : 'transform -rotate-45 -translate-y-1'
            }`}
          />
        </div>
        <p className={descriptionClassName}>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionCard;
