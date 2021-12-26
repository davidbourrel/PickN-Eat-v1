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
      `flex flex-col w-full p-4 sm:p-8 xl:mx-auto xl:max-w-6xl ${
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
