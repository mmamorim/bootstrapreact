import { Icon } from "@iconify/react";

function App() {

  return (
    <>
      <div className="text-xl m-2 p-2 bg-gray-200 rounded">
        Bootstrap React + vite
      </div>
      <div className="text-xl m-2 p-2 border">
        + WindCss
      </div>
      <div className="text-xl m-2 p-2 border">
        + Iconify <Icon icon="mdi:home" className="text-2xl" />
      </div>
    </>
  )
}

export default App
