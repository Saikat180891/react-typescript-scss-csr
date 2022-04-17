interface ArticleProps {
  children: any;
}

const Article = ({ children }: ArticleProps): JSX.Element => {
  return <article>{children}</article>;
};

export default Article;
