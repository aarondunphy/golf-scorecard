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
        <div className="w-1/6 text-center border border-solid p-2">Hole</div>
        <div className="w-1/6 text-center border border-solid p-2">Yardage</div>
        {players.map((player, index) => {
          return (
            <div key={index} className="w-1/6 text-center border border-solid p-2">{player.name}</div>    
          )
        })}
      </div>
      {garons9Hole.map((hole, holeIndex) => {
        return (
          <div key={hole.holeNo} className="flex">
            <div className="w-1/6 text-center border border-solid p-2">{hole.holeNo}</div>
            <div className="w-1/6 text-center border border-solid p-2">{hole.yardage}</div>
            {scores.map((score, index) => {
              return (
                <div key={`${hole.holeNo}-${index}`} className="w-1/6 text-center border border-solid relative">
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
        <div className="w-1/6 text-center border border-solid p-2">Total</div>
        <div className="w-1/6 text-center border border-solid p-2">{yardageTotal}</div>
        {scores.map((score, index) => {
          return (
            <div key={index} className="w-1/6 text-center border border-solid p-2">
              {score.results.reduce((prevValue, currentValue) => currentValue += prevValue, 0)}
            </div>
          )
        })}
      </div>
  </>
  );
}
