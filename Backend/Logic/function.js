const axios=require("axios")

const getTime=(data)=>{
    let obj={}

   let outi= data.items.map((ele)=>{

        let date=ele.snippet.publishedAt[8]+ele.snippet.publishedAt[9]
        let month=ele.snippet.publishedAt[5]+ele.snippet.publishedAt[6]
        let year=ele.snippet.publishedAt[0]+ele.snippet.publishedAt[1]+ele.snippet.publishedAt[2]+ele.snippet.publishedAt[3]
        let hour=ele.snippet.publishedAt[11]+ele.snippet.publishedAt[12]
        let min=ele.snippet.publishedAt[14]+ele.snippet.publishedAt[15]
        let sec=ele.snippet.publishedAt[17]+ele.snippet.publishedAt[18]

        let currDate=new Date().getDate().toString()
    
        if(currDate.length==1)
        {
            let bag="0"
            currDate=bag+currDate
        }
        let currMon=((new Date().getMonth())+1).toString()
        if(currMon.length==1)
        {
            let bag="0"
            currMon=bag+currMon
        }
       
        let currYear=new Date().getFullYear().toString()
        
        let currHour=new Date().getHours().toString()
        let currMin=new Date().getMinutes().toString()
        let currSec=new Date().getSeconds().toString()

        if(year!=currYear)
        {
            let val=Math.abs(Number(year)-Number(currYear))
            val=val+" "+"year"
            ele.uploaded=val;
            return ele
        }
        if(month!=currMon)
        {
            let val=Math.abs(Number(month)-Number(currMon))
            val=val+" "+"month"
            ele.uploaded=val;
            return ele

        }
        if(date!=currDate)
        {
            let val=Math.abs(Number(date)-Number(currDate))
            val=val+" "+"day"
            ele.uploaded=val;
            return ele

        }
        if(hour!=currHour)
        {
            let val=Math.abs(Number(hour)-Number(currHour))
            val=val+" "+"hour"
            ele.uploaded=val;
            return ele

        }
        if(min!=currMin)
        {
            let val=Math.abs(Number(min)-Number(currMin))
            val=val+" "+"min"
            ele.uploaded=val;
            return ele

        }
        if(sec!=currSec)
        {
            let val=Math.abs(Number(sec)-Number(currSec))
            val=val+" "+"sec"
            ele.uploaded=val;
            return ele

        }
    })
    return outi
}

async function getTokens1({code,
    clientId,
    clientSecret,
    redirectUri}){
        return axios
        .post("https://oauth2.googleapis.com/token",{},{
            params:{
                code,
                client_id: clientId,
                client_secret: clientSecret,
                redirect_uri: redirectUri,
                grant_type: "authorization_code",
            }
  
        })
        .then((res) => {
            return res.data
        })
        .catch((error) => {
          console.error(`Failed to fetch auth tokens`);
          throw new Error(error.message);
        });
  }


  async function mydata(id_token,access_token){
    const googledata= await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,{
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
  )
  .then((res) => {console.log(res.data,"1111111111111111")
return res.data})
  .catch((error) => {
    console.error(`Failed to fetch user`);
    throw new Error(error.message);
  });
   console.log(googledata,"2222222222222222")

   return googledata
  }



module.exports={getTime,getTokens1,mydata}
