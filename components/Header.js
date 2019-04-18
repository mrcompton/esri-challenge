import Link from 'next/link'
const mainStyle = {

}

const linkStyle = {
    marginRight: 15,
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
        }
        a {
            font-family: 'Arial';
            text-decoration: none;
            color: darkblue;
        }

        a:hover {
            opacity: 0.6;
        }
      `}</style>
    </div>
)

export default Header