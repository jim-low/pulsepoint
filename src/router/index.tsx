import { Link, Route } from "react-router-dom";
import routes from "./routes";
import App from "../App";
import { Button, Result } from "antd";

const errorDisplay = (
  <Result
    status={"404"}
    title={"Page Not Found"}
    subTitle={"Can't even navigate a simple website? Skill issue"}
    extra={
      <Link to={"/"}>
        <Button type="primary">
          Back to Home
        </Button>
      </Link>
    }
  />
)

export function getRoutes() {
  return (
    <Route path="/" element={<App />} errorElement={errorDisplay}>
      {
        routes.map(route => {
          return <Route key={route.path} path={route.path} element={route.element} />
        })
      }
    </Route>
  )
}
