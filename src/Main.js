
import React from "react";
import PercentageCircle from './PercentageCircle';
import "./Main.css";
const Main = (props) => {
  let listPeople = props.listPeople;
  let sum = 0, cnt = 0;
  let goal = 1000000;
  for (let i = 0; i < props.listPeople.length; i++) {
    sum +=parseInt(props.listPeople[i].amount);
    cnt++;
    console.log(sum);
  }
  const perc = (parseFloat(sum / goal)) * 100;
  const numPerc = () => {
    perc = (parseFloat(sum / goal)) * 100;
    if (perc >= 100)
      return 100;
    return perc;
  }
  return (<>
    <div className="logoo">
      <img src="https://www.pitchonlev.org.il/wp-content/uploads/2015/11/logo_07.jpg" id="logo" />
      <p style={{ color: "rgb(33, 33, 128)", fontSize: "30px", marginRight: "4%" }}>
      {cnt} תורמים </p>
      <img src="https://www.pitchonlev.org.il/wp-content/uploads/2022/08/%D7%AA%D7%95-%D7%9E%D7%99%D7%93%D7%95%D7%AA-%D7%A4%D7%AA%D7%97%D7%95%D7%9F-%D7%9C%D7%91-%D7%A2%D7%93-09.2025-250x349.png" id="tav" />

    </div>

    <div className="container" >
      <div className="image">
        <img src="https://www.pitchonlev.org.il/wp-content/uploads/2023/10/%D7%91%D7%90%D7%A0%D7%A8-%D7%9C%D7%A0%D7%99%D7%95%D7%96%D7%9C%D7%98%D7%A8.jpg" />
      </div>
      <div className="discribe">
        <p style={{margin:"0%"}}>הסכום שגויס עד כה  </p>
      {props.coin.currencyType==="shekel"? <h2 style={{margin:"0%",color:"red"}}> ₪{sum}</h2>  : <h2 style={{margin:"0%",color:"red"}}>{parseInt(sum/props.coin.dollarAmount)}$ </h2> }
        <p></p>
        <PercentageCircle  color='error' size={300} percentage={perc}/>
          
        <p style={{margin:"0%"}}>{parseInt(perc)}%</p>
        {props.coin.currencyType==="shekel"?  <p style={{margin:"0%"}}>מתוך יעד של  {goal}</p>:<p style={{margin:"0%"}}>מתוך יעד של  {parseInt(goal/props.coin.dollarAmount)}</p>}
      </div>

    </div>


  </>
  );
}

export default Main;