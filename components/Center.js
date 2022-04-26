import React from "react";
import styles from '../styles/Home.module.css'

var color1 = "#222222";
var color2 = "#ffffff";
var rotation = "45deg";
var current = "h3";
var textContent = `linear-gradient(90deg, ${color1}, ${color2})`;
//color1.addEventListener("input", setColor);
//color2.addEventListener("input", setColor);


function setColor() {
    bg.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`
    current.textContent = bg.style.background + ";";
}

class Center extends React.Component {
    constructor(props) {
        super(props);
        this.color1 = '666000';
        this.color2 = 'ffffff';
        this.rotation = {value: '45deg'};

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
        this.color1 = event.target.value;
        this.color2 = event.target.value;
      }
    
    render() {
        return (
            <main className={styles.main} 
                style={{
                    background:`linear-gradient(${this.rotation}, ${this.color1.value}, ${this.color2.value})`
                }}>
                <div className={styles.card}>
                    <h1>Background Gradient Generator</h1>
                    <div id="pickers">
                        <input type="color" name="" id="color1" value={this.color1.value} onChange={this.handleChange}></input>
                        <input type="color" name="" id="color2" value={this.color2.value} onChange={this.handleChange}></input>
                    </div>
                    <h2>Current CSS Background</h2>
                    <h3>{textContent}</h3>
                </div>
            </main>
        )
    }
    
}
export default Center;