import { useState, useEffect } from "react";
import { dataI } from '../types/types'

const withLoadingIndicator = (WrappedComponent: any) => {
  return () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({name:'', surname:''});

    useEffect(() => {
      fetchData().then((data) => {
        console.log('data',data);
        setUserData(data as dataI);
        setLoading(false);
      })
    }, [])

    if(isLoading) return <div>Загрузка данных...</div>;
   
    return <WrappedComponent name={userData.name} surname={userData.surname}/>
  }


}

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Даниил", surname: "Белоусов"});
    }, 3000);
  });
};

export default withLoadingIndicator;