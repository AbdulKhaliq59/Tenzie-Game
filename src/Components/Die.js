import react from "react";
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "White"
    }

    return (
        <div
            className="dice-face"
            style={styles}
            onClick={props.holdDice}>
            <h2 className="dice-num">{props.value}</h2>
        </div>
    )
}