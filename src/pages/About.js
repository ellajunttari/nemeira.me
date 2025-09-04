function Pfp({}) {
  return (
    <>
      <div className="pfp">
        <img src="/pfp.png" />
      </div>
    </>
  )
}

function Intro({}) {
  return (
    <>
      <div className="textBox">
        <p>Omg hi!! I don't know what you're doing here, but welcome anyway. I got inspired by all of the cool personal indie websites that have been floating around 
          recently and decided to try my hand at making one. This is a free form artistic recreation of my brain, hope you have fun visiting it's dusty corners lol</p>
      </div>
    </>
  )
}

function ToDo({}) {
    return (
    <>
      <h1>About page</h1>
      <div className="textBox">
        <h1>Ideas to add</h1>
        <ul>
          <li>Music player</li>
          <li>Interactive bookshelf</li>
          <li>Dress-up wardrobe</li>
          <li>recommendations</li>
          <li>art gallery</li>
          <li>cosplay gallery</li>
          <li>guestbook</li>
          <li>blog</li>
        </ul>
      </div>
    </>
  )
}

export default function Page() {

  return (
    <div className="content">
      <div className="contentLeft">
        <Pfp />
        <Intro />
      </div>
      <div className='contentCenter'>
        <ToDo />
      </div>
    </div>
  );
}