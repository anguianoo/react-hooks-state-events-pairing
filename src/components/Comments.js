import React  from "react"
import List from "@mui/material/List"
import Typography from "@mui/material/Typography"

export default function Comments({ data, show, totalComments }) {
  return (
    <div className={show ? "show" : "hide"}>
      <Typography variant="h3">{totalComments} Comments</Typography>
      <ul>
        {data.comments.map(comment => (
          <List key={comment.id}>
            <Typography variant="h3">{comment.user}</Typography>
            <p>{comment.comment}</p>
          </List>
        ))}
      </ul>
    </div>
  )
}
