# Learning Management System (LMS)

## 🚀 Overview
This is a **full-stack** enterprise-grade **Learning Management System (LMS)** named  **PINAAK Edutech** built using modern technologies. It provides a scalable and robust platform for managing courses, user authentication, payments, and content delivery.

## 🛠 Tech Stack
### **Frontend**
- **Next.js** – React-based framework for SSR and static site generation.
- **Redux Toolkit** – State management solution.
- **Tailwind CSS** – Utility-first CSS framework.
- **Shadcn** – UI components for modern design.
- **TypeScript** – Strongly typed JavaScript.
- **Framer Motion** – Animation library for React.
- **React Hook Form** – Form management.
- **Zod** – Schema validation.
- **Stripe** – Payment integration.

### **Backend**
- **Node.js** – JavaScript runtime.
- **Express.js** – Backend framework for handling API routes.
- **Docker** – Containerization for deployment.
- **AWS Lambda** – Serverless computing.
- **AWS API Gateway** – Managing API endpoints.
- **AWS DynamoDB** – NoSQL database.
- **AWS S3** – File storage.
- **AWS CloudFront** – Content delivery network.

### **Authentication**
- **Clerk** – User authentication and management.

### **Hosting & Deployment**
- **Frontend:** Deployed on **Vercel**.
- **Backend:** Hosted on **AWS Lambda & API Gateway**.

## 📂 Features
✅ **User Authentication** – Secure login and signup with Clerk.  
✅ **Course Management** – Instructors can create, update, and manage courses.  
✅ **Dynamic Learning Paths** – Users can enroll and track progress.  
✅ **Payment Integration** – Stripe for secure transactions.  
✅ **File Uploads** – AWS S3 storage for course materials.  
✅ **Fast Content Delivery** – AWS CloudFront for optimized media delivery.  
✅ **State Management** – Redux Toolkit for global state handling.  
✅ **Form Handling** – React Hook Form & Zod for validation.  
✅ **Containerized Deployment** – Docker for easy scaling.  

## 📦 Installation & Setup
### **Prerequisites**
- Node.js & npm installed.
- AWS account setup.
- Docker installed.

### **Clone the Repository**
```bash
git clone https://github.com/your-repo/lms-project.git
cd lms-project
```

### **Install Dependencies**
```bash
npm install
```

### **Set Up Environment Variables**
Create a `.env.local` file and configure the required environment variables:
```
NEXT_PUBLIC_CLERK_FRONTEND_API=<your-clerk-api>
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=<your-stripe-key>
AWS_ACCESS_KEY_ID=<your-aws-key>
AWS_SECRET_ACCESS_KEY=<your-aws-secret>
```

### **Run the Development Server**
```bash
npm run dev
```

### **Run Backend Services**
```bash
docker-compose up
```

## 🚀 Deployment
### **Frontend Deployment (Vercel)**
```bash
vercel --prod
```
### **Backend Deployment (AWS Lambda & API Gateway)**
Use AWS SAM or Serverless Framework to deploy the backend.

## 📌 Contributing
1. Fork the repository.
2. Create a new branch (`feature/your-feature`).
3. Commit your changes.
4. Push to your branch.
5. Create a pull request.

## 📄 License
This project is licensed under the **MIT License**.

## 📞 Contact
For questions or support, reach out via:
- Email: dwivedishashwat176@gmail.com
- LinkedIn: https://www.linkedin.com/in/shashwat-dwivedi-1264a6259/
- GitHub Issues

---
Happy Coding! 🚀


