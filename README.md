# InternHire
A full stack intern hiring platform using React.js with React Router for the frontend, Node.js with Express for the backend, and MongoDB for database management.

---

## Demo Link

[Live Demo]([https://intern-backend-mxe4.onrender.com])  

---

## Quick Start

```
git clone https://github.com/lav1706/Intern_Backend.git
cd <your-repo>
npm install
npm run dev      # or `npm start` / `yarn dev`
```

## Technologies

- Node.js
- Express
- MongoDB


## API Reference

### **GET	/api/job**<br>	 
List all Jobs<br>	 
Sample Response:<br>
```[{ _id, jobTitle, company, location, salary, job-type, description,  qualification }, …]```

### **GET	/api/job/:id**<br>	 
List Job By Id<br>	 
Sample Response:<br>
```{ _id, jobTitle, company, location, salary, job-type, description,  qualification }```

### **POST/api/job/**<br>	 
Create Job<br>	 
Sample Response:<br>
```{ _id, jobTitle, company, location, salary, job-type, description,  qualification }```

### **PUT	/api/job/:id**<br>	 
Edit Job By Id<br>	 
Sample Response:<br>
```{ _id, jobTitle, company, location, salary, job-type, description,  qualification }```

### **DELETE	/api/job/:id**<br>	 
Delete Job By Id<br>	 
Sample Response:<br>
```{ _id, jobTitle, company, location, salary, job-type, description,  qualification }```

## Contact
For bugs or feature requests, please reach out to lavnish.raghav1706@gmail.com
