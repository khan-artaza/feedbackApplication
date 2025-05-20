import React, { useEffect, useState } from "react";

const Stats = ({ dataArr, setDataArr, numOfGood, numOfBad, numOfAvg }) => {
  let dataFromLs = JSON.parse(localStorage.getItem("feedbackData"))
  let numOFRating = dataFromLs.length
  console.log("hii", numOFRating);

  console.log(dataFromLs);
  
  let tempArr = dataFromLs.filter((obj)=> {

  if(obj.comment || (obj.comment=='👍 Good' || obj.comment=='😐 Average')) {
    return <li className="text-sm opacity-75">{obj.comment}</li>
  }

})
 
console.log(tempArr);

let clutter = tempArr.map((obj)=>{
  console.log(obj.comment);
  return <>
  <div className="comment bg-violet-200 flex items-center justify-start gap-4  py-2 rounded-xl px-4">
  <i className="ri-user-fill text-violet-600 bg-violet-300 px-1 rounded-full"></i>
  <p className="text-sm opacity-75">{obj.comment}</p>
  </div>
  </>
})
console.log(clutter);


  return (
    <div className="w-full h-[70%] overflow-hidden flex flex-col px-4 gap-4">
      <div className="upperCard relative flex flex-col lg:flex-row  lg:items-end gap-4 w-full">
        <div className="card w-[75%] lg:w-[35%] rounded-lg p-2 bg-lime-600 text-white">
          <h3 className="text-sm font-semibold w-full">Rated as Good : <span className="bg-lime-400 px-4 rounded-lg text-black opacity-75 ">{numOfGood}</span></h3>
          <h1 className="text-4xl font-bold">{Math.floor((numOfGood/numOFRating)*100)? Math.floor((numOfGood/numOFRating)*100) : "0"}%</h1>
          <p className="text-xs text-gray-100">Users rated this app as helpful and effective.</p>
        </div>

        <div className=" w-fit flex flex-col lg:flex-row">
          <div className="card  rounded-lg p-2 text-black">
          <h3 className="text-xs text-gray-600 font-semibold w-full">Rated as Average</h3>
          <h1 className="text-xl text-gray-800">{numOfAvg}</h1>
        </div>
        <div className="card  rounded-lg p-2 text-black">
          <h3 className="text-xs text-gray-600 font-semibold w-full">Rated as Bad</h3>
          <h1 className="text-xl text-red-700">{numOfBad}</h1>
        </div>
        <div className="card absolute right-5 lg:bottom-0  rounded-lg p-2 text-black bg-[#D8CCFA]">
          <h3 className="text-xs text-gray-600 font-semibold w-full">Total Feedback</h3>
          <h1 className="text-xl font-semibold text-violet-500">{numOFRating}</h1>
        </div>
        </div>

       
      </div>
      <div className="bg-violet-100 px-2 pb-10 pt-2 h-[70%] rounded-xl ">
      <h2 className="font-medium opacity-50 mb-1">User's Comment</h2>
      <div className="commentSection w-full px-2 max-h-50 overflow-y-scroll flex flex-col gap-2">
        {clutter}
      </div>
      </div>
    </div>
  );
};

export default Stats;
