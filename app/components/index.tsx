import { useState } from "react"

export default function MyApp() {
  const [advice, setAdvice] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  async function getAdvice(): Promise<void> {
    let response = await fetch('https://api.adviceslip.com/advice')
    let data = await response.json()
    setAdvice(data.slip.advice)
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Hello World!</h1>
      <p>{advice}</p>
      <button onClick={getAdvice}>Get A new advice!</button>
      <p>Button clicked {count}</p>
    </div>
  )
}
