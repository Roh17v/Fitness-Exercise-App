import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetails }) => {
  const { gifUrl, name, target, equipment, bodyPart } = exerciseDetails;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack sx={{ flexDirection: { lg: "row" }, p: "20px" }}>
      <img src={gifUrl} alt="name" loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h4" textTransform="capitalize" fontWeight="700">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise make you strong. {name} {` `}
          is one of the best exercise to {target} your {bodyPart}. It will
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} alignItems="center" direction="row" gap="24px">
            <Button sx={{ background: "#fff2db", borderRadius: "50%" }}>
              <img src={item.icon} />
            </Button>
            <Typography textTransform="capitalize" variant="h6">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
