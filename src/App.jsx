import skyImage from './assets/sky.png' 
import roadImage from './assets/road.png' 

export default function App() {
  return (
    <>
      {/* sky picture */}
      <div className="sky min-h-[50%]">
        <img src={ skyImage } alt="sky" />
      </div>

      {/* road picture */}
      <div className="road min-h-[50%]">
        <img src={ roadImage } alt="road" />
      </div>
    </>
  )
}