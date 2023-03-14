const WrappedComponent = ({fact} : {fact?:string}): JSX.Element => {
  const factStr = `А вы знали? - ${fact}`

  return (
    <>
      <div>Данные успешно получены!</div>
        <br/>
      <div>{factStr}</div>
    </>
  )
}

export default WrappedComponent;