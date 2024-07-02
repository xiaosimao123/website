 
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
import CodeBlock from './test'
 
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
      <pre
        className= "overflow-x-auto bg-gray-700 py-4 rounded-b-lg" 
        {...props}
      >
        <code>{children}</code>
      </pre>
    </div>
  );
};


 
export const components: MDXComponents = {
  // Global components
  Grid,
  Aside,

  RefSubLayout,
  Button,
  Image,
  TOCInline,
  // a: CustomLink,
  Card,
  ChevronLink,
  // pre: CustomCodeBlock,
  pre: CustomPre,
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
