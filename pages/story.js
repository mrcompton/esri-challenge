import Header from '../components/Header'



const Story = () => (
    <div className='main'>

        <div className='header'>
            <Header />
            <h1>The Story of a Region</h1>
        </div>
        


        <div className='text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas integer. Venenatis cras sed felis eget. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Lorem ipsum dolor sit amet. Et leo duis ut diam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Donec et odio pellentesque diam volutpat. Laoreet id donec ultrices tincidunt arcu non. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Rhoncus est pellentesque elit ullamcorper dignissim. Tincidunt ornare massa eget egestas purus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Vulputate ut pharetra sit amet aliquam. Libero id faucibus nisl tincidunt eget nullam. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Sit amet dictum sit amet justo donec enim. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ac odio tempor orci dapibus ultrices in iaculis nunc.</p>

            <p>Facilisis magna etiam tempor orci eu lobortis elementum nibh. Condimentum lacinia quis vel eros. Risus ultricies tristique nulla aliquet enim tortor at auctor. Eget aliquet nibh praesent tristique magna sit amet purus. Massa tincidunt nunc pulvinar sapien et ligula. Quis hendrerit dolor magna eget. Vel quam elementum pulvinar etiam non. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sem integer vitae justo eget magna. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Placerat duis ultricies lacus sed turpis tincidunt id. Lobortis feugiat vivamus at augue eget arcu dictum. Vel facilisis volutpat est velit. Libero nunc consequat interdum varius sit amet mattis vulputate. Facilisis mauris sit amet massa vitae tortor condimentum. Dictum sit amet justo donec enim.
            </p>
        </div>
        <div className='mapDiv'>
            <img className='map-one' src='/static/Natl_Parks_2.jpg' alt='map1' />
            <button>Load Interactive Map</button>
        </div>
        <div className='text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas integer. Venenatis cras sed felis eget. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Lorem ipsum dolor sit amet. Et leo duis ut diam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Donec et odio pellentesque diam volutpat. Laoreet id donec ultrices tincidunt arcu non. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Rhoncus est pellentesque elit ullamcorper dignissim. Tincidunt ornare massa eget egestas purus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Vulputate ut pharetra sit amet aliquam. Libero id faucibus nisl tincidunt eget nullam. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Sit amet dictum sit amet justo donec enim. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ac odio tempor orci dapibus ultrices in iaculis nunc.</p>

            <p>Facilisis magna etiam tempor orci eu lobortis elementum nibh. Condimentum lacinia quis vel eros. Risus ultricies tristique nulla aliquet enim tortor at auctor. Eget aliquet nibh praesent tristique magna sit amet purus. Massa tincidunt nunc pulvinar sapien et ligula. Quis hendrerit dolor magna eget. Vel quam elementum pulvinar etiam non. Pretium viverra suspendisse potenti nullam ac tortor vitae. Sem integer vitae justo eget magna. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Placerat duis ultricies lacus sed turpis tincidunt id. Lobortis feugiat vivamus at augue eget arcu dictum. Vel facilisis volutpat est velit. Libero nunc consequat interdum varius sit amet mattis vulputate. Facilisis mauris sit amet massa vitae tortor condimentum. Dictum sit amet justo donec enim.
            </p>
        </div>
        
        <div className='mapDiv'>
            <img className='map-two' src='/static/Diversity_2.jpg' alt='map1' />
            <button>Load Interactive Map</button>
        </div>
        

        <div className='text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas integer. Venenatis cras sed felis eget. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Lorem ipsum dolor sit amet. Et leo duis ut diam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Donec et odio pellentesque diam volutpat. Laoreet id donec ultrices tincidunt arcu non. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Rhoncus est pellentesque elit ullamcorper dignissim. Tincidunt ornare massa eget egestas purus. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Vulputate ut pharetra sit amet aliquam. Libero id faucibus nisl tincidunt eget nullam. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Sit amet dictum sit amet justo donec enim. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Ac odio tempor orci dapibus ultrices in iaculis nunc.</p>
        </div>
        <style jsx>
            {`
            .main{
                // background-color: rgb(255, 239, 215);
                height: 400vh;
                // width: 100vw;
                display: flex;
                margin-top: -8px;
                flex-direction: column;
                align-items: center;
            }
     
            .header{
                background-image: url("https://www.nationalgeographic.com/content/dam/travel/2017-digital/utah/zion-national-park/watchman-zion-national-park.ngsversion.1497468749547.adapt.1900.1.jpg");
                background-position: center;
                background-size: cover;  
                height: 100vh; 
                width: 100vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
         
            h1{
                color: white;
                font-family: Arial;
                font-size: 60px;
            }
            p{
                display: flex;
                width: 60vw;
                font-size: 20px;
            }
            .text{
                margin: 30px;
            }
            .mapDiv{
                width: 70vw;
                height: auto
                background-color: black;
                display: flex;
                flex-direction: column;
                // align-items: flex-end;
            }

            button{
                height: 30px;
                font-size: 15px;
                // margin-top: 5px;
            }
            .map-one{
                width: 100%;
                height: auto;
            }

            .map-two{
                width: 100%;
                height: auto
            }
      
            `}
        </style>
    </div >
)

export default Story