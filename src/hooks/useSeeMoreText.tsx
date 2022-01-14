import { useMemo } from 'react';

const useSeeMoreText: (text: string) => string = (text) => {
  const description = useMemo(() => {
    const words = text.split(' ');

    if (words && words.length > 10) {
      words.length = 10;
    }
    return `${words.join(' ')}...`;
  }, [text]);

  return description;
};

export default useSeeMoreText;
