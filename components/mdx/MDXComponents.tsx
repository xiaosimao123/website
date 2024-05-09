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
 
 
 
 
 
export const components: MDXComponents = {
  RefSubLayout,
 
  Image,
  TOCInline,
  // a: CustomLink,
  Card,
  ChevronLink,
  pre: CustomPre,
  Callout,
  table: TableWrapper,
  BlogNewsletterForm,
  StepHikeCompact,
  // blockquote: Blockquote,
  h2: H2,
  h3: H3,
  h4: H4,
  // a: Link,
  OptionsTable,
  OptionTitle,
  OptionDescription,
}
