import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const FeedBackForm = ({ dataArr, setDataArr, numOfGood, numOfBad, numOfAvg, setNumOfGood, setNumOfBad, setNumOfAvg }) => {
  let [feedbackType, setFeedbackType] = useState("");
  

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    if (feedbackType) {
      data.feedback = feedbackType;
    }
    // console.log(data);
    console.log(dataArr);
    let tempArr = [...dataArr];
    tempArr.push(data);
    setDataArr(tempArr);
    setFeedbackType("");
    reset();
    toast.success("Your response has been recorded.")
  }
  console.log(dataArr);
  localStorage.setItem("feedbackData", JSON.stringify(dataArr));
  
  let locStorDat = JSON.parse(localStorage.getItem("feedbackData"));
  console.log(locStorDat);
  console.log(locStorDat.filter((obj) => obj.feedback == "👍 Good").length);

  useEffect(() => {
    setNumOfGood(locStorDat.filter((obj) => obj.feedback == "👍 Good").length);
    console.log("good-> ", numOfGood);

    setNumOfAvg(
      locStorDat.filter((obj) => obj.feedback == "😐 Average").length
    );
    console.log("ag-> ", numOfAvg);

    setNumOfBad(locStorDat.filter((obj) => obj.feedback == "👎 Bad").length);
    console.log("bad-> ", numOfBad);
  }, [locStorDat]);

  function handleBtnClick(type) {
    setFeedbackType(type);
    setValue("feedback", type, { shouldValidate: true });
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="w-full py-2 px-6 flex flex-col justify-center items-center gap-4 relative"
    >
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => handleBtnClick("👍 Good")}
          type="button"
          className="btn bg-lime-600 text-white py-1 px-2 font-semibold rounded-2xl shadow-lg shadow-lime-600/50 active:scale-[0.95] cursor-pointer transition transition-all duration-200"
        >
          👍 Good
        </button>
        <button
          onClick={() => handleBtnClick("😐 Average")}
          type="button"
          className="btn bg-orange-500 text-white py-1 px-2 font-semibold rounded-2xl shadow-lg shadow-orange-500/50 active:scale-[0.95] cursor-pointer transition transition-all duration-200"
        >
          😐 Average
        </button>
        <button
          onClick={() => handleBtnClick("👎 Bad")}
          type="button"
          className="btn bg-red-500 text-white py-1 px-2 font-semibold rounded-2xl shadow-lg shadow-red-500/50 active:scale-[0.95] cursor-pointer transition transition-all duration-200"
        >
          👎 Bad
        </button>
      </div>
      <input
        type="hidden"
        {...register("feedback", {
          required: "Please select a feedback option",
        })}
      />
      <small className="text-red-500">{errors?.feedback?.message}</small>
      <small className="text-black opacity-75">{feedbackType}</small>
      <textarea
        {...register("comment")}
        className="border w-[80%]  h-24 rounded-xl border-gray-400 p-2 text-sm "
        id="comment"
        placeholder="Add a Comment..."
      ></textarea>
      <input
        type="submit"
        value="Submit Now"
        className="bg-gradient-to-r from-violet-500 via-30% to-sky-500 to-90% p-2 text-white font-bold cursor-pointer rounded lg:w-[30%] shadow-lg shadow-sky-600/50 active:scale-[0.95]"
        />
        <h2 className="text-sm opacity-75 font-semibold  absolute bottom-[-25px]">Made by khan-artaza</h2>
    </form>
  );
};

export default FeedBackForm;
