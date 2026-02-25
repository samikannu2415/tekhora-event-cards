import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-wider text-foreground text-glow">
            About
          </h1>
          <div className="h-1 w-16 bg-primary mx-auto rounded-full glow-red" />
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            This marks the beginning of something extraordinary. The inaugural edition of our
            technical symposium introduces a vibrant platform that brings together curiosity,
            innovation, and collaboration under one roof. More than just an event, it is a space
            where ideas evolve into action, talents find their stage, and creativity pushes beyond
            conventional boundaries.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            With a diverse blend of technical and non-technical events, the symposium encourages
            participants to learn, compete, explore, and create while fostering meaningful
            connections. It is an invitation to challenge limits, share bold ideas, and be part of a
            journey that is only just beginning.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
