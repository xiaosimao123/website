export default function LandingLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className='mx-auto   max-w-[1260px]  px-4 sm:px-6  xl:px-0'>
   
        {children}
      </div>
    )
  }