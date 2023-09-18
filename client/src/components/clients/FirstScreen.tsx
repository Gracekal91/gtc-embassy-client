import { Link } from 'react-router-dom';
import embleme from '../../assests/images/embleme.png';
import visa from '../../assests/images/visa.avif';
export const FirstScreen = () => {
    return(
        <>
       <div className='first-screen-container'>
           <div className="header">
               <div className="header-content">
                   <img src={embleme} alt=""/>
                   <h1>Welcome to the DRC Embassy in Pretoria</h1>
                   <p>DRC Embassy in Pretoria, will help you to apply for anything</p>
               </div>
           </div>
           <div className="body-content">
               <div  className='card-container'>
                   <div className="left"
                        style={{
                            backgroundImage: `url(${visa})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                       <div className="bottom-ribbon">VISA</div>
                   </div>
                   <div className="right">
                       <p>Start visa application in one click</p>
                       <hr/>
                       <h4>VISA APPLICATION</h4>
                       <Link to='/form'>GET STARTED</Link>
                   </div>

               </div>
               <div  className='card-container'>
                   <div className="left"></div>
                   <div className="right">right</div>
               </div>
               <div  className='card-container'>
                   <div className="left"></div>
                   <div className="right">right</div>
               </div>
               <div  className='card-container'>
                   <div className="left"></div>
                   <div className="right">right</div>
               </div>
               <div  className='card-container'>
                   <div className="left"></div>
                   <div className="right">right</div>
               </div>
               <div  className='card-container'>
                   <div className="left"></div>
                   <div className="right">right</div>
               </div>
           </div>
       </div>
        </>
    )
}