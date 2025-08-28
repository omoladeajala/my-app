import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { useState } from "react";

export default function Interview() {
  return (
    <div className="interview">
      <JavaScript questions={questions} />
    </div>
  );
// ...existing code...
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Interview />);
const questions = [
  {
  No: "1",
  question: "What is a variables?",
  answer: "Variables is a named storage location in memory that can hold a value.",
 },
{
  No: "2",
  question: "What is a constant?",
  answer: "Constant is a named data item whose value remains fixed throughout the program's execution.",
},
{
  No: "3",
  question: "What is an Array used for?",
  answer: "Array is used to store collection of elements of same data type.",
},
{
  No: "4",
  question: "Examples of an array?",
  answer: 'String (Both single and double stings) e.g... ["Red", "Blue", "Bolu"] ',
},
{
  No: "5",
  question: "What is a tuple?",
  answer: "It is a type of array with a pre-defined length ", 
},
{
  No: "6",
  question: "Examples of a tuple?",
  answer: 'Strings and Numbers e.g... ["Alice", 18, "Benson", 34]', 
},
{
  No: "7",
  question: "What does === means?", 
  answer: "False", 
},
{
  No: "8",
  question: "What does != means?",
  answer: "False", 
},
{
  No: "9",
  question: "What does == means?",
  answer: "True", 
},
{
  No: "10",
  question: "!==",
  answer: "True", 
},
{
  No: "11",
  question: "What does % operator means?",
  answer: " remainder", 
},
{
  No: "12",
  question: "100 % 50?",
  answer: "0", 
},
{
  No: "13",
  question: "100 % 77?",
  answer: "23", 
},
{
  No: "14",
  question: "What is the value of math.PI?",
  answer: "3.141592653589793", 
},
{
  No: "15",
  question: "What is Math.min from (3,4,5,6)?",
  answer: "3", 
},
{
  No: "16",
  question: "What is Math.max from (3,4,5,6)",
  answer: "6", 
},
{
  No: "17",
  question: "",
  answer: "", 
},
{
  No: "18",
  question: "",
  answer: "", 
},
{
  No: "19",
  question: "",
  answer: "", 
},
{
  No: "20",
  question: "",
  answer: "", 
},
]

function JavaScript() {
  const [selectedNo, setSelectedNo] = useState(null);

  function handleClick(no) {
    setSelectedNo(no !== selectedNo ? no : null);
  }

  return (
    <div className="javascript">
      {questions.map((question) => (
        <div
          key={question.No}
          onClick={() => handleClick(question.No)}
          className={
            "card" + (question.No === selectedNo ? " selected" : "")
          }
        >
          <p>{question.No === selectedNo ? question.answer : question.question}</p>
        </div>
      ))}
    </div>
  );
}