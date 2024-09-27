import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, ProIcon } from '@/components/SocialIcons'
import logoPum from '@/images/logos/pum.svg'
import logoEsgi from '@/images/logos/esgi.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SchoolIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16.8311 15.6402C17.5011 15.2002 18.3811 15.6802 18.3811 16.4802V17.7702C18.3811 19.0402 17.3911 20.4002 16.2011 20.8002L13.0111 21.8602C12.4511 22.0502 11.5411 22.0502 10.9911 21.8602L7.80109 20.8002C6.60109 20.4002 5.62109 19.0402 5.62109 17.7702V16.4702C5.62109 15.6802 6.50109 15.2002 7.16109 15.6302L9.22109 16.9702C10.0111 17.5002 11.0111 17.7602 12.0111 17.7602C13.0111 17.7602 14.0111 17.5002 14.8011 16.9702L16.8311 15.6402Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M19.9795 6.45859L13.9895 2.52859C12.9095 1.81859 11.1295 1.81859 10.0495 2.52859L4.02953 6.45859C2.09953 7.70859 2.09953 10.5386 4.02953 11.7986L5.62953 12.8386L10.0495 15.7186C11.1295 16.4286 12.9095 16.4286 13.9895 15.7186L18.3795 12.8386L19.7495 11.9386V14.9986C19.7495 15.4086 20.0895 15.7486 20.4995 15.7486C20.9095 15.7486 21.2495 15.4086 21.2495 14.9986V10.0786C21.6495 8.78859 21.2395 7.28859 19.9795 6.45859Z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props} target={'_blank'}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 dark:bg-zinc-800 dark:text-zinc-100">
      <h2 className="flex items-center justify-between text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Vous souhaitez en savoir plus sur moi ? 📩</span>
        <Link href={'/contact'} className={'w-fit'}>
          <Button className="m-0 ml-4 flex-none">Contact</Button>
        </Link>
      </h2>
    </div>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-gray-200 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'PUM',
      title: 'Software Engineer en alternance',
      logo: logoPum,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="transform rounded-2xl border border-zinc-100 p-6 transition-transform hover:scale-105 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Schools() {
  let resume: Array<Role> = [
    {
      company: 'ESGI',
      title: 'Bachelor Ingénierie du Web',
      logo: logoEsgi,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
  ]

  return (
    <div className="transform rounded-2xl border border-zinc-100 p-6 transition-transform hover:scale-105 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SchoolIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Schools</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Hi, I’m Enzo QUELENIS 👋
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Je suis software engineer basé à Reims, en France. Je me spécialise
            dans la création de sites Web et d&apos;applications de haute
            qualité.{' '}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://github.com/Enzo-Qlns" icon={GitHubIcon}>
              Suivez-moi sur GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/enzoquelenis/"
              icon={LinkedInIcon}
            >
              Suivez-moi sur LinkedIn
            </SocialLink>
            <SocialLink href={'https://www.milleweb.fr'} icon={ProIcon}>
              Mon site professionnel
            </SocialLink>
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-7 text-justify text-base text-zinc-600 dark:text-zinc-400">
            <p>
              👨‍💻 Actuellement en trosième année d&apos;alternance à l&apos;ESGI
              en spécialité Ingénierie du Web, une école spécialisée dans
              l&apos;informatique. Je réalise cette alternance à la PUM 👨‍💼, où
              je travaille en étroite collaboration avec des professionnels du
              bâtiments pour acquérir des compétences pratiques et des
              connaissances de pointe en matière de développement WEB.
            </p>
            <p>
              Je suis très enthousiaste et passionné pour les nouvelles
              technologies. Curieux et motivé, je suis constamment à la
              recherche de nouvelles compétences et de nouveaux défis pour
              améliorer mes connaissances et mes capacités. J&apos;ai également
              une grande capacité d&apos;adaptation et une excellente aptitude à
              travailler en équipe. 🤝
            </p>
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
            <Schools />
          </div>
        </div>
      </Container>
    </>
  )
}
