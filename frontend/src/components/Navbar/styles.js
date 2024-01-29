import styled from "styled-components";


export const NavbarContainer = styled.div`
    width: 100%;
    height: 35px;
    background-color: #131129;
    color: #f2f2f4;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .dropbtn {
        background-color: #131129;
        height: 35px;
        color: #f2f2f4;
        font-size: 12px;
        font-weight: bold;
        border: none;
        cursor: pointer;
      }
      
      .dropdown {
        position: relative;
        display: inline-block;
      }
      
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 130px;
        z-index: 10;
      }
      
      .dropdown-content a {
        color: #131129;
        padding: 8px;
        text-decoration: none;
        display: block;
        font-weight: lighter;
      }
      
      .dropdown-content a:hover {
        background-color: #f1f1f1
    }
      
      .dropdown:hover .dropdown-content {
        display: block;
      }
      
      .dropdown:hover .dropbtn {
        color: limegreen;
    
      }
    
      }

    a {
        text-decoration: none;
        color: #f2f2f4;
        font-weight: bold;
        font-size: 12px;
        
        &:hover {
            color: limegreen;
          }
        
    }



`