import { useState, useEffect, useRef } from 'react'

const Projects = () => {
  const [name, setName] = useState('');
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="top-50 relative">
      <input placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
      <h1>My name is {name} <br /> and it used to be {prevName.current}</h1>
    </div>
  )
}

export default Projects