import * as React from "react";
import styles from "./tooltip.module.css";

export default function ToolTip(props)
{
    return <div className={styles.tooltip}>
        <span className={styles.tooltiptext}>{props.text}</span>
        {props.children}
    </div>;
}