import PostItem from '@/app.feature/posts/postItem';
import { allPosts } from '@/contentlayer/generated';
import { compareDesc } from 'date-fns';

const getPosts = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.createdAt), new Date(b.createdAt));
  });

  return posts;
};

const PostsPage = async () => {
  const posts = await getPosts();

  return (
    <div className="px-4">
      <div className="mt-12 mb-10">
        <h1 className="text-5xl font-bold">기술블로그</h1>
      </div>
      {posts.map((post, idx) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};
export default PostsPage;
