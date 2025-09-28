export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
    invisible: {
      x: 100,
      opacity: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  }
}

export const slideInFromRight = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: {
    delay: 0.3,
    duration: 0.5,
    type: 'spring',
    bounce: 0.8,
    damping: 10,
    stiffness: 50,
  },
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0, scale: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
  transition: {
    delay: 0.3,
    duration: 0.5,
    type: 'spring',
    bounce: 0.8,
    damping: 10,
    stiffness: 50,
  },
}

export const menuAnimationVar = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      // ease: [0.12, 0, 0.39, 0],
      ease: [0.4, 0, 1, 1],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.2,
      // ease: [0.22, 1, 0.36, 1],
      ease: [0.4, 0, 1, 1],
    },
  },
}

export const mobile_nav_div = {
  hide: {
    x: '-100%',
    transition: {
      type: 'spring',
      bounce: 0.1,
      when: 'afterChildren',
      staggerChildren: 0.22,
    },
  },
  show: {
    x: '0%',
    transition: {
      type: 'spring',
      bounce: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.22,
    },
  },
}

export const mobile_nav_ul = {
  hide: {
    y: '25%',
    opacity: 0,
  },
  show: {
    y: '0%',
    opacity: 1,
  },
}

export const mobile_nav_span_1 = {
  hide: {
    rotate: 0,
  },
  show: {
    rotate: 45,
    y: 6,
  },
}

export const mobile_nav_span_2 = {
  hide: {
    opacity: 1,
  },
  show: {
    opacity: 0,
  },
}

export const mobile_nav_span_3 = {
  hide: {
    rotate: 0,
  },
  show: {
    rotate: -45,
    y: -6,
  },
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
    y: -60,
  },
}

export const fadeInVariants = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: {
    duration: 0,
    ease: 'easeIn',
    type: 'spring',
    bounce: 0.8,
    delay: 0,
    damping: 10,
    stiffness: 50,
  },
}
export const textFadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
  },
}

export const fadeOpacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05,
      ease: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
  },
}

export const fadeOpacity_2 = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      ease: 'easeIn',
      type: 'spring',
      // bounce: 0.8,
      damping: 3,
      stiffness: 50,
    },
  }),
  exit: {
    opacity: 0,
  },
}

export const fadeInVariants_2 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
    },
  },
}

export const sidebarAnimation = {
  animate: (open) => ({
    width: open ? '64px' : '320px',
    transition: {
      ease: 'linear',
      delay: 0.02,
      stiffness: 65,
      damping: 10,
      type: 'spring',
    },
  }),
}

export const sidebarItemMotion = {
  animate: {
    transition: {
      type: 'spring',
      bounce: 0.2,
      duration: 0,
      delay: 0,
      damping: 10,
      stiffness: 50,
      ease: 'linear',
    },
  },
}
