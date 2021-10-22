import {
  forwardRef,
  ForwardRefRenderFunction,
  PropsWithChildren,
  useMemo,
} from 'react';

interface FSectionProps {
  id?: string;
  className?: string;
}

const Section: ForwardRefRenderFunction<
  HTMLElement,
  PropsWithChildren<FSectionProps>
> = ({ id, className, children }, ref) => {
  
  const computedClassName = useMemo(
    () =>
      `flex flex-col px-8 pt-8 w-full xl:mx-auto xl:max-w-7xl ${
        className ?? ''
      }`,
    [className]
  );

  return (
    <section id={id} ref={ref} className={computedClassName}>
      {children}
    </section>
  );
};
export default forwardRef(Section);
