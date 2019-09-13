import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { InsideCvLayoutContainer } from './inside-cv-layout.styles'
import RoundedButton from "../../components/rounded-button/rounded-button.component";

const MotionInsideCvLayoutContainer = motion.custom(InsideCvLayoutContainer)

const InsideCvLayout = props => {
    useEffect(() => { if (props.executeScroll) props.executeScroll() })
    const variants = {
        initial: { x: "-50%", opacity: 0 },
        animate: {
            x: "0", opacity: 1, transition: {
                type: "spring", damping: 12, duration: 10,
            }
        },
        exit: { opacity: 0, transition: { type: "spring", duration: 1.5 } }
    }
    return (
        <AnimatePresence>
            <RoundedButton />
            <MotionInsideCvLayoutContainer
                initial='initial'
                animate='animate'
                exit='exit'
                variants={variants}
            >
                {props.children}
            </MotionInsideCvLayoutContainer>
        </AnimatePresence>
    )
}

export default InsideCvLayout