import React from 'react';
 
 

type Props = {
  params: { slug: string };
};

const BlogLayout = ({ children, params: { slug } }: React.PropsWithChildren<Props>) => {
  return (
    <section className="section">
 
 {children}
    </section>
  );
};

export default BlogLayout;
