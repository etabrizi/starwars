const Bio = (props) => (
    <div>
        <p>Name: {props.selectedStar}</p>
        <p>Height: {props.height}</p>
        <p>Hair colour: {props.hairColor}</p>
        <p>Skin colour: {props.skinColor}</p>
        <p>Eye colour: {props.eyeColor}</p>
        <p>Birth year: {props.birthYear}</p>
        <p>Gender: {props.gender}</p>
        <style jsx>{`
            p { 
                margin:0     
         }
        `}</style>
    </div>
)
export default Bio;