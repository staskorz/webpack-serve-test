import React from "react"
import { hot } from "react-hot-loader"

import Comp from "./components/Comp"

const App = () => <Comp />

/* global module:false */
export default hot(module)(App)
