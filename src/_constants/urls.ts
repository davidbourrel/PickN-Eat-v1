// HEADER
export const BURGER_CLASSNAME = `w-8 h-2 border-t-2 transition duration-300`;

// MAIN NAVBAR
export const LIST_itemClassName =
  'mr-2 transition text-gray-800 hover:text-red-700';

// LATERAL NAVBAR
export const OPENED_itemClassName =
  'mr-2 px-4 rounded transition mb-7 text-gray-800 bg-gray-100 hover:text-red-700 hover:bg-white';
export const LINK_itemClassName = 'flex justify-between items-center';

// FOOTER
export const colClassName = 'px-8 sm:flex-1';
export const headingClassName = 'font-bold text-lg py-5';
export const itemClassName = 'text-sm mb-2 hover:underline cursor-pointer';

// FETCH ALL MENUS
export const getMenusUrl = `${process.env.REACT_APP_API_URL}menus`;
export const getDessertsUrl = `${process.env.REACT_APP_API_URL}desserts`;
export const getSaladsUrl = `${process.env.REACT_APP_API_URL}salads`;
