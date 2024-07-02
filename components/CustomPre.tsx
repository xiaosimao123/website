"use client"
// ref: https://philstainer.io/blog/copy-code-button-markdown

import clsx from 'clsx';
 
import { useEffect, useRef, useState } from 'react';
import { IconCopy } from './ui/Icon/icons/IconCopy';
import { IconCheck } from './ui/Icon/icons/IconCheck';
import { Button } from './Button';
const copyToClipboard = (text: string) => {
    return new Promise((resolve, reject) => {
      if (navigator?.clipboard) {
        const cb = navigator.clipboard;
  
        cb.writeText(text).then(resolve).catch(reject);
      } else {
        try {
          const body = document.querySelector('body');
  
          const textarea = document.createElement('textarea');
          body?.appendChild(textarea);
  
          textarea.value = text;
          textarea.select();
          document.execCommand('copy');
  
          body?.removeChild(textarea);
  
          resolve(void 0);
        } catch (e) {
          reject(e);
        }
      }
    });
  };

const removeDuplicateNewLine = (text: string): string => {
    if (!text) return text;
  
    return text
      .replace(/(\r\n\r\n)/gm, `\r\n`)
      .replace(/(\n\n)/gm, `\n`)
      .replace(/(\r\r)/gm, `\r`);
  };

type Props = React.ComponentPropsWithoutRef<'pre'>;

function CustomPre({ children, className, ...props }: Props) {
  const preRef = useRef<HTMLPreElement>(null);
 

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      await copyToClipboard(removeDuplicateNewLine(preRef.current.innerText));
      setCopied(true);
    }
  };

  return (
    <div className="group relative pre">
      <pre
        {...props}
        ref={preRef}
        className={clsx(className, 'focus:outline-none','pre')}
      >
        <div className="absolute top-0 right-0 m-4 flex items-center rounded-md ">
          <span
            className={clsx('hidden px-2 text-s text-purple-400 ease-in', {
              'group-hover:flex': copied,
            })}
          >
            { 'copied' }
          </span>

          <button
            type="button"
            aria-label="Copy to Clipboard"
            onClick={onClick}
            disabled={copied}
            className={clsx(
              'hidden rounded-md border bg-transparent p-2 transition ease-in focus:outline-none group-hover:flex',
              {
                'border-purple-400': copied,
                ' focus:ring-4 ':
                  !copied,
              }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={clsx('pointer-events-none h-4 w-4', {
                'text-purple-400 dark:text-gray-400': !copied,
                'text-purple-400': copied,
              })}
              fill="none"
              viewBox="0 0 14 14"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
                d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                className={clsx({ block: !copied, hidden: copied })}
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.8}
 
                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                className={clsx({ block: copied, hidden: !copied })}
              />
            </svg>
          </button>

 
        </div>

        {children}
      </pre>
    </div>

 
  );
}

export default CustomPre;