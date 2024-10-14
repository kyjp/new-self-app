import React, { FC, useRef, useState } from 'react'



const Slider: FC<TinderSwiperProps> = ({
    db,
    changePendingDiagnose
}) => {
    const [lastDirection, setLastDirection] = useState<string>()
    const [currentIndex, setCurrentIndex] = useState<number>(db.length - 1)
    const [percent, setPercent] = useState<number>(0)
    const currentIndexRef = useRef(currentIndex)
  return (
    <div>Slider</div>
  )
}

export default Slider