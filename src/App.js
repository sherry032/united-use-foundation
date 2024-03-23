import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
 const printFibonacci= ()=>{
  let n1 = 0
  let n2 = 1
  let nextTerm
  for(let i =1; i <= 7; i++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
  }
 }

 useEffect(()=>{
  printFibonacci()
  console.log(4 + 4 + "4" + 4+ 4 -4 +4)
 },[])
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
