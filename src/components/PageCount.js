function PageCount(props) {

    const numberStyle = {
      textAlign: 'center',
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
        <table style={{marginBottom: '15px'}}>
            {firstSix}
            {secondSix}
            {thirdSix}
            {forthSix}
        </table>
    )
  }

export default PageCount;