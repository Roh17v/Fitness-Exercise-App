import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ fontSize: { lg: "35px", xs: "20px" }, ml: "20px" }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        flexWrap="wrap"
        justifyContent={"flex-start"}
        alignItems="center"
        sx={{
          flexDirection: "row",
          gap: { lg: "60px", xs: "0" },
          ml: { lg: "23px", xs: "10px" },
        }}
      >
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a
            className="exercise-video"
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
          >
            <img
              src={item.video.thumbnails[0].url}
              style={{ borderTopLeftRadius: "20px" }}
            />
            <Box>
              <Typography variant="h5" color="#000" sx={{ fontWeight: "700" }}>
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
