import React from "react";

function LinearSearchForm() {
  function submitHandler(params) {}

  return (
    <div>
      {" "}
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Please Enter the array Element seprated by space (and shold be of same
        type)
      </Typography>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>
          <TextField
            label="Array"
            variant="outlined"
            fullWidth
            // margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Search Key"
            variant="outlined"
            fullWidth
            // margin="normal"
          />
        </div>
        <Button variant="contained" color="success" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default LinearSearchForm;
