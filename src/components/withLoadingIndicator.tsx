import { useState, useEffect } from "react";

const withLoadingIndicator = (WrappedComponent: any) => {
  return () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [])

    if(isLoading) return <div>Загрузка данных...</div>;
   
    return <WrappedComponent/>
  }


}

export default withLoadingIndicator;