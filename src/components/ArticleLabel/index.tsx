interface ArticleLabelProps {
  label: String;
  value: String;
}

const ArticleLabel = ({ label, value }: ArticleLabelProps): JSX.Element => {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500">{label}</label>
      <p>{value}</p>
    </div>
  );
};

export default ArticleLabel;
