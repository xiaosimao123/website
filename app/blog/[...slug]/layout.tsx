export default function BlogLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="relative w-full  px-4 py-8 mx-auto   md:px-8 md:py-16 lg:px-0  max-w-screen-3xl   ">
 
  
        {/* <div className="relative w-full grow"> */}
   
        {children}
      {/* </div> */}
      </div>
    )
  }