import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
  return (
    <div>
        <p style = {{marginTop :"75px", marginLeft:"200px", color:"white", fontSize:"50px"}}>Hey, it's <span style={{color:"cyan"}}>Alvin</span></p>
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "I'm a",
        300,
        "I'm a Software Engineer",
        300,
        "I'm a Software Engineer and a Rising Junior at",
        300, 
        "I'm a Software Engineer and a Rising Junior at Boston University",
        300, 
      ]}
    //   wrapper="span"
      speed={50}
      style={{position:"absolute", marginTop:"0px", marginLeft:"200px",color:"white", fontSize: '1.75em', display: 'inline-block',maxWidth :"450px"}}
      repeat={Infinity}
    />
    </div>
  );
};

export default ExampleComponent