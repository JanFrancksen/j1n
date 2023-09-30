import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface ProjectReferenceProps {
  imgSource: StaticImageData | string;
  title: string;
  description: string;
  link: string;
  isExternal?: boolean;
}

const ProjectReference: React.FC<ProjectReferenceProps> = ({
  imgSource,
  title,
  description,
  link,
  isExternal,
}) => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="w-5/6 mx-auto relative">
        <div className="absolute bottom-8 left-8 p-8 z-10 border rounded backdrop-blur-lg bg-gray-900 bg-opacity-50 w-1/3">
          <h5 className="text-3xl mb-2">{title}</h5>{' '}
          <p className="mb-4">{description}</p>
          {isExternal ? (
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="underline"
            >
              Discover
            </a>
          ) : (
            <Link href={link} className="underline">
              Discover
            </Link>
          )}
        </div>
        <div className="bg-gray-900 h-[80dvh] w-full rounded">
          <div className="bg-red-200 rounded-t h-[95%] aspect-video absolute -bottom-24 hover:-bottom-12 right-12 transition-all hover:rotate-2 duration-1000 overflow-hidden">
            <Image
              src={imgSource}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectReference;
