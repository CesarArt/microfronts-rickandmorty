import { Toaster } from "sonner"
import { MainLayoutPage } from "./pages/mainLayout"

function App() {

  return (
    <div className="bg-gray-100 w-full h-screen">
      <Toaster position="top-center" richColors closeButton/>
      <MainLayoutPage />
    </div>
  )
}

export default App
