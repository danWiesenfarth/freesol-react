type LayoutProps = React.ComponentPropsWithoutRef<'section'>;

export default function Layout({
  children,
  className = '',
  ...props
}: LayoutProps) {
  return (
    <section
      className={`
        mx-auto mt-6 flex w-full max-w-[1920px]
        flex-col items-stretch overflow-hidden
        px-4 lg:px-8 2xl:px-16
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
}
