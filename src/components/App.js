import { Container, Box } from "@mui/system"
import { useState } from "react"
import video from "../data/video.js"
import Comments from "./Comments.js"
import Video from "./Video.js"
import Vote from "./Vote.js"

function App() {
  // console.log("Here's your data:", video)
  const [show, setShow] = useState(true)

  function totalComments() {
    let count = 0
    for (let key in video.comments) {
      count++
    }
    console.log(count)
    return count
  }
  function toggleComments() {
    setShow(!show)
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box>
          <Video data={video} />
        </Box>
        <Box>
          <Vote data={video} show={show} toggleComments={toggleComments} />
        </Box>
        <Box>
          <Comments data={video} show={show} totalComments={totalComments()} />
        </Box>
      </Container>
    </div>
  )
}

export default App
