export default function DocLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="relative w-full max-w-screen-1.5xl  lg:flex lg:items-start">
   
        {children}
      </div>
 
    )
  }