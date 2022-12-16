// props :
// - color (Red, blue, yellow, green, white, silver)
// - weight(25 or 2.5, 20, 15, 10, 5, 1.25)
export default function Plate({color, weight}){
    return <div className={`Plate ${color}Plate`}>
        <p>{weight}</p>
    </div>
}
