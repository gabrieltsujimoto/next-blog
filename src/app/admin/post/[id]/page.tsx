import React from 'react';

type AdminPostPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({ params }: AdminPostPageProps) {
  const { id } = await params;
  return <div>AdminPostIdPage {id}</div>;
}
