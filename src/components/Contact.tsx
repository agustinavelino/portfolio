import { useLanguage } from '../contexts/LanguageContext'
import Section from './Section'
import { btnOutline, btnQuiet } from '@/lib/styles'

export default function Contact() {
  const {
    content: { personalInfo, ui },
  } = useLanguage()

  const [user, domain] = personalInfo.email.split('@')

  return (
    <Section id="contact" label="Contact">
      <div className="flex flex-col items-start gap-7">
        <a
          href={`mailto:${personalInfo.email}`}
          className="max-w-full pb-1.5 text-[clamp(19px,3.4vw,38px)] leading-[1.1] font-semibold tracking-[-0.025em] wrap-anywhere text-ink [font-variation-settings:'wdth'_110] bg-[linear-gradient(var(--color-signal),var(--color-signal))] bg-[length:100%_2px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:bg-[length:100%_40%] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          {/* el <wbr> deja que el correo parta por el @ en pantallas angostas */}
          {user}
          <wbr />
          {`@${domain}`}
        </a>

        <div className="flex flex-wrap gap-2.5">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={btnOutline}>
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={btnOutline}>
            LinkedIn
          </a>
          {personalInfo.cv && (
            <a href={personalInfo.cv} download className={btnQuiet}>
              {ui.hero.downloadCV}
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
