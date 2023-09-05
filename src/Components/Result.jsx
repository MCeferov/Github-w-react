// ! Component
import React from 'react'
import Image from "./Picture"
import Name from "./Name"
import Username from "./UserName"
import Date from "./Date"
import Bio from "./Bio"
import Info from "./Info"

const Result = ({userData}) => {
  console.log(userData)
    return (
    <div
      
      className="bg-[#1e2a47] w-[730px] rounded-2xl flex  flex-col items-center py-8 "
    >
      <div className="flex items-center justify-between w-[650px]">
 <Image src={userData.avatar_url} />
       
        <div className="h-full w-[480px] relative">
        <Name> {userData.name} </Name>
        <Username>{userData.login}</Username>
        <Date date={userData.created_at} />
        </div>
      </div>

      <div className="w-[650px] flex flex-col items-end">
      <Bio>{userData.bio}</Bio>
        <div
          className="flex items-center justify-around bg-[#141d2f] h-20 w-[480px] rounded-xl mb-5"
        >
       <Info data={userData.public_repos} title="Repos" />
       <Info data={userData.followers} title="Followers" />
       <Info data={userData.following} title="Following" />
        </div>
      </div>
    </div>
  )
}

export default Result