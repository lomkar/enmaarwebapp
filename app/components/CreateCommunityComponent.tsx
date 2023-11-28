"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import AddIcon from "@mui/icons-material/Add";
import AddCommunityNameComponent from "./AddCommunityNameComponent";
import AddCommunityDetailsStepperComponent from "./AddCommunityDetailsStepperComponent";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CreateCommunityComponent() {

  const [open, setOpen] = useState(false);

  const [communityName, setCommuntiyName] = useState("");
  const [groupAccess, setGroupAccess] = useState("public");

  const [privateAccessValue, setPrivateAccessValue] = useState({
    monthlyPassInMatic: "",
    yearlyPassInMatic: "",
    lifetimePassInMatic: "",
  });
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const steps = ["Enter Community Name", "Add Community Details", "Submit"];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = async () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (activeStep === 0) {
    } else if (activeStep === 1) {
    } else if (activeStep === steps.length - 1) {
      //TODO : submit the communtiy details here
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <AddCommunityNameComponent
            onInputChange={(value: string) => setCommuntiyName(value)}
            communityName={communityName}
            groupAccess={groupAccess}
            setGroupAccess={setGroupAccess}
            privateAccessValue={privateAccessValue}
            setPrivateAccessValue={setPrivateAccessValue}
          />
        );
      case 1:
        return (
          <AddCommunityDetailsStepperComponent
            todos={todos}
            newTodo={newTodo}
            setNewTodo={(value: string) => setNewTodo(value)}
          />
        );
      case 3:
        return <></>;
      default:
        return "Unknown step";
    }
  };

  return (
    <div>
      <Button
        className="!bg-[#F4F185] !text-black w-full"
        variant="contained"
        onClick={handleOpen}
        startIcon={<AddIcon />}
      >
        Create Community
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <div className="mt-6">
              {getStepContent(activeStep)}
              <div className="mt-6 flex justify-end items-center">
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
