interface ShowCasePageParams {
  params: {
    slug: string;
  };
}

export default function ShowCasePage({ params }: ShowCasePageParams) {
  const { slug } = params;

  return (
    <main>
      <h1>{`Project - ${slug}`}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cum porro
        hic illum beatae totam placeat reiciendis optio excepturi, quis eaque,
        itaque distinctio sit similique et velit tempore, nihil fuga?
      </p>
    </main>
  );
}
