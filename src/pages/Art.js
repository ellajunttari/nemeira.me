import art from "../artIndex.json";

export default function Art() {

  return (
    <>
      <h1>Art page</h1>
      <div className="gallery">
        {art.map((item) => (
          <Drawing name={item}/>
        ))}
      </div>
    </>
  );
}

function Drawing( { name } ) {
  return (
    <div key={name}
         className="drawing"
         style={{ backgroundImage: `url(/art/${name})` }}
    />
  );
}
