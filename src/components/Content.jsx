
const Content = (props) => {
  return (
    <div className="w-full p-2">
      <h2 className="text-xl w-[80%] text-violet-500 mx-auto font-bold text-center">{props.text}</h2>
      <p className="text-sm px-12 text-center mt-2 opacity-75 ">{props.desc}</p>
    </div>
  )
}

export default Content
