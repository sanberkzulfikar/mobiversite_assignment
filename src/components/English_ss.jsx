import React from "react";
import db from "../../db";

const English_ss = () => {
  return (
    <>
      <SingleResolution resolution={67} />
      <SingleResolution resolution={65} />
      <SingleResolution resolution={61} />
      <SingleResolution resolution={58} />
      <SingleResolution resolution={55} />
      <SingleResolution resolution={47} />
      <SingleResolution resolution={40} />
    </>
  );
};

export default English_ss;

const SingleResolution = ({ resolution }) => {
  const primaryLanguageData = db.localizations["English"];

  if (primaryLanguageData[resolution]) {
    return (
      <>
        <div>{`iPhone ${resolution}`}</div>
        {primaryLanguageData[resolution].map((image) => (
          <img src={image} key={image} />
        ))}
      </>
    );
  } else if (resolution > 55) {
    if (primaryLanguageData[65]) {
      return (
        <>
          <div>
            <h2>iPhone 65</h2>
            <p>There's no wanted display size. Replacement is showing. </p>
          </div>
          <div>
            {primaryLanguageData[65].map((image) => (
              <img src={image} key={image} />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <div>
          <p>NO SCREENSHOTS</p>
        </div>
      );
    }
  } else {
    if (primaryLanguageData[55]) {
      return (
        <>
          <div>
            <h2>iPhone 55</h2>
            <p>There's no wanted display size. Replacement is showing. </p>
          </div>
          <div>
            {primaryLanguageData[55].map((image) => (
              <img src={image} key={image} />
            ))}
          </div>
        </>
      );
    } else {
      return (
        <div>
          <h2>{resolution}</h2>
          <p>NO SCREENSHOTS</p>
        </div>
      );
    }
  }
};
