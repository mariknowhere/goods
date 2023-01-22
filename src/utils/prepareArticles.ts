export const prepareArticles = (articles: string) => {
  return {
    searchArticles: articles.split("\n"),
  };
}
