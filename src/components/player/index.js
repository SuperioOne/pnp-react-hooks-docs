import * as React from "react";
import styles from "./gifplayer.module.css";

export default function MPEGPlayer(props)
{
    const videoPlayer = React.useRef();
    const [playing, setPlaying] = React.useState(false);

    const onClick = React.useCallback(() =>
    {
        if (playing)
        {
            videoPlayer.current.pause();
            setPlaying(false);
        }
        else
        {
            videoPlayer.current.play();
            setPlaying(true);
        }
    }, [playing]);

    return (
        <div onClick={onClick} className={styles.videoplayer}>
            <div className={playing ?  styles.controlOff : styles.controlOn}>
                <div className={styles.playButton}>GIF</div>
            </div>
            <video
                ref={videoPlayer}
                height="auto"
                src={props.src}
                muted
                loop={true}
            >
            </video>
        </div>
    );
}