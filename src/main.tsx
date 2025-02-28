import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Set your SciChart license key here
// SciChartSurface.setRuntimeLicenseKey("YOUR_LICENSE_KEY");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)