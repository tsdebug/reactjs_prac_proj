import Caffe from "./caffe"

function App() {

  const username = "Tanushree"  // use curly braces to treate a word as a variable and to print it's value instead of the word simply

  // Only one element can be returned ! thats why we use div or empty elements to enclose other several elements inside it !
  return (
    // ***Wrong!***
    // <Caffe/>
    // <h1>Caffe & React Practice - with Vite</h1>
    // <p>Test Para</p>

    // ***single div or empty element encloseing all other elements***
    // Fragment
    <>
     <Caffe/>
     <h1>Caffe & React Practice - with Vite; {username}</h1>  
     {/* {username} - is called evaluated expression means it only returns the final output */}
     <p>Test Para</p>
    </>
  )
}
 
export default App