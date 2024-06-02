import './home.scss'
import HomeSlide from '../../feateurs/home/HomeSlide'
import HomeMenu from '../../feateurs/home/HomeMenu'
import HomeRecipe from '../../feateurs/home/HomeRecipe'

const Home = () => {
  return (
    <div className='homeContainer'>
     <HomeSlide/> 
     <HomeMenu/>
     <HomeRecipe/>
    </div>
  )
}

export default Home
