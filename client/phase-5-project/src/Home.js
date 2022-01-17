import CardContainer from "./CardContainer";

function Home({user, setUser}){
    return(
        <div>
            <CardContainer user={user} setUser={setUser}/>
        </div>
    )
}

export default Home;