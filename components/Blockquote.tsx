interface BlockquoteProps {
  children?: React.ReactNode
}
const Blockquote = (props: BlockquoteProps) => {
  const { children } = props
  return (
    <div className="relative    w-screen my-0 backdrop-blur bg-blue-300 py-40[px]">
      <div className="">{children}</div>
    </div>
  )
}

export default Blockquote
