import React, { useState } from 'react'
import MusicCard2 from '../../components/MusicCard2'
import Navbar from '../../components/Navbar';
const data = [
    { image: "https://c.saavncdn.com/896/Hawayein-Official-Remix-by-DJ-Shilpi-Sharma-From-Jab-Harry-Met-Sejal--Hindi-2017-20170811050325-500x500.jpg",Name:"Hawayein", Artist: "Abhishek", Added: false },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpYt1Q7QAR2nZYQ_lKIcTFZsasymOBigZGQNpQTVNj0Q&s",Name:"One Night", Artist: "Yuvraj" , Added: false },
    { image: "https://images.hungama.com/c/1/207/6de/104045268/104045268_300x300.jpg",Name:"Ve Kamleya", Artist: "Ashish", Added: false },
    { image: "https://images.hungama.com/c/1/982/b34/48616572/48616572_300x300.jpg",Name:"Saaki-Saaki ", Artist: "Rahul",  Added: false },
];

function AppjsforMUsicCardpct() {
    const[musicData,setMusicData]=useState(data)

    const clickhandle=(chIndex)=>{
      setMusicData((prev)=>{
        return prev.map((item,index)=>{
          if(chIndex===index){ 
            return {...item,Added:!item.Added}
          }
          return item
        })
      })
    }
  return (
    <div>
      <Navbar Data={musicData}/>
      <div className='flex justify-center '>
     
     {musicData.map((prev,index)=>{
        return <MusicCard2 data={prev} key={index} Index={index} clickhandler={clickhandle}></MusicCard2>
     })}
      </div>
      
    </div>
    
  )
}

export default AppjsforMUsicCardpct