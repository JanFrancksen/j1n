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
        id="philosophy"
        title="Design, Development and Content."
        subtitle="Philosophy"
        color="white"
        description="My journey in development, combined with visually stunning designs."
      >
        <ShowoffCard
          title="Development"
          content="Primarily developing in JavaScript / TypeScript. Working my way towards expanding my knowledge in a variety of programming languages like go and rust."
          number="01"
        />{' '}
        <ShowoffCard
          title="UI & UX Design"
          content="Coming from a design background I always love to create and imagine new visuals. Especially styles like brutalism and quirky individual designs catch my interest."
          number="02"
        />{' '}
        <ShowoffCard
          title="Content"
          content="As my knowledge grows I want to share my thoughts and help others get onto the journey of creating software and visually pleasing designs."
          number="03"
        />
      </ShowoffModule>

      <section id="projects" className="flex flex-col gap-y-8 bg-white py-8">
        <ProjectReference
          title="CookiBooki"
          description="The cookbook app to fix all the problems you could possibly get in the kitchen. Create or find recipes, use what you have in the fridge or use the extensive community features."
          link="https://www.cookibooki.app"
          isExternal
        />

        <ProjectReference
          title="Tooled"
          description="A collection of the best development and design tools on the market. Filterable, nicely displayed and constantly curated."
          link="/"
        />
      </section>

      <Footer />
    </main>
  );
}
