 
import clsx from "clsx"
import React from "react"
const OOF_GRAD = `bg-gradient-to-br from-rose-200 to-rose-200/30 bg-clip-text text-transparent`
export const Aside = ({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) => {
  return (
    <div className="z-10 border-l-2 border-rose-200/5 pl-3">
      {title ? (
        <div className="mb-2 text-base italic text-opacity-100">{title}</div>
      ) : null}

      <div
        className={clsx(
          "[&>span[data-rehype-pretty-code-fragment]]:!text-[11px] text-sm",
          OOF_GRAD,
        )}
      >
        {children}
      </div>
    </div>
  )
}
