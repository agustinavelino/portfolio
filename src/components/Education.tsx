import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import Timeline from './Timeline'

export default function Education() {
  const {
    content: { education },
  } = useLanguage()

  return (
    <Section id="education" label="Education">
      <Timeline
        entries={education.map((item) => ({
          title: item.degree,
          subtitle: item.institution,
          period: item.period,
          description: item.description,
        }))}
      />
    </Section>
  )
}
