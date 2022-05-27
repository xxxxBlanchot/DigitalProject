import { Routes, Route, Link} from 'react-router-dom'
import 'bootswatch/dist/minty/bootstrap.min.css'
import './App.css'
import Button from 'react-bootstrap/Button'
import React from 'react';

export function U1() {
    return(  
      <div className="content" >
        <div className="shade"></div>
        <div className="content-body">
        <div className="quizTitle">How many lovers live in your heart</div>
        <div className="icon" id="i10"></div>
          <h4>Question</h4>
          <p>Once upon a time, a long time ago, there was a prince and a girl who sold flowers in the story, and you were to be</p>
          <Link to="/U2" className='link'> <Button className="button btn btn-info" active>The prince</Button></Link>
          <Link to="/U6" className='link'> <Button className="button btn btn-info" active>The girl selling flowers</Button></Link>
          <Routes>
           <Route exact path="U2" element={<U2/>}/>
           <Route exact path="U2" element={<U6/>}/>
          </Routes>
        </div>
      
      </div>
    )
  }
  
  export function U2() {
    return (
      <div className="content" >
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i9"></div>
            <h4>Question </h4>
            <p>Dear Prince, there is a riot in your country, which one of the following would you choose to marry?</p>
            <Link to="/U4" className='link'><Button className="button btn btn-info" active > The daughter of a minister who holds military power</Button></Link>
            <Link to="/U3" className='link'><Button className="button btn btn-info" active>The flower-selling girl who loves you dearly</Button></Link>
          <Routes>
           <Route path="U4"  exact element={<U4/>}/>
           <Route path="U3"  exact element={<U3/>}/>
          </Routes>
          </div>
        </div>
    )
    }
    export function U3() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i8"></div>
            <h4>Question</h4>
            <p>The minister mutinies, forcing you to abdicate and kill the girl who sells flowers. The minister's daughter comes to your rescue, will you trust her?</p>
            <Link to="/U4" className='link'><Button className="button btn btn-info" active >Yes</Button></Link>
            <Link to="/U5" className='link'><Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route  exact path="U4" element={<U4/>}/>
           <Route  exact path="U5" element={<U5/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U4() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i7"></div>
            <h4>Question</h4>
            <p>The minister's daughter asks you to take a fake death pill to avert immediate disaster, and you will</p>
            <Link to="/U5" className='link'><Button className="button btn btn-info" active >Accept</Button></Link>
            <Link to="/U8" className='link'><Button className="button btn btn-info" active>Refuse</Button></Link>
          <Routes>
           <Route  exact path="U5" element={<U5/>}/>
           <Route  exact path="U8" element={<U8/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U5() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i6"></div>
            <h4>Question</h4>
            <p>When your brother comes to your rescue and injures the minister's daughter and wants to put her to death nearer, you will</p>
            <Link to="/U7" className='link'><Button className="button btn btn-info" active >Accepting her execution</Button></Link>
            <Link to="/U8" className='link'><Button className="button btn btn-info" active>Let her live</Button></Link>
          <Routes>
           <Route  exact path="U7" element={<U7/>}/>
           <Route  exact path="U8" element={<U8/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U6() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i5"></div>
            <h4>Question</h4>
            <p>You are in love with a prince, but the prince is in love with the minister's daughter, you will</p>
            <Link to="/U4" className='link'><Button className="button btn btn-info" active >Become their matchmaker </Button></Link>
            <Link to="/U8" className='link'><Button className="button btn btn-info" active> Choose to leave</Button></Link>
          <Routes>
           <Route  exact path="U4" element={<U4/>}/>
           <Route  exact path="U8" element={<U8/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U7() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i4"></div>
            <h4>Question</h4>
            <p>It's raining heavily, you're lost in the forest and you found a compass, will you use it?</p>
            <Link to="/U10" className='link'> <Button className="button btn btn-info" active > Yes</Button></Link>
          <Link to="/U9" className='link'> <Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route exact path="U10" element={<U10/>}/>
           <Route exact path="U9" element={<U9/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U8() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i12"></div>
            <h4>Question </h4>
            <p>The minister's daughter finds you and says she can only be with you and serve you as your concubine. You will</p>
            <Link to="/U10" className='link'> <Button className="button btn btn-info" active >Accept</Button></Link>
          <Link to="/U9" className='link'> <Button className="button btn btn-info" active>Refuse</Button></Link>
          <Routes>
           <Route exact path="U10" element={<U10/>}/>
           <Route exact path="U9" element={<U9/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U9() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i3"></div>
            <h4>Question </h4>
            <p>The minister's daughter dies and her soul is used by a black sorcerer. She curses that the person you fall in love with will die on the day your child is born... Will you still want a child?</p>
            <Link to="/U11" className='link'> <Button className="button btn btn-info" active >No</Button></Link>
          <Link to="/U10" className='link'> <Button className="button btn btn-info" active>Yes</Button></Link>
          <Routes>
           <Route exact path="U11" element={<U11/>}/>
           <Route exact path="U10" element={<U10/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U10() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i2"></div>
            <h4>Question</h4>
            <p>Something terrible has happened. Years later, your newborn child's face is identical to that of the minister's daughter. Will you kill your child?</p>
            <Link to="/U11" className='link'> <Button className="button btn btn-info" active >Yes</Button></Link>
            <Link to="/U14" className='link'> <Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route exact path="U11" element={<U11/>}/>
           <Route exact path="U14" element={<U14/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U11() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i1"></div>
            <h4>Question </h4>
            <p>The person you are in love with ages with the years, while you have an ageless face. You will</p>
            <Link to="/U14" className='link'> <Button className="button btn btn-info" active > Wandering on earth</Button></Link>
            <Link to="/U12" className='link'> <Button className="button btn btn-info" active>Living in seclusion in the mountains</Button></Link>
          <Routes>
           <Route exact path="U14" element={<U14/>}/>
           <Route exact path="U12" element={<U12/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U12() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i11"></div>
            <h4>Question</h4>
            <p>One day you meet a talking cow who asks you if you have picked up a compass and says that it was lost to him. You will tell him</p>
            <Link to="/U13" className='link'> <Button className="button btn btn-info" active >Yes</Button></Link>
            <Link to="/U14" className='link'> <Button className="button btn btn-info" active>No</Button></Link>
          <Routes>
           <Route exact path="U13" element={<U13/>}/>
           <Route exact path="U14" element={<U14/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U13() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i5"></div>
            <h4>Question </h4>
            <p>The sacred cow reads you through your expression and laughs. He snatches the compass and dials back the needle, asking you if you could go back to the beginning, what would you choose to do</p>
            <Link to="/U14" className='link'> <Button className="button btn btn-info" active >The girl selling flowers</Button></Link>
            <Link to="/U15" className='link'> <Button className="button btn btn-info" active>The Minister's Daughter</Button></Link>
          <Routes>
           <Route exact path="U14" element={<U14/>}/>
           <Route exact path="U15" element={<U15/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function U14() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i7"></div>
            <h4>Question </h4>
            <p>You meet a storyteller and he takes two lines for you to read, would you choose</p>
            <Link to="/UReA" className='link'> <Button className="button btn btn-info" active > The tea is cold, let me refill it for you. </Button></Link>
            <Link to="/UReB" className='link'> <Button className="button btn btn-info" active>You are the bad bad who loves money</Button></Link>
          <Routes>
           <Route exact path="UReA" element={<UReA/>}/>
           <Route exact path="UReB" element={<UReB/>}/>
          </Routes>
          </div>
        </div>
      )
    }
  
    export function U15() {
      return(
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i14"></div>
            <h4>Question</h4>
            <p>You are in love with a prince who loves the flower-selling girl. Your father, who holds the power of war, asks you if you are sure of going further with the prince. You say</p>
            <Link to="/UReC" className='link'> <Button className="button btn btn-info" active >I could die for him</Button></Link>
            <Link to="/UReD" className='link'> <Button className="button btn btn-info" active>I love him, but he has no right to love me</Button></Link>
          <Routes>
           <Route exact path="UReC" element={<UReC/>}/>
           <Route exact path="UReD" element={<UReD/>}/>
          </Routes>
          </div>
        </div>
      )
    }
    export function UReA() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i16"></div>
            <h4>You don't have a lover in your heart</h4>
            <p id="lover">IWhen you stop loving someone, their memory is completely shattered by you. You can be so decisive because your unloving is not a spur of the moment, but a summation of one thing at a time. There may be times when you remember some warm moments, but a firm reason in your heart can keep you from looking back out of nostalgia.</p> 
            <p id="lover">For this reason, you are the happiest person in the world to be in love with, because your wisdom allows you to start each relationship with your whole heart and soul, with no one else in mind.</p>
          </div>
        </div>
      )
    }
    export function UReB() {
      return (
        <div className="content">
        <div className="content-body">
        <div className="quizTitle">How many lovers live in your heart</div>
        <div className="icon" id="i15"></div>
        <h4>You have two lovers in your heart</h4>
          <p id="lover">Two lovers live on in your heart with passionate feelings. These two lovers are your two mirrors, reminding you every time how you should treat others and how you should discipline yourself. These two kinds of love are the love of a parent and the love of a child. </p> 
          <p id="lover"> The parental love lover always tolerates you and comforts your broken heart, and you can still pamper yourself to him, no matter how old you are physically, you can play like a child, make mischief and bully each other. You feel in this state of rascality and mischief that the other person is forgiving and caring for you because they love you. When you are hurt, you see the tears in the other person's eyes and you feel an infinite sense of satisfaction, as if your injuries don't matter so much. Only later, you will deeply blame yourself because you know that your capriciousness broke his heart and made him leave you.</p> 
          <p id="lover">The other kind of lover, who is like your child, like that person you wanted to be but couldn't, you courted him, ingratiated yourself with him and wanted to give him the world.</p>
        </div>
      </div>
      )
    }
    export function UReC() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i14"></div>
          <h4>You have one lover in your heart</h4>
            <p id="lover">Because you are a demanding person, once you meet a partner who best matches your ideal pursuits, this lover becomes a lover role model in your mind. From then on, consciously or unconsciously, you will compare the lovers you meet with him. </p>
           <p id="lover">Even when you fall out of love, you habitually erase the unsuccessful relationship, murmuring in your mind: You are still the best. I have always loved only you. So this one lover became the immortal love affair in your heart and the only one that got your official and exclusive approval.</p>
          </div>
        </div>
      )
    }
    export function UReD() {
      return (
        <div className="content">
          <div className="content-body">
          <div className="quizTitle">How many lovers live in your heart</div>
          <div className="icon" id="i13"></div>
          <h4>You have many lovers in your heart</h4>
            <p id="lover">You are a man with a story to tell, and no one else can imagine how life has mercilessly ravaged you with those brutal, cold-blooded loves. There are countless people who ask you for advice on all sorts of different love issues. You may seem like a guru to others, but only you know in your heart that your insights are based on experience. </p>
           <p id="lover"> However, because you have been through so much, you know what relationships are all about, but you are only mad and not brave. When you are faced with someone you really like, you shy away from them and run away before you can start a relationship. </p>
           <p id="lover">Too many previous experiences have allowed you to weave all sorts of endings and fragments with him out of thin air; too many previous experiences have also allowed you to constantly take stock of human weaknesses.</p>
          </div>
        </div>
      )
    }
  
  
  
  
  
  export default U1;