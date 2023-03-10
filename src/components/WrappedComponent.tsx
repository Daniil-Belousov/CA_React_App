import {dataI} from '../types/types'

const WrappedComponent = ({name, surname} : dataI): JSX.Element => {

  const welcomeStr = `Добро пожаловать ${name} ${surname}!`

  return (
    <>
      <div>Данные успешно получены!</div>
        <br/>
      <div>{welcomeStr}</div>
    </>
  )
}

export default WrappedComponent;