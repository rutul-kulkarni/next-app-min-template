"use client";

import {
  Avatar,
  Button,
  Card,
  CardSection,
  Container,
  Grid,
  GridCol,
  Group,
  Skeleton,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import classes from "./UserCardImage.module.css";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";
import AvatarWithNameInitials from "./avtar-with-name";
import PersonInfoCard from "./persion-info-card";
import { DATA } from "./data";

function HomePage() {
  const [persons, setPersons] = useState(DATA);

  const deletePersonAt = (idx: any) => {
    let newList = persons.filter((val, cur_idx) => cur_idx !== idx);
    setPersons(newList);
  };

  return (
    <Grid m="lg">
      {persons.map((val, idx) => (
        <GridCol span={{ base: 12, xs: 3 }}>
          <PersonInfoCard
            name={val.name}
            email={val.email}
            phone={val.phone}
            website={val.website}
            idx={idx}
            deletePersonAt={deletePersonAt}
          />
        </GridCol>
      ))}
    </Grid>
  );
}

export default HomePage;
