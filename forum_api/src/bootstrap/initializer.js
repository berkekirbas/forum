import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

function initializeSettings(application) {
  application.use(helmet());
  application.use(cors());
  //application.use(cors({origin: 'frontend_url', credentials: true}));
  application.use(cookieParser());
  application.use(bodyParser.json());
  // TODO: CSRF PROTECTION
}

function initializeRoutes(application) {}

export { initializeSettings };
