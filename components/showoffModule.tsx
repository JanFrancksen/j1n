import React from 'react';

interface ShowoffModuleProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: 'black' | 'white';
  children: React.ReactNode;
}

const ShowoffModule: React.FC<ShowoffModuleProps> = ({
  id,
  title,
  subtitle,
  description,
  color,
  children,
}) => {
  return (
    <section
      id={id}
      className={`${
        color === 'white' ? 'bg-white text-neutral-950' : ''
      } min-h-screen flex justify-center items-center`}
    >
      <div className="grid lg:grid-cols-2 max-lg:gap-y-4 w-5/6 mx-auto py-12">
        <div className="flex flex-col gap-y-4 sticky top-24 h-fit">
          <h4 className="uppercase">{subtitle}</h4>
          <h3 className="text-4xl">{title}</h3>
          <p className="w-1/2">{description}</p>
        </div>
        <div className="flex flex-col gap-y-8">{children}</div>
      </div>
    </section>
  );
};

export default ShowoffModule;
