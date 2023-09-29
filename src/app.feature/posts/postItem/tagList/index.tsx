const TagList: React.FC<{ tags?: string[] }> = ({ tags }) => {
  if (!tags) return null;

  return (
    <div className="flex gap-7">
      {tags.map((tag, idx) => (
        <span className="before:content-['#']" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
