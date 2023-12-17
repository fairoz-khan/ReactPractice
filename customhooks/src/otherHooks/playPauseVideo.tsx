import { useRef, useState } from 'react';

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const ref = useRef<any>(null);

    const handlePlayPauseClick = () => {
        setIsPlaying(!isPlaying);
        if (!isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }

    return (
        <div>
            <button className={`max-w-fit mt-1 p-1 border-2 border-blue-200 rounded-md`} onClick={handlePlayPauseClick}>
                {isPlaying ? "Pause" : "Play"}
            </button>
            <video
                width="250"
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source
                    src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                    type='video/mp4'
                />
            </video>
        </div>
    )
}