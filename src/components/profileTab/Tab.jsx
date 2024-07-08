import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel({ value, onChange }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={onChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab value="general" label="General" />
        <Tab value="quiz" label="Quiz" />
        <Tab value="exams" label="Exam" />
        <Tab value="assignment" label="Assignment" />
        <Tab value="subjects" label="Subject" />
      </Tabs>
    </Box>
  );
}
