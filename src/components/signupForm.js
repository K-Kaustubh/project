import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./signupForm.css";

const SignupForm = () => {
  const [formValues, setFormValues] = useState({
    projectName: "",
    problemSolve: "",
    allChallenges: "",
    techUsed: "",
    videoLink: "",
    githubLink: "",
  });

  const handlepNameChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, projectName: e.target.value };
    });
  };

  const pSolvehandleChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, problemSolve: e.target.value };
    });
  };

  const challangeshandleChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, allChallenges: e.target.value };
    });
  };

  const techstackhandleChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, techUsed: e.target.value };
    });
  };

  const vLinkhandleChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, videoLink: e.target.value };
    });
  };

  const githandleChange = (e) => {
    setFormValues((preValue) => {
      return { ...preValue, githubLink: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const submittedValues = {
      pName: formValues.projectName,
      pSolve: formValues.problemSolve,
      pchallenges: formValues.allChallenges,
      pTStack: formValues.techUsed,
      pGithub: formValues.githubLink,
      pVideo: formValues.videoLink,
    };

    console.log(submittedValues);
  };

  return (
    <div className="container-fluid main-container ">
      <div className=" form-container pt-5">
        <div className="row form-row ">
          <div className="col-md-12">
            <h1 className="form-label-heading text-center mb-5">
              Project Details
            </h1>
            <form action="#" onSubmit={submitHandler}>
              <h3 className="mb-3">Enter the project Name</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.projectName}
                onChange={handlepNameChange}
              />

              <h3 className="mb-3">Enter the problem it solves</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.problemSolve}
                onChange={pSolvehandleChange}
              />

              <h3 className="mb-3">Challanges the team ran into</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.allChallenges}
                onChange={challangeshandleChange}
              />

              <h3 className="mb-3">Technologies used</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.techUsed}
                onChange={techstackhandleChange}
              />

              <h3 className="mb-3">Link for Video demo</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.videoLink}
                onChange={vLinkhandleChange}
              />

              <h3 className="mb-3">Github repo link</h3>
              <input
                className="mb-3"
                type="text"
                value={formValues.githubLink}
                onChange={githandleChange}
              />
              <br />
              <div className="d-flex justify-content-center ">
                <button
                  type="submit"
                  className="btn btn-default mt-5 submit-btn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
