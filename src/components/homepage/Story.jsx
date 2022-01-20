import React from "react";
import "./story.css"
import { Avatar } from '@chakra-ui/react'

export const Story = ({image, profileSrc, title}) => {
    return (
        <div style={{
            backgroundImage:`url(${image})`
        }} className= "story">
        <Avatar className="story_avatar" src ={profileSrc} />
        <h4>{title}</h4>

        </div>
    )
}
