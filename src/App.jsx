import { useState } from "react";
import Content from "./components/Content";
import FeedBackForm from "./components/FeedBackForm";
import Top from "./components/Top";
import Stats from "./components/Stats";

const App = () => {
  let [dataArr, setDataArr] = useState(()=>{
    let stored = localStorage.getItem("feedbackData")
    return stored ? JSON.parse(stored) : []
  })
  
  let [numOfGood, setNumOfGood] = useState(0);
  let [numOfAvg, setNumOfAvg] = useState(0);
  let [numOfBad, setNumOfBad] = useState(0);
  return (
    <div className="w-full relative  bg-stone-200 flex gap-4 p-8 justify-center items-center flex-col lg:flex-row">
      <div className="w-full lg:w-[60%] top-0 mt-2 h-[90%] pb-10 bg-white rounded-2xl shadow-xl/20 lg:w-[40%]">
      
        <Top logo="ri-wechat-line" heading="Feedback" />
        <Content
          text="How would you rate your experience using our Productivity App?"
          desc="Your input is valuable in helping us better understand your needs and tailored our service accordingly."
        />
        <FeedBackForm dataArr={dataArr} setDataArr={setDataArr} numOfGood={numOfGood} numOfBad={numOfBad} numOfAvg={numOfAvg} setNumOfGood={setNumOfGood} setNumOfBad={setNumOfBad} setNumOfAvg={setNumOfAvg}/>
      </div>

      <div className="w-full lg:w-[60%] lg:h-[80%] bg-white rounded-2xl shadow-xl/20 mb-20 lg:mb-0">
        <Top logo="ri-line-chart-fill" heading="Stats" />
        <Content
          text="How Users Feel So Far"
          desc=""
        />
        <Stats dataArr={dataArr} setDataArr={setDataArr} numOfGood={numOfGood} numOfBad={numOfBad} numOfAvg={numOfAvg}/>
      </div>
    </div>
  );
};

export default App;
