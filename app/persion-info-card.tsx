import { Button, Card, Grid, GridCol, Group, Text } from "@mantine/core";
import classes from "./UserCardImage.module.css";
import React, { useState } from "react";
import AvatarWithNameInitials from "./avtar-with-name";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoEarthOutline } from "react-icons/io5";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { RiDeleteBin6Line } from "react-icons/ri";

const PersonInfoCard = ({
  name,
  email,
  phone,
  website,
  idx,
  deletePersonAt,
}: any) => {
  const [followed, setFollowed] = useState(false);
  return (
    <Card
      withBorder
      padding="xl"
      radius="md"
      className={classes.card}
      shadow="md"
    >
      <AvatarWithNameInitials name={name} />

      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <div>
        <Text fz="sm" c="dimmed" mt="md" lh={1}>
          <Group gap={6}>
            <MdAlternateEmail />
            {email}
          </Group>
        </Text>
      </div>
      <div>
        <Text fz="sm" c="dimmed" mt="md" lh={1}>
          <Group gap={6}>
            <FaPhoneVolume />
            {phone}
          </Group>
        </Text>
      </div>
      <div>
        <Text fz="sm" c="dimmed" mt="md" lh={1}>
          <Group gap={6}>
            <IoEarthOutline />
            {website}
          </Group>
        </Text>
      </div>
      <Grid my="xs">
        <GridCol span={{ base: 12, xs: 6 }}>
          <Button
            fullWidth
            radius="sm"
            mt="xs"
            variant="default"
            bg={followed ? "white" : "blue"}
            style={{ color: followed ? "black" : "white" }}
            onClick={() => setFollowed(!followed)}
          >
            <Group gap={8}>
              {followed ? <SlUserFollowing /> : <SlUserFollow />}
              {followed ? "Unfollow" : "Follow"}
            </Group>
          </Button>
        </GridCol>
        <GridCol span={{ base: 12, xs: 6 }}>
          <Button
            fullWidth
            radius="sm"
            mt="xs"
            variant="default"
            style={{ color: "#4c6ef5" }}
            onClick={() => deletePersonAt(idx)}
          >
            <Group gap={8}>
              {<RiDeleteBin6Line />}
              Delete
            </Group>
          </Button>
        </GridCol>
      </Grid>
    </Card>
  );
};
export default PersonInfoCard;
