import { useEffect, useState } from 'react';

function UseEffectArray() {
  const [myArray, setMyArray] = useState<string[]>([]);

  useEffect(() => console.log('myArray updated'), [myArray])
  useEffect(() => console.log('first element updated'), [myArray[0]])
  useEffect(() => console.log('second element updated'), [myArray[1]])
  useEffect(() => console.log('rerendered'))

  return (
    <>
      <div>myArray: {JSON.stringify(myArray)}</div>
      <div className="card">
        <button onClick={() => setMyArray(['foo', 'bar'])}>
          {"setMyObject(['foo', 'bar'])"}
        </button>
        <button onClick={() => setMyArray(['foo', 'newBar'])}>
          {"setMyObject(['foo', 'newBar'])"}
        </button>
        <button onClick={() => setMyArray(['newFoo', 'newBar'])}>
          {"setMyObject(['newFoo', 'newBar'])"}
        </button>
        <button onClick={() => setMyArray([])}>
          {"setMyObject([])"}
        </button>
        <button onClick={() => setMyArray((prevState) => [...prevState])}>
          {"setMyObject((prevState) => [...prevState])"}
        </button>
        <button onClick={() => setMyArray((prevState) => prevState)}>
          {"setMyObject((prevState) => prevState)"}
        </button>
        <button onClick={() => { myArray.push('third element')}}>
          {"myArray.push('third element')"}
        </button>
      </div>
    </>
  )
}

export default UseEffectArray
