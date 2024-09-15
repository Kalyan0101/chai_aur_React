import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // use ref hooks
  const passRef = useRef(null)

  // password generator
  const passGenerate = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHTJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "@#!$&*[{()}]~`%^+=/"

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  // for copying password to clipboard
  const copyPassToCBoard = useCallback( () => {
    passRef.current?.select()
    passRef.current?.setSelectionRange(0, 9);

    window.navigator.clipboard.writeText(password)

  }, [password])

  useEffect(() => {
    passGenerate()
  }, [length, numberAllowed, charAllowed, passGenerate])
  
  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-2xl mb-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 text-xl"
            placeholder="Password"
            readOnly
            ref={passRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" 
            onClick={copyPassToCBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          {/* range */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length {length}</label>
          </div>
          {/* number */}
          <div className="flex items-center gap-x-1 ml-8">
            <input
              id="numberInput"
              type="checkbox"
              className="cursor-pointer"
              onChange={() => {setnumberAllowed( (pre) => (!pre) )}}
            />
            <label htmlFor="numberInput">Number Allowed</label>
          </div>
          {/* special charecter */}
          <div className="flex items-center gap-x-1 ml-8">
            <input
              id="charInput"
              type="checkbox"
              className="cursor-pointer"
              onChange={(e) => {setcharAllowed(e.target.checked)}}
            />
            <label htmlFor="charInput">Char Allowed</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
