import React from "react"
import Navigaton from "../components/Navigation/Navigation"
import GlobalStyles from "../assets/styles/globalStyles"

const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Navigaton />
    {children}
  </>
)

export default MainLayout
