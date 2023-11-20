import sky from './assets/sky.png' 
import road from './assets/road.png' 
import carCenter from './assets/cars/car_center.png' 

export default function App() {

  return (
    <>
      {/* sky picture */}
      <img src={ sky } className="sky" alt="sky" />

      <div className="relative">
         {/* road picture */}
        <img src={ road } className="road" alt="road" />
        {/* car picture */}
         <img  src={ carCenter } className="absolute car" alt="car" />
      </div>
    </>
  )
}