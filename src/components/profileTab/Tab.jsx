import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function TabsWrappedLabel({ value, onChange }) {
  return (
    <Box>
      <Tabs
        value={value}
        onChange={onChange}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "#1dbbc3",
          },
          "& .Mui-selected": {
            fontWeight: "bold",
            color: "#1dbbc3 !important",
          },
        }}
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
