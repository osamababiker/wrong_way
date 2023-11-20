import React from 'react'
import { Canvas } from '@react-three/fiber'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [ 2.5, 4, 6  ]
      }}
    >
      <App />
    </Canvas>
  </React.StrictMode>,
)
 