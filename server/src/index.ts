import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dynamoose from "dynamoose";
import severless from "serverless-http"
import seed from './seed/seedDynamodb'
import {clerkMiddleware, createClerkClient, requireAuth} from "@clerk/express"
//routes import
import courseRoutes from "./routes/courseRoutes"
import userClerkRoutes from "./routes/userClerkRoutes"
import transactionRoutes from "./routes/transactionRoutes"

// configurations

dotenv.config();

//Running dynamoDb locally
const isProduction = process.env.NODE_ENV === "production"

if (!isProduction){
    dynamoose.aws.ddb.local();    
}

export const clerkClient = createClerkClient({
    secretKey : process.env.CLERK_SECRET_KEY
})

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(clerkMiddleware());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/courses", courseRoutes)
app.use("/user/clerk", requireAuth(),userClerkRoutes)
app.use("/transactions", requireAuth(), transactionRoutes)


// server
const port = process.env.PORT || 3000;
if (!isProduction){
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
    });
}

// aws production environment

const severlessApp = severless(app);
export const handler = async(event: any , context: any) => {
    if (event.action === "seed"){
        await seed();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Data seeded successfully" })
        }
    }else{
        return  severlessApp(event, context);
    }
}
