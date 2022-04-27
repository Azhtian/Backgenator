import React, { useState } from "react";
import styles from '../styles/Home.module.css'


class Center extends React.Component {

    constructor(props) {
        super(props);
        this.color1 = {name: 'picker1', value: '#000000'};
        this.color2 = {name: 'picker2', value: '#ffffff'};
        this.rotation = 90;
        this.textContent = `linear-gradient(${this.rotation + 'deg'}, ${this.color1.value}, ${this.color2.value})`
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({value: event.target.value});
        if (name == this.color1.name)
            this.color1.value = value;
        if (name == this.color2.name)
            this.color2.value = value;
        if (name == "range")
            this.rotation = value;
        this.textContent = `linear-gradient(${this.rotation + 'deg'}, ${this.color1.value}, ${this.color2.value})`
    }
    
    render() {
        return (
            <main className={styles.main} 
                style={{
                    background:`linear-gradient(${this.rotation + 'deg'}, ${this.color1.value}, ${this.color2.value})`
                }}>
                <div className={styles.card} >
                    <h1>Background Gradient Generator</h1>
                    <div className={styles.pickers} >
                        <input type="color" name="picker1" id="color1" value={this.color1.value} onChange={this.handleChange}></input>
                        <input type="color" name="picker2" id="color2" value={this.color2.value} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <input className={styles.slider} type="range" name="range" id="rotation" min={"0"} max={"360"} value={this.rotation} onChange={this.handleChange}></input>
                    </div>
                    <h2>Current CSS Background</h2>
                    <h3>{this.textContent}</h3>
                </div>
            </main>
        )
    }
    
}
export default Center;