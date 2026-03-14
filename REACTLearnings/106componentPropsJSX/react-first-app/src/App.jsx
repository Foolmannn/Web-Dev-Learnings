import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  // in this return we write the jsx which is not simple html. Jsx is the html with the capabilities of the JS. It is stricter then basic html.
  // one return can return only one tag
  // use className instead of the class of the html
  // < >
  // </> is the wrapper which is treated as single tag to be returned
  return (
    <>
      <Navbar />
      <main className="hero"></main>
      <div className="cards">
        <Card
          title="Heading First "
          description="This is the description of the first card"
        />
        <Card
          title="Heading Second"
          description="This is the description of the first card"
        />
        <Card
          title="Heading Third "
          description="This is the description of the first card"
        />
        <Card
          title="Heading Fourth"
          description="This is the description of the first card"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
