import React from "react";
import { useDispatch } from "react-redux";
import { playSound } from "../redux/actions";

const DrumPad = () => {
  const dispatch = useDispatch();

  const handlePadClick = (sound, key) => {
    const audio = document.getElementById(key);
    console.log(`Audio Element: `, audio);
    if (audio instanceof HTMLAudioElement) {
      console.log(`Playing sound: ${sound}, Key: ${key}`);
      audio.currentTime = 0;
      audio
        .play()
        .catch((error) => console.error(`Error playing sound: ${error}`));
      dispatch(playSound(sound));
    } else {
      console.error(
        `Audio element with id ${key} not found or play method is not a function`
      );
    }
  };

  const pad = [
    { key: "Q", sound: "/sounds/Cev_H2.mp3" },
    { key: "W", sound: "/sounds/Dsc_Oh.mp3" },
    { key: "E", sound: "/sounds/Heater-2.mp3" },
    { key: "A", sound: "/sounds/Heater-3.mp3" },
    { key: "S", sound: "/sounds/Heater-4_1.mp3" },
    { key: "D", sound: "/sounds/Heater-6.mp3" },
    { key: "Z", sound: "/sounds/Kick_n_Hat.mp3" },
    { key: "X", sound: "/sounds/RP4_KICK_1.mp3" },
  ];

  return (
    <div className="drum-pad">
      {pad.map((pad) => (
        <>
          <button
            key={pad.key}
            className="drum-pad"
            onClick={() => handlePadClick(pad.sound, pad.key)}
          >
            {pad.key}
          </button>
          <audio className="clip" id={pad.key} src={pad.sound}></audio>
        </>
      ))}
    </div>
  );
};

export default DrumPad;
