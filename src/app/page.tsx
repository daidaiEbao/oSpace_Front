import Welcome from "./Welcome";

async function getData() {
  // const res = await fetch('http://localhost:8080/greeting?name=3');
  // return res.json();
}
 

const WelcomePage = async () => {
  const data = await getData();
  
  return (
    <Welcome/>
  );
}

export default WelcomePage;