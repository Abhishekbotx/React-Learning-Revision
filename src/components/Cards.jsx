import React from 'react'

const Cards = () => {
    const data = [
        { image: "https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1hem9ufGVufDB8fDB8fHww", name: "Amazon Basics", description: "Lorem ipsum dolor sit amet smet consectetur adipisicing elit. Quas alias corrupti eligendi coresome.",InStock:true },
        { image: "https://images.unsplash.com/photo-1627313433073-a98d074772e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Daily Objects", description: "Lorem ipsum dolor sit amet smet consectetur adipisicing elit. Quas alias corrupti eligendi coresome.",InStock:true },
        { image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Healthy Fruits", description: "Lorem ipsum dolor sit amet smet consectetur adipisicing elit. Quas alias corrupti eligendi coresome.",InStock:false }
    ]
    return (
        <div className='w-full h-screen bg-slate-500 flex flex-row justify-center items-center ' >
            {data.map((elem, index) => (
                <div key={index} className='w-52    bg-slate-50  rounded-md overflow-hidden mr-5'>
                    <div div className='w-full h-32 bg-slate-900 overflow-hidden '>
                        <img className=' h-full w-full object-cover' src={elem.image} alt="" />
                    </div>
                    <div className='w-full p-3'>
                        <h1 className=' font-semibold mb-2'>{elem.name}</h1>
                        <p className=' text-xs text-slate-600'>{elem.description}</p>
                    </div>
                    <button  className={`mb-2 ml-3 rounded px-3 py-1 text-white ${ elem.InStock ? 'bg-blue-500':'bg-red-500'} font-sans text-sm`}>
                        {elem.InStock ? 'In Stock':'Out Of Stock'}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Cards

/*Learnt about Conditional rendering 
Important:
1.while doing conditional rendering in classname bind it with curly braces and backticks {` `}
2.while doing the conditional part use dollar sign with curly braces ${ }

Combined: classname={`   ${ elem.InStock ? 'bg-blue-500':'bg-red-500'}  `}

*/
