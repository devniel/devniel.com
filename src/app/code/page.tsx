import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import imageContinuum from '@/images/projects/continuum.png'
import imageIndexCraft from '@/images/projects/indexcraft.png'
import imageJZCie from '@/images/projects/jzcie.png'
import imageChat from '@/images/projects/chat.png'
import imageUploader from '@/images/projects/uploader.png'

const projects = [
  {
    name: 'Devniel\'s Agent',
    description:
      'A Retrieval-Augmented Generation (RAG) application about me built with OpenAI ChatGPT 4o, OpenAI Embeddings, FastAPI, Python, Next.js, TypeScript, Postgres, PgVector, and Docker.',
    link: { href: 'https://chat.devniel.com', label: 'chat.devniel.com' },
    image: imageChat
  },
  {
    name: 'IndexCraft',
    description:
      'A generative AI experiment using ComfyUI and Fal.ai to generate stickers based on prompts. Powererd by a Three.js canvas, we can play with the stickers and compose them into a scene.',
    link: { href: 'https://indexcraft.devniel.com', label: 'indexcraft.devniel.com' },
    image: imageIndexCraft
  },
  {
    name: 'Continuum',
    description:
      'A data visualization exercise using the deck.gl library to handle large datasets using WebGL.',
    link: { href: 'https://continuum.devniel.com', label: 'continuum.devniel.com' },
    image: imageContinuum
  },
  {
    name: 'Uploader',
    description:
      'A resumable uploader using HTTP/2 request streaming, Go, Next.js, TailwindCSS, and Docker. Only works in Chrome because of the Streams API with the `half` duplex option.',
    link: { href: 'https://uploader.devniel.com', label: 'uploader.devniel.com' },
    image: imageUploader
  },
  {
    name: 'JZCie - Jesús Zambrano Compagnie',
    description:
      'A web CMS app for a choral group to manage and share their content and events. Created with Strapi and Next.js.',
    link: { href: 'https://jzcie.com', label: 'jzcie.com' },
    image: imageJZCie
  }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Code',
  description: 'Currently learning about Generative AI and WebGL.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Let the hacking begin."
      intro={
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          My demoable work in the open internet, between complete apps and experiments for learning while having fun. More projects are also available on my <a href="https://github.com/devniel" className="text-teal-500 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">Github</a>.
        </p>
      }
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex w-full items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:ring-0">
              <Image
                src={project.image as any}
                alt=""
                className="w-full rounded-md"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-teal-300">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
