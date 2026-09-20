import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'

export default function About() {
  const {
    content: { personalInfo },
  } = useLanguage()

  return (
    <Section id="about" label="About" layout="centered">
      <div className="space-y-[18px]">
        {personalInfo.about.map((paragraph, i) => (
          <p
            key={i}
            className="text-[19px] leading-[1.62] tracking-[-0.005em] text-pretty text-ink max-[640px]:text-[16.5px]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  )
}
