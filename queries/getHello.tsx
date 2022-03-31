export default async function getHello() {
  const response = await fetch("/api/hello");

  const data = await response.json();

  return data;
}
