/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { InsideCvLayoutContainer, NavigateButton } from './inside-cv-layout.styles';
import RoundedButton from '../../components/rounded-button/rounded-button.component';
import NextButton from '../../components/next-button/next-button.component';
import BackButton from '../../components/back-button/back-button.component';

const MotionInsideCvLayoutContainer = motion.custom(InsideCvLayoutContainer);

const convertUrl = path => (path ? path.replace('/', '') : null);

const InsideCvLayout = ({ executeScroll, children, prevPath, nextPath }) => {
  useEffect(() => {
    if (executeScroll) executeScroll();
  });

  const prev = convertUrl(prevPath);
  const next = convertUrl(nextPath);

  const variants = {
    initial: { x: '-50%', opacity: 0 },
    animate: {
      x: '0',
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        duration: 10,
      },
    },
    exit: { opacity: 0, transition: { type: 'spring', duration: 1.5 } },
  };
  return (
    <AnimatePresence>
      <MotionInsideCvLayoutContainer
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <RoundedButton />
        {children}
        <NavigateButton>
          {next && (
            <Link to={nextPath}>
              <NextButton name={next} />
            </Link>
          )}
          {prev && (
            <Link to={prevPath}>
              <BackButton name={prev} />
            </Link>
          )}
        </NavigateButton>
      </MotionInsideCvLayoutContainer>
    </AnimatePresence>
  );
};

export default InsideCvLayout;
