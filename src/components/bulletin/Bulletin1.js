import React from 'react';
import Bulletin from './Bulletin_form';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import '../css/Bulletin.css';
  
class Bulletin1 extends React.Component{
  state={
    article:[
      {
      'id': 1,
      'title':'김동환의 존재는 우리에게 빛',
      'article':'동환이 형 최고야1',
      'user_id':'최민준',
      'date':'2020-05-16'
      },
      {
      'id': 2,
      'title':'김동환의 존재는 우리에게 빛',
      'article':'동환이 형 최고야2',
      'user_id':'최민준2',
      'date':'2020-05-16'
      },
      {
      'id': 3,
      'title':'김동환의 존재는 우리에게 빛',
      'article':'동환이 형 최고야3',
      'user_id':'최민준3',
      'date':'2020-05-16'
      }
    ]
  };

  render(){
    console.log(this.state.article);
    const {article} = this.state;
    return(
      <div className="bulletin">
      <div className="blackline" />
        <div>{article.title}</div>
        <Table>
          <TableHead>
            <TableCell>NO.</TableCell>
            <TableCell>제목</TableCell>
            <TableCell>작성자</TableCell>
            <TableCell>날짜</TableCell>
          </TableHead>
          <TableBody>
            {article.map(article=>{
              return <Bulletin key={article.id} id={article.id} title={article.title} user_id={article.user_id} article={article.article} date={article.date} />
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Bulletin1;