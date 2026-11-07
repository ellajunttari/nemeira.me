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

function Introduction({}) {
  return (
    <>
      <div className="textBox">
        <h1>Who am I anyway?</h1>
        <p>If you're here, I'm assuming you probably know me from _somewhere_. But let's put the pieces together, shall we? I am...
        </p>
        <ul>
          <li>An amateur artist</li>
          <li>A cosplayer</li>
          <li>A mediocre programmer</li>
          <li>A devops engineer by trade</li>
          <li>Born in 1998 (I refuse to have to always update an age, so a year shall do)</li>
          <li>A dnd player</li>
          <li>A crafter, sewist, occasional knitter and crocheter, an in general a creator of things for my own amusement</li>
          <li>A mahjong player, some might say</li>
          <li>A collector of dreams and hobbies</li>
          <li>A lover of travel, culture and language</li>
          <li>A gatherer of knowledge</li>
          <li>A friend of marmots and pigeons</li>
          <li>But most of the time just a procrastinating anxious vermin</li>
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
      <div className='contentRight'>
        <Introduction />
      </div>
    </div>
  );
}