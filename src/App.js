import logo from './logo.svg';
import { Routes, Route, Link, Outlet} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css'
import {Alert, Card, ListGroup} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import { isInaccessible, render } from '@testing-library/react';
import React from 'react';
import {Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10,ReA,ReB,ReC,ReD,ReE} from './Quiz1';
import {Quiz2, Lion, Squirrel, Giraffe, Gorilla} from './Quiz2'
import {U1,U2,U3,U4,U5,U6,U7,U8,U9,U10,U11,U12,U13,U14,U15,UReA,UReB,UReC,UReD} from './Quiz3';

export default function App() {
  return (
    <div className="body">
      <div className='header'>
      <h1>One minute Esay Quiz</h1>
      <h5>For entertainment purposes only</h5>
      </div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {/* <Route index element={<Home />} /> */}

          {/* Quiz 1 */}
            <Route exact path="/Q1/*" element={<Q1/>} />
            <Route exact path="Q1/2/*"  element={<Q2/>}/>
            <Route exact path="Q1/3/*"  element={<Q3/>}/>
            <Route exact path="Q1/4/*"  element={<Q4/>}/>
            <Route exact path="Q1/5/*"  element={<Q5/>}/>
            <Route exact path="Q1/6/*"  element={<Q6/>}/>
            <Route exact path="Q1/7/*"  element={<Q7/>}/>
            <Route exact path="Q1/8/*"  element={<Q8/>}/>
            <Route exact path="Q1/9/*"  element={<Q9/>}/>
            <Route exact path="Q1/10/*"  element={<Q10/>}/>
            <Route exact path="Q1/ReA/*"  element={<ReA/>}/>
            <Route exact path="Q1/ReB/*"  element={<ReB/>}/>
            <Route exact path="Q1/ReC/*"  element={<ReC/>}/>
            <Route exact path="Q1/ReD/*"  element={<ReD/>}/>
            <Route exact path="Q1/ReE/*"  element={<ReE/>}/>

          {/* Quiz 2 */}
            <Route excact path="/Quiz2/*" element={<Quiz2/>} />
            <Route exact path="/Q2/Lion" element={<Lion/>}/>
            <Route exact path="/Q2/Giraffe" element={<Giraffe/>}/>
            <Route exact path="Q2/Squirrel" element={<Squirrel/>}/>
            <Route exact path="/Q2/Gorilla" element={<Gorilla/>}/>

            { /* Quiz 3 */}
            <Route exact path="U1"  element={<U1/>} />
            <Route exact path="U2"  element={<U2/>}/>
            <Route exact path="U3"  element={<U3/>}/>
            <Route exact path="U4"  element={<U4/>}/>
            <Route exact path="U5"  element={<U5/>}/>
            <Route exact path="U6"  element={<U6/>}/>
            <Route exact path="U7"  element={<U7/>}/>
            <Route exact path="U8"  element={<U8/>}/>
            <Route exact path="U9"  element={<U9/>}/>
            <Route exact path="U10"  element={<U10/>}/>
            <Route exact path="U11"  element={<U11/>}/>
            <Route exact path="U12"  element={<U12/>}/>
            <Route exact path="U13"  element={<U13/>}/>
            <Route exact path="U14"  element={<U14/>}/>
            <Route exact path="U15"  element={<U15/>}/>
            <Route exact path="UReA"  element={<UReA/>}/>
            <Route exact path="UReB"  element={<UReB/>}/>
            <Route exact path="UReC"  element={<UReC/>}/>
            <Route exact path="UReD"  element={<UReD/>}/>
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    
    <div className='navbar'>
      <nav>
        <ul>
          <Link to="/Quiz2">
            <li className="navbutton btn btn-info">Know Yourself</li>
          </Link>
          <Link to="/Q1">
            <li className="navbutton btn btn-info">Personality Charm</li>
          </Link>
          <Link to="/U1">
            <li className="navbutton btn btn-info">How many lovers</li>
          </Link>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}





