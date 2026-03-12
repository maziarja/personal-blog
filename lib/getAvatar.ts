export async function getAvatar() {
  const res = await fetch(
    `${process.env.STRAPI_URL}/api/global?populate=profileImage`,
  );

  if (!res.ok) {
    throw new Error("Couldn't fetch the data");
  }

  const dataDoc = await res.json();
  const data = dataDoc.data;
  return data;
}
