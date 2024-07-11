import { Box, Pagination, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FetchDataFromAPI, options } from "../utils/FetchDataFromAPI";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setcurrentPage] = useState(1);
  const exercisePerPage = 9;
  const paginate = (e, value) => {
    setcurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await FetchDataFromAPI(
          "https://exercisedb.p.rapidapi.com/exercises?limit=10000&offset=0",
          options
        );
      } else {
        exerciseData = await FetchDataFromAPI(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercises(exerciseData);
      setcurrentPage(1);
    };

    fetchExerciseData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h4" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultValue={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            size="large"
            onChange={paginate}
            page={currentPage}
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
