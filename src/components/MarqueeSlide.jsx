// Marquee

// import รูปแข่งเอามาทำเป็น Marquee
import  Logo1 from  './MarqueePic/ComCamp-Unity.jpg'
import  Logo2 from  './MarqueePic/INC-project.jpg'
import  Logo3 from  './MarqueePic/MathCampPic.jpg'
import  Logo4 from  './MarqueePic/PhyBattlePic.jpg'
import  Logo5 from  './MarqueePic/POSN-phy.jpg'
import  Logo6 from  './MarqueePic/RaiCampOnsite-Pic-2.jpg'
import  Logo7 from  './MarqueePic/RaiCampOnsite-Pic.jpg'
// import  Logo8 from  './MarqueePic/TRC-CERT2025-4.jpg'
import  Logo9 from  './MarqueePic/TRC2025-1.jpg'
import  Logo10 from  './MarqueePic/TRC2025-2.jpg'
import  Logo11 from  './MarqueePic/TRC2025-3.jpg'
import  Logo12 from  './MarqueePic/WinterMusic.jpg'


let CompetitivePicture = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    // Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12
]

const MarqueeSlide = () => {
  return (
   <div className='flex mt-20'>
    {CompetitivePicture.map(logo => (
      <img className='mx-[2rem] rounded-xl w-70 h-50 md:w-100 md:h-70' src={logo} />
    ))}
   </div>
  )
}

export default MarqueeSlide