import React from "react";
import Section from "./Section";

const Options = ({ addGoodFeedback, addNeutralFeedback, addBadFeedback }) => {
  return (
    <Section title="Please give your feedback">
      <button onClick={addGoodFeedback}>Good</button>
      <button onClick={addNeutralFeedback}>Neutral</button>
      <button onClick={addBadFeedback}>Bad</button>
    </Section>
  );
};

export default Options;
