import { ReactNode } from 'react';

const IndexPageContent = ({ children }: { children: ReactNode }) => {
  return (
    <section className="overflow-hidden p-4 md:px-[65px] md:pb-[50px]">
      {children}
    </section>
  );
};

export default IndexPageContent;
