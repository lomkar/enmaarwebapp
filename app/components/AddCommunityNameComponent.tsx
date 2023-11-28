"use client";
import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddCommunityNameComponent({
  onInputChange,
  communityName,groupAccess, setGroupAccess
}: any) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupAccess((event.target as HTMLInputElement).value);
  };
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label className="font-bold">Enter Community Name:</label>
        <TextField
          className="!mt-3"
          fullWidth
          size="small"
          id="outlined-basic"
          label="Enter Community Name..."
          variant="outlined"
          value={communityName}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <div className="mt-4">
          <FormControl>
            <FormLabel
              className="!font-bold !text-black"
              id="demo-radio-buttons-group-label"
            >
              Visibility :
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="public"
              name="radio-buttons-group"
              onChange={handleChange}
            >
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
          </FormControl>
          <div
            className={`ml-4 ${
              groupAccess === "private" ? "text-black" : "text-slate-400"
            }`}
          >
            <div className="flex flex-row mt-3 gap-2 items-center">
              <input
                type="checkbox"
                id="monthlyPass"
                name="monthlyPass"
                value="Bike"
                disabled={!(groupAccess === "private")}
              />
              <label htmlFor="monthlyPass">Monthly Pass</label>
              <input
                className={`border border-black rounded px-2 placeholder-slate-800  ${
                  groupAccess === "private" ? "text-black" : "text-slate-300 border border-slate-300 placeholder-slate-300"
                }`}
                type="number"
                step="any"
                disabled={!(groupAccess === "private")}
                placeholder="Enter value in Matic"
              />
            </div>
            <div className="flex flex-row mt-3 gap-2 items-center">
              <input
                type="checkbox"
                id="yearlypass"
                name="yearlypass"
                value="Car"
                disabled={!(groupAccess === "private")}
              />
                <label htmlFor="yearlypass">Yearly Pass</label>
              <input
                className={`border border-black rounded px-2 placeholder-slate-800  ${
                  groupAccess === "private" ? "text-black" : "text-slate-300 border border-slate-300 placeholder-slate-300"
                }`}
                type="number"
                step="any"
                disabled={!(groupAccess === "private")}
                placeholder="Enter value in Matic"
              />
            </div>
            <div className="flex flex-row mt-3 gap-2 items-center">
              <input
                type="checkbox"
                id="lifetimepass"
                name="lifetimepass"
                value="Boat"
                disabled={!(groupAccess === "private")}
              />
                <label htmlFor="lifetimepass">Life time Pass</label>
              <input
                className={`border border-black rounded px-2 placeholder-slate-800  ${
                  groupAccess === "private" ? "text-black" : "text-slate-300 border border-slate-300 placeholder-slate-300"
                }`}
                type="number"
                step="any"
                disabled={!(groupAccess === "private")}
                placeholder="Enter value in Matic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
