import style from './Hero.module.css'
import wellcom from '../../assets/Logo/wellcom.jpg'
function Hero() {
  return (
    <>
    <div className={style.container}>
    <div className={style.img_box}>
        <img src={wellcom}  />
    </div>
    </div>
 
    </>
  )
}

export default Hero