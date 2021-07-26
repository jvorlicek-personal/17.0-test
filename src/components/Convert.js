import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [debouncedText, setDebouncedText] = useState(text);
  const [translated, setTransalted] = useState("");

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const translate = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTransalted(data.data.translations[0].translatedText);
    };

    translate();
  }, [language, debouncedText]);

  return (
    <div>
      <h1 className=" ui header">{translated}</h1>
    </div>
  );
};

export default Convert;
