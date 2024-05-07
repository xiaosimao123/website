export default function BlogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="relative w-full   max-w-screen-3xl  lg:flex lg:items-start">
 
  
        <div className="relative w-full grow">
   
        {children}
      </div>
      </div>
    )
  }