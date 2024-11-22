import {
    createAdmin,
    createStudent,
    createTeacher,
    getAllAdmins,
    getAllStudents,
    getAllTeachers,
    getAllUsers,
  } from "../controllers/userController.js";
  import {
    createSubject,
    getSubjects,
  } from "../controllers/subjectController.js";
  import {
    createPractical,
    getAllPracticals,
    
  } from "../controllers/practicalController.js";
 
  import express from "express";
import { enrollInPractical,  } from "../controllers/enrollontroller.js";
   import { isAdmin, isAdminOrTeacher, isTeacher,   } from "../middleware/Middleware.js";

  
  
  
  const router = express.Router();
  
  router.post("/admin/create", createAdmin);
  router.post("/teacher/create", createTeacher);
  router.post("/student/create", createStudent);
  router.post("/subject/create",isAdmin,createSubject); //isAdmin
  router.post("/practical/create", isTeacher,createPractical);
  router.post("/enrollment/enroll", enrollInPractical );
  
  router.get("/users/get", getAllUsers);
  router.get("/subjects/get", getSubjects);
  router.get("/practicals/get", getAllPracticals );

  router.get("/admins/get",isAdmin ,getAllAdmins );
  router.get("/teachers/get",isAdmin, getAllTeachers );
  router.get("/students/get", isAdminOrTeacher,getAllStudents );


  export default router;
  