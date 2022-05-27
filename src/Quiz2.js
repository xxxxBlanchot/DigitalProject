import { Routes, Route, Link} from 'react-router-dom'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css'
import Button from 'react-bootstrap/Button'
import React from 'react';


export function Quiz2() {
    return(  
      <div className="content" >
        <div className="shade"></div>
        <div className="content-body">
        <div className="quizTitle">Help you know yourself</div>
          <p>Imagine now that there is a tall banana tree with four animals next to it. </p>
          <p>Now the animals have decided to have a race to see who can pick the banana from the tree first. Who do you think will win?</p>
          <div className='animals'>
            <ul>
            <Link to="/Q2/Lion" className='link'>
              <li>
                <div className="lionImage" id="animal"></div>
                <div className="animalName" >Lion</div>
              </li>
            </Link>
            <Link to="/Q2/Giraffe" className='link'>
              <li>
                <div className="giraffeImage" id="animal"></div>
                <div className="animalName" >Giraffe</div>
              </li>
            </Link>
            <Link to="/Q2/Squirrel" className='link'>
              <li>
                <div className="squirrelImage" id="animal"></div>
                <div className="animalName" >Squirrel</div>
              </li>
            </Link>
            <Link to="/Q2/Gorilla" className='link'>
              <li>
                <div className="gorillaImage"id="animal"></div>
                <div className="animalName" >Gorilla</div>
                </li>
            </Link>
            </ul>
            
          </div>
          
          
          <Routes>
           <Route exact path="/Q2/Lion" element={<Lion/>}/>
           <Route exact path="/Q2/Giraffe" element={<Giraffe/>}/>
           <Route exact path="Q2/Squirrel" element={<Squirrel/>}/>
           <Route exact path="/Q2/Gorilla" element={<Gorilla/>}/>
          </Routes>
        </div>
      </div>
    )
  }

  export function Lion() {
    return (
      <div className="content">
        <div className="content-body">
          <div className="quizTitle">Help you know yourself</div>
          <div className="lionImage" id="animal"></div>
            <h4>Your Character</h4>
            <p id="chara">You chose Lion and you are a valiant warrior in real life. You will fight for your career and other things you love. A warrior has the following six characteristics.</p>
            <div className="chara">
              <ul>
                <li><div>Never give up lightly</div></li>
                <li><div>Never fight an unsure battle</div></li>
                <li><div>Brave and fearless</div></li>
                <li><div>Ready to fight for the people and things you love</div></li>
                <li><div>You know what's right; and only do what you think is right</div></li>
                <li><div>You are a very self-disciplined person</div></li>
              </ul>
            </div>
          </div>
    </div>
    )
  }
  export function Giraffe() {
    return (
      <div className="content">
        <div className="content-body">
          <div className="quizTitle">Help you know yourself</div>
          <div className="giraffeImage" id="animal"></div>
            <h4>Your Character</h4>
            <p id="chara">If you choose a giraffe, this means that in real life you are a logical thinker. Logical thinkers are good at observing and analysing phenomena and will draw logical conclusions based on the feedback from these analyses. A logical thinker does not go with the flow and does not make strategies based on feelings. A logical thinker has the following six characteristics.</p>
            <div className="chara">
              <ul>
                <li><div>Good observation</div></li>
                <li><div>Curious</div></li>
                <li><div>Willing to challenge <br/>the status quo</div></li>
                <li><div>Conscious of avoiding common thinking <br/>errors and biases</div></li>
                <li><div>Good at <br/>communicating</div></li>
                <li><div>Analyses facts objectively</div></li>
              </ul>
            </div>
          </div>
    </div>
    )
  }

  export function Squirrel() {
    return (
      <div className="content">
        <div className="content-body">
          <div className="quizTitle">Help you know yourself</div>
          <div className="squirrelImage" id="animal"></div>
            <h4>Your Character</h4>
            <p id="chara">If you chose a squirrel, this means you are a happy-go-lucky person in real life. An optimist will bring happiness to yourself and those around you. 
            <br/> They always see the positive side of things and therefore do not fall into negative emotions.
            <br/>Optimists have the following six characteristics.</p>
            <div className="chara">
              <ul>
                <li><div>Can see the<br/>turnaround in failure</div></li>
                <li><div>Be honest with <br/>yourself</div></li>
                <li><div>Never compare<br/> yourself to others</div></li>
                <li><div>Good at <br/>self-motivation</div></li>
                <li><div>Can accept others as they really are</div></li>
                <li><div>Good at nurturing oneself</div></li>
              </ul>
            </div>
          </div>
    </div>
    )
  }
  export function Gorilla() {
    return (
      <div className="content">
        <div className="content-body">
          <div className="quizTitle">Help you know yourself</div>
          <div className="gorillaImage" id="animal"></div>
            <h4>Your Character</h4>
            <p id="chara">If you choose the gorilla, it means that in real life you are a contemplative. Contemplatives are reflective and although they are usually quiet. <br/>It never rains but it pours. They always listen carefully because they see it as an excellent opportunity to learn.
            <br/>Contemplatives have six characteristics.</p>
            <div className="chara">
              <ul>
                <li><div>Analyse each<br/> experience carefully</div></li>
                <li><div>Often more <br/>introverted and <br/>isolated</div></li>
                <li><div>Naturally <br/>understanding</div></li>
                <li><div>Has many different perspectives on the worlde</div></li>
                <li><div>Forgetful</div></li>
                <li><div>Eager to learn</div></li>
              </ul>
            </div>
          </div>
    </div>
    )
  }
  
  
  
  export default Quiz2;