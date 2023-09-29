import MDXContent from '@/app.feature/posts/postDetail/MDXcontent';
import PostDetailHeader from '@/app.feature/posts/postDetail/postDetailHeader';
import { Post, allPosts } from '@/contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

const getPost = (postId: string): Post => {
  const filteredPosts = allPosts.filter((post) => post._id === postId);

  if (filteredPosts.length !== 1) {
    // TODO : wrong url 예외처리
    throw new Error('잘못된 주소');
  }

  return filteredPosts[0];
};

type TPageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params }: TPageProps) => {
  const postId = params.id;
  const post = getPost(postId);

  const { title, createdAt, tags } = post;

  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <article className="pt-[70px] px-4">
      <header>
        <PostDetailHeader title={title} createdAt={createdAt} tags={tags} />
      </header>
      <section>
        <MDXContent component={<MDXComponent />} />
      </section>
    </article>
  );
};

export default Page;
