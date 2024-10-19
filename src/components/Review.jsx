import { React, useState, useEffect } from 'react'
import { RCards } from './elements'
import SamKanu from '../assets/SamKanuProfile.jpeg'
import Pic from '../assets/NepaliBoy1.jpeg'
import Pic2 from '../assets/NepaliBoy2.jpeg'
function Review() {
  let customer_info = [
    {
      name: "Sam Kanu",
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. “",
      image: SamKanu
    },
    {
      name: "Cecian",
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. “",
      image: Pic
    },
    {
      name: "Rajesh Shrestha",
      text: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. “",
      image: Pic2
    }
  ]
  const [translateW, setTranslateW] = useState(0)

  useEffect(() => {
    let intervalId = setInterval(() => {
      setTranslateW(prev => {

        if (prev >= (customer_info.length - 1)) return 0
        else return prev + 1
      })
    }, 9000)

    return () => { clearInterval(intervalId) }
  }, [translateW])

  return (
    <div className="container max-w-7xl mx-auto  overflow-x-hidden bg-red-50 space-y-20 rounded-xl lg:py-10">
      <h2 className='text-center font-jakarta font-bold text-xl sm:text-4xl lg:text-5xl lg:mb-10 mb-4 text-red-700 '>Hear from those who trust us</h2>
      <div className=" flex lg:w-11/12"
        style={{ transform: `translateX(-${translateW * 100}%)`, transition: 'all 3s ease', }} >
          {customer_info.map((obj, i) => <RCards name={obj.name} image={obj.image} text={obj.text} key={i} opacity={i===translateW?'opacity-100':'opacity-0'} />)}
      </div>
    </div>
  )
}
// 

export default Review