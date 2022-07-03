import { Typography } from "@mui/material"
import React from "react"

export default function Video({ data }) {
  return (
    <div>
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Typography variant="h4">{data.title}</Typography>
      <Typography varient="h6">
        {data.views} | Uploaded {data.createdAt}
      </Typography>
    </div>
  )
}
