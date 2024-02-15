import {  CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from '@mui/material/styles';
import { themeSettings } from "./util/theme"; 
import { useSelector } from "react-redux"
import { useMemo } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard";

const IndexApp=()=>{
  return <Navigate to="/dashboard" replace />
}
const App = () => {
  const mode=useSelector((state)=>state.theme.mode)
  const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<IndexApp />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
