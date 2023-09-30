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
      <h2 className="text-xl">j1n.dev</h2>
      <div>
        {SOCIALLINKS.map((social) => (
          <a href={social.link}>{social.name}</a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
