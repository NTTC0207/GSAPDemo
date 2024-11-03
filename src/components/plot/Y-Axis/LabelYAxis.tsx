import React, { FC } from "react";
import styles from './style.module.scss';

interface Props {
    children: React.ReactNode;
}

const LabelYAxis: FC<Props> = (props) => {
    const { children } = props;
    const yLabels = Array.from({ length: Math.floor(window.innerHeight / 100) }, (_, index) => index * 100);

    return (
        <div className={styles.container}>
            <div className={styles.yAxis}>
                {yLabels.map((label, index) => (
                    <div key={index} className={styles.label} style={{ top: `${label}px` }}>
                        <div className={styles.borderLine} />
                        <span className={styles.labelText}>{label}px</span>
                    </div>
                ))}
            </div>
            {children}
        </div>
    );
}

export default LabelYAxis;
