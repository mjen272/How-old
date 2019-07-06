import * as React from 'react'
import Loader from 'react-loader-spinner'

interface IProps{
  result:string
  filelength:any
}

export default class Result extends React.Component<IProps,{}> {
  
  public render() {
    return (
      <div className="dank">
        {
          this.props.result === "" && this.props.filelength>0 ?
            <Loader type="Puff" color="#00BFFF" height={60} width={60}/> :
            <p>{this.props.result}</p>
        }
      </div>
    )
  }
}