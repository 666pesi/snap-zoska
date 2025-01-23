// src/app/post/[id]/page.tsx

import { PrismaClient } from '@prisma/client';
import { notFound } from 'next/navigation';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const prisma = new PrismaClient();

export async function generateMetadata({ params }: { params: { id: string } }) {
  console.log('Metadata params:', params); 
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    include: { user: true },
  });

  if (!post) {
    console.log('Post not found for metadata:', params.id); 
    return { title: 'Post Not Found' };
  }

  return { title: `${post.caption || 'Detail Prispevku'} | ZoškaSnap` };
}

async function fetchPost(id: string) {
  console.log('Fetching post with ID:', id); 
  const post = await prisma.post.findUnique({
    where: { id },
    include: {
      user: {
        select: { name: true },
      },
    },
  });

  console.log('Fetched post:', post); 
  if (!post) {
    return null;
  }
  return post;
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  console.log('Params:', params); 
  const post = await fetchPost(params.id);

  if (!post) {
    console.log('Post not found for ID:', params.id); 
    notFound();
  }

  return (
    <Box sx={{ padding: '16px' }}>
      {post.imageUrl && (
        <Box
          component="img"
          src={post.imageUrl}
          alt="Post Image"
          sx={{ maxWidth: '100%', marginBottom: '16px', borderRadius: '8px' }}
        />
      )}
      <Typography variant="h4" gutterBottom>
        {post.caption || 'Bez popisu'}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Autor: {post.user?.name || 'Anonymný užívateľ'}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Vytvorené: {new Date(post.createdAt).toLocaleDateString()}
      </Typography>
    </Box>
  );
}
