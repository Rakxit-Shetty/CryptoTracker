// import React from 'react'
import {makeStyles, Container, Typography} from '@material-ui/core'

const useStyle=makeStyles(()=>({
banner:{
    background:"url(../src/assets/926968.png) no-repeat" //no-repeat center center fixed" ,
    // backgroundPosition: "center"
    // backgroundColor:"red"
},
bannerContent:{
  height:400,
  display:"flex",
  flexDirection:"column",
  paddingTop:25,
  justifyContent:"space-around"
},
tagline:{
  display:"flex",
  height:"40%",
  flexDirection:"column",
  justifyContent:"center",
  textAlign:"center"
}
}))

const Banner = () => {
    const cls=useStyle()
  return (
    <div className={cls.banner }>
      <Container className={cls.bannerContent}>
        <div className={cls.tagline}>

      <Typography
      variant="h2"
      style={{
        fontFamily: "Montserrat",
        fontWeight: "bold",
        marginBottom:15
      }}
      >
        Crypto Tracker
      </Typography>

      <Typography
      variant="subtitle2"
      style={{
        fontFamily: "Montserrat",
        color:"darkgrey"
      }}
      >
        Keep Track of your Fav Cryptos
      </Typography>

      </div>
      </Container>
        
        </div>
  )
}

export default Banner