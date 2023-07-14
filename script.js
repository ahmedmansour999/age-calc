const yearEL = document.getElementById("year-el") ;
const monthEL = document.getElementById("month-el") ;
const dayEL = document.getElementById("day-el") ;
const hourEL = document.getElementById("hour-el") ;
const minEL = document.getElementById("min-el") ;
const secEL = document.getElementById("sec-el") ;


const birth = "17 Feb 1999" ;


function calcdate() {
    function myAge() {
        const txtDate = document.getElementById("txt-date").value ;
        const dateParts = txtDate.split("-")
        const birth =dateParts;
        const birthDate = new Date(birth) ;
        const currentAge = new Date() ;
        const Age = Math.floor(currentAge - birthDate) ; 
        
        const totalSecound = Age / 1000 ;
        const year = Math.floor(totalSecound /3600/24/30/12 )
        const month = Math.floor(totalSecound /3600/24/30)%12 
        const day = Math.floor(totalSecound /3600/24)%30 
        const hour = Math.floor(totalSecound /3600)%24 
        const min = Math.floor(totalSecound /60)%60 
        const seconds = Math.floor(totalSecound % 60) ;
    
        yearEL.innerHTML = formtime(year)
        monthEL.innerHTML = formtime(month)
        dayEL.innerHTML = formtime(day)
        hourEL.innerHTML = formtime(hour)
        minEL.innerHTML = formtime(min)
        secEL.innerHTML = formtime(seconds)
    
    }
    
    function formtime(time) {
        return time < 10 ? `0${time}` : time ; 
    }
    
    myAge()
    setInterval(myAge , 1000)
}