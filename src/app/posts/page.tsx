import PostItem from '@/app.feature/posts/postItem';

const PostsPage = () => {
  return (
    <div className="m-auto px-4" style={{ maxWidth: '1056px' }}>
      <div className="mt-12 mb-10">
        <h1 className="text-5xl font-bold">기술블로그</h1>
      </div>
      <PostItem />
    </div>
  );
};
export default PostsPage;
