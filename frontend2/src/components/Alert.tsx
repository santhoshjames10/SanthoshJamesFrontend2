import {ReactNode} from 'react'


interface Props {
    childern: ReactNode;
}



const Alert = ({childern}: Props) => {
  return (
    <div className="alert alert-primary">{childern}</div>
  )
}

export default Alert