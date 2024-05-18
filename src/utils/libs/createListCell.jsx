const createListCell = (n, list) => {
  const items = n?.split("\n") ?? [];
  console.log(items);
  return (
    <ol className={`flex flex-col gap-2 ${!list ? "list-none" : ""}`}>
      {items.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ol>
  );
};

export { createListCell };
