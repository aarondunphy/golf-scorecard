import React, {useState} from 'react';
import { garons9Hole } from '../../data/courses';
import { players } from '../../data/players';

export default function Scorecard() {

  const initialScores = players.map(player => {
    return {...player, results: garons9Hole.map(hole => null)}
  })

  const [scores, setScores] = useState([...initialScores])

  const yardageTotal = garons9Hole.reduce((prevValue, currentValue) => {
    return prevValue += currentValue.yardage;
  }, 0);

  const handleScoreChange = (e, holeIndex, playerName) => {
    const updatedScores = [...scores];
    updatedScores.find(score => score.name === playerName).results[holeIndex] = parseInt(e.target.value);
    setScores(updatedScores);
  }

  return (
    <>
      <div className="flex">
        <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">Hole</div>
        <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">Yards</div>
        {players.map((player, index) => {
          return (
            <div key={index} className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">{player.name}</div>    
          )
        })}
      </div>
      {garons9Hole.map((hole, holeIndex) => {
        return (
          <div key={hole.holeNo} className="flex">
            <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">{hole.holeNo}</div>
            <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">{hole.yardage}</div>
            {scores.map((score, index) => {
              return (
                <div key={`${hole.holeNo}-${index}`} className="w-1/6 text-center border border-solid relative text-xs md:text-lg">
                  <input type="number"
                    onChange={(e) => handleScoreChange(e, holeIndex, score.name)}
                    className="w-full p-2 absolute top-0 left-0 text-center"
                    value={score.results[holeIndex]}
                  />
                </div>    
              )
            })}
          </div>
        )
      })}
      <div className="flex">
        <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">Total</div>
        <div className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">{yardageTotal}</div>
        {scores.map((score, index) => {
          return (
            <div key={index} className="w-1/6 text-center border border-solid p-2 text-xs md:text-lg">
              {score.results.reduce((prevValue, currentValue) => currentValue += prevValue, 0)}
            </div>
          )
        })}
      </div>
  </>
  );
}
