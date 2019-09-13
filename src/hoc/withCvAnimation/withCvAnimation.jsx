import React from 'react'
import { motion } from 'framer-motion'

const withCvAnimation = (props) =>
    (<motion.div>
        {props.children}
    </motion.div>)

export default withCvAnimation