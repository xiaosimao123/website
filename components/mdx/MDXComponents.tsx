 
import TOCInline from 'pliny/ui/TOCInline'
// import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from '../Image'

import TableWrapper from '../TableWrapper'
import { DocsCard as Card } from '@/components/docs/DocsCard'
import { ChevronLink } from '@/components/common/ChevronLink'
import { Callout } from '../common/Callout'
import { Link } from '../Link'
import {   OptionsTable,
  OptionTitle,
  OptionDescription } from '../docs/OptionsTable'
import { H2, H3, H4 } from '@/components/common/Headings'
import Blockquote from '../Blockquote'
import StepHikeCompact from '../common/StepHikeCompact'
 
import  RefSubLayout   from '../layouts/ref/RefSubLayout'
import CustomPre from '../CustomPre'
import { Button } from '../Button'
 
import { FileTree,FileTreeFolder,FileTreeFile } from '../file-tree'
import { Code } from '../Code'
import { Grid } from '../common/Grid'
import { Aside } from '../common/Aside'
import pre from '../pre'
import React from 'react'
import { getHighlighter } from 'shiki'
import { transformerNotationDiff } from '@shikijs/transformers'
import * as CodeBlock from '../CodeBlock'
import {
  Box,
  Flex,
  Em,
  Heading,
  Kbd,
  Separator,
  Strong,
  Tabs,
  Text,
} from '@radix-ui/themes'

const isReactElementWithChildren = (
  element?: unknown
): element is React.ReactElement<{ children: React.ReactNode }> =>
  React.isValidElement(element) && !!(element.props as any).children

export const childrenText = (children?: unknown): string | null => {
  if (isReactElementWithChildren(children)) {
    return childrenText(children.props?.children)
  }

  if (Array.isArray(children)) {
    return children.map(childrenText).flat().filter(Boolean).join('')
  }

  if (typeof children === 'string') {
    return children
  }

  return null
}
const CustomCodeBlock = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  // Convert the children into a string
  return (
    <div className="mb-4 mt-6 relative rounded-lg  ">
      {/* <div className="flex justify-end py-1 pr-3 bg-zinc-600 text-gray-300 rounded-t-lg">
        <CopyButton>{children}</CopyButton>
      </div> */}
      <pre className="overflow-x-auto bg-gray-700 py-4 rounded-b-lg" {...props}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
type Props = React.ComponentPropsWithoutRef<'pre'>
export const components: MDXComponents = {
  // Global components
  Tabs,
  Box,
  Flex,
  Text,

  Grid,
  Aside,

  CodeBlock,
  // CodeBlockRoot,
  // CodeBlockCode,
  // CodeBlockPre,
  // CodeBlockContent,
  // CodeBlock: () => {
  //   return CodeBlock
  // },
  // Tabs,
  RefSubLayout,
  Button,
  Image,
  TOCInline,
  // a: CustomLink,
  Card,
  ChevronLink,
  // pre: CustomCodeBlock,
  //pre: CustomPre,
  pre: ({ children }) => {
    console.log(children?.props.live ?? 'live')
    return (
      // <>
      //   {children?.props.live && (
      //     <CodeBlock.LivePreview
      //       code={childrenText(children) ?? ''}
      //       scroll={children.props.scroll}
      //     />
      //   )}

      //   <CustomPre>{children}</CustomPre>
      // </>
      <div>
        {children.props.live && (
          <CodeBlock.LivePreview
            code={childrenText(children) ?? ''}
            scroll={children.props.scroll}
          />
        )}

        <CustomPre>{children}</CustomPre>
      </div>
    )
  },
  // pre: ({ children, live }: any) => (
  //   console.log("3243")
  //   return (<div>
  //     <CodeBlock.LivePreview
  //       code={childrenText(children) ?? ''}
  //       scroll={children.props.scroll}
  //     />

  //     {/* <CodeBlock.Content>
  //       <CodeBlock.Pre>{children}</CodeBlock.Pre>
  //       <CodeBlock.CopyButton />
  //     </CodeBlock.Content> */}
  //     <CustomPre>{children}</CustomPre>
  //   </div>)
  // ),
  Callout,
  table: TableWrapper,
  BlogNewsletterForm,
  StepHikeCompact,
  // blockquote: Blockquote,
  h2: H2,
  h3: H3,
  h4: H4,
  // Code,
  FileTree,
  FileTreeFolder,
  FileTreeFile,
  // a: Link,
  OptionsTable,
  OptionTitle,
  OptionDescription,
}
