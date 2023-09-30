import Image from 'next/image';
import me from '@/public/me.png';

const Hero = () => {
  return (
    <section
      className="xl:w-5/6 max-xl:p-4 mx-auto h-screen flex items-center justify-center relative"
      id="home"
    >
      <div className="w-fit mr-auto">
        <h1 className="text-7xl sm:text-9xl font-bold uppercase">
          Design
          <br />
          && Code
        </h1>
        <h2 className="text-xl">
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
      <Image
        src={me}
        alt="Jan, a blond guy with glasses, tattoos and a beige shirt."
        className="absolute right-0 bottom-0 h-full w-auto -z-10"
      />
    </section>
  );
};

export default Hero;
