import Link from 'next/link'
const mainStyle = {

}

const linkStyle = {
    margin: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/story">
            <a style={linkStyle}>Story Maps</a>
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
      `}</style>
    </div>
)

export default Header