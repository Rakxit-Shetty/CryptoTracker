/* eslint-disable no-unused-vars */
import { useState,useEffect } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios'
import { CryptoState } from '../CryproContext'
import { SingleCoin } from '../config/api'
import { makeStyles } from '@material-ui/core'


const useStyles=makeStyles(()=>({

}))

const CoinPage = () => {
const cls=useStyles();
  const { id }=useParams()
  const [coin,setCoin]=useState();
  const { cur, symbol}=CryptoState();

  const fetchCoin = async () => {
    // setLoading(true);
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchCoin();
  }, []);
console.log(coin)
  return (
    <div className={cls.container}>CoinPage{" "+coin?.name}</div>
  )
}

export default CoinPage