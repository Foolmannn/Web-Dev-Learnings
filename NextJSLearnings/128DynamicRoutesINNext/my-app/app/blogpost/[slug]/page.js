export default async function Page({ params }) {
  const { slug } = await params
//   throw new Error("Error happened ") //this is for testing 
  let languages = ["python","javascript","c++","c#"]
  if(languages.includes(slug)){
    return <div>My Post: {slug}</div>
  }
  else{
    return <div>Post not found </div>
  }
  return <div>My Post: {slug}</div>
}