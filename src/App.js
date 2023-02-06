import React, { useState } from 'react';
import './App.css';

export default function App() {
  const subject = "PHYSICS & CHEMISTRY";
  const qNa = [
    {
      sn: "A",
      question: "Q.1. What does the quantity of X-ray depend on?",
      options: ['Energy of X-ray', 'Current', 'Potential Difference', 'Frequency']
    },
    {
      sn: "B",
      question: "Q.2. Protons accelerated through 4KV strike a metal surface to produce X-rays. What is the wavelength of X-ray produced?",
      options: ['5nm', '2nm', '3nm', '1nm']
    },
    {
      sn: "C",
      question: "Q.3. What is the minimum value of De Broglie's wavelength that a particle can have?",
      options: ['5.234 x 10^-12 m', '4.916 x 10^-11 m', '3.523 x 10^-13 m', '2.427 x 10^-12 m']
    },
    {
      sn: "D",
      question: "Q.4. What is the energy level of the 5th orbit of the Hydrogen atom?",
      options: ['-4.8 x 10^-20 J', '-6.5 x 10^-19 J', '-8.7 x 10^-20 J', '-2.9 x 10^-18 J']
    },
    {
      sn: "E",
      question: "Q.5. A + Br2 + NaOH ------> CH3CH2NH2. Identify A.",
      options: ['Butanoic acid', 'Propanamide', 'Ethanol', '2-Methyl Propanal']
    },
    {
      sn: "F",
      question: "Q.6. If CHCl3 + Ag ------> X then X is ",
      options: ['Unsaturated Hydrocarbon', 'Alcohol', 'Carbonyl Compound', 'Haloalkane']
    },
    {
      sn: "G",
      question: "Q.7. CH3CH2CN when treated with SnCl2/HCl followed by hydrolysis gives A. Identify A.",
      options: ['Ethene', 'Propanal', 'Methanol', 'Propanoic acid']
    },
    {
      sn: "H",
      question: "Q.8. What do we get when Grignard reagent is added to Ketone followed by hydrolysis?",
      options: ['Primary alcohol', 'Secondary alcohol', 'Tertiary alcohol', 'None of the above']
    },
    {
      sn: "I",
      question: "Q.9. Identify the compound produced by dehydrating A at 140 degrees of Celsius if A is a primary alcohol that gives positive Idoform test.",
      options: ['Ethyne', 'Pentenoic acid', 'Ethoxy Ethane', 'Ethanal']
    },
    {
      sn: "J",
      question: "Q.10. Ozonolysis of But-2-ene gives X. What do we get if we treat X with PCl5?",
      options: ['2,2-dichloro propane', '1,2-dimethyl butane', '1,1,1-trichloromethane', '1,1-dichloro ethane']
    }
  ];
  const correctAns = {
    A: "Current", B: "3nm", C: "2.427 x 10^-12 m", D: "-8.7 x 10^-20 J",
    E: "Propanamide", F: "Unsaturated Hydrocarbon", G: "Propanal",
    H: "Tertiary alcohol", I: "Ethoxy Ethane", J: "1,1-dichloro ethane"
  }
  const [data, setData] = useState({});

  const [score, setScore] = useState(0);

  function onValueChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data, [name]: value
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    var newScore = 0;

    qNa.forEach((mcq) => {
      if ((data[mcq.sn] === correctAns[mcq.sn]) && (data[mcq.sn] !== "")) {
        newScore += 1;
      }
    })
    setScore(newScore);
  }
  return (
    <div className="formDiv">
      <form onSubmit={handleSubmit} >

        <h3>{subject} MCQ TEST</h3>
        {
          qNa.map((mcq) => {
            return (
              <div className="questionDiv">
                <h5 className="question p__opensans">
                  {mcq.question}
                </h5>
                <ul className="optionsList">
                  {
                    mcq.options.map((option) => {
                      return (
                        <li className='optionItem p__opensans'>
                          <input
                            type="radio" name={mcq.sn} value={option}
                            className="optionInput" required

                            checked={data[mcq.sn] === option}
                            onChange={onValueChange}
                          />
                          {option}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
        <div className="submitBtnDiv">
          <input type="submit" value="Submit" name="submitBtn" />
        </div>
      </form>
      {
        (score !== 0) &&
        <>
          <h3>Your score = {score}</h3>
          <div className="resultDiv">
            <div>
              <h4 className='p__opensans'>CORRECT ANSWERS:</h4>
              {
                qNa.map((mcq) => {
                  return (<p className='p__opensans'>{mcq.sn + ". " + correctAns[mcq.sn]}</p>)
                })
              }
            </div>

            <div>
              <h4 className='p__opensans'>YOUR ANSWERS: </h4>
              {
                qNa.map((mcq) => {
                  return (<p className='p__opensans'>{mcq.sn + ". " + data[mcq.sn]}</p>)
                })
              }
            </div>
          </div>
        </>
      }
    </div >
  )
}