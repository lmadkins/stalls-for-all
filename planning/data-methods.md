 //////////
 Determine if the value in the data is true/false, and if it is, render some element with a string saying it is or it is not this thing
for
- unisex: true/false
- accessible: true/false
- changing_tables: true/false

{data.accessible}
{data.unisex}
{data.changing_table}

function DetermineUnisex({data}) {
  const isUnisex = data.unisex.value
  if ({isUnisex} === true) {
    console.log(data.unisex.value)
  }
}



 //////////
 Make a customized link for each listing, using the latitude and longitude for it and inserting those into the url

  const directionsUrl = (({data}) => {
    let newUrl =`https://www.google.com/maps/@${data.latitude},${data.longitude}14z`
    console.log(newUrl)
    return newUrl
    })
    // ^ currently not working



/////////
Make a shortened version of data.distance so it only displays as, for example, 0.013, instead of 0.013506731393940041

  // const shortDistance = (({data}) => {
  //   let num = data.distance
  //   let distanceString = num.toString()
  //   let shortString = distanceString.slice(0, 3)
  //   console.log(shortString)
  //   return shortString
  // })
 // ^ currently not working