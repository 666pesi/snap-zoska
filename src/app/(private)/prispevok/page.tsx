// src/app/prispevok/page.tsx

import { PrismaClient } from '@prisma/client';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

const prisma = new PrismaClient();

export const metadata = { title: "Zoznam Prispevkov | ZoškaSnap" };

async function fetchPosts() {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
  return posts;
}

export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <div style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        Zoznam Prispevkov
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Link href={`/prispevok/${post.id}`} passHref>
              <Card>
                <CardActionArea>
                  {post.imageUrl && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={post.imageUrl}
                      alt="Post Image"
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6">
                      {post.user?.name || 'Anonymný užívateľ'}
                    </Typography>
                    {post.caption && (
                      <Typography variant="body2" color="textSecondary">
                        {post.caption.substring(0, 50)}...
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
