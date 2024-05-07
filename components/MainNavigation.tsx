/* eslint-disable react/jsx-key */
"use client"
import { useKBar } from 'kbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, useState } from 'react'
import { Logo } from './Logo'
import { Icon, IconName } from './common/Icon'
import { isExternalUrl } from 'utils/helpers'
import { Label } from './common/Label'
import { ColorSchemeSwitcher } from './common/ColorSchemeSwitcher'
// import NavigationMenuDemo from './NavigationMenuDemo'
 
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';

const navLinks: Array<{ label: string; url: string,isHover:boolean }> = [
  { label: 'Documentation', url: '/docs',isHover:false },
  //
  // Removing this temporarily, until it is more active.
  { label: 'Blog', url: '/blog',isHover:false },

  { label: 'Tags', url: '/tags',isHover:false },

  { label: 'Projects', url: '/projects' ,isHover:false},
  { label: 'About', url: '/about' ,isHover:false},
  // { label: 'Menu', url: '/Menu' ,isHover:true},
  //
  // NOTE until we have a proper example overview page and multiple examples, link directly to Next.js example
  // { label: 'Examples', url: '/examples/nextjs' },
]

const iconLinks: Array<{ label: string; icon: IconName; url: string }> = [
  { label: 'Github', icon: 'github', url: 'https://github.com/contentlayerdev/contentlayer' },
  { label: 'Discord', icon: 'discord', url: 'https://discord.gg/rytFErsARm' },
]

const NavLink: FC<{ label?: string; hideLabel?: boolean; icon?: IconName; url: string }> = ({
  label,
  hideLabel = false,
  icon,
  url,
}) => {
  const pathname = usePathname()
  const active =  pathname.split('/')[1] == url.replace('/', '')

  return (
    <Link legacyBehavior href={url}>
      <a
        className={`group flex h-8 items-center rounded-md bg-transparent px-3 text-sm font-medium leading-none ${
          active
            ? 'bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-50'
            : 'text-slate-600 hover:bg-gray-50 hover:text-slate-700 dark:text-slate-300 dark:hover:bg-gray-900 dark:hover:text-slate-200'
        }`}
        target={isExternalUrl(url) ? '_blank' : undefined}
        rel={isExternalUrl(url) ? 'noreferrer' : undefined}
      >
        {icon && (
          <span className="block w-5 text-slate-400 group-hover:text-slate-500 dark:text-slate-500 dark:group-hover:text-slate-400">
            <Icon name={icon} />
          </span>
        )}
        {label && <span className={hideLabel ? 'sr-only' : ''}>{label}</span>}
      </a>
    </Link>
  )
}

export const SearchButton: FC<{ showShortcut?: boolean }> = ({ showShortcut = true }) => {
  const { query } = useKBar()

  return (
    <button
      aria-label="Search"
      onClick={query.toggle}
      className="flex items-center h-8 px-2 text-sm border border-gray-200 rounded-md cursor-text bg-gray-50 hover:border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700 dark:hover:bg-gray-800"
    >
      <span className="block w-3 mr-2">
        <Icon name="search" />
      </span>
      <span className="mr-8 text-slate-400 dark:text-slate-500">Search...</span>
      {showShortcut && <Label text="⌘K" />}
    </button>
  )
}

export const MainNavigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed z-50 w-full bg-white border-b border-gray-200 bg-opacity-90 backdrop-blur backdrop-filter dark:border-gray-800 dark:bg-gray-950">
      <div className="flex items-center justify-between w-full h-16 px-4 mx-auto max-w-screen-2xl md:px-8 lg:px-16">
        <div className="flex items-center space-x-2.5">
          <Link legacyBehavior href="/">
            <a className="flex items-center space-x-2.5 font-bold text-slate-800 no-underline dark:text-white">
              <Logo />
              <span className="-mt-0.5">Contentlayer</span>
            </a>
          </Link>
          <Label text="Beta" />
        </div>
        <div className="lg:hidden">
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="flex items-center justify-end w-8 h-8 text-slate-600 dark:text-slate-300"
          >
            <span className="inline-block w-4">
              <Icon name={open ? 'close' : 'bars'} />
            </span>
          </button>
          {open && (
            <div className="fixed inset-0 top-[65px] z-50 h-screen bg-gray-950/10 pb-20 backdrop-blur-lg backdrop-filter dark:bg-gray-950/50">
              <nav className="absolute right-0 h-full p-8 bg-white border-l border-gray-200 divide-y divide-gray-200 dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-950">
                <div className="flex flex-col items-end pb-8 space-y-2">
                  <div className="mb-2">
                    <SearchButton showShortcut={false} />
                  </div>
                  {navLinks.map(({ label, url }, index) => (
                    <NavLink
                      key={index}
                      label={label}
                      url={url}
                      icon={isExternalUrl(url) ? 'external-link' : undefined}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-end pt-8 space-x-4">
                  {iconLinks.map(({ label, icon, url }, index) => (
                    <NavLink key={index} label={label} hideLabel url={url} icon={icon} />
                  ))}
                </div>
              </nav>
            </div>
          )}
        </div>
        <nav className="items-center hidden divide-x divide-gray-200 dark:divide-gray-800 lg:flex">
          <div className="flex items-center pr-2 lg:space-x-4 lg:pr-8">
            {navLinks.map(({ label, url }, index) => (
              <NavLink key={index} label={label} url={url} icon={isExternalUrl(url) ? 'external-link' : undefined} />
            ))}
            {/* <NavigationMenuDemo  navLinks={navLinks}/> */}
            <div className="px-3">
              <SearchButton />
            </div>
          </div>
          <div className="flex items-center pl-2 lg:space-x-2 lg:pl-8">
            <ColorSchemeSwitcher />
            {iconLinks.map(({ label, icon, url }, index) => (
              <NavLink key={index} label={label} hideLabel url={url} icon={icon} />
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}


// eslint-disable-next-line react/display-name
const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames(
          'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
const NavigationMenuDemo = (navLinks: { label: any; url: any; }[] ) => {
return (
  <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
    <NavigationMenu.List className="center shadow-blackA4 m-0 flex list-none rounded-[6px] bg-white p-1 shadow-[0_2px_10px]">
    {navLinks["navLinks"].map(({ label, url ,isHover },index) => (
      isHover?
      <NavigationMenu.Item>
 <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            {label}{' '}
 
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                      <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                      <path d="M12 0H4V8H12V0Z"></path>
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Radix Primitives
                    </div>
                    <p className="text-mauve4 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="https://stitches.dev/" title="Stitches">
                CSS-in-JS with best-in-class developer experience.
              </ListItem>
              <ListItem href="/colors" title="Colors">
                Beautiful, thought-out palettes with auto dark mode.
              </ListItem>
              <ListItem href="https://icons.radix-ui.com/" title="Icons">
                A crisp set of 15x15 icons, balanced and consistent.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      :
            <NavigationMenu.Item>
<NavLink key={index} label={label} url={url} icon={isExternalUrl(url) ? 'external-link' : undefined} />
            </NavigationMenu.Item>
          ))}
{/* {JSON.stringify(navLinks)} */}
      <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
        <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
      </NavigationMenu.Indicator>
    </NavigationMenu.List>

    <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
      <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
    </div>
  </NavigationMenu.Root>
);
};

