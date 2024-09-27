import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface AnimatedComponentProps {
  children: React.ReactNode
}

export function AnimatedComponent({ children }: AnimatedComponentProps) {
  const [isHover, setHover] = useState(false)

  return (
    <Link
      href="/"
      aria-label="Home"
      className="pointer-events-auto block w-fit"
    >
      <div className={'flex w-fit'}>
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          animate={{ scale: isHover ? 1.1 : 1 }} // Scale effect on hover
          transition={{ duration: 0.3 }} // Smooth transition
        >
          <motion.div
            animate={{ rotate: isHover ? 360 : 0 }} // Rotate effect on hover
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </Link>
  )
}
