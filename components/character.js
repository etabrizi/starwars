import Bio from './bio'

class Character extends React.Component {

    state = {
        counter: 0
    }
    counterCharacterIncrease = (event) => {
        event.preventDefault();
        if (this.state.counter === (this.props.peopleThings.length - 1)) {
            this.setState({ counter: 0 })
        } else {
            this.setState({ counter: this.state.counter + 1 })
        }
    }
    counterCharacterDecrease = (event) => {
        event.preventDefault();
        if (this.state.counter === 0) {
            this.setState({ counter: (this.props.peopleThings.length - 1) })
        } else {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    jumpCharacter = (event) => {
        event.preventDefault();
        this.setState({ counter: event.target.id })
    }
    render() {
        let fullList = this.props.peopleThings.map(function (item, i) {
            return <li key={i}><a href="#" id={i} onClick={this.jumpCharacter}>{item.name}</a></li>
        }, this);
        return (
            <div>
                <div className="body-content">
                    <a href="#" className="cycle-up" onClick={this.counterCharacterIncrease}>Cycle up</a>
                    <Bio
                        selectedStar={this.props.peopleThings[this.state.counter].name}
                        height={this.props.peopleThings[this.state.counter].height}
                        hairColor={this.props.peopleThings[this.state.counter].hair_color}
                        skinColor={this.props.peopleThings[this.state.counter].skin_color}
                        eyeColor={this.props.peopleThings[this.state.counter].eye_color}
                        birthYear={this.props.peopleThings[this.state.counter].birth_year}
                        gender={this.props.peopleThings[this.state.counter].gender}
                    />
                    <div>
                    </div>
                    <a href="#" className="cycle-down" onClick={this.counterCharacterDecrease}>Cycle down</a>
                </div>


                <ul className="lower-links">{fullList}</ul>


                <style jsx>{`

                        .body-content { 
                            background: #fff;
                            color: #000;
                            text-align: center;
                            padding: 30px;
                            border-radius: 20px;
                            margin: 20px;
                        }

                        .cycle-up {
                        background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2256.6%2C36.1%2027%2C19%2027%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');
                        background-repeat: no-repeat;
                        position: absolute;
                        top: 100px;
                        right: -70px;
                        height: 50px;
                        width: 50px;
                        text-indent: -5555px;
                        }

                        .cycle-down {
                        background-image: url('data:image/svg+xml;charset=US-ASCII,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2022.1.0%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%22100%25%22%20y%3D%22100%25%22%0A%09%20viewBox%3D%220%200%2075.6%2075.6%22%20style%3D%22enable-background%3Anew%200%200%2075.6%2075.6%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text/css%22%3E%0A%09.st0%7Bfill%3A%236D6D6C%3B%7D%0A%3C/style%3E%0A%3Ccircle%20class%3D%22st0%22%20cx%3D%2237.8%22%20cy%3D%2237.8%22%20r%3D%2237.8%22/%3E%0A%3Cpolygon%20points%3D%2219%2C36.1%2048.6%2C19%2048.6%2C53.3%20%22/%3E%0A%3C/svg%3E%0A');
                        background-repeat: no-repeat;
                        position: absolute;
                        top: 100px;
                        left: -70px;
                        height: 50px;
                        width: 50px;
                        text-indent: -5555px;
                        }
                    


                    `}</style>
            </div>

        )


    }



}

export default Character;