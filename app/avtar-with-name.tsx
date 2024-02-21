import React from "react";
import classes from "./UserCardImage.module.css";
import { Avatar } from "@mantine/core";

const colors = [
  "blue",
  "cyan",
  "dark",
  "grape",
  "gray",
  "green",
  "indigo",
  "lime",
  "orange",
  "pink",
  "red",
  "teal",
  "yellow",
  "violet",
];

const AvatarWithNameInitials = ({ name }: any) => {
  const randomNumber = Math.floor(Math.random() * 15);
  const initials = name
    .split(" ")
    .map((part: any) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Avatar
      size={100}
      radius={80}
      color={colors[randomNumber]}
      mx="auto"
      className={classes.avatar}
    >
      {initials}
    </Avatar>
  );
};

export default AvatarWithNameInitials;
