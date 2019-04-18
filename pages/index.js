import Link from 'next/link'

const Index = () => (

    <div>
        <h1>Explore the Four Corners Region</h1>
        <Link href='/story'><button>View Story Map</button></Link>
        <style jsx>
            {`
            div{
                background-image: url("https://wallup.net/wp-content/uploads/2016/01/133184-nature-landscape-mountain-desert-rock_formation-Utah.jpg");
                background-position: center;
                // opacity: 0.9;
                background-size: cover;  
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: -8px;
            }
            h1{
                color: white;
                position: absolute;
                top: 80px;
                font-family: Arial;
                font-size: 70px;
            }
            button{
                height: 100px;
                width: 300px;
                font-size: 38px;
                color: white;
                background-color: transparent;
                border: 2px solid white;
            }
            `}
        </style>

    </div>
)

export default Index