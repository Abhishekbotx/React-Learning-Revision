import React from 'react'

const Weather = () => {
    const [weather, setWeather] = useState('')

  useEffect(() => {
    if (navigator.geolocation) {
      const currWeather = navigator.geolocation.getCurrentPosition(async (position) => {
        const latitute = position.coords.latitude
        const longitude = position.coords.longitude
        console.log('lat && long:', latitute, longitude);

        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitute}&lon=${longitude}&appid=b8666d055d60ee12f7e839ba10e2866b`)
        console.log('response:', response);
        setWeather(response)

      })

      const cityWeather=async()=>{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=borivali&appid=b8666d055d60ee12f7e839ba10e2866b`)
        console.log('response of city:',response);
      }
      cityWeather()
      
    }
  }, [])
  return (
    <div>
        {weather.main.temperature}
    </div>
  )
}

export default Weather