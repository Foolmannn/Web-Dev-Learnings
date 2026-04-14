export default async function Page({ params }) {
  const { slug } = await params
  console.log(slug)
  return <div>My Post: {slug}</div>
}
//this is how we can catch multiple params with [...slug] refereing to array 