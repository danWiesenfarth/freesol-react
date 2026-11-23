interface LayoutProps extends React.ComponentPropsWithoutRef<'section'> {}

export default function Layout({
  children,
  className = '',
  ...props
}: LayoutProps) {
  return (
    <section
      className={`
        flex w-full max-w-[1920px] mx-auto
        flex-col items-stretch overflow-hidden
        mt-6 px-2 lg:px-8 2xl:px-16
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}
