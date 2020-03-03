import React, { Component } from 'react';
import { Container, Image, Menu } from 'semantic-ui-react';
import './menu.css';
import { Link } from 'react-router-dom'
// const styles = {
//
//   color: 'brown',
// }
class Menu1 extends Component {
  constructor(props) {
    super(props)

}

componentDidMount () {
  console.log(this.props.routes.match.path)
}


  render () {

    return (


    <div className="border">

    <ul>
   <li ><a className="b1" href="/home">Quora</a></li>
   <li className={this.props.routes.match.path === '/home' ? 'active': null}  ><Link to="/home">Home</Link></li>
   <li className={this.props.routes.match.path === '/answer' ? 'active': null}  ><Link to="/answer">Answer</Link></li>
   <li className={this.props.routes.match.path === '/about' ? 'active': null}  ><Link to="/about">About</Link></li>
   <div className="search">
   <input type="text" name="search" placeholder="Search Quora" />

    <button className="button1"><Link className= "link1" to="/textarea">Add Question</Link></button>

   </div>

 </ul>

</div>


)
 }
   }

   export default Menu1;
