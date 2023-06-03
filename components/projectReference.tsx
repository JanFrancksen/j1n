import Link from 'next/link';

interface ProjectReferenceProps {
  imgSource?: string;
  title: string;
  description: string;
  link: string;
}

const ProjectReference: React.FC<ProjectReferenceProps> = ({
  imgSource,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white">
      <div className="w-5/6 mx-auto relative">
        <div className="absolute bottom-8 left-8 p-8 border rounded backdrop-blur-sm bg-neutral-900 bg-opacity-20 w-96">
          <h5 className="text-3xl mb-2">{title}</h5>{' '}
          <p className="mb-4">{description}</p>
          <Link href={link} className="">
            Discover
          </Link>
        </div>
        <div className="bg-gray-900 h-[80dvh] w-full rounded" />
      </div>
    </div>
  );
};

export default ProjectReference;
