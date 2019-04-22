import Link from './Links'
const mainStyle = {

}

const linkStyle = {
    margin: 15
}

const Header = () => (
    <div>
         <Link activeClassName='active' href='/'>
          <a className='nav-link home-link'>Home</a>
        </Link>
        <Link activeClassName='active' href='/story'>
          <a className='nav-link'>Story Map</a>
        </Link>
        <style jsx>{`
        div{
            background-color: black;    
            position: fixed;
            top: 0px;
            left: 0px;
            height: 50px;
            width: 250px;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        a {
            font-family: 'Arial';
            text-decoration: none;
            color: white;
            font-size: 20px;
        }

        a:hover {
            opacity: 0.6;
        }

        .active {
            color:  rgb(228, 158, 7);
          }
          .nav-link {
            text-decoration: none;
            padding: 10px;
            display: block;
          }
      `}</style>
    </div>
)

export default Header