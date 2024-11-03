import React, { FC } from "react";
import styles from './style.module.scss';

interface Props {
    children: React.ReactNode;
}

const LabelXAxis: FC<Props> = (props) => {
    const { children } = props;
    const xLabels = Array.from({ length: Math.floor(window.innerWidth / 100) }, (_, index) => index * 100);

    return (
        <div className={styles.container}>
            <div className={styles.xAxis}>
                {xLabels.map((label, index) => (
                    <div key={index} className={styles.label} style={{ left: `${label}px` }}>
                        <div className={styles.borderLine} />
                        <span className={styles.labelText}>{label}px</span>
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
}

export default LabelXAxis;
