import ShortestRouteImage from '../../assets/LandingImages/ShortestRoute.png'

const ShortestRoute = ({visibility}) => {
  return (
    visibility && <div className='h-[90vh] w-[90vw] flex items-center justify-center m-[auto]'> 
        <img src={ShortestRouteImage} alt="shortest route" className='h-full w-full shadow-sm drop-shadow-sm object-contain'/>
    </div>
  )
}

export default ShortestRoute;