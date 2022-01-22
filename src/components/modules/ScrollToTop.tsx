import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const buttonClassName = useMemo(
    () =>
      `group fixed bottom-4 right-4 flex justify-center items-center border-2 border-gray-800 p-2 shadow-lg rounded transition transform-gpu bg-gray-800 hover:bg-white ${
        isVisible ? '' : 'scale-0'
      } sm:right-8 2xl:hidden`,
    [isVisible]
  );

  const handleScrollToTop = useCallback(
    () =>
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      }),
    []
  );

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={buttonClassName}
      onClick={handleScrollToTop}
      aria-label='scroll to top'
    >
      <span
        className='inline-block transform-gpu transition w-4 h-4 border-b-2 border-l-2 border-t-0 border-r-0 border-white
        rotate-135 translate-y-1 group-hover:border-gray-800'
      />
    </button>
  );
};

export default ScrollToTop;
