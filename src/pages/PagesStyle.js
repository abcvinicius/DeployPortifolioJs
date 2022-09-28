import styled from "styled-components";

export const AreaStylePages = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap');
body {
    display: flex;
    background-color: rgb(77, 77, 77);
  }
  
.container {
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y proximity;
  }
section{
  display:flex;
  align-items: center;
  justify-content: center;
  }
  .principal .principal__input-cursor {
    width: 3px;
    height: 42px;
    background-color: white;
    display: inline-block;
    position: relative;
    top: 3px;
    animation: blink 0.6s infinite alternate;
}
.Home {
    scroll-snap-align: center;
    height: 100vh;
    color: white;
    padding: 40px;
    box-sizing: border-box;
    background-image: url("../ImagemMe.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
.Home p{
  margin-top: 250px;
  text-align: center;
  text-decoration:none;
  color: #DB2B39;
  cursor: pointer;
  align-items: center;
  box-sizing: border-box; 
}
.Home p:hover{
  color: #8a8a8a;
}
.Home a {
  text-decoration: none;
}
.Home  img {
  animation: scroll-down 3s infinite forwards;
  widht:30px;
  height: 30px;  
}
.MyName{
  
  margin-top: 270px;
}
}
@keyframes scroll-down {
    0% {
      opacity: 0;
      transform: translate3d(0, -15px, 0);
    }
    30% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translate3d(0, 4px, 0);
    }
  }
.Branco1 {
  height: 15vh;
  font-size: 20px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #151515;
}
.Tecnologias {
  scroll-snap-align: center;
  height: 100vh;
  color: gray;
  font-size: 30px;
  font-weight: bold;
  padding: 40px;
  box-sizing: border-box;
  background-color: #151515; 
  }
.Branco2{
  scroll-snap-align: center;
    height: 25vh;
    color: gray;
    font-size: 30px;
    font-weight: bold;
    padding: 40px;
    box-sizing: border-box;
    background-color: #111111;
}
.Contato {
    scroll-snap-align: center;
    height: 100vh;
    color: gray;
    font-size: 30px;
    font-weight: bold;
    padding: 40px;
    box-sizing: border-box;
    background-color: #111111;
  }
.principal h1 {
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
}
.principal span {
  border-right: 2px solid rgba(255, 255, 255, 0.75);
    font-size: 3rem;
    text-transform: uppercase;
    color: #DB2B39;
    letter-spacing: 3px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
}
.typing-animation{
  animation: blinkCursor 500ms steps(40) infinite normal, typing 4s steps(40) 1s normal both;
}
@keyframes typing {
  from {
    width: 0;
  }
  to{
    width: 18em;
  }
}
@keyframes blinkCursor{
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to{
    border-right-color: transparent;
  }
}
`;