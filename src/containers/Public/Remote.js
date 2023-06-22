import React,{useEffect, useState} from 'react'
import ButtonOnOff from '../../components/ButtonOnOff'
import {GiOilPump} from 'react-icons/gi'
import {TbWindmill} from 'react-icons/tb'
import {BsLightbulb,BsCpu} from 'react-icons/bs'
import TemperatureCard from '../../components/TemperatureCard'
import {  ref, child,onValue,set } from "firebase/database";
import database from '../../firebase'
import { toast } from 'react-hot-toast'

const Remote = () => {
  const [isOnB, setIsOnB] = useState(false);
  const [isOnQ, setIsOnQ] = useState(false);
  const [isOnD, setIsOnD] = useState(false);
  const [isOnH, setIsOnH] = useState(false);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);

  
  const dbRef = ref(database);
  const db = database;
    
  const onClickD = () => {
    
    set(ref(db, 'ledStatus/'), {
      ledStatus: isOnD,  
    })
    .then(() => {
      if(isOnD === false){
        toast.success('Bật đèn thành công')
        setIsOnD(true)
      }else{
        toast.success('Tắt đèn thành công')
        setIsOnD(false)


      }
      
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      toast.error('Bật đèn thất bại')

    });
  }
  const onClickQ = () => {
   
    set(ref(db, 'quatStatus/'), {
      
      quatStatus: isOnQ,  
    })
    .then(() => {
      if(isOnQ === false){
        toast.success('Bật quạt thành công')
        
        setIsOnQ(true)
      }else{
        toast.success('Tắt quạt thành công')
        
        setIsOnQ(false)


      }
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      toast.error('Bật quạt thất bại')

    });
  }
  const onClickB = () => {
    
    set(ref(db, 'bomStatus/'), {
      bomStatus: isOnB,  
    })
    .then(() => {
      toast.success('Bật máy bơm thành công')
      if(isOnB === false){
        toast.success('Bật máy bơm thành công')
        
        setIsOnB(true)
      }else{
        toast.success('Tắt máy bơm thành công')
        
        setIsOnB(false)


      }
    })
    .catch((error) => {
      // The write failed...
      toast.error('Bật máy bơm thất bại')

    });
  }
  const onClickH = () => {
   
    set(ref(db, 'systemStatus/'), {
      systemStatus: isOnH,  
    })
    .then(() => {
      if(isOnH === false){
        toast.success('Bật hệ thống thành công')
        
        
        setIsOnH(true)
      }else{
        toast.success('Tắt hệ thống thành công')
        
        setIsOnH(false)


      }
      
        // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
      toast.error('Bật đèn thất bại')
      setIsOnH(false)


    });
  }
  useEffect(() => {
    const temperatureRef = child(dbRef, 'temperature/');
    const humidityRef = child(dbRef, 'humidity/');
  
    const temperatureListener = onValue(temperatureRef, (snapshot) => {
      if (snapshot.exists()) {
        const temperatureValue = snapshot.val().toFixed(2);
        setTemperature(temperatureValue);
      } else {
        console.log('No temperature data available');
      }
    });
  
    const humidityListener = onValue(humidityRef, (snapshot) => {
      if (snapshot.exists()) {
        const humidityValue = snapshot.val().toFixed(2);
        setHumidity(humidityValue);
      } else {
        console.log('No humidity data available');
      }
    });
  
    // Clean up listeners when the component unmounts
    return () => {
      temperatureListener();
      humidityListener();
    };
  }, [dbRef]);
  
  return (
    <div className='w-full h-full pt-12 flex gap-5 items-start' >
      <div className='w-1/3 flex flex-col  justify-center items-center gap-5 shadow-xl border-t pt-4 rounded-md' >
        <ButtonOnOff Icons={GiOilPump} onClick={onClickB} isOn={isOnB} setIsOn={setIsOnB}   label={"Máy bơm"}   />
        <ButtonOnOff Icons={TbWindmill} onClick={onClickQ} label={"Quạt"} isOn={isOnQ} setIsOn={setIsOnQ}   />
        <ButtonOnOff Icons={BsLightbulb} onClick={onClickD} label={"Đèn"} isOn={isOnD} setIsOn={setIsOnD}   />
        <ButtonOnOff Icons={BsCpu} onClick={onClickH} label={"Hệ thống"} isOn={isOnH} setIsOn={setIsOnH}  />
   
      </div>
      <div className='h-full w-2/3 justify-around items-center flex  shadow-xl border-t pt-4'>
        <TemperatureCard label='Nhiệt độ' value={temperature} maxValue={'100'} symbol={'°C'} />
        <TemperatureCard label='Độ ẩm' value={humidity} maxValue={'100'} symbol={'°F'} />
        
        
      </div>
    </div>
  )
}

export default Remote