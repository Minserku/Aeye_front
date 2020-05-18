import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import '../css/Bulletin.css'

// class Bulletin_form extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       id : this.props.id,
//       title : this.props.title,
//       user_id : this.props.user_id,
//       aritlce: this.props.article,
//       date : this.props.date
//     }
//   }
//   render(){
//     console.log("스테이트");
//     console.log(this.state);
//     return(
//       <TableRow >
//         <TableCell>{this.state.id}</TableCell>
//         <TableCell>
//           <Link to={{
//             pathname:`/article/${this.state.id}`,
//             state:{
//               id,
//               title,
//               article,
//               user_id,
//             }
//           }}>
//             {this.state.title}
//           </Link>
//         </TableCell>
//         <TableCell>{this.state.user_id}</TableCell>
//         <TableCell>{this.state.date}</TableCell>
//       </TableRow>
//     )
//   }
// }

function Bulletin_form ({id, title, user_id, article, date}){
  return(
    <TableRow >
      <TableCell>{id}</TableCell>
      <TableCell>
          <Link to={{
          pathname: `${id}`,
          state:{
            id,
            title,
            article,
            user_id,
            date,
          }
        }}>
          {title}
        </Link>
      </TableCell>
      <TableCell>{user_id}</TableCell>
      <TableCell>{date}</TableCell>
    </TableRow>
  );
}

Bulletin_form.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  user_id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default Bulletin_form;