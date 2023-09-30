const Footer = () => {
  const SOCIALLINKS = [
    {
      name: 'Github',
      link: 'https://github.com/janfrancksen',
    },
    {
      name: 'Dribble',
      link: '',
    },
    {
      name: 'Behance',
      link: '',
    },
  ];

  return (
    <footer
      id="contact"
      className="h-screen flex flex-col gap-y-4 justify-center items-center"
    >
      <h2 className="text-xl font-bold uppercase">j1n.dev</h2>
      <div>
        {SOCIALLINKS.map((social, index) => (
          <div key={social.name} className="inline">
            <a href={social.link} className="hover:underline">
              {social.name}
            </a>
            {index !== SOCIALLINKS.length - 1 && ' - '}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
