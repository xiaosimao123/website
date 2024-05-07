import React from 'react'
import { links } from 'data/Developers'
// import AnnouncementsData from 'data/Announcements.json'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'


type Props = {
  text: string
  description?: string
  url?: string
  icon?: string
}

const Developers = () => {
 

  const iconSections = links.map((link: Props) => {
    const { text, description, url, icon } = link

    const content = (
      <div className="dark:hover:bg-scale-500 -m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
        {/* <!-- Heroicon name: support --> */}
        <svg
          className="stroke-scale-900 h-5 w-5 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d={icon} />
        </svg>
        <div className="ml-4">
          <h5 className="text-scale-1200 text-base">{text}</h5>
          <p className="text-scale-900 text-sm">{description}</p>
        </div>
      </div>
    )
    return url ? (
      <Link legacyBehavior href={url} key={text}>
        <a className="dark:hover:bg-scale-500 col-span-6 rounded p-3 transition hover:bg-gray-50">
          {content}
        </a>
      </Link>
    ) : (
      <div
        key={text}
        className="-m-3 flex flex-col justify-between rounded-lg p-3 transition duration-150 ease-in-out"
      >
        {content}
      </div>
    )
  })

  return (
    <div className="grid grid-cols-12">
      <nav className="col-span-6 py-8" aria-labelledby="developersResources">
        <div className="m-3 grid grid-cols-12 gap-4 py-4 pr-3">{iconSections}</div>
      </nav>
      <div className="col-span-6">
        <div className="m-3 mx-6">
          <p className="p">Latest announcements</p>
          <ul className="mt-6 space-y-3">

          </ul>
          <div className="pt-4">
            {/* <Link  label="Explore more" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Developers
