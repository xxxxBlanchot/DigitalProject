import { Routes, Route, Link} from 'react-router-dom'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css'
import Button from 'react-bootstrap/Button'
import React from 'react';

export function Q1() {
    return(  
      <div className="content" >
        <div className="shade"></div>
        <div className="content-body">
        <div className="quizTitle">One minute to measure your personality charm</div>
        <div className="icon" id="i1"></div>
          <h4>Question </h4>
          <p>Do you often have nothing to do because you have nothing to do?</p>
          <Link to="/Q1/2" className='link'> <Button className="button btn btn-info" active > YES</Button></Link>
          <Link to="/Q1/3" className='link'> <Button className="button btn btn-info" active>NO</Button></Link>
          <Routes>
           <Route exact path="Q1/2" element={<Q2/>}/>
           <Route exact path="Q1/3" element={<Q3/>}/>
          </Routes>
        </div>
      
      </div>
    )
  }
  
  export function Q2() {
    return (
      <div className="content" >
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i2"></div>
            <h4>Question </h4>
            <p>What would you prefer to do on a pleasant morning?</p>
            <Link to="/Q1/3" className='link'><Button className="button btn btn-info" active>Exercise, or go shopping</Button></Link>
            <Link to="/Q1/4" className='link'><Button className="button btn btn-info" active>Read a book while drinking a drink</Button></Link>
          <Routes>
           <Route path="Q1/3"  exact element={<Q3/>}/>
           <Route path="Q1/4"  exact element={<Q4/>}/>
          </Routes>
          </div>
        </div>
    )
    }
    export function Q3() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i3"></div>
            <h4>Question</h4>
            <p>What kind of food do you prefer?</p>
            <Link to="/Q1/4" className='link'><Button className="button btn btn-info" active > Dessert</Button></Link>
            <Link to="/Q1/6" className='link'><Button className="button btn btn-info" active>Western food</Button></Link>
          <Routes>
           <Route  exact path="Q1/4" element={<Q4/>}/>
           <Route  exact path="Q1/6" element={<Q6/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q4() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i4"></div>
            <h4>Question</h4>
            <p>In which way do you prefer to keep fit?</p>
            <Link to="/Q1/5" className='link'><Button className="button btn btn-info" active > Leisurely walks</Button></Link>
            <Link to="/Q1/6" className='link'><Button className="button btn btn-info" active>Vigorous exercise </Button></Link>
          <Routes>
           <Route  exact path="Q1/5" element={<Q5/>}/>
           <Route  exact path="Q1/6" element={<Q6/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q5() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i5"></div>
            <h4>Question </h4>
            <p>How many close friends do you have?</p>
            <Link to="/Q1/7" className='link'><Button className="button btn btn-info" active > One or none </Button></Link>
            <Link to="/Q1/7" className='link'><Button className="button btn btn-info" active> Two or more</Button></Link>
          <Routes>
           <Route  exact path="Q1/7" element={<Q7/>}/>
           <Route  exact path="Q1/6" element={<Q6/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q6() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i6"></div>
            <h4>Question</h4>
            <p>What kind of flower do you prefer?</p>
            <Link to="/Q1/8" className='link'><Button className="button btn btn-info" active > Elegant lilies </Button></Link>
            <Link to="/Q1/7" className='link'><Button className="button btn btn-info" active> Petite daisies</Button></Link>
          <Routes>
           <Route  exact path="Q1/8" element={<Q8/>}/>
           <Route  exact path="Q1/7" element={<Q7/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q7() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i7"></div>
            <h4>Question</h4>
            <p>Do you give your heart to your friends?</p>
            <Link to="/Q1/8" className='link'> <Button className="button btn btn-info" active > YES</Button></Link>
          <Link to="/Q1/ReD" className='link'> <Button className="button btn btn-info" active>NO</Button></Link>
          <Routes>
           <Route exact path="Q1/8" element={<Q8/>}/>
           <Route exact path="Q1/ReD" element={<ReD/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q8() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i8"></div>
            <h4>Question </h4>
            <p>What kind of drinks do you prefer to drink?</p>
            <Link to="/Q1/9" className='link'> <Button className="button btn btn-info" active > Juice and soda</Button></Link>
          <Link to="/Q1/ReE" className='link'> <Button className="button btn btn-info" active>Coffee and tea</Button></Link>
          <Routes>
           <Route exact path="Q1/9" element={<Q9/>}/>
           <Route exact path="Q1/ReE" element={<ReE/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q9() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i9"></div>
            <h4>Question</h4>
            <p>Have you ever stayed up and stayed up all night with friends?</p>
            <Link to="/Q1/ReC" className='link'> <Button className="button btn btn-info" active > Yes</Button></Link>
          <Link to="/Q1/10" className='link'> <Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route exact path="Q1/ReC" element={<ReC/>}/>
           <Route exact path="Q1/10" element={<Q10/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function Q10() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i10"></div>
            <h4>Question</h4>
            <p>Do you have a lot of topics of interest?</p>
            <Link to="/Q1/ReB" className='link'> <Button className="button btn btn-info" active > Yes</Button></Link>
          <Link to="/Q1/ReA" className='link'> <Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route exact path="Q1/ReB" element={<ReB/>}/>
           <Route exact path="Q1/ReA" element={<ReA/>}/>
          </Routes>
          </div>
        </div>
      )
    }
  
    export function ReA() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i11"></div>
            <h4>Your Type of Personality Charm</h4>
            <p id="explanation">In your opinion, you don't need too many friends, just three or five close friends is enough, because you are not a person who is good at expressing yourself, you say very little in front of people you don't know well, only in front of your friends you can speak freely and be your true self. So in the eyes of others, you may not be so cheerful, but in fact you leave the warm side to those who understand you.</p>
          </div>
        </div>
      )
    }
    export function ReB() {
      return (
        <div className="content">
        <div className="content-body">
        <div className="quizTitle">One minute to measure your personality charm</div>
        <div className="icon" id="i12"></div>
        <h4>Your Type of Personality Charm</h4>
          <p id="explanation">You are a strong and optimistic person who is also resilient and often able to stick to your decisions or plans, which gives the impression that you are very thoughtful. In addition, you get on well with your friends. You are always full of quirky ideas that make you feel sunny and cheerful, and it's a pleasure to talk to you.</p>
        </div>
      </div>
      )
    }
    export function ReC() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i13"></div>
          <h4>Your Type of Personality Charm</h4>
            <p id="explanation">You are straightforward and optimistic, doing what you want to do and leaving as few regrets in your life as possible. You are seen as a charismatic person because you try to do things that they cannot do or are afraid to do. In addition, you are confident and do not let yourself be overwhelmed by the problems in front of you, believing that there is always a way out of everything.</p>
          </div>
        </div>
      )
    }
    export function ReD() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i14"></div>
          <h4>Your Type of Personality Charm</h4>
            <p id="explanation">You are not very good at socialising and you often feel uncomfortable around strange people and don't know how to behave. You are a sentimental person who is used to keeping your thoughts buried inside, so it is difficult for others to understand what you are really thinking and you feel unappreciated. This lack of understanding deepens your resistance to human interaction and makes you hide in your own world.</p>
          </div>
        </div>
      )
    }
    export function ReE() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">One minute to measure your personality charm</div>
          <div className="icon" id="i15"></div>
          <h4>Your Type of Personality Charm</h4>
            <p id="explanation">You are a person of great substance and at the same time you are very independent. You prefer to spend time on yourself than on group activities and are not willing to waste personal time just to fit in. This doesn't stop you from being a good listener and partner, though. You will use your reason to analyse the current situation and make people feel very reliable.</p>
          </div>
        </div>
      )
    }
    
  
  
  
  
  export default Q1;