import React, { useState } from "react"
import { Button } from "@mui/material"

export default function Vote({ data, show, toggleComments }) {
  const [vote, setVote] = useState(data.upvotes)
  const [downVote, setDownVote] = useState(data.downvotes)

  function handleVoteCounter() {
    setVote(vote + 1)
  }

  function handleVoteCounterMinus() {
    setDownVote(downVote - 1)
  }
  return (
    <div>
      <Button variant="contained" onClick={handleVoteCounter}>
        {vote}👍
      </Button>
      <Button variant="contained" onClick={handleVoteCounterMinus}>
        {downVote}👎
      </Button>
      <Button onClick={toggleComments}>
        {show ? "Hide Comments" : "unHide Comments"}
      </Button>
    </div>
  )
}
