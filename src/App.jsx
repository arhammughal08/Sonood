import { RouterProvider } from 'react-router-dom'
import { routeConfig } from './routes/Routes'

export const App = () => <RouterProvider router={routeConfig} />