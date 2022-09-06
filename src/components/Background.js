import Card from 'react-bootstrap/Card'


export default function Background() {
    return (
        
        <div style={{ display: "flex", flexDirection: "row", backgroundSize: "contain" }}>
           
                <Card style={{ width: "1300px", maxHeight: "428px", marginBottom: "20px", backgroundColor: "#DEEED6", zIndex:"-1" }} className="text-black">
                    <img style={{ zIndex:"-1", maxHeight:"428px", width: "100%", backgroundPosition:"right center", position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} src="https://d2d8wwwkmhfcva.cloudfront.net/1500x1520/d2guulkeunn7d8.cloudfront.net/assets/homepage/homepage-mobile-background-m3-high-res-ca3279087ea0a3337f671b694b196d43fd207443d5825e61295b0996974835e9.jpg" alt="Card image"/>
                        
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                    </div>   
                </Card>
          </div>

    )
}