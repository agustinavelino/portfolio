import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import Timeline from './Timeline'

export default function Experience() {
  const {
    content: { experience },
  } = useLanguage()

  return (
    <Section id="experience" label="Experience">
      <Timeline
        entries={experience.map((item) => ({
          title: item.role,
          subtitle: item.institution,
          period: item.period,
          description: item.description,
        }))}
      />
    </Section>
  )
}
