export const pDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const details = await res.json();
  return details;
};