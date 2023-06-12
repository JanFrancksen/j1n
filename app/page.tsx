import Footer from '@/components/footer';
import Hero from '@/components/hero';
import ProjectReference from '@/components/projectReference';
import ShowoffCard from '@/components/showoffCard';
import ShowoffModule from '@/components/showoffModule';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ShowoffModule
        id="skills"
        title="Design, Development and Content."
        subtitle="Skills"
        color="white"
        description="Take your online presence to the next level with my expert web design and content creation services."
      >
        <ShowoffCard
          title="Development"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="01"
        />{' '}
        <ShowoffCard
          title="Design"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="02"
        />{' '}
        <ShowoffCard
          title="Content"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="03"
        />
      </ShowoffModule>

      <section id="projects" className="flex flex-col gap-y-8 bg-white">
        <ProjectReference
          title="Test Projekt"
          description="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
          link="/"
        />

        <ProjectReference
          title="Test Projekt"
          description="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
          link="/"
        />

        <ProjectReference
          title="Test Projekt"
          description="Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet Lorem Ipsum Dolor sit amet"
          link="/"
        />
      </section>

      <ShowoffModule
        id="about"
        title="Design, Development and Content."
        subtitle="SERVICES"
        color="white"
        description="Take your online presence to the next level with my expert web design and content creation services."
      >
        <ShowoffCard
          title="Web Design"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="01"
        />{' '}
        <ShowoffCard
          title="Web Design"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="02"
        />{' '}
        <ShowoffCard
          title="Web Design"
          content="Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results."
          number="03"
        />
      </ShowoffModule>
      <Footer />
    </main>
  );
}
