// * I dont get this
export default function playAudio (isPlaying: boolean, audioRef: React.MutableRefObject<any>) {
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current.play();
      });
    }
  }
}