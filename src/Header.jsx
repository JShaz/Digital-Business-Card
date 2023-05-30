import avatar from "./avatar.jpg"
export default function Header() {
  
  return (
    <header className="intro">
      
      <h1>Jamaal Shazier</h1>
      <img src={avatar} alt="" />
      <p className="title">Frontend Web Developer</p>
      <small>Jamaalshazier@gmail.com</small>
      <div className="btns">
<button className="btnEmail"><i class="fa-solid fa-envelope"></i> Email</button>
<button className="btnLinkd"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>        
      </div>
    </header>
  )
}

