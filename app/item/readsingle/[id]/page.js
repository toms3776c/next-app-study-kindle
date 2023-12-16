import Image from "next/image";

const getSingleItem = async (id) => {
  const response = await fetch(
    `http://localhost:3000/api/item/readsingle/${id}`,
    { cache: "no-store" },
  );
  const jsonData = await response.json();
  const singleItem = jsonData.singleItem;
  return singleItem;
};

const ReadSingleItem = async (context) => {
  const singleItem = await getSingleItem(context.params.id);

  return (
    <div>
      <div>
        <Image
          src={singleItem.image}
          width={750}
          height={500}
          alt="item-image"
          priority
        />
      </div>
      <div>
        <h1>{singleItem.title}</h1>
        <h2>￥{singleItem.price}</h2>
        <hr />
        <p>{singleItem.description}</p>
      </div>
    </div>
  );
};

export default ReadSingleItem;