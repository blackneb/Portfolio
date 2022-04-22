import React, {useRef,useState} from 'react'
import './contact.css'
import Facebook from '../icons/facebook.png'
import Instagram from '../icons/instagram.png'
import Telegram from '../icons/telegram.png'
import Twitter from '../icons/twitter.png'
import Youtube from '../icons/youtube.png'
import Git from '../icons/github.png'
import emailjs from '@emailjs/browser';


const IconLinks = () =>{
    return(
        <div className='social-fun'>
            <a href="https://instagram.com/anteneh_so"><img src={Instagram} alt='' className='social-links'/></a>
            <a href="https://www.youtube.com/channel/UCuBtA771EB_u548Iflg0ntg"><img src={Youtube} alt='' className='social-links'/></a>
            <a href='https://telegram.me/black_neb'><img src={Telegram} alt='' className='social-links'/></a>
            <a href="https://github.com/blackneb"><img src={Git} alt='' className='social-links'/></a>
            <a href="https://twitter.com"><img src={Twitter} alt='' className='social-links'/></a>
            <a href="https://facebook.com"><img src={Facebook} alt='' className='social-links'/></a>
        </div>
    )
}

const Contact = () => {
    const form = useRef();
    const[name,setname]=useState("");
    const[phone,setphone]=useState("");
    const[subject,setsubject]=useState("");
    const[email,setemail]=useState("");
    const[message,setmessage]=useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_blackneb', 'template_3aq7ger', e.target, 'twp24KWgs0hGCYP_F')
      .then((result) => {
          alert("Message sent successfully")
      }, (error) => {
          console.log(error.text);
          alert("unable to contact now please try again later")
      });
    };


  return (
    <div className='top-con' id='contact'>
      <div className='top-main-contact'>
        <div className='left-box'>
        <h3>Contact</h3>
            <div className='address'>
              <div className='ppcontent'>
                <ul className='conul'>
                    <li className='conli'>Phone: +251943291709</li>
                    <li className='conli'>E-mail: antenehcs@gmail.com</li>
                    <li className='conli'>Address: Addis-Ababa,Ethiopia</li>
                    <IconLinks/>
                </ul>
                
                </div>
                <div className='contactmail'>
                  <form ref={form} onSubmit={sendEmail}>
                      <label className='conlabel'>Name</label> <br/>
                      <input className='coninput' type="text" name="name" onChange={(e)=>setname(e.target.value)} /> <br/>
                      <label className='conlabel'>Phone number</label> <br/>
                      <input className='coninput' type="text" name="phone" onChange={(e)=>setphone(e.target.value)}/> <br/>
                      <label className='conlabel'>Subject</label> <br/>
                      <input className='coninput' type="text" name="subject" onChange={(e)=>setsubject(e.target.value)}/> <br/>
                      <label className='conlabel'>Email</label> <br/>
                      <input className='coninput' type="email" name="email" onChange={(e)=>setemail(e.target.value)}/> <br/>
                      <label className='conlabel'>Message</label>
                      <br/>
                      <textarea className='coninput' name='message' onChange={(e)=>setmessage(e.target.value)}></textarea>
                      <br/>
                      <input className='submail' type="submit" value="Mail"></input>
                  </form>
              </div>
        </div>
        </div>
          
      </div>
    </div>
  )
}

export default Contact
