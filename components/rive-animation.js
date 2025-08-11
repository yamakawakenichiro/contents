'use client'

import { useRive } from '@rive-app/react-canvas'

const RiveAnimation = ({ src, stateMachines, width, height }) => {
  const { RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachines,
    autoplay: true,
  })

  return (
    <div style={{ width: width, height: height }}>
      <RiveComponent />
    </div>
  )
}

export default RiveAnimation
