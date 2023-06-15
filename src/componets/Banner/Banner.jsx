 import Carousel from './Carousel'
import {makeStyles, Container, Typography} from '@material-ui/core';

const useStyle=makeStyles(()=>({
banner:{
    background:"url(../src/assets/926968.png) fixed",
    backgroundBlendMode: "lighten",
   
},
bannerContent:{
  height:550,
  display:"flex",
  flexDirection:"column",
  paddingTop:20,
  paddingBottom:25,
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
        marginBottom:20
      }}
      >
        Crypto <span style={{color:"gold"}}>Track</span>er
      </Typography>

      <Typography
      variant="subtitle2"
      style={{
        fontFamily: "Montserrat",
        color:"darkgrey"
      }}
      >
        KEEP TRACK OF YOU FAV CRYPTOS
      </Typography>

      </div>
      <Carousel/>
      </Container>
        
        </div>
  )
}

export default Banner