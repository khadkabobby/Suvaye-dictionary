import { useState, useEffect, useRef } from "react";
import Pausebutton from "../../assets/CircledPlay.svg";
import Playbutton from "../../assets/CircledPause.svg";

const Card = ({ searchResults }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVerb, setIsVerb] = useState(false);
  const [isNoun, setIsNoun] = useState(true);

  const audioRef = useRef();
  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };
  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  useEffect(() => {
    const handleAudioEnded = () => {
      console.log("Audio playback has ended.");
      setIsPlaying(false);
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [isPlaying]);

  return (
    <section className="mt-7">
      {searchResults?.map((s) => (
        <div
          className="container w-[70%] mx-auto px-5 pt-9 pb-52 box-shadow-card flex flex-col"
          key={s?.word}
        >
          <div className="flex items-center gap-4">
            {isPlaying ? (
              <figure className="w-[61px] cursor-pointer" onClick={handlePause}>
                <img src={Playbutton} alt="playerbutton" className="w-full" />
              </figure>
            ) : (
              <figure className="w-[61px] cursor-pointer" onClick={handlePlay}>
                <img src={Pausebutton} alt="playerbutton" className="w-full" />
              </figure>
            )}
            <audio ref={audioRef} src={s?.phonetics[0]?.audio} />
            <p className="text-xl font-normal">{s?.phonetics[0]?.text}</p>
          </div>
          <div className="flex gap-3 mt-6">
            {isNoun ? (
              <button
                type="button"
                className="bg-black text-white py-1 px-5 rounded-lg text-xl font-medium "
                onClick={() => {
                  setIsNoun(true);
                  setIsVerb(false);
                }}
              >
                noun
              </button>
            ) : (
              <button
                type="button"
                className="bg-[#DEDEDE] text-black py-1 px-5 rounded-lg text-xl font-medium "
                onClick={() => {
                  setIsNoun(true);
                  setIsVerb(false);
                }}
              >
                noun
              </button>
            )}
            {isNoun ? (
              <button
                type="button"
                className="bg-[#DEDEDE] text-black py-1 px-5 rounded-lg text-xl font-medium"
                onClick={() => {
                  setIsVerb(true);
                  setIsNoun(false);
                }}
              >
                verb
              </button>
            ) : (
              <button
                type="button"
                className="bg-black text-white py-1 px-5 rounded-lg text-xl font-medium"
                onClick={() => {
                  setIsVerb(true);
                  setIsNoun(false);
                }}
              >
                verb
              </button>
            )}
          </div>
          {isNoun && (
            <div className="mt-4 text-xl font-normal flex flex-col gap-2 ">
              <p>1. {s?.meanings[0]?.definitions[0]?.definition}</p>
              {s?.meanings[0]?.definitions[1] && (
                <p>2. {s?.meanings[0]?.definitions[1]?.definition}</p>
              )}
            </div>
          )}

          {isVerb && (
            <div className="mt-4 text-xl font-normal flex flex-col gap-2 ">
              <p>1. {s?.meanings[1]?.definitions[0]?.definition}</p>
              {s?.meanings[1]?.definitions[1] && (
                <p>2. {s?.meanings[1]?.definitions[1]?.definition}</p>
              )}
            </div>
          )}
        
        </div>
      ))}
    </section>
  );
};

export default Card;
