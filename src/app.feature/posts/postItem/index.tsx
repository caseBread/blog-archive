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
      <div className="mr-12 min-w-[170px] h-[170px] relative max-sm:hidden">
        <Image
          className="rounded-lg"
          src={post.thumbnail ?? ''}
          alt="썸네일"
          loading="lazy"
          fill
          objectFit="cover"
        />
      </div>
      <div className="">
        <div className="py-3">
          <h2 className="mb-5 font-semibold text-2xl line-clamp-2">
            {post.title}
          </h2>
          <p className="mb-3 font-normal text-base text-gray-800 line-clamp-2">
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
