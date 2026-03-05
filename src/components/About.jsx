import { Section, Card, TagList } from './Common'
import { aboutItems, skills, tools } from '../data'

// About encompasses 3 section HERO, ABOUT, and SKILLS
export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="glass hero">
        <h1>Nicolas Cyran</h1>
        <p className="sub">Software Developer</p>
        <p className="desc">
          I'm a software developer who's passionate about bringing my ideas
          to life through code. I enjoy a challenge; solving intricate puzzles is what I do best!
        </p>
      </section>

      {/* ABOUT SECTION */}
      <Section title="About">
        <Card>
          <div className="grid-3">
            {aboutItems.map((item, i) => (
              <div className="item" key={i}>
                <span className="label">{item.label}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* SKILLS & TOOLS SECTION */}
      <Section title="Skills &amp; Tools">
        <Card>
          <h3 className="sub-label">Languages</h3>
          <TagList items={skills} />
          <br />

          <h3 className="sub-label">Technologies</h3>
          <TagList items={tools} />
        </Card>
      </Section>
    </>
  )
}
