import { useState } from "react";

const URL = 'https://catfact.ninja/fact';
const WithLoadingIndicator = ({WrappedComponent}: {WrappedComponent: JSX.Element}): JSX.Element => {
    const [isLoading, setLoading] = useState(true);

    fetch(URL)
    .then(response => response.json())
    .then(text => {
      setLoading(false);
      console.log('Факт',text.fact);
    });
   
    if(isLoading) return <div>Загрузка данных...</div>;
   
    return WrappedComponent;
}

export default WithLoadingIndicator;