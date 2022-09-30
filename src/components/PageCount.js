function PageCount(props) {

    const numberStyle = {
      textAlign: 'center',
      fontSize: '14px'
    }
  
    let pageList = [];
    for (let p = props.chpStart; p <= props.chpEnd; p++) {
      pageList.push(<td style={numberStyle}>{p}</td>)
    };
  
    const firstSix = <tr>{pageList.splice(0, 6)}</tr>
    const secondSix = <tr>{pageList.splice(0, 6)}</tr>
    const thirdSix = <tr>{pageList.splice(0, 6)}</tr>
    const forthSix = <tr>{pageList.splice(0, 6)}</tr>
  
    return (
      <div>
        <table style={{margin: 'auto'}}>
          <tbody>
            {firstSix}
            {secondSix}
            {thirdSix}
            {forthSix}
          </tbody>
        </table>
      </div>
    )
  }

export default PageCount;