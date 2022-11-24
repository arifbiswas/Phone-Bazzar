import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes/Routes";
import { Toaster } from 'react-hot-toast';
import 'flowbite';

function App() {
  
  return (
    <div className="container mx-auto">
     <RouterProvider router={router}> 
     </RouterProvider>
     <Toaster />
    </div>
  );
}

export default App;
