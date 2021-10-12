import styled from "styled-components";

export const NavMenu = styled.nav`
    background: var(--main-bg-title-color);
    color: var(--main-light-color);;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    float: right;
    display: inline-block;

ul{
  margin:0;padding:0;
  list-style-type:none;
  float:left;
  display:inline-block;
  }
  
ul li{
  position:relative;
  float:left;
  display:inline-block;

}

ul li a{
    color: #fff;
    padding:1.4rem;
    display:inline-block;
    color:white;
    text-decoration:none;
}

a:hover{
    opacity:0.5;
}

input[type="checkbox"] {
    display: none;
}
label {    
    display: none; 
    padding: 0.3125rem 0.625rem;
    cursor: pointer;
    transition: 0.3s;
    float: right;
}
label:hover{
    opacity:0.5;
    display: inline-block;
}
    
ul li ul {
  display:none;
  position:absolute;
  text-align: center;
  left:0;
  background:var(--main-bg-title-color);

  
}

ul li:hover ul {
  display:block;
}

ul li ul li {
  width:100%;
  border-bottom:1px solid rgba(255,255,255,.3);
}

@media screen and (max-width: 392px) {
    display: contents;
    ul {
        display: none;
    }
    label{
        display: inline-block;
        margin-block: 0.75rem;
    }
    ul li {
        text-align: right;
    }
    .menuItem{
        margin-inline: 0;
    }
    ul li ul {
        right: 0;
    }
    input[type="checkbox"]:checked ~ label + ul {
        display: grid;
        float: right;
    }
    ul li a:hover{
        opacity:0.5;
    }
    ul li a{
        margin-inline: 0.6rem;
        padding-block:1.4rem;
        padding-inline: 0;
    }
}   

@media screen and (min-width: 392px) and (max-width: 535px){
    font-size: 0.85rem;
    display: contents;
    #firstItem a{
        margin-inline:0;
    }
    label{
        display: grid;
        margin-block: 0.75rem;
    }
    ul {
        display: none;
    }
    ul li {
        text-align: center;
    }
    .menuItem{
        margin-inline: 0;
    }
    ul li ul {
        right: 0;
    }
    ul li a{
        padding-inline: 0.5rem;
        padding-block:1.4rem;
    }
    input[type="checkbox"]:checked ~ label + ul {
        width: -webkit-fill-available;
        display: flex;
        justify-content: space-between;
    }
    ul li a:hover{
        opacity:0.5;
    }
}

@media screen and (min-width: 535px) and (max-width: 731px){
    display: contents;
    #firstItem a{
        margin-inline:0;
    }
    label{
        display: grid;
        margin-block: 0.75rem;
    }
    ul {
        display: none;
    }
    ul li {
        text-align: right;
    }
    input[type="checkbox"]:checked ~ label + ul {
        width: -webkit-fill-available;
        display: flex;
        justify-content: space-between;
    }
    ul li a:hover{
        opacity:0.5;
    }
    ul li a{
        padding-inline: 1rem;
        padding-block:1.4rem;
    }
    .menuItem{
        margin-inline: 0;
    }
    ul li ul {
        right: 0;
    }
    
}

@media screen and (min-width: 731px) and (max-width: 845px){
    ul li a{
        padding-inline: 0.55rem;
        padding-block: 1.4rem;
    }
    .menuItem{
        margin-inline: 0.5rem;
    }
}   
`

export const LogoImage = styled.div`
    div{
        text-align: center;
        margin-block: 0.8rem;
        float: left;
        width: 2.375rem;
        height: 2.375rem;
        background-color: var(--extra-bg-title-color);
        p{
            font-family: Montserrat;
            font-weight: bold;
            font-size: 1rem;
            margin-block: 0.6rem;
        }
    }
`

export const LogoText = styled.div`
    display: inline-block;
    color: var(--main-light-color);
    margin: 0rem;
    p{
        font-family: Montserrat;
        font-weight: bold;
        font-size: 1rem;
        margin-block: 1.4rem;
        margin-left: 0.5rem;
    }
    @media screen and (max-width: 900px) {
    display: inline-block;}
`

export const Footer = styled.footer`
    background:var(--main-bg-title-color);
    text-align: center;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1rem;
    p{
        color: var(--main-light-color);
        margin: 0;
        padding: 1rem;
    }
    @media screen and (max-width: 500px) {
        font-size:0.85rem;
    }
`