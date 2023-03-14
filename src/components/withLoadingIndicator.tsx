import { useState, useEffect } from "react";
import { dataI } from '../types/types'

const URL = 'https://catfact.ninja/fact';

const withLoadingIndicator = (WrappedComponent: React.ComponentType<dataI>): () => JSX.Element => {
  return () => {
    const [isLoading, setLoading] = useState(true);
    const [fact, setFact] = useState('');

    useEffect(() => {
      fetchData().then((fact) => {
        setFact(fact);
        setLoading(false);
      })
    }, [])

    if(isLoading) return <div>Загрузка данных...</div>;
   

    return <WrappedComponent fact={fact}/>
}
}

async function fetchData() {
  try {
  const response = await fetch(URL);
  const data = await response.json();
  return data.fact;
  } catch (err) {
  console.error('Ошибка получения факта о котиках');
  }
  }

export default withLoadingIndicator;