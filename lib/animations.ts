import { Variants } from 'framer-motion';

export const fadeUpVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export const fadeInVariant: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut' 
    } 
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.12 
    } 
  },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.08 
    } 
  },
};

export const wordRevealVariant: Variants = {
  hidden: { 
    y: '100%' 
  },
  visible: { 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export const scaleInVariant: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.97 
  },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export const slideInLeftVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export const slideInRightVariant: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
};

export const expandHeightVariant: Variants = {
  hidden: { 
    height: 0, 
    opacity: 0 
  },
  visible: { 
    height: 'auto', 
    opacity: 1, 
    transition: { 
      height: { 
        duration: 0.4, 
        ease: [0.25, 0.1, 0.25, 1] 
      },
      opacity: { 
        duration: 0.3, 
        delay: 0.1 
      },
    } 
  },
};

export const serviceRowHover = {
  rest: { 
    x: 0, 
    backgroundColor: 'transparent' 
  },
  hover: { 
    x: 8, 
    backgroundColor: 'rgba(138, 154, 106, 0.05)',
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' 
    } 
  },
};

export const arrowRevealVariant: Variants = {
  rest: { 
    opacity: 0, 
    x: -10 
  },
  hover: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.3 
    } 
  },
};

export const underlineVariant = {
  rest: { 
    scaleX: 0, 
    originX: 0 
  },
  hover: { 
    scaleX: 1, 
    transition: { 
      duration: 0.3, 
      ease: 'easeOut' 
    } 
  },
};

export const slideUpVariant: Variants = {
  hidden: { 
    y: '100%' 
  },
  visible: { 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  },
  exit: { 
    y: '100%', 
    transition: { 
      duration: 0.3, 
      ease: 'easeIn' 
    } 
  },
};

export const overlayVariant: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.3 
    } 
  },
  exit: { 
    opacity: 0, 
    transition: { 
      duration: 0.2 
    } 
  },
};
