const Hero = () => {
  return (
    <section className="w-5/6 mx-auto h-screen flex items-center justify-center">
      <div className="flex flex-col gap-y-4 w-fit">
        <h1 className="text-9xl">
          Design <br />
          && Code
        </h1>
        <h2 className="text-1xl">
          Developer currently working
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
    </section>
  );
};

export default Hero;
