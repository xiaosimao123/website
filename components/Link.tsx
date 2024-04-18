/* eslint-disable jsx-a11y/anchor-has-content */
import NextLink from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, FC } from 'react'
import { Icon } from './common/Icon';

// const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
//   const isInternalLink = href && href.startsWith('/')
//   const isAnchorLink = href && href.startsWith('#')

//   if (isInternalLink) {
//     return <Link href={href} {...rest} />
//   }

//   if (isAnchorLink) {
//     return <a href={href} {...rest} />
//   }

//   return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
// }

// export default CustomLink


export const Link: FC<{ href: string; children: ReactNode }> = ({ href, children }) => {
  const isExternalUrl = !(href.startsWith('/') || href.startsWith('#'))

  return (
    <NextLink legacyBehavior href={href}>
      <a
        className="inline-flex items-center m-0 space-x-1"
        target={isExternalUrl ? '_blank' : undefined}
        rel={isExternalUrl ? 'noreferrer' : undefined}
      >
        <span>{children}</span>
        {isExternalUrl && (
          <span className="block w-4">
            <Icon name="external-link" />
          </span>
        )}
      </a>
    </NextLink>
  )
}
