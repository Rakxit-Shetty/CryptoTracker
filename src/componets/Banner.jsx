// import React from 'react'
import {makeStyles} from '@material-ui/core'

const useStyle=makeStyles(()=>({
banner:{
    backgroundImage:"url()"
}
}))

const Banner = () => {
    const cls=useStyle
  return (
    <div className={cls.banner }>
        Banner
        </div>
  )
}

export default Banner