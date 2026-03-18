import Section from "../components/Section";

const experienceItems = [
  {
    years: "November 2025 - Present",
    role: "Undergraduate Research Assistant",
    company: "MAX Systems Lab",
    summary: "Working toward Google Scheduling Competition and researching compiler optimization for heterogenous architectures.",
  },
  {
    years: "May 2025 - August 2025",
    role: "Software Engineering Intern",
    company: "Amazon Web Services",
    summary: "Implemented iterative distillation for AWS Bedrock.",
  },
];

function Home() {
  return (
    <main className="page" id="top">
      <section className="hero">
        <h1>Nafi Chowdhury</h1>
      </section>

      <Section id="about" title="About me">
        <p>
          Incoming Software Engineer at AWS (Bedrock) in Santa Clara, CA.
          Currently working as an Undergraduate Research Assistant at MAX Systems Lab@USF.
        </p>
      </Section>

      <Section id="experience" title="Experience">
        <div className="experience-list">
          {experienceItems.map((item) => (
            <article className="experience-card" key={`${item.years}-${item.role}`}>
              <p className="experience-years">{item.years}</p>
              <div>
                <h3>
                  {item.role}
                  <br></br>
                  <span>{item.company}</span>
                </h3>
                <p>{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
          <p>August 2022 - May 2026</p>
          <p>Bachelor of Science in Computer Science</p>
          <p>Minor in Mathematics</p>
      </Section>

      <Section id="contact" title="Contact">
        <div className="contact-card">
          <div className="contact-links" aria-label="Contact links">
            <a href="mailto:nafi314159@gmail.com">Email</a>
            <a href="https://github.com/Wimage3141" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/nafi3141/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Home;
