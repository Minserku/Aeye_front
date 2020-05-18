import React from 'react';

class Bulletin_article extends React.Component{
  componentDidMount(){
    const { location, history } = this.props;
     if (location.state === undefined){
       history.push("/");
     }
  }
  render(){
    console.log("Tlqkf");
    console.log(this.props.title);
    const {location} = this.props;
    if(location.state){
      return <div> {location.state.title}</div>
    }else{
      return null;
    }
    
    // if(article.state){
    //   return(
    //     <div>
          

  
    //     </div>
    //   )
    // }else{
    //   return null;
    // }
  };
}

export default Bulletin_article;