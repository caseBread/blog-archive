import TagList from '../../postItem/tagList';

const PostDetailHeader: React.FC<{
  title: string;
  createdAt: string;
  tags?: string[];
}> = ({ title, createdAt, tags }) => {
  return (
    <div>
      <h1 className="text-5xl font-bold mb-[21px]">{title}</h1>
      <div className="flex gap-[60px]">
        <span>
          <time className="text-gray-700">{createdAt}</time>
        </span>
        <div className="flex gap-[28px]">
          <TagList tags={tags} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailHeader;
