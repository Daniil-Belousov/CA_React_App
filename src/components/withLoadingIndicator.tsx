import { useState, useEffect } from "react";
import { dataI } from '../types/types'

interface WrappedComponentProps {
  name: string;
  surname: string;
}

const withLoadingIndicator = (WrappedComponent: React.ComponentType<WrappedComponentProps>) => {
  return () => {
    const [isLoading, setLoading] = useState(true);
    const [userData, setUserData] = useState({name:'', surname:''});

    useEffect(() => {
      fetchData().then((data) => {
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