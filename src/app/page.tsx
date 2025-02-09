import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoIBM from '@/images/logos/ibm.svg'
import logoCriteo from '@/images/logos/criteo.svg'
import logoRoundedBlack from '@/images/logos/rounded-black.png'
import logoRoundedWhite from '@/images/logos/rounded-white.png'

import image1 from '@/images/photos/image-1.jpg'  
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import image6 from '@/images/photos/image-6.jpg'

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

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LabIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
        d="M9 3L9 12.5L4.5 20.5C4.16667 21 4.5 21.5 5 21.5L19 21.5C19.5 21.5 19.8333 21 19.5 20.5L15 12.5L15 3"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M7 3L17 3"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M11.5 9L12.5 9"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M10.5 6L13.5 6"
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
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
  url?: string
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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white">
        <Image src={role.logo} alt="" className="h-7 w-7 p-0.5" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          <Link href={role.url ?? ''} target="_blank">{role.company}</Link>
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
      company: 'Rounded',
      title: 'Senior Software Engineer',
      logo: logoRoundedBlack,
      start: 'Jan 2025',
      end: 'Present',
      url: 'https://callrounded.com',
    },
    {
      company: 'CRITEO',
      title: 'Software Engineer II',
      logo: logoCriteo,
      start: 'Jan 2020',
      end: 'Jun 2024',
      url: 'https://criteo.com',
    },
    {
      company: 'IBM',
      title: 'Software Engineer',
      logo: logoIBM,
      start: 'May 2014',
      end: 'Dec 2019',
      url: 'https://ibm.com',
    },
  ]

  return (
    <div className="p-6 dark:border-zinc-800 border-l-[1px] border-zinc-200">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/DANIEL_MAURICIO_FLORES-CV-November-2024.pdf"
        target="_blank"
        variant="primary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition  group-active:stroke-zinc-600  dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
      <Button
        href="/code"
        target="_blank"
        variant="primary"
        className="group mt-3 w-full items-start"
      >
        Check out some of my work
        <LabIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  let alts: string[] = [
    'At Criteo, circa 10/2019.',
    'At IBM Argentina, circa 2018.',
    'At University of Lima, circa 2012.',
    'At the Casino Paris, circa May 2024.',
    'At Criteo, circa May 2024.',
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image6, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              title={alts[imageIndex]}
              alt={alts[imageIndex]}
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
      <Container className="mt-14 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <div className="max-w-2xl">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                Software Engineer
              </h1>
              <h2 className="text-1xl font-bold tracking-tight text-zinc-800 sm:text-2xl dark:text-zinc-100">
                @Rounded ⎯ ex: CRITEO, IBM.
              </h2>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                10+ years of industry experience, full-stack software engineer,
                tech-stack agnostic generalist with a product-oriented,
                innovation-focused, and multi-project-driven mindset.
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                🧢 At{' '}
                <a href="https://callrounded.com" className="text-white">
                  <strong>Rounded</strong>
                </a>
                , we are developing a platform to build, test, deploy and monitor AI vocal agents via web or phonecalls.

              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                🧢 At{' '}
                <a href="https://criteo.com" className="text-orange-500">
                  <strong>CRITEO</strong>
                </a>
                , I developed dashboards, analytics tools and AI-powered
                applications, implementing user interfaces and backend services
                to aggregate advertising big data into interactive reporting
                solutions allowing advertisers to make data-driven decisions.
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                🧢 At{' '}
                <a href="https://ibm.com" className="text-blue-500">
                  <strong>IBM</strong>
                </a>
                , I developed SAP mobile and web applications, implemented
                AI-powered chatbots with IBM Cloud, delivered dashboards for
                multiple projects and earned a global IBM award for technical
                volunteering work.
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                I&apos;m peruvian 🇵🇪 and based in Paris 🇫🇷 since 2020.
              </p>
              <div className="mt-6 flex gap-6">
                <SocialLink
                  href="https://x.com/devniel/"
                  aria-label="Follow on X"
                  icon={XIcon}
                />
                <SocialLink
                  href="https://github.com/devniel/"
                  aria-label="Follow on GitHub"
                  icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/devniel/"
                  aria-label="Follow on LinkedIn"
                  icon={LinkedInIcon}
                />
              </div>
            </div>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
