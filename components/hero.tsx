import Image from 'next/image';
import me from '@/public/me.png';

const Hero = () => {
  return (
    <section
      className="w-5/6 mx-auto h-screen flex items-center justify-center"
      id="home"
    >
      <div className="flex flex-col gap-y-4 w-fit">
        <h1 className="text-9xl font-bold uppercase">
          Design
          <br />
          && Code
        </h1>
        <h2 className="text-1xl">
          Jan Francksen, Frontend Developer{' '}
          <a
            href="https://www.cleverreach.com"
            rel="noopener noreferrer"
            target="_blank"
            className="hover:underline font-bold"
          >
            @cleverreach
          </a>
        </h2>
      </div>
      <div className="flex-1" />
      <Image
        src={me}
        alt="Jan, a blond guy with glasses, tattoos and a beige shirt."
        className="h-full w-auto"
      />
    </section>
  );
};

export default Hero;
