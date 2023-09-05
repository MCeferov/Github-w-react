// ! Components
import { BsSearch } from "react-icons/bs"

// ! Hooks
import { useRef } from "react"

const Search = (props) => {
    const inputRef = useRef()
    const getUser = (user) =>{
        const givenValue = inputRef.current.value
        props.search(givenValue)
        inputRef.current.value=""
    }
  return (
    <div
      className="h-16 w-[730px] bg-[#1e2a47] mb-10 flex items-center justify-between rounded-2xl"
    >
      <div className="flex items-center h-full">
      <BsSearch className="ml-9 h-6 w-6 fill-blue-600" />
        <input
        autoComplete="off"
        ref={inputRef}
          className="ml-5 h-full w-[500px] text-lg bg-[#1e2a47] text-white focus:outline-none placeholder:text-white placeholder:opacity-60"
          type="text"
          placeholder="Search Github username..."
        />
      </div>
      <button
      onClick={getUser}
        className="h-12 w-24 bg-blue-600 rounded-xl flex items-center justify-center text-white text-base mr-2 cursor-pointer"
      >
        Search
      </button>
    </div>
  )
}

export default Search