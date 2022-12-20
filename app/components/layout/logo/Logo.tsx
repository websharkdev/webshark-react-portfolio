import { Link as MuiLink } from '@mui/material'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { FC } from 'react'

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(45, 45, 45, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(45, 45, 45, 1)',
  },
}

const Logo: FC = () => (
  <Link href="/">
    <MuiLink className="logo" display="flex">
      <motion.svg width="259" height="56" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="item">
        <motion.path
          d="M0.5 0H56L94 31.5L127.5 0H179.5L154.388 22.5L168.216 33.5L172 30C177 39.5 199.4 36.5 198 43.5C197 48.5 190 47 185 47L196.5 56H143.5L129.277 45L117 56H67L0.5 0Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.path
          d="M192 27C194 27.1379 213 30 211.5 42.5L259 0H207L198.5 8.5C201.3 7.3 207 9.83333 209.5 11.5L205.5 21.5C183 11 177.5 26 192 27Z"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 2, ease: 'easeInOut' },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </MuiLink>
  </Link>
)

export default Logo
