const colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976", "#967c64", "#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];

let randomRaidus = Math.floor(Math.random()*100)+1;
let size = Math.floor(Math.random()*125)+1;

class Shape extends React.Component {
        constructor(props) {
        super (props)
        this.state = {
            shapeStyle: {
                padding: 10,
                margin: 10,
                display: "inline-block",
                backgroundColor: colors [Math.floor(Math.random()*colors.length)],
                borderRadius: randomRaidus,
                height: size,
                width: size,
            }
        };
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.changeStyle(),1000)
    }
    componentWillUnMount(){
        clearInterval(this.timerID)
    }

    changeStyle(){
        randomRaidus = Math.floor(Math.random()*100)+1;
        size = Math.floor(Math.random()*125)+1;

        this.setState({
            shapeStyle: {
                padding: 10,
                margin: 10,
                display: "inline-block",
                backgroundColor: colors [Math.floor(Math.random()*colors.length)],
                borderRadius: randomRaidus,
                height: size,
                width: size,
            }
        })
    }
    render(){
        return <div style={this.state.shapeStyle}></div>
    }
}

let shapes=[];
for (let i=0; i<60; i++) {
    shapes.push(<Shape key={i}/>);
};

ReactDOM.render(
    shapes,
    document.querySelector(".container")
);