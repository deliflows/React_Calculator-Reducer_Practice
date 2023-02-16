import React from "react";
import ReactDom from 'react-dom/client'
import App from "./App";

const theRoot = ReactDom.createRoot(document.getElementById('root'));

theRoot.render(
    <App/>
)