import { useEffect, useState } from 'react';

function UseEffectObject() {
  const [myObject, setMyObject] = useState<{foo: string, bar: string}>({
    foo: 'initialFoo',
    bar: 'initialBar'})

  useEffect(() => console.log('my object updated'), [myObject])
  useEffect(() => console.log('foo updated'), [myObject?.foo])
  useEffect(() => console.log('bar updated'), [myObject?.bar])
  useEffect(() => console.log('rerendered'))

  return (
    <>
      <div>myObject: {`foo: ${myObject.foo} bar: ${myObject.bar}`}</div>
      <div className="card">
        <button onClick={() => setMyObject({foo: 'foo', bar: 'bar'})}>
          setMyObject({'{'}foo: 'foo', bar: 'bar'{'}'})
        </button>
        <button onClick={() => setMyObject((prevState) => ({...prevState}))}>
          {"setMyObject((prevState) => ({{...prevState}}))"}
        </button>
        <button onClick={() => setMyObject((prevState) => prevState)}>
          {"setMyObject((prevState) => prevState)"}
        </button>
        <button onClick={() => setMyObject((prevState) => ({...prevState, foo: 'newFoo'}))}>
          {"setMyObject((prevState) => ({...prevState, foo: 'newFoo'})"}
        </button>
        <button onClick={() => setMyObject((prevState) => ({...prevState, bar: 'newBar'}))}>
          {"setMyObject((prevState) => ({...prevState, bar: 'newBar'})"}
        </button>
        <button onClick={() => {myObject.foo = 'directlySettingFoo'}}>
          {"myObject.foo = 'directlySettingFoo'"}
        </button>
      </div>
    </>
  )
}

export default UseEffectObject
