import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import { FetchDataFromAPI, options } from "../utils/FetchDataFromAPI";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await FetchDataFromAPI(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExerciseData();
  }, []);

  const handleSearch = async () => {
    const exerciseData = await FetchDataFromAPI(
      "https://exercisedb.p.rapidapi.com/exercises?limit=10000&offset=0",
      options
    );
    const searchedExercises = exerciseData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
    );

    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

    setExercises("");
    setExercises(searchedExercises);
  };
  return (
    <Stack alignItems="center" justifyContent="center" mt="37px" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        textAlign="center"
        mb="50px"
      >
        Awesome Exercises You
        <br /> Should Know
      </Typography>
      <Box mb="72px" position="relative">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "4px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            width: { lg: "800px", xs: "350px" },
            height: "76px",
          }}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", p: "20px", width: "100%" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyPart
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
