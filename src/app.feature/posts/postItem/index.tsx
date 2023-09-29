import Image from 'next/image';
import TagList from './tagList';
import { Post } from '@/contentlayer/generated';
import Link from 'next/link';

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const redirectPostUrl = `/posts/${post._id}`;

  return (
    <Link
      href={redirectPostUrl}
      className="flex py-4 border-b-1 border-gray-200"
    >
      <div>
        <Image
          className="rounded-lg bg-slate-400"
          src={post.thumbnail ?? ''}
          alt="썸네일"
          width="170"
          height="170"
        />
      </div>
      <div className="pl-12">
        <div className="py-3">
          <h2 className="pb-5 font-semibold text-2xl">{post.title}</h2>
          <p className="pb-3 font-normal text-base text-gray-800">
            {post.description}
          </p>
          <time className="font-normal text-sm text-gray-700">
            {post.createdAt}
          </time>
        </div>
        <TagList tags={post.tags} />
      </div>
    </Link>
  );
};

export default PostItem;
