"use client"

import React from "react"
import { getHighlighter } from "shiki"

export default function CodeBlock(props: React.HTMLProps<HTMLPreElement>) {
    let lang = props?.children?.props?.className?.replace('language-', '')
  
    if (lang === 'diff') {
      lang = 'plaintext'
    }
  
    const children = props.children as
      | undefined
      | {
          props: {
            children: string
          }
        }
  
    const [copied, setCopied] = React.useState(false)
    const ref = React.useRef<any>(null)
  
    const code = children?.props.children
  
    const [codeElement, setCodeElement] = React.useState(
      <>
        {/* <pre ref={ref} className="shiki github-light">
          <code>{code}</code>
        </pre> */}
        {/* <pre ref={ref}  className="shiki  github-light dark:github-night dark:bg-gray-900 dark:text-gray-400">
          <code>{code}</code>
        </pre> */}

        <pre ref={ref}  className="shiki  github-light dark:github-night dark:bg-gray-900 dark:text-gray-400">
  <div className='language-id'>[lang-id]</div>
    <div className='code-container'>
    <code>{code}</code>
    </div>
  </pre> 
      </>
    )
  
    React[
      typeof document !== 'undefined' ? 'useLayoutEffect' : 'useEffect'
    ](() => {
      ;(async () => {
        const themes = ['github-light', 'github-night']
  
        const highlighter = await getHighlighter(lang, themes)
  
        const htmls = await Promise.all(
          themes.map((theme) =>
            highlighter.codeToHtml(code, {
              lang,
              theme,
            //   transformers: [transformerNotationDiff()],
            })
          )
        )
  
        setCodeElement(
          <div
            // className={`m-0 text-sm rounded-md w-full border border-gray-500/20 dark:border-gray-500/30`}
            dangerouslySetInnerHTML={{ __html: htmls.join('') }}
            ref={ref}
          />
        )
      })()
    }, [code, lang])
  
    return (
      <div
        className={`${props.className} w-full max-w-full relative not-prose`}
        style={props.style}
      >
        <div className="absolute flex items-stretch bg-white text-sm z-10 border border-gray-500/20 rounded-md -top-3 right-2 dark:bg-gray-800 overflow-hidden divide-x divide-gray-500/20">
          {lang ? <div className="px-2">{lang}</div> : null}
          <button
            className="px-2 flex items-center text-gray-500 hover:bg-gray-500 hover:text-gray-100 dark:hover:text-gray-200 transition duration-200"
            onClick={() => {
              navigator.clipboard.writeText(ref.current?.innerText || '')
              setCopied(true)
              setTimeout(() => setCopied(false), 2000)
            }}
            aria-label="Copy code to clipboard"
          >
            {copied ? <span className="text-xs">Copied!</span> :  <span className="text-xs">Copy!</span>}
          </button>
        </div>
        {codeElement}
      </div>
    )
  }
   