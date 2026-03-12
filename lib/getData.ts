export async function getData(
  collection: string,
  fields?: string,
  limit?: number,
) {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/${collection}?populate=*&sort=createdAt:desc&${fields}&pagination[limit]=${limit}`,
    { cache: "no-cache" },
  );

  if (!res.ok) {
    throw new Error("Couldn't fetch the data");
  }

  const dataDoc = await res.json();
  const data = dataDoc.data;
  return data;
}
