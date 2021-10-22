import { FC, useCallback } from 'react';

interface SearchMenuProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const SearchMenu: FC<SearchMenuProps> = ({ searchValue, setSearchValue }) => {
  const handleInputChange = useCallback(
    (e) => {
      setSearchValue(e.target.value);
    },
    [setSearchValue]
  );

  return (
    <form className='flex flex-col my-6'>
      <label htmlFor='searchmenu' className='font-semibold mb-2'>
        Search your menu:
      </label>
      <input
        id='searchmenu'
        value={searchValue}
        type='text'
        placeholder='Search...'
        onChange={handleInputChange}
        className='border shadow-inner rounded p-1 max-w-xs appearance-none'
      />
    </form>
  );
};

export default SearchMenu;
