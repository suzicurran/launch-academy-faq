import React from 'react';

const FaqElement = props => {
  let questionText = `${props.question}`;
  let answerText = "";
  let buttonText = "+";
  let faqClass = null;
  if (props.revealed) {
    answerText = `${props.answer}`;
    buttonText = "-";
    faqClass = "open";
  }
  let buttonClick = () => props.onClickFunction(props.id);

  return (
    <div className="faqBox">
    <div className="faqHeader">
      <button className={faqClass} type="button" onClick={buttonClick}>{buttonText}</button>
      <div key={props.id+"q"}>{questionText}</div>
    </div>
    <div key={props.id+"a"} className="faqAnswer">{answerText}</div>
    <div className="divider" />
    </div>
  );
};


export default FaqElement;
