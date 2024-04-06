import React, { useState } from 'react'
import CardsProps from '../../components/CardsProps'


const data = [
    { image: "https://media.licdn.com/dms/image/D4D03AQHMDzvVFtyvOw/profile-displayphoto-shrink_400_400/0/1699869450643?e=1717632000&v=beta&t=BKpNyIGIn8Cxzj-T_7FjTdgnzsYvUmedBh5d1JsMSgo", name: "Abhishek", Profession: "Mern Developer ", friends: false },
    { image: "https://media.licdn.com/dms/image/D4D03AQFM3kl6LFAk-g/profile-displayphoto-shrink_400_400/0/1668884848728?e=1717632000&v=beta&t=eJXKLzrCVXfosYhNeXDKCa2YiWqZ6lBDZPwXHs1r1bI", name: "Yuvraj", Profession: "DotNet Developer", friends: false },
    { image: "https://media.licdn.com/dms/image/D4D03AQHyUG0URxn1vw/profile-displayphoto-shrink_400_400/0/1689776274166?e=1717632000&v=beta&t=HrXCKucRvkDfLMD-7JFy3Vd9fHYa921sBbMNE3wYGk8", name: "Ashish", Profession: "R&D Executive", friends: false },
    { image: "https://media.licdn.com/dms/image/D4D03AQHGfjVR3p2l5w/profile-displayphoto-shrink_400_400/0/1699291255851?e=1717632000&v=beta&t=o1Pa7jsjWiC7tZl0fUD_nW0uX0ye6cmj1C6GM5-NlQE", name: "Rahul", Profession: "Testing Engineer", friends: false },
];

function Props() {
    
    
    const [realVal, setRealVal] = useState(data);
    
    const clickhandle = (changeIndex) => {
        setRealVal((previous) => { //using the data i.e also previous val in useState
            return previous.map((item, index) => {//uspe bss ye function chala rhe hum
                if (index === changeIndex) { 
                    return { ...item, friends: !item.friends } };
                return item;
            })
        })
    }

    return (
        <div className=' flex  justify-center' >
            {realVal.map((elem, index) => (
                <CardsProps key={index} Index={index} clickhandler={clickhandle} values={elem} />

            ))}
        </div>
    );
}

export default Props

/*
Suppose: Initially index===2
Logic: here on in the clickhandle function we are we are using useState function 
       and in the data you can see data is array so here on the array i.e, previous array 
       in the code we are using map function ab hum kya krte hai ki previous.map((item, index)
       ke andar hum hum krte hai ki agar index===2 ho jaye toh uska friends property ko invert
       krdo but problem tb arise hoti hai jab hum kisi bhi button ko click krenge toh
       2nd index wala change hoga kyuki clickhandle sbme jaa rhe with hardcoded check
       for index 2 that is the reason it will  change 2nd index elem on any btn click

      🍁 Remember: For every object in the array we are creating a card and sending the
                   index , the elem values and the clickhandle function 🍁

    ⚡Now⚡: Agar kisi trike se humko pta chl jaye ki clicked card ka index kya hai toh               
              easily we can change the value of a certain card button🤔🤔

              🌟for it pass the index while creating the card as we are using map function so
                we can pass its index as Props in the Card

  Later➡️ we will utilize this index in the clickHandler function in the cardProps component.

*/