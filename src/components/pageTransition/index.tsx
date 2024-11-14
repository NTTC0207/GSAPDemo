import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import style from './styles.module.scss'


interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition: FC<PageTransitionProps> = (props) => {
    return (
        <>
            {props.children}
            <motion.div
                className={style.slideIn}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.div className={style.centeredTitle}>
                    <h1>Page Transition</h1>
                </motion.div>
            </motion.div>

            <motion.div
                className={style.slideOut}
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    )
}

export default PageTransition;