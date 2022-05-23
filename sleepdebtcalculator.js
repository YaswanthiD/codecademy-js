const getSleepHours = day => {
    switch(day) {
      case 'Monday' :
      return 8
      break;
      case 'Tuesday' :
      return 10
      break;
      case 'Wednesday' :
      return 6
      break;
      case 'Thursday' :
      return 15
      break;
      case 'Friday' :
      return 4
      break;
      case 'Saturday' :
      return 3
      break;
      case 'Sunday' :
      return 12
      break;
    }
  };
  
  console.log(getSleepHours('Monday'))
  
  const getActualSleepHours = () =>{
    return getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday')
  }
  // console.log(getSleepHours('Monday'));
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () =>{
    const idealHours = 9;
    return idealHours * 7;
  };
  
  console.log(getIdealSleepHours());
  
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours ();
   const idealSleepHours = getIdealSleepHours ();
   if(actualSleepHours === idealSleepHours){
     console.log('You got the perfect amount of sleep.')
   }
   else if (actualSleepHours > idealSleepHours) {
     console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours of sleep than needed.')
   }
   else if (actualSleepHours < idealSleepHours) {
     console.log('You should have ' + (idealSleepHours-actualSleepHours) + ' more hours of sleep')
   }
   else {
     console.log('You are very Healthy')
   }
  };
  calculateSleepDebt();
  
  
  
  
  