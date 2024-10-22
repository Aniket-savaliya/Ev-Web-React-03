import { useState } from "react"

const App = () => {
  let heroData =[
    {text1: "Dive into",text2: "what you love"},
    {text1: "Indulage",text2: "your passion"},
    {text1: "Give in to",text2: "your passion"},
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playstatus,setplaystatus] = useState(false);
  return (
    <div>
      <Background playstatus={playstatus} heroCount={heroCount}/>
    </div>
  )
}

export default App
