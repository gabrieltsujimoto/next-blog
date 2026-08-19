import { Header } from '@/components/Header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <div>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid red',
        }}
        headerTitle='About'
      />
      <section>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore
          deserunt culpa sed hic porro deleniti unde accusamus error tenetur
          earum dolorem voluptatem nobis nesciunt non, velit architecto? Ex
          consequatur architecto nihil neque, blanditiis voluptatibus quae modi
          voluptas amet itaque. Optio sint natus tenetur tempore maiores omnis
          iure sit porro id impedit at accusantium eius, nostrum quasi, nisi
          inventore perspiciatis ipsa magni doloremque deleniti corporis,
          corrupti alias aspernatur! Illo at labore facilis, quam, totam
          consectetur enim ipsum voluptates eum aspernatur corporis
          necessitatibus nulla rerum, dignissimos maxime doloribus voluptate
          consequuntur quidem. Eaque incidunt cumque nobis autem pariatur animi
          illo, eum sint.
        </div>
      </section>
    </div>
  );
}
