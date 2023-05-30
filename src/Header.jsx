
export default function Header() {
  
  return (
    <header className="intro">
      <img src="./avatar.jpg" alt="" className="logo" />
      <h1>Jamaal Shazier</h1>
      <p className="title">Frontend Web Developer</p>
      <small>Jamaalshazier@gmail.com</small>
      <div className="btns">
<button className="btnEmail"><i class="fa-solid fa-envelope"></i> Email</button>
<button className="btnLinkd"><i class="fa-brands fa-linkedin"></i> LinkedIn</button>        
      </div>
    </header>
  )
}

