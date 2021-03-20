import {useState, useEffect} from "react"
import {csv} from "d3"



const csvUrl = 
      'https://gist.githubusercontent.com/anxietyattacked/8c1e436542613d2b0059ec43bc4b71ef/raw/546d08003e6e1ccd4d79b9b009382b4d17b2976c/Lebron-Gamelog.csv'


const row = d => {
    d["AST"] = +d["AST"]
    d["BLK"] = +d["BLK"]
    d["STL"] = +d["STL"]
    d["TOV"] = +d["TOV"]
    d["REB"] = +d["REB"]
    d["FGA"] = +d["FGA"]
    d["FGM"] = +d["FGM"]
    d["FG_PCT"] = +d["FG_PCT"]
    d["FG3A"] = +d["FG3A"]
    d["FG3M"] = +d["FG3M"]
    d["FG3_PCT"] = +d["FG3_PCT"]
    d["FTM"] = +d["FTM"]
    d["FTA"] = +d["FTA"]
    d["FT_PCT"] = +d["FT_PCT"]
    d["OREB"] = +d["OREB"]
    d["MIN"] = +d["MIN"]
    d["PLUS_MINUS"] = +d["PLUS_MINUS"]
    d["PF"] = +d["PF"]
    d["PTS"] = +d["PTS"]
    d["DREB"] = +d["DREB"]
    d["GAME_DATE"] = new Date(d["GAME_DATE"])
  return d;
};



export const useGameData = () => {
const [data, setData] = useState(null)


  useEffect(() => {
    csv(csvUrl, row).then(setData);
    

  }, []);
  console.log(data)

return data
}