function Container({ as: Component = 'div', className = '', children }) {
  return <Component className={`mx-auto w-full max-w-[1440px] px-5 md:px-8 xl:px-12 3xl:px-20 ${className}`}>{children}</Component>;
}

export default Container;
